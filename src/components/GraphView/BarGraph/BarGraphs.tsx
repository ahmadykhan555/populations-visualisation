import "./BarGraph.scss";

import { Country } from "../../../models/country";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

interface BarGraphParams {
  data: Country[];
}

const BarGraphComponent: React.FC<BarGraphParams> = ({ data }) => {
  const getColor = (entry: any): string => {
    switch (entry.data.region) {
      case "Africa":
        return "#a66ef4f5";
      case "Americas":
        return "#27AE60";
      case "Asia":
        return "#EB5757";
      case "Europe":
        return "#ea3ad7";
      case "Oceania":
        return "#e8b35a";
      case "Polar":
        return "#828282";
      default:
        return "lightgray";
    }
  };

  const customTooltip = (obj: any) => {
    return (
      <div
        className='custom-tooltip'
        style={{
          display: "flex",
          color: "black",
          alignItems: "center",
          padding: "1rem",
        }}>
        <div
          className='color-container'
          style={{
            background: `${getColor(obj)}`,
            height: "1rem",
            width: "1rem",
            marginRight: "0.5rem",
          }}></div>
        <h4 style={{ textTransform: "capitalize" }}>{obj.id}: </h4>
        <h4 className='value-label'> {obj.data.population}</h4>
      </div>
    );
  };
  return (
    <div
      className='bar-graph-component'
      style={{ height: "calc(100% - 30px)", width: "calc(550px)" }}>
      <ResponsiveBar
        colors={getColor}
        data={data}
        padding={0.6}
        keys={["population"]}
        indexBy='name'
        margin={{ top: 10, right: 10, bottom: 25, left: 60 }}
        borderColor={getColor}
        groupMode='grouped'
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: -40,
        }}
        enableGridX={true}
        enableGridY={true}
        enableLabel={false}
        tooltip={customTooltip}
      />
    </div>
  );
};

export default BarGraphComponent;
