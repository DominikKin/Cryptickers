import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import LeftPanel from "./components/LeftPanel/LeftPanel.js";
import MainScreen from "./components/MainScreen/MainScreen.js";
import RightPanel from "./components/RightPanel/RightPanel.js";
import useFetch from "./components/useFetch";

function App() {
  const [mainCoin, setMainCoin] = useState("bitcoin");
  const [dataForTabs, setDataForTabs] = useState([]);
  const [rawDataForGraph, setRawDataForGraph] = useState([]);
  const [dateRange, setDateRange] = useState(30);
  const [coinList, setCoinList] = useState([]);
  const [details, setDetails] = useState([]);

  const mainCoinGraphData = useFetch(
    `https://api.coingecko.com/api/v3/coins/${mainCoin}/market_chart?vs_currency=usd&days=${dateRange}&interval=daily`
  ).allData;

  const allCoinTabData = useFetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  ).allData;

  const additionalCoinDetails = useFetch(
    `https://api.coingecko.com/api/v3/coins/${mainCoin}/`
  ).allData;

  useEffect(() => {
    setRawDataForGraph(mainCoinGraphData.prices);
  }, [mainCoin, mainCoinGraphData, dateRange]);

  useEffect(() => {
    setDataForTabs({ allCoinTabData });
  }, [allCoinTabData]);

  useEffect(() => {
    setCoinList(getListOfCoins(allCoinTabData));
  }, [allCoinTabData]);

  useEffect(() => {
    setDetails(additionalCoinDetails);
  }, [additionalCoinDetails, mainCoin]);

  function getListOfCoins(data) {
    return data.map((item) => item.id);
  }
  const dataForGraph = rawDataForGraph
    ? rawDataForGraph.map((item) => {
        return {
          date: item[0],
          value: item[1].toFixed(2),
        };
      })
    : [];

  return (
    <div className={styles.App}>
      <LeftPanel
        coinList={coinList}
        setMainCoin={setMainCoin}
        mainCoin={mainCoin}
        setDateRange={setDateRange}
      />
      <MainScreen
        dataForGraph={dataForGraph}
        dataForTabs={dataForTabs}
        setDateRange={setDateRange}
        dateRange={dateRange}
        mainCoin={mainCoin}
      />
      <RightPanel details={details} />
      <div className={styles.footer}>
        Powered by <a href="https://www.coingecko.com/">coingecko.com</a>
      </div>
    </div>
  );
}

export default App;
