'use client';

import React from "react";
import {
  DictionaryIcon,
  GisIcon,
  MarketShareIcon,
  MarketValuationIcon,
  MbpScoreIcon,
  NexScoreIcon,
  OnAirSitesIcon,
  QGPReportIcon,
} from "../images";
import AdminConsoleIcon from "../images/AdminConsoleIcon";
import ExecutiveViewIcon from "../images/ExecutiveViewIcon";
import KPIApprovalIcon from "../images/KPIApprovalIcon";
import NokiaEricssonReportIcon from "../images/NokiaEricssonReportIcon";
import PrePostFOAIcon from "../images/PrePostFOAIcon";
import Querytoolicon from "../images/Querytoolicon";
import ReportIcon from "../images/Reporticon";
import UserManagementIcon from "../images/UserManagementIcon";

export const GetUnitAndNumber = (unitChange = 0, unit = "") => {
  let formattedNumber;

  // Check if unitChange is a float
  if (typeof unitChange === "number" && unitChange % 1 !== 0) {
    // If it is a float, set formattedNumber directly
    formattedNumber = unitChange;
  } else {
    // If it's not a float, format it according to international counting system
    if (unitChange >= 1e6) {
      formattedNumber = (unitChange / 1e6).toFixed(2); // Format to 2 decimals for millions
    } else if (unitChange >= 1e3) {
      formattedNumber = (unitChange / 1e3).toFixed(2); // Format to 2 decimals for thousands
    } else {
      formattedNumber = unitChange?.toString();
    }
  }

  // Remove trailing .00 if present
  if (typeof formattedNumber === "string" && formattedNumber?.includes(".")) {
    formattedNumber = formattedNumber?.replace(/\.00$/, "");
  }

  // Add suffix for thousands or millions if applicable
  if (unitChange >= 1e6) {
    formattedNumber += "M";
  } else if (unitChange >= 1e3) {
    formattedNumber += "K";
  }

  return { number: formattedNumber, unit: unit };
};

function isWideAspect(): boolean {
  if (
    typeof globalThis !== "undefined" &&
    "innerWidth" in globalThis &&
    "innerHeight" in globalThis
  ) {
    const w = globalThis as unknown as {
      innerWidth: number;
      innerHeight: number;
    };
    return w.innerWidth / w.innerHeight < 2.5;
  }
  return true;
}

export const viewSizeCalculator = (value: number, isPixel = false) => {
  const windowSize = isWideAspect();

  let calculatedValue: number;

  if (windowSize) {
    calculatedValue = isPixel
      ? (value / 1660) * 100
      : ((value * 16) / 1660) * 100;
  } else {
    calculatedValue = isPixel
      ? (value / 1660) * 100 * 0.78
      : ((value * 16) / 1660) * 100 * 0.78;
  }

  return `${calculatedValue?.toFixed(2)}vw` || "0";
};

export const viewHeightCalculator = (value: number, isPixel = false) => {
  const aspectRatioCheck = isWideAspect();

  let calculatedValue: number;

  if (aspectRatioCheck) {
    calculatedValue = isPixel
      ? (value / 900) * 100
      : ((value * 16) / 900) * 100;
  } else {
    calculatedValue = isPixel
      ? (value / 900) * 100 * 0.78
      : ((value * 16) / 900) * 100 * 0.78;
  }

  return `${calculatedValue?.toFixed(2)}vh` || "0";
};

const ranges = [
  { divider: 1e18, suffix: "E" },
  { divider: 1e15, suffix: "P" },
  { divider: 1e12, suffix: "T" },
  { divider: 1e9, suffix: "B" },
  { divider: 1e6, suffix: "M" },
  { divider: 1e3, suffix: "K" },
];

export const formatValue = (value: string | number) => {
  const isString = typeof value === "string";
  const hasMultipleCharacters = isString && value.length > 1;
  const isLastCharNonDigit =
    hasMultipleCharacters && /\D/.test(value.slice(-1));

  const baseValue = isLastCharNonDigit ? value.slice(0, -1) : value;
  const lastChar = isLastCharNonDigit ? value.slice(-1) : "";

  return `${isFixed(baseValue, 2)}${lastChar}`;
};

export const addDelimiter = (numStr: string | number | null | undefined) => {
  if (numStr == null) return "";

  const [integerPart, decimalPart] = String(numStr).split(".");
  const withCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart ? `${withCommas}.${decimalPart}` : withCommas;
};

export const formatNumberV1 = (
  n: number,
  decimals = 2,
  isTwoDecimal = true,
  isFormattingRequired = false
): string | null => {
  if (n == 0) return "0";
  if (!n) return null;
  if (Number.isNaN(n) || isFormattingRequired) {
    return isFormattingRequired ? isFixed(n, 0) : isFixed(n, 2);
  }

  const isNegative = n < 0;
  const absValue = Math.abs(n);

  if (absValue < 1000) {
    return isFixed(n, isTwoDecimal ? decimals : 0).toString();
  }

  const roundToDecimals = (num: number, dec: number) => {
    return (Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(
      dec
    );
  };

  for (let i = 0; i < ranges.length; i++) {
    if (absValue >= ranges[i].divider) {
      const formattedValue = roundToDecimals(
        absValue / ranges[i].divider,
        decimals
      );
      return (isNegative ? "-" : "") + formattedValue + ranges[i].suffix;
    }
  }

  return n.toString();
};

export function isFixed(
  value: string | number | null | undefined,
  decimalPlaces: number
): string | number | null {
  if (value === undefined || value === null) {
    return null;
  }
  if (value === 0 || value === "0" || value === "0.00" || value === 0.0) {
    return 0;
  }

  const numValue = Number(value);
  const factor = Math.pow(10, decimalPlaces);
  const roundedValue = Math.floor(numValue * factor) / factor;

  if (roundedValue === Math.floor(roundedValue)) {
    return Math.floor(roundedValue).toFixed(decimalPlaces);
  }

  return roundedValue.toFixed(decimalPlaces);
}

export const setLocalStorage = (key: string, value: unknown) => {
  try {
    if (value === undefined || value === null) {
      throw new Error("Cannot store null or undefined values");
    }

    const serializedValue = JSON.stringify(value);

    if (serializedValue.length > 5000000) {
      throw new Error("Data is too large to store in localStorage");
    }

    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error(
      "Error setting localStorage:",
      error instanceof Error ? error.message : error
    );
  }
};

export const getLocalStorage = (key: string): unknown => {
  try {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      return null;
    }

    return JSON.parse(storedValue);
  } catch (error) {
    console.error(
      "Error getting localStorage:",
      error instanceof Error ? error.message : error
    );
    return null;
  }
};

export const capitalizeWords = (input: string) => {
  return input
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const generateComparisonLog = (context: {
  username: string;
  marketSelected: string;
  monthSelected: string;
  timestamp: string;
  compare: { kpiSelected: string; comparedKpi?: string };
}) => {
  const { username, marketSelected, timestamp, compare } = context;

  let logMessage = `${username} viewed data for the  "${marketSelected}" market for the KPI "${compare.kpiSelected}"`;

  if (compare.kpiSelected && compare.comparedKpi) {
    logMessage += ` compared it with "${compare.comparedKpi}".`;
  }

  logMessage += `at ${new Date(timestamp).toLocaleString()}.`;
  return logMessage;
};

export const createMarketCompareContext = (
  username: string,
  email: string,
  marketSelected: string,
  monthSelected: string,
  categorySelected: string,
  kpiSelected = "",
  comparedKpi = ""
) => {
  const timestamp = new Date().toISOString();

  const context = {
    username,
    email,
    marketSelected,
    monthSelected,
    timestamp,
    compare: {
      categorySelected,
      kpiSelected,
      comparedKpi,
    },
  };

  return context;
};

export const createHexagonClickContext = (
  data: {
    currentKpi: string;
    selectedMonth: string;
    selectedYear: number;
    area: string;
    market: string;
    region: string;
    performance?: string;
    cohort?: string;
  },
  user: { username: string; name: string }
) => {
  const {
    currentKpi,
    selectedMonth,
    selectedYear,
    area,
    market,
    region,
    performance,
    cohort,
  } = data;

  const { username, name } = user;

  const formattedPeriod = selectedMonth
    ? `${selectedMonth}'${String(selectedYear).slice(-2)}`
    : "Unknown";

  return {
    currentKpi,
    period: formattedPeriod,
    username: name,
    email: username,
    timestamp: new Date().toISOString(),
    area,
    market,
    region,
    performance: performance || "Unknown",
    cohort: cohort || "Not Applicable",
  };
};

export const generateHexagonLog = (context: {
  currentKpi: string;
  period: string;
  username: string;
  area: string;
  market: string;
  region: string;
  performance: string;
  cohort?: string;
  timestamp: string;
}) => {
  const {
    currentKpi,
    period,
    username,
    area,
    market,
    region,
    performance,
    cohort,
    timestamp,
  } = context;

  let logMessage = `${username} clicked on the ${currentKpi} Kpi map for the market "${market}" in the area "${area}" under the region "${region}" for ${period} at ${new Date(
    timestamp
  ).toLocaleString()}.`;
  logMessage += ` Performance: ${performance}.`;

  if (cohort && cohort !== "Not Applicable") {
    logMessage += ` Cohort: ${cohort}.`;
  }

  return logMessage;
};

export const createTileDetailsContext = ({
  username = "",
  email = "",
  itemClicked = "",
  selectedMonth = "",
  selectedYear = "",
  isClicked = "{}",
  ActiveMarketTab = "",
  timestamp = new Date().toISOString(),
}: {
  username?: string;
  email?: string;
  itemClicked?: string;
  selectedMonth?: string;
  selectedYear?: string;
  isClicked?: { data?: { area?: string; market?: string; region?: string } };
  ActiveMarketTab?: string;
  timestamp?: string;
} = {}) => {
  return {
    username,
    email,
    currentKpi: itemClicked,
    period: `${selectedMonth}'${selectedYear}`,
    area: isClicked?.data?.area || "",
    market: isClicked?.data?.market || "",
    region: isClicked?.data?.region || "",
    ActiveMarketTab,
    timestamp,
  };
};

export const generateTileDetailsLog = (
  context: {
    currentKpi: string;
    period: string;
    username: string;
    area: string;
    market: string;
    region: string;
    ActiveMarketTab: string;
    timestamp: string;
  },
  actionType: "clicked" | "scrolled" = "clicked"
) => {
  const {
    currentKpi,
    period,
    username,
    area,
    market,
    region,
    ActiveMarketTab,
    timestamp,
  } = context;

  const verb = actionType === "scrolled" ? "scrolled to" : "clicked on";

  return `In the "${ActiveMarketTab}" details view, ${username} ${verb} the "${currentKpi}" KPI for the market "${market}" in the area "${area}", under the region "${region}", for ${period} at ${new Date(
    timestamp
  ).toLocaleString()}.`;
};

export const createMbpsScoreDetailContext = ({
  selectedItem = {},
  paramsMonth = "",
  paramsYear = "",
  paramsSect = "",
  paramsMarket = "",
  tabValue,
  username = "",
  name = "",
  timestamp = new Date().toISOString(),
}: {
  selectedItem?: { label?: string };
  paramsMonth?: string;
  paramsYear?: string;
  paramsSect?: string;
  paramsMarket?: string;
  tabValue?: number;
  username?: string;
  name?: string;
  timestamp?: string;
} = {}) => {
  let vendor = "";

  if (paramsSect == "Region") {
    vendor = tabValue == 1 ? "Ericsson" : tabValue == 2 ? "Nokia" : "";
  }

  return {
    username: name,
    email: username,
    itemClicked:
      selectedItem?.label
        ?.replace(/_/g, " ")
        ?.replace(/\bscore\b/i, "")
        ?.trim()
        ?.toUpperCase() || "",
    month: paramsMonth,
    year: paramsYear,
    section: paramsSect,
    market: paramsMarket,
    vendor,
    timestamp,
  };
};

export const generateMbpsScoreDetailLog = (context: {
  username: string;
  itemClicked: string;
  month: string;
  year: string;
  section: string;
  market: string;
  vendor: string;
  timestamp: string;
}) => {
  const {
    username,
    itemClicked,
    month,
    year,
    section,
    market,
    vendor,
    timestamp,
  } = context;

  let base = `${username} viewed ${itemClicked} in the Mbp Score for ${market} ${section} for ${month}'${year}`;
  if (vendor) {
    base += ` (Vendor: ${vendor})`;
  }

  base += ` at ${new Date(timestamp).toLocaleString()}.`;

  return base;
};

export const generateMbpsScoreDropdownChangeDetailLog = (
  context: {
    username: string;
    itemClicked: string;
    month: string;
    year: string;
    section: string;
    market: string;
    vendor: string;
    timestamp: string;
    changeType: "period" | "market";
  }
) => {
  const {
    username,
    itemClicked,
    month,
    year,
    section,
    market,
    vendor,
    timestamp,
    changeType,
  } = context;

  const readablePeriod = `${month}'${year.toString().slice(-2)}`;
  const readableMarket = market || "Unknown Market/Region";

  let message = `[MBP Score Dropdown Change] ${username} changed `;

  if (changeType === "period") {
    message += `the period to "${readablePeriod}" `;
  } else if (changeType === "market") {
    message += `the market/region to "${readableMarket}" `;
  } else {
    message += `an unknown dropdown `;
  }

  message += `in the "${itemClicked}" KPI (${section}${
    vendor ? ` - ${vendor}` : ""
  }) while viewing data for market/region "${readableMarket}" and period "${readablePeriod}" at ${new Date(
    timestamp
  ).toLocaleString()}.`;

  return message;
};

export const generateOnClickMBPGraphLog = (context: {
  username: string;
  itemClicked: string;
  period: string;
  section: string;
  tabValue: number;
  market: string;
  timestamp: string;
}) => {
  const {
    username,
    itemClicked,
    period,
    section,
    tabValue,
    market,
    timestamp,
  } = context;

  let vendor = "";
  if (section === "Region") {
    vendor = tabValue == 1 ? "Ericsson" : tabValue == 2 ? "Nokia" : "";
  }

  let baseMessage = `In MBP Score ${username} clicked on the "${itemClicked}" KPI graph for ${market} ${section} for ${period}`;

  if (vendor) {
    baseMessage += ` (Vendor: ${vendor})`;
  }

  baseMessage += ` at ${new Date(timestamp).toLocaleString()}.`;

  return baseMessage;
};

export const generateOnClickMBPSubKPILog = (context: {
  username: string;
  market: string;
  kpiType: string;
  leadVendor?: string;
  subKpiTab?: string | boolean;
  selectedPeriod: string;
  timestamp: string;
  actionType?: "click" | "tabChange" | "dateChange" | "download";
}) => {
  const {
    username,
    market,
    kpiType,
    leadVendor,
    subKpiTab = false,
    selectedPeriod,
    timestamp,
    actionType = "click",
  } = context;

  const cleanedKpiType = kpiType
    ?.replace(/_/g, " ")
    ?.replace(/\bscore\b/i, "")
    ?.trim()
    ?.toUpperCase();

  let actionDescription = "";

  switch (actionType) {
    case "click":
      actionDescription = `clicked on the "${cleanedKpiType}" KPI`;
      break;
    case "tabChange":
      actionDescription = `changed tab in "${cleanedKpiType}" KPI`;
      break;
    case "dateChange":
      actionDescription = `changed date selection in "${cleanedKpiType}" KPI`;
      break;
    case "download":
      actionDescription = `downloaded in "${cleanedKpiType}" KPI`;
      break;
    default:
      actionDescription = `interacted with the "${cleanedKpiType}" KPI`;
  }

  let message = `In MBP Score ${username} ${actionDescription}`;

  if (subKpiTab) {
    message += ` (SubKPI Tab: ${subKpiTab})`;
  }

  message += ` for the market "${market}"`;

  if (leadVendor) {
    message += ` (Vendor: ${leadVendor})`;
  }

  message += ` for the period "${selectedPeriod}" at ${new Date(
    timestamp
  ).toLocaleString()}.`;

  return message;
};

export const generateDataDictionaryLog = (context: {
  username: string;
  action: "searched" | "scrolled" | "clicked";
  itemValue: string;
  timestamp: string;
}) => {
  const { username, action, itemValue, timestamp } = context;

  const formattedTime = new Date(timestamp).toLocaleString();
  const cleanedItem = itemValue
    ?.toString()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

  let message = `${username} ${action} in the Data Dictionary`;

  if (cleanedItem) {
    message += ` on tab "${cleanedItem}"`;
  }

  message += ` at ${formattedTime}.`;

  return message;
};

export const generateKpiApprovalRowClickLog = (context: {
  username: string;
  kpiName: string;
  owner: string | string[];
  status: string;
  forPeriod: string;
  timestamp: string;
}) => {
  const { username, kpiName, owner, status, forPeriod, timestamp } = context;

  const periodDate = new Date(forPeriod);
  const formattedPeriod = periodDate.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  const ownerList = Array.isArray(owner) ? owner.join(", ") : owner;

  return `[KPI Approval] ${username} clicked on the KPI "${kpiName}" (Owner: ${ownerList}) with status "${status}" for the period ${formattedPeriod} at ${new Date(
    timestamp
  ).toLocaleString()}.`;
};

export const generateUserManagementLog = (context: {
  username: string;
  tabValue?: number;
  searchVal?: string;
  emailList?: string | string[];
  selectedRole?: string;
  action?: string;
  timestamp: string;
}) => {
  const {
    username,
    tabValue = 1,
    searchVal,
    emailList,
    selectedRole,
    action = "tab change",
    timestamp,
  } = context;

  const tabLabelMap: Record<number, string> = {
    1: "All Users",
    2: "Approval List",
    3: "Rejected",
  };

  const overrideTabLabel =
    action === "user approved" || action === "user rejected"
      ? "Approval List"
      : tabLabelMap[tabValue] || "Unknown";

  let message = `[User Management] ${username}`;

  switch (action) {
    case "tab change":
      message += ` changed tab to "${overrideTabLabel}"`;
      break;
    case "search":
      message += ` searched for "${searchVal}" in "${overrideTabLabel}" tab`;
      break;
    case "remove selected":
      message += ` removed a user (${emailList}) by clicking remove on the row in "${overrideTabLabel}" tab`;
      break;
    case "remove user":
      message += ` removed the following users ${
        Array.isArray(emailList) ? emailList.join(", ") : emailList
      } from "${overrideTabLabel}" tab`;
      break;
    case "add user":
      message += ` added users (${
        Array.isArray(emailList) ? emailList.join(", ") : emailList
      }) with role "${selectedRole}"`;
      break;
    case "change role":
      message += ` changed role for ${emailList} to "${selectedRole}" in "${overrideTabLabel}" tab`;
      break;
    case "user approved":
      message += ` approved user (${emailList}) in "${overrideTabLabel}" tab`;
      break;
    case "user rejected":
      message += ` rejected user (${emailList}) in "${overrideTabLabel}" tab`;
      break;
    default:
      message += ` performed unknown action "${action}" in "${overrideTabLabel}" tab`;
      break;
  }

  message += ` at ${new Date(timestamp).toLocaleString()}.`;

  return message;
};

export const generateYodaLogs = (context: Record<string, unknown>) => {
  const {
    username,
    action = "tab change",
    timestamp,
    tabValue = 1,
    market,
    gp_name,
    vendor,
    collaborators,
    gp_id,
    label,
    status,
    final_status,
    submission_id,
    previous_tab,
    current_tab,
    tab_type,
    previous_submission_id,
    new_submission_id,
    commentary,
    status_selected,
  } = context;

  const tabLabelMap: Record<number, string> = {
    1: "Created By Me",
    2: "Shared With Me",
    3: "All",
  };

  let message = `[YODA] ${username} `;

  switch (action) {
    case "tab change":
      message += ` changed tab to "${tabLabelMap[tabValue as number]}"`;
      break;
    case "workspace creation":
      message += `created a workspace for "${market}" market and vendor "${vendor} with GP Name : "${gp_name} and shared with these collaborators : ${collaborators} `;
      break;
    case "workspace details":
      message += `seeing the details or all submissions of workspace with GP ID : ${gp_id}`;
      break;
    case "workspace edit":
      message += `edited the workspace with GP ID : ${gp_id}`;
      break;
    case "workspace delete":
      message += `deleted the workspace with GP ID : ${gp_id}`;
      break;
    case "view report":
      message += `clicked on report button to see report of workspace with GP ID : ${gp_id}`;
      break;
    case "send report pdf":
      message += `clicked on Email AI Report button to send report of workspace with GP ID : ${gp_id} on email`;
      break;
    case "analysis submit":
      message += `submitted the analysis`;
      break;
    case "draft":
      message += `saved as draft`;
      break;
    case "submission filter":
      message += `applied "${label}" filter in submissions list`;
      break;
    case "pass fail":
      message += `"${status}" one of the submission with Submission Id: ${submission_id} and Workspace Id: ${gp_id}`;
      break;
    case "promoted":
      message += `promoted as "${final_status}" one of the submission with Submission Id: ${submission_id} and Workspace Id: ${gp_id}`;
      break;
    case "submission delete":
      message += `deleted one of the submission with Submission Id: ${submission_id} and Workspace Id: ${gp_id}`;
      break;
    case "view report page":
      message += `is viewing the report page for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "foa report tab change":
      message += `switched from "${previous_tab}" tab to "${current_tab}" tab in the report page for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "submission id change":
      message += `changed submission ID from "${previous_submission_id}" to "${new_submission_id}" in the report page of workspace with GP ID: ${gp_id}`;
      break;
    case "view detailed insights":
      message += `clicked "View Detailed Insights" button in ${tab_type} tab for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "download insights pdf":
      message += `downloaded insights PDF for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "duplicate submission clicked":
      message += `clicked on Duplicate button for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "delete submission clicked":
      message += `clicked on Delete button for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "pass_fail popup opened":
      message += `opened Mark as Passed/Failed popup for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "promote_as_final popup opened":
      message += `opened Promote as Final popup for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "mark as passed failed submitted":
      message += `submitted Mark as ${status_selected} for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    case "promote as final submitted":
      message += `submitted Promote as Final${commentary ? ` with commentary: "${commentary}"` : ""} for Submission ID: ${submission_id} of workspace with GP ID: ${gp_id}`;
      break;
    default:
      message += ` performed unknown action "${action}" in "${tabLabelMap}" tab`;
      break;
  }

  message += ` at ${new Date(timestamp as string).toLocaleString()}.`;

  return message;
};

export const generateKpiApprovalStatusChangeLog = (context: {
  username: string;
  selectedKpi: string;
  selectedMonth: string;
  selectedYear: string;
  buttonClicked: string;
  timestamp: string;
}) => {
  const {
    username,
    selectedKpi,
    selectedMonth,
    selectedYear,
    buttonClicked,
    timestamp,
  } = context;

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const monthName =
    monthNames[parseInt(selectedMonth, 10) - 1] || "InvalidMonth";
  const formattedTimestamp = new Date(timestamp).toLocaleString();

  return `[KPI Approval] ${username} changed the status of KPI "${selectedKpi}" to "${buttonClicked}" for ${monthName} ${selectedYear} at ${formattedTimestamp}.`;
};

export const generateDataMonitoringLog = (context: {
  username: string;
  clickedMonth: string;
  clickedYear: number;
  adminData: Array<{
    kpi_name: string;
    monthly_statuses: Array<{ month: number; year: number; status?: string }>;
  }>;
  timestamp: string;
}) => {
  const { username, clickedMonth, clickedYear, adminData, timestamp } =
    context;

  const monthToNumber: Record<string, number> = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
  };

  const monthNum = monthToNumber[clickedMonth] ?? null;
  if (!monthNum) {
    return `[Data Monitoring] ${username} clicked on an invalid month "${clickedMonth}" at ${new Date(
      timestamp
    ).toLocaleString()}.`;
  }

  const matchedStatuses = adminData
    .map((kpiItem) => {
      const match = kpiItem.monthly_statuses.find(
        (entry) => entry.month === monthNum && entry.year === clickedYear
      );
      return match
        ? {
            kpiName: kpiItem.kpi_name,
            status: match.status || "unknown",
          }
        : null;
    })
    .filter(Boolean);

  let message = `[Data Monitoring] ${username} clicked on data for "${clickedMonth} ${clickedYear}" at ${new Date(
    timestamp
  ).toLocaleString()}.`;

  if (matchedStatuses.length > 0) {
    const detail = (matchedStatuses as { kpiName: string; status: string }[])
      .map((item) => `${item.kpiName}: ${item.status}`)
      .join("; ");
    message += ` Visible KPI statuses: ${detail}.`;
  } else {
    message += ` No KPI data available for this period.`;
  }

  return message;
};

export const reverseValueChangeList = ["Postpaid Churn"];

export const transformKpiListData = (apiResponse: Record<string, unknown>) => {
  const dataMapping: Record<
    string,
    {
      key: string;
      valueFormatter: (data: Record<string, unknown>) => unknown;
      secondaryValueFormatter?: (data: Record<string, unknown>) => unknown;
      isPositive?: (data: Record<string, unknown>) => boolean;
      unit?: string;
      showValueChange: boolean;
    }
  > = {
    "On-Air Sites": {
      key: "on_air_sites",
      valueFormatter: (data) => data.total,
      secondaryValueFormatter: (data) => data.total_change,
      isPositive: (data) => (data.total_change as number) > 0,
      showValueChange: false,
    },
    "Covered Pops": {
      key: "covered_pops",
      valueFormatter: (data) => data.covered_pops,
      secondaryValueFormatter: (data) => data.covered_pops_change,
      isPositive: (data) => (data.covered_pops_change as number) > 0,
      unit: "%",
      showValueChange: false,
    },
    "Share of Household": {
      key: "share_of_household",
      valueFormatter: (data) => data.total_share,
      secondaryValueFormatter: (data) => data.total_share_change,
      isPositive: (data) => (data.total_share_change as number) > 0,
      unit: "%",
      showValueChange: false,
    },
    "Postpaid Subs": {
      key: "postpaid_churn",
      valueFormatter: (data) => data.total_subs,
      secondaryValueFormatter: (data) => data.total_subs_change,
      isPositive: (data) => (data.total_subs_change as number) > 0,
      showValueChange: false,
    },
    "Postpaid Churn": {
      key: "postpaid_churn",
      valueFormatter: (data) => data.churn,
      secondaryValueFormatter: (data) => data.churn_change,
      isPositive: (data) => (data.churn_change as number) > 0,
      unit: "%",
      showValueChange: false,
    },
  };

  return Object.keys(dataMapping)
    .map((label) => {
      const config = dataMapping[label];
      const kpiData = apiResponse[config.key] as Record<string, unknown>;

      if (!kpiData || Object.keys(kpiData).length === 0) return null;

      return {
        label,
        value: config.valueFormatter(kpiData),
        value_change: config.secondaryValueFormatter
          ? config.secondaryValueFormatter(kpiData)
          : null,
        isPositive: config.isPositive ? config.isPositive(kpiData) : null,
        unit: config.unit,
        showValueChange: config.showValueChange,
      };
    })
    .filter(Boolean);
};

export const changeColor = {
  RightAccordion: {
    positive: "#39BC17",
    negative: "#F35242",
    neutral: "#616161",
  },
  TabSlider: { positive: "#39BC17", negative: "#F35242", neutral: "#616161" },
  PulseBoardBox: {
    positive: "#39BC17",
    negative: "#F35242",
    neutral: "#616161",
  },
  CustomTooltip: {
    positive: "#39BC17",
    negative: "#F35242",
    neutral: "#616161",
  },
  MarketComparison: {
    positive: "#27C365",
    negative: "#FF4545",
    neutral: "#616161",
  },
  LeftSection: { positive: "#39BC17", negative: "#F35242", neutral: "#616161" },
};

export const roleBasedHamburgerOptions = {
  admin: [
    {
      label: "Network Facts",
      sub_label: "",
      value: "network_facts",
      icon: <ExecutiveViewIcon />,
      heading: "Insights & Intelligence",
    },
    {
      label: "Market Valuation",
      sub_label: "",
      value: "market_valuation",
      icon: <MarketValuationIcon />,
    },
    {
      label: "MBP Score",
      sub_label: "DAILY",
      value: "mbp_score",
      icon: <MbpScoreIcon />,
    },
    {
      label: "Nokia Ericsson Report",
      sub_label: "",
      value: "nokia_ericsson_report",
      icon: <QGPReportIcon />,
    },
    {
      label: "YODA",
      sub_label: "",
      value: "yoda",
      icon: <PrePostFOAIcon />,
      new: 1,
    },
    {
      label: "QGP Report",
      sub_label: "",
      value: "qgp_report",
      icon: <QGPReportIcon />,
      new: 1,
    },
    {
      label: "Market Share",
      sub_label: "",
      value: "market_share",
      icon: <MarketShareIcon />,
    },
    {
      label: "O4S Query Tool",
      sub_label: "",
      value: "o4s_query_tool",
      icon: <Querytoolicon />,
      new: 1,
    },
    {
      label: "On-Air Sites",
      sub_label: "",
      value: "on_air_sites",
      secondaryLabel: "(Macros, 5G Macros , 5G Tech Layers)",
      icon: <OnAirSitesIcon />,
    },
    {
      label: "NEX Score",
      sub_label: "",
      value: "nex_score",
      icon: <NexScoreIcon />,
    },
    {
      heading: "Help",
      label: "DATA DICTIONARY",
      sub_label: "",
      value: "data_dictionary",
      icon: <DictionaryIcon />,
    },
  ],
  network: [
    {
      label: "Network Facts",
      sub_label: "",
      value: "network_facts",
      suffix: "%",
      icon: <ExecutiveViewIcon />,
    },
    {
      label: "Market Valuation",
      sub_label: "",
      value: "market_valuation",
      suffix: "%",
      icon: <MarketValuationIcon />,
    },
    {
      label: "MBP Score",
      sub_label: "DAILY",
      value: "mbp_score",
      icon: <MbpScoreIcon />,
    },
    {
      label: "Nokia Ericsson Report",
      sub_label: "",
      value: "nokia_ericsson_report",
      icon: <QGPReportIcon />,
    },
    {
      label: "Market Share",
      sub_label: "",
      value: "market_share",
      suffix: "%",
      icon: <MarketShareIcon />,
    },
    {
      label: "On-Air Sites",
      sub_label: "",
      value: "on_air_sites",
      secondaryLabel: "(Macros, 5G Macros , 5G Tech Layers)",
      icon: <OnAirSitesIcon />,
    },
    {
      label: "NEX Score",
      sub_label: "",
      value: "nex_score",
      icon: <NexScoreIcon />,
    },
  ],
  network_financials: [
    {
      label: "Network Facts",
      sub_label: "",
      value: "network_facts",
      suffix: "%",
      icon: <ExecutiveViewIcon />,
    },
    {
      label: "Market Valuation",
      sub_label: "",
      value: "market_valuation",
      suffix: "%",
      icon: <MarketValuationIcon />,
    },
    {
      label: "MBP Score",
      sub_label: "DAILY",
      value: "mbp_score",
      icon: <MbpScoreIcon />,
    },
    {
      label: "Nokia Ericsson Report",
      sub_label: "",
      value: "nokia_ericsson_report",
      icon: <QGPReportIcon />,
    },
    {
      label: "Market Share",
      sub_label: "",
      value: "market_share",
      suffix: "%",
      icon: <MarketShareIcon />,
    },
    {
      label: "On-Air Sites",
      sub_label: "",
      value: "on_air_sites",
      secondaryLabel: "(Macros, 5G Macros , 5G Tech Layers)",
      icon: <OnAirSitesIcon />,
    },
    {
      label: "NEX Score",
      sub_label: "",
      value: "nex_score",
      icon: <NexScoreIcon />,
    },
  ],
  o4s_analytics: [
    {
      label: "O4S Query Tool",
      sub_label: "",
      value: "o4s_query_tool",
      icon: <Querytoolicon />,
    },
  ],
  foa_analysis: [
    {
      label: "YODA",
      sub_label: "",
      value: "yoda",
      icon: <PrePostFOAIcon />,
    },
  ],
};

export const hamburgerOptionIcons: Record<string, React.ReactNode> = {
  network_facts: <ExecutiveViewIcon />,
  market_valuation: <MarketValuationIcon />,
  mbp_score: <MbpScoreIcon />,
  nokia_ericsson_report: <QGPReportIcon />,
  yoda: <PrePostFOAIcon />,
  qgp_report: <QGPReportIcon />,
  market_share: <MarketShareIcon />,
  o4s_query_tool: <Querytoolicon />,
  on_air_sites: <OnAirSitesIcon />,
  nex_score: <NexScoreIcon />,
  gis_mapping: <GisIcon />,
  data_dictionary: <DictionaryIcon />,
  user_management: <UserManagementIcon />,
  m360_kpis: <KPIApprovalIcon />,
  admin_console: <AdminConsoleIcon />,
  issues_requests: (
    <ReportIcon
      width={viewSizeCalculator(16, true)}
      height={viewSizeCalculator(20, true)}
    />
  ),
  default: <ExecutiveViewIcon />,
};

function getOrigin(): string {
  if (
    typeof globalThis !== "undefined" &&
    "location" in globalThis &&
    typeof (globalThis as unknown as { location: { origin?: string } }).location
      ?.origin === "string"
  ) {
    return (globalThis as unknown as { location: { origin: string } }).location
      .origin;
  }
  return "";
}

export const adminControlLinks = {
  user_management: `${getOrigin()}/home?kpi=user_management`,
  m360_kpis: `${getOrigin()}/home?kpi=m360_kpis`,
  admin_console: `${getOrigin()}/home?kpi=admin_console`,
  issues_requests: `${getOrigin()}/home?kpi=issues_requests`,
};

export const allowedEmailsForGIS = [
  "vivek.goswami2@t-mobile.com",
  "vidit.sharma176@t-mobile.com",
  "sourav.kumarsahu15@t-mobile.com",
  "shreyashprabhakar.matele1@t-mobile.com",
  "shivkaran.singh575@t-mobile.com",
  "sayan.ghosh62@t-mobile.com",
  "ramya.marikookala1@t-mobile.com",
  "priti.tiwari36@T-Mobile.com",
  "manoj.attri1@t-mobile.com",
  "manish.kumarsingh6@t-mobile.com",
  "kritish.kishore15@t-mobile.com",
  "fahad.md1@t-mobile.com",
  "Darshan.Agarwal7@T-Mobile.com",
  "aleksandr.popov7@t-mobile.com",
  "abhishek.panthalingal2@t-mobile.com",
  "vidhi.maheshwari5@t-mobile.com",
  "shreya.banjan1@t-mobile.com",
];
