import React from "react";
import { Drawer } from "antd";

export default function DrawerComponent({
  title,
  placement,
  visible,
  onClose,
  children,
  height,
  bodyStyle,
}) {
  return (
    <Drawer
      title={title}
      visible={visible}
      placement={placement}
      closable={false}
      onClose={onClose}
      height={height}
      bodyStyle={bodyStyle}
    >
      {children}
    </Drawer>
  );
}
