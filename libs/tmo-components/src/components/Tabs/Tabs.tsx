'use client';

import React, { createContext, useContext, useRef, useCallback } from 'react';
import type { TabsProps } from './Tabs.types';
import { TabsContainer, TabList } from './Tabs.styles';

interface TabsContextValue {
  value: string;
  onChange: (value: string) => void;
  tabValuesRef: React.MutableRefObject<string[]>;
  registerTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error('Tab must be used within Tabs.');
  }
  return ctx;
}

/**
 * Usage:
 * <Tabs value={activeTab} onChange={setActiveTab}>
 *   <Tab value="overview" label="Overview" />
 *   <Tab value="analytics" label="Analytics" icon={<ChartIcon />} />
 *   <Tab value="settings" label="Settings" />
 * </Tabs>
 */
export const Tabs: React.FC<TabsProps> = ({ value, onChange, children }) => {
  const tabValuesRef = useRef<string[]>([]);

  const registerTab = useCallback((tabValue: string) => {
    if (!tabValuesRef.current.includes(tabValue)) {
      tabValuesRef.current = [...tabValuesRef.current, tabValue];
    }
  }, []);

  const contextValue: TabsContextValue = {
    value,
    onChange,
    tabValuesRef,
    registerTab,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsContainer>
        <TabList role="tablist">{children}</TabList>
      </TabsContainer>
    </TabsContext.Provider>
  );
};

export { useTabsContext };
