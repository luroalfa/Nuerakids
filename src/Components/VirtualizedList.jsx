//Libs
import React from "react";
import { List } from "react-virtualized";
import { Spin } from "antd";
//Styles
import "./VirtualizedList.css";

function getRibbon(ribbonMessage) {
  return (
    <div className="wrap">
      <span className="ribbon6">{ribbonMessage}</span>
    </div>
  );
}

function VirtualizedList(props) {
  const {
    CardRenderer,
    ribbonMessage,
    interpolatedRowStyle,
    listStyle,
    rowHeight,
    rows,
    isSpinning = false,
    spinTitle = "Cargando...",
    spinSize = "large",
    spinDelay = 50,
    customProps,
  } = props;

  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) {
    const record = rows[index];
    record.counter = index + 1;

    return (
      <div
        key={key}
        id={interpolatedRowStyle ? "interpolated-style" : undefined}
        className={ribbonMessage ? "ribbon" : undefined}
        style={{ ...style }}
      >
        {ribbonMessage && getRibbon(ribbonMessage)}
        <CardRenderer {...record} {...customProps} />
      </div>
    );
  }

  return (
    <div>
      <Spin
        spinning={isSpinning}
        size={spinSize}
        delay={spinDelay}
        tip={spinTitle}
      >
        <List
          className="container-list-rows" //static
          width={listStyle.width}
          height={listStyle.height}
          rowCount={rows.length}
          rowHeight={rowHeight}
          rowRenderer={rowRenderer}
          style={{ width: listStyle.width - 15 }}
        />
      </Spin>
    </div>
  );
}

export default VirtualizedList;
