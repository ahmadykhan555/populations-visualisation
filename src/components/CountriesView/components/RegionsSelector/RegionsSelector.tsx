import React, { useState } from "react";
import "./RegionsSelector.scss";
import { RegionsSelectorProps } from "./types";

const RegionsSelector: React.FC<RegionsSelectorProps> = ({
  list,
  onCellSelected,
}) => {
  const [selectedCell, setSelectedCell] = useState<number>();
  const handleCellClicked = (index: number, label: string) => {
    setSelectedCell(index);
    onCellSelected(label);
  };
  return (
    <div className={`regions-selector-component`}>
      {list.map((label, index) => (
        <div
          className={`regions-selector-component--${label.toLowerCase()} cell ${
            selectedCell === index ? "cell--selected" : ""
          }`}
          key={index}
          onClick={() => handleCellClicked(index, label)}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default RegionsSelector;
