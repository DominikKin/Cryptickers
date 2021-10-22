import React, { useState, useEffect } from "react";
import styles from "./ChartContainer.module.css";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

function ChartContainer({ dataForGraph, setDateRange, dateRange }) {
  function CustomTooltip({ active, payload, label }) {
    return active ? (
      <div className={styles.toolTipTab}>
        <h4>{format(label, "dd, MMM, yyy")}</h4>
        <h4>${payload[0] && payload[0].value}</h4>
      </div>
    ) : null;
  }

  function formatByDay(date) {
    if (new Date(date).getDate() % 1 === 0) {
      return format(date, "MMM , d");
    }
    return "";
  }

  return dataForGraph[0] ? (
    <div className={styles.chartContainer}>
      <div className={styles.chartSelectorContainer}>
        <div
          className={
            dateRange === 30
              ? styles.chartSelectorSelected
              : styles.chartSelector
          }
          onClick={() => setDateRange(30)}
        >
          30d
        </div>
        <div
          className={
            dateRange === 90
              ? styles.chartSelectorSelected
              : styles.chartSelector
          }
          onClick={() => setDateRange(90)}
        >
          90d
        </div>
        <div
          className={
            dateRange === 365
              ? styles.chartSelectorSelected
              : styles.chartSelector
          }
          onClick={() => setDateRange(180)}
        >
          180d
        </div>
      </div>
      <ResponsiveContainer width="90%" height="90%">
        <AreaChart data={dataForGraph}>
          <defs>
            <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="#279DFF" stopOpacity={0.7}></stop>
              <stop offset="100%" stopColor="#1c1c3b" stopOpacity={0.7}></stop>
            </linearGradient>
          </defs>
          <Area dataKey="value" stroke="#279DFF" fill="url(#areaColor)" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(date) => formatByDay(date)}
          />
          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={6}
            tickFormatter={(number) => `$${number}`}
            domain={["auto", "auto"]}
          />
          {/* <Tooltip /> */}
          <Tooltip content={<CustomTooltip />} />
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  ) : null;
}

export default ChartContainer;
