import { viewSizeCalculator } from "../utils";

const VerticalIcon = ({ active }) => {
  let color = active ? "#E20074" : "#8693A4";
  return (
    <svg
      width={viewSizeCalculator(4, true)}
      height={viewSizeCalculator(13, true)}
      viewBox="0 0 4 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 3C2.82843 3 3.5 2.32843 3.5 1.5C3.5 0.671573 2.82843 0 2 0C1.17157 0 0.5 0.671573 0.5 1.5C0.5 2.32843 1.17157 3 2 3Z"
        fill={color}
      />
      <path
        d="M2 8C2.82843 8 3.5 7.32843 3.5 6.5C3.5 5.67157 2.82843 5 2 5C1.17157 5 0.5 5.67157 0.5 6.5C0.5 7.32843 1.17157 8 2 8Z"
        fill={color}
      />
      <path
        d="M2 13C2.82843 13 3.5 12.3284 3.5 11.5C3.5 10.6716 2.82843 10 2 10C1.17157 10 0.5 10.6716 0.5 11.5C0.5 12.3284 1.17157 13 2 13Z"
        fill={color}
      />
    </svg>
  );
};

export default VerticalIcon;
