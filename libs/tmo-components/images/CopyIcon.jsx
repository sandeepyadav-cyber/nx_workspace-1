import React from 'react'
import { viewSizeCalculator } from '../../newLayoutSetup/utils'

const CopyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={viewSizeCalculator(32, true)}
      height={viewSizeCalculator(32, true)}
      viewBox="0 0 32 32"
      fill="none"
    >
      <rect width="32" height="32" rx="6" fill="transparent" />
      <path
        d="M21 18.5H21.5C22.6083 18.5 23.5 17.6083 23.5 16.5V10.5C23.5 9.39167 22.6083 8.5 21.5 8.5H15.5C14.3917 8.5 13.5 9.39167 13.5 10.5V11M10.5 23.5H16.5C17.0304 23.5 17.5391 23.2893 17.9142 22.9142C18.2893 22.5391 18.5 22.0304 18.5 21.5V15.5C18.5 14.9696 18.2893 14.4609 17.9142 14.0858C17.5391 13.7107 17.0304 13.5 16.5 13.5H10.5C10.2374 13.5 9.97728 13.5517 9.73463 13.6522C9.49198 13.7528 9.2715 13.9001 9.08579 14.0858C8.71071 14.4609 8.5 14.9696 8.5 15.5V21.5C8.5 21.7626 8.55173 22.0227 8.65224 22.2654C8.75275 22.508 8.90007 22.7285 9.08579 22.9142C9.46086 23.2893 9.96957 23.5 10.5 23.5Z"
        stroke="#606080"
        strokeWidth="1.25"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CopyIcon
