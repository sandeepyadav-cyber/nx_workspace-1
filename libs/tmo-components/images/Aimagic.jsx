
import React from "react";
import { viewSizeCalculator } from "../../Pages/utils";

const Aimagic = ({ color = "#606080", width = "20", height = "20" }) => (
<svg    width={viewSizeCalculator(width, true)}
    height={viewSizeCalculator(height, true)} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0007 2.66699C17.6007 7.57099 19.3686 9.34033 24.0006 10.667C19.3686 11.9937 17.6007 13.763 16.0007 18.667C14.4007 13.763 12.6327 11.9937 8.00065 10.667C12.6327 9.34033 14.4007 7.57099 16.0007 2.66699ZM5.33398 14.667C6.13398 17.1203 7.01798 18.0043 9.33398 18.667C7.01798 19.3297 6.13398 20.2137 5.33398 22.667C4.53398 20.2137 3.64998 19.3297 1.33398 18.667C3.64998 18.0043 4.53398 17.1203 5.33398 14.667ZM7.33398 1.33366C7.73398 2.56032 8.17532 3.00166 9.33398 3.33366C8.17532 3.66566 7.73398 4.10699 7.33398 5.33366C6.93398 4.10699 6.49265 3.66566 5.33398 3.33366C6.49265 3.00166 6.93398 2.56032 7.33398 1.33366Z" stroke="url(#paint0_linear_38427_89083)" stroke-width="1.5" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_38427_89083" x1="0.578428" y1="24.0892" x2="24.2863" y2="3.47953" gradientUnits="userSpaceOnUse">
<stop offset="0.138273" stop-color="#E20074"/>
<stop offset="1" stop-color="#6D72A6"/>
</linearGradient>
</defs>
</svg>
);

export default Aimagic;
