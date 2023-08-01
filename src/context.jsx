import React, { useState, useContext, useCallback } from "react";
import { getPlayerDataFromSessionStorage } from "./helper";
import { formatData } from "./dataForms";

// env variables
const API_KEY = "7f0934b5-c48e-4f35-b5e9-d0ed2eb01325";
const HEAD_API = "https://crafatar.com/avatars/"; //+uuid

const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [playerData, setPlayerData] = useState(
        getPlayerDataFromSessionStorage("tempPlayerData")
    );

    const fetchPlayerData = useCallback(
        async (searchValue = searchTerm) => {
            setIsLoading(true);
            try {
                // fetch hypixel stats
                const res = await fetch(
                    `https://api.hypixel.net/player?key=${API_KEY}&name=${searchValue}`
                );
                const data = await res.json();

                if (data.success) {
                    if (data.player === null) {
                        return `Player by the username "${searchValue}" was not found.`; // return this message if no player was found
                    }

                    const [head, status, guild] = await Promise.all([
                        fetch(HEAD_API + data.player.uuid),
                        fetch(
                            `https://api.hypixel.net/status?key=${API_KEY}&uuid=${data.player.uuid}`
                        ).then((res) => res.json()),
                        fetch(
                            `https://api.hypixel.net/guild?key=${API_KEY}&player=${data.player.uuid}`
                        ).then((res) => res.json()),
                    ]);

                    const formattedData = formatData({
                        ...data.player,
                        playerHead: head.url,
                        session: { ...status.session },
                        guild: { ...guild.guild },
                    });

                    sessionStorage.setItem(
                        "tempPlayerData",
                        JSON.stringify(formattedData)
                    );
                    sessionStorage.setItem(
                        "playerName",
                        data.player.displayname.toLowerCase()
                    );
                    setPlayerData(formattedData);

                    return true; // return true when the function has successfully fetched the data
                }

                // if fetching failed (invalid api key, etc...)
                return data.cause; // return the error cause;
            } catch (err) {
                return err.message; // return the error message
            } finally {
                setIsLoading(false);
            }
        },
        [searchTerm]
    );

    return (
        <AppContext.Provider
            value={{
                setSearchTerm,
                playerData,
                fetchPlayerData,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(AppContext);
}
