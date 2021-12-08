import React, { useState, useContext, useCallback } from "react";

// env variables
const API_KEY = "2f9bdbf2-9099-4281-8898-3ab625237d5f";
const HEAD_API = "https://crafatar.com/avatars/"; //+uuid

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [playerData, setPlayerData] = useState(); // TODO: Initialize the player data by searchTerm
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlayerData = useCallback(async () => {
    setIsLoading(true);
    try {
      // fetch hypixel stats
      const res = await fetch(
        `https://api.hypixel.net/player?key=${API_KEY}&name=${searchTerm}`
      );
      const data = await res.json();

      if (data.success) {
        if (data.player === null) {
          return `Player by the username "${searchTerm}" was not found.`; // return this message if no player was found
        }

        const [head, friendsData] = await Promise.all([
          fetch(HEAD_API + data.player.uuid),
          fetch(
            `https://api.hypixel.net/friends?key=${API_KEY}&uuid=${data.player.uuid}`
          ).then((res) => res.json()),
        ]);

        setPlayerData({
          ...data.player,
          friends: friendsData.records,
          playerHead: head.url,
        });

        return true; // return true when the function has successfully fetched the data
      }

      // if fetching failed (invalid api key, etc...)
      return data.cause; // return the error cause;
    } catch (err) {
      return err.message; // return the error message
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        setSearchTerm,
        playerData,
        fetchPlayerData,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
