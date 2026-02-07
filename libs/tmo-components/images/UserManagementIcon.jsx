import React from "react";
import { viewSizeCalculator } from "../utils";

const UserManagementIcon = () => {
  return (
    <svg
      width={viewSizeCalculator(24, true)}
      height={viewSizeCalculator(24, true)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 9.16667C10.1743 9.16667 11.6667 7.67428 11.6667 5.83333C11.6667 3.99238 10.1743 2.5 8.33333 2.5C6.49238 2.5 5 3.99238 5 5.83333C5 7.67428 6.49238 9.16667 8.33333 9.16667Z"
        stroke="#242639"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.58333 12.5L5.83333 12.5C4.94928 12.5 4.10143 12.8512 3.47631 13.4763C2.85119 14.1014 2.5 14.9493 2.5 15.8333L2.5 17.5M12.5 12.9167V11.6667C12.5 11.2246 12.6756 10.8007 12.9882 10.4882C13.3007 10.1756 13.7246 10 14.1667 10C14.6087 10 15.0326 10.1756 15.3452 10.4882C15.6577 10.8007 15.8333 11.2246 15.8333 11.6667V12.9167"
        stroke="#242639"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.7515 13.332L11.5832 13.332C11.1694 13.332 10.834 13.6674 10.834 14.0812V16.7495C10.834 17.1633 11.1694 17.4987 11.5832 17.4987H16.7515C17.1652 17.4987 17.5007 17.1633 17.5007 16.7495V14.0812C17.5007 13.6674 17.1652 13.332 16.7515 13.332Z"
        stroke="#242639"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UserManagementIcon;
