import React from "react";
import styles from "./BottomContainer.module.css";
import BottomCard from "./BottomCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function BottomContainer({ dataForTabs }) {
  const tabs =
    dataForTabs && dataForTabs.map((coin) => <BottomCard data={coin} />);
  return dataForTabs ? (
    <div className={styles.bottomContainer}>
      <AliceCarousel
        mouseTracking
        items={tabs}
        disableButtonsControls
        disableDotsControls
        infinite
        autoPlay
        autoWidth
        autoPlayInterval={0}
        animationDuration={5000}
        animationEasingFunction={"linear"}
      />
    </div>
  ) : null;
}

export default BottomContainer;
