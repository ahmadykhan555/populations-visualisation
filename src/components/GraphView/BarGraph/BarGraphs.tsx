import "./BarGraph.scss";

import { Country } from "../../../models/country";
import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { getColor } from "../../../utility/graph";

interface BarGraphParams {
  data: Country[];
}

const BarGraphComponent: React.FC<BarGraphParams> = ({ data }) => {
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
      <h4 className='value-label'> {obj.data.formattedPopulation}</h4>
    </div>
  );
};

export default BarGraphComponent;
