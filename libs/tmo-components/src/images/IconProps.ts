export interface IconProps {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export interface ArrowIconProps extends IconProps {
  isPositive?: boolean;
}

export interface SizeIconProps extends IconProps {
  size?: number;
}
