import React, { useState, useContext, useCallback } from "react";

// env variables
const API_KEY = "2f9bdbf2-9099-4281-8898-3ab625237d5f";
const HEAD_API = "https://crafatar.com/avatars/"; //+uuid

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [playerHead, setPlayerHead] = useState(null);

  const fetchPlayerData = useCallback(async () => {
    try {
      // fetch hypixel stats
      const res = await fetch(
        `https://api.hypixel.net/player?key=${API_KEY}&name=${searchTerm}`
      );
      const data = await res.json();

      // fetch head avatar
      const head = await fetch(HEAD_API + data.player.uuid);
      setPlayerHead(head.url);

      // fetch frinds of player
      const res2 = await fetch(
        `https://api.hypixel.net/friends?key=${API_KEY}&uuid=${data.player.uuid}`
      );
      const data2 = await res2.json();

      setPlayerData({
        ...data.player,
        friends: data2.records,
      });

      return true;
    } catch (err) {
      console.log(new Error(err));
    }
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        playerData,
        fetchPlayerData,
        playerHead,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
