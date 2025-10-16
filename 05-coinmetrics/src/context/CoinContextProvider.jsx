import React, { useState, useEffect } from "react";
import { CoinContext } from "./CoinContext";

const CoinContextProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$" });

  const fetchAllCoins = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`
      );
      const data = await response.json();
      console.log("Fetched data:", data);
      setAllCoins(data);
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  };

  useEffect(() => {
    fetchAllCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <CoinContext.Provider value={{ allCoins, currency, setCurrency }}>
      {children}
    </CoinContext.Provider>
  );
};
export default CoinContextProvider;
