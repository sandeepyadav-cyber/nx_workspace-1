import React from "react";
import { viewSizeCalculator } from "../utils";

const AdminConsoleIcon = () => {
  return (
    // <svg
    //   width={viewSizeCalculator(20, true)}
    //   height={viewSizeCalculator(20, true)}
    //   viewBox="0 0 20 20"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M9.99935 8.33464C11.8403 8.33464 13.3327 6.84225 13.3327 5.0013C13.3327 3.16035 11.8403 1.66797 9.99935 1.66797C8.1584 1.66797 6.66602 3.16035 6.66602 5.0013C6.66602 6.84225 8.1584 8.33464 9.99935 8.33464Z"
    //     stroke="#242639"
    //     stroke-width="1.5"
    //   />
    //   <path
    //     d="M16.6647 15.0026C16.6658 14.8659 16.6663 14.727 16.6663 14.5859C16.6663 12.5151 13.6813 10.8359 9.99967 10.8359C6.31801 10.8359 3.33301 12.5151 3.33301 14.5859C3.33301 16.6568 3.33301 18.3359 9.99967 18.3359C11.8588 18.3359 13.1997 18.2051 14.1663 17.9718"
    //     stroke="#242639"
    //     stroke-width="1.5"
    //     stroke-linecap="round"
    //   />
    // </svg>
    <svg
      width={viewSizeCalculator(20, true)}
      height={viewSizeCalculator(20, true)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0013 6.66536V4.9987C15.0013 4.55667 14.8257 4.13275 14.5131 3.82019C14.2006 3.50763 13.7767 3.33203 13.3346 3.33203H3.33464C2.89261 3.33203 2.46868 3.50763 2.15612 3.82019C1.84356 4.13275 1.66797 4.55667 1.66797 4.9987V10.832C1.66797 11.2741 1.84356 11.698 2.15612 12.0105C2.46868 12.3231 2.89261 12.4987 3.33464 12.4987H10.0013M8.33464 15.832V12.532V15.157M5.83464 15.832H10.0013"
        stroke="#242639"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.6693 10H15.0026C14.0821 10 13.3359 10.7462 13.3359 11.6667V16.6667C13.3359 17.5871 14.0821 18.3333 15.0026 18.3333H16.6693C17.5897 18.3333 18.3359 17.5871 18.3359 16.6667V11.6667C18.3359 10.7462 17.5897 10 16.6693 10Z"
        stroke="#242639"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AdminConsoleIcon;
