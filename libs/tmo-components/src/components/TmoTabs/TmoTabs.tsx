'use client';

// eslint-disable-next-line @nx/enforce-module-boundaries -- external packages
import { TabContext, TabList } from '@mui/lab';
// eslint-disable-next-line @nx/enforce-module-boundaries -- external packages
import { Tab } from '@mui/material';
import React from 'react';
import { TabContainer } from './TabContainer.styled';
import { viewSizeCalculator } from '../../utils';
import { theme } from '../../constants/theme';

export interface TmoTabItem {
  label: string;
  value: string;
}

export interface TmoTabsProps {
  tabsArray: TmoTabItem[];
  handleTabChange: (event: React.SyntheticEvent, value: string) => void;
  tabValue: string;
}

const TmoTabs: React.FC<TmoTabsProps> = ({
  tabsArray,
  handleTabChange,
  tabValue,
}) => {
  return (
    <TabContainer className="tabContainer">
      <TabContext value={tabValue}>
        <TabList
          onChange={handleTabChange}
          sx={{
            '& .MuiTabs-flexContainer': {
              gap: '2vw',
              minHeight: '0',
            },
          }}
          TabIndicatorProps={{
            sx: {
              background: '#E20074',
              height: `${viewSizeCalculator(3, true)}`,
            },
          }}
        >
          {tabsArray.map((ele, idx) => (
            <Tab
              key={idx}
              label={ele.label}
              value={ele.value}
              sx={{
                padding: 0,
                color: theme.light.graphAxisColor,
                fontSize: theme.typography.fontSize.h3,
                fontWeight: theme.typography.fontWeight.w7,
                minWidth: 'auto',
                maxWidth: 'none',
                whiteSpace: 'nowrap',
                justifyContent: 'flex-start',
                minHeight: '0',
                '&.Mui-selected': {
                  color: '#E20074',
                },
                '&:hover:not(.Mui-selected)': {
                  color: '#242639',
                },
              }}
            />
          ))}
        </TabList>
      </TabContext>
    </TabContainer>
  );
};

export default TmoTabs;
