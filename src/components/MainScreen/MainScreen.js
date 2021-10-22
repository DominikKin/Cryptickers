import React from "react";
import styles from "./MainScreen.module.css";
import TopContainer from "./TopContainer";
import ChartContainer from "./ChartContainer";
import BottomContainer from "./BottomContainer";

function MainScreen({
  dataForGraph,
  dataForTabs,
  setDateRange,
  mainCoin,
  dateRange,
}) {
  const topData =
    dataForTabs.allCoinTabData &&
    dataForTabs.allCoinTabData.find(
      (coin) => coin.id === mainCoin.toLowerCase()
    );

  return (
    <div className={styles.mainScreen}>
      <TopContainer topData={topData} />
      <ChartContainer
        dataForGraph={dataForGraph}
        setDateRange={setDateRange}
        dateRange={dateRange}
      />
      <BottomContainer dataForTabs={dataForTabs.allCoinTabData} />
    </div>
  );
}

export default MainScreen;
