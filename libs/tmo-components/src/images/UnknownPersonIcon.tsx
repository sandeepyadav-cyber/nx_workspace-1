import React from "react";
import { PlaceholderIcon } from "./_placeholderIcon";
import type { IconProps } from "./IconProps";

const UnknownPersonIcon: React.FC<IconProps> = (props) => (
  <PlaceholderIcon name="UnknownPersonIcon" {...props} />
);
export default UnknownPersonIcon;
