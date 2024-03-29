import { createChart } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const chartContainerRef = useRef();

  useEffect(() => {
    const initialData = [
      {"value":0,"time":1642425322},
      {"value":8,"time":1642511722},
      {"value":10,"time":1642598122},
      {"value":20,"time":1642684522},
      {"value":3,"time":1642770922},
      {"value":43,"time":1642857322},
      {"value":41,"time":1642943722},
      {"value":43,"time":1643030122},
      {"value":56,"time":1643116522},
      {"value":46,"time":1643202922},
      {"value":66,"time":1643289322},
      {"value":59,"time":1643375722},
      {"value":99,"time":1643462122},
      {"value":68,"time":1643548522},
      {"value":1,"time":1643634922},
      {"value":29,"time":1643721322},
      {"value":36,"time":1643807722},
      {"value":27,"time":1643894122},
      {"value":11,"time":1643980522},
      {"value":92,"time":1644066922},
      {"value":18,"time":1644153322},
      {"value":75,"time":1644239722},
      {"value":56,"time":1644326122},
      {"value":63,"time":1644412522},
      {"value":62,"time":1644498922},
      {"value":38,"time":1644585322},
      {"value":14,"time":1644671722},
      {"value":89,"time":1644758122},
      {"value":23,"time":1644844522},
      {"value":29,"time":1644930922},
      {"value":78,"time":1645017322},
      {"value":0,"time":1645103722},
      {"value":86,"time":1645190122},
      {"value":41,"time":1645276522},
      {"value":44,"time":1645362922},
      {"value":81,"time":1645449322},
      {"value":57,"time":1645535722},
      {"value":14,"time":1645622122},
      {"value":12,"time":1645708522},
      {"value":20,"time":1645794922},
      {"value":44,"time":1645881322},
      {"value":25,"time":1645967722},
      {"value":93,"time":1646054122},
      {"value":3,"time":1646140522},
      {"value":79,"time":1646226922},
      {"value":11,"time":1646313322},
      {"value":65,"time":1646399722},
      {"value":69,"time":1646486122},
      {"value":61,"time":1646572522},
      {"value":95,"time":1646658922},
      {"value":97,"time":1646745322},
      {"value":56,"time":1646831722},
      {"value":85,"time":1646918122},
      {"value":16,"time":1647004522},
      {"value":41,"time":1647090922},
      {"value":10,"time":1647177322},
      {"value":20,"time":1647263722},
      {"value":41,"time":1647350122},
      {"value":4,"time":1647436522},
      {"value":59,"time":1647522922},
      {"value":41,"time":1647609322},
      {"value":14,"time":1647695722},
      {"value":71,"time":1647782122},
      {"value":60,"time":1647868522},
      {"value":26,"time":1647954922},
      {"value":11,"time":1648041322},
      {"value":22,"time":1648127722},
      {"value":48,"time":1648214122},
      {"value":82,"time":1648300522},
      {"value":41,"time":1648386922},
      {"value":20,"time":1648473322},
      {"value":90,"time":1648559722},
      {"value":96,"time":1648646122},
      {"value":66,"time":1648732522},
      {"value":5,"time":1648818922},
      {"value":8,"time":1648905322},
      {"value":14,"time":1648991722},
      {"value":97,"time":1649078122},
      {"value":26,"time":1649164522},
      {"value":35,"time":1649250922},
      {"value":74,"time":1649337322},
      {"value":58,"time":1649423722},
      {"value":65,"time":1649510122},
      {"value":62,"time":1649596522},
      {"value":52,"time":1649682922},
      {"value":51,"time":1649769322},
      {"value":68,"time":1649855722},
      {"value":64,"time":1649942122},
      {"value":18,"time":1650028522},
      {"value":70,"time":1650114922},
      {"value":86,"time":1650201322},
      {"value":70,"time":1650287722},
      {"value":99,"time":1650374122},
      {"value":90,"time":1650460522},
      {"value":3,"time":1650546922},
      {"value":22,"time":1650633322},
      {"value":26,"time":1650719722},
      {"value":41,"time":1650806122},
      {"value":79,"time":1650892522},
      {"value":92,"time":1650978922},
      {"value":99,"time":1651065322},
      {"value":64,"time":1651151722},
      {"value":85,"time":1651238122},
      {"value":11,"time":1651324522},
      {"value":35,"time":1651410922},
      {"value":95,"time":1651497322},
      {"value":51,"time":1651583722},
      {"value":34,"time":1651670122},
      {"value":59,"time":1651756522},
      {"value":66,"time":1651842922},
      {"value":85,"time":1651929322},
      {"value":82,"time":1652015722},
      {"value":60,"time":1652102122},
      {"value":56,"time":1652188522}
    ];

    const stData = [
      { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
      { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
      { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
      { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
      { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
      { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
      { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
      { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
      { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
      { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
    ];

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "#000" },
        textColor: "#000",
      },
      grid: {
        vertLines: {
          color: "transparent",
        },
        horzLines: {
          color: "#transparent",
        },
      },
      // autoSize: true,
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });

   const newSeries = chart.addAreaSeries({
  lineColor: "#00FF00", // 네온 초록색
  topColor: "#000",
  bottomColor: "green",
  lineStyle: 0,
  lineWidth: 3,
  crossHairMarkerVisible: false,
});

    newSeries.applyOptions({
      wickUpColor: "rgb(54, 116, 217)",
      upColor: "rgb(54, 116, 217)",
      wickDownColor: "rgb(225, 50, 85)",
      downColor: "rgb(225, 50, 85)",
      borderVisible: false,
    });

    newSeries.setData(initialData);
    
    chart.timeScale().fitContent();

    chart.priceScale("right").applyOptions({
      borderColor: "#222",
      textColor: "#fff",
    });

    chart.timeScale().applyOptions({
      borderVisible: false,
      barSpacing: 15,
      minBarSpacing: 5,
    });

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef}></div>;
}

export default App;
