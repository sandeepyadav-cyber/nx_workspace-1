'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import { useTabsContext } from './Tabs';
import type { TabProps } from './Tabs.types';
import { TabButton, TabIconWrapper } from './Tabs.styles';

export const Tab: React.FC<TabProps> = ({ value, label, icon }) => {
  const { value: activeValue, onChange, tabValuesRef, registerTab } = useTabsContext();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isActive = activeValue === value;

  const wasActiveRef = useRef(isActive);
  const isInitialMountRef = useRef(true);

  useEffect(() => {
    registerTab(value);
  }, [value, registerTab]);

  useEffect(() => {
    const justBecameActive = !wasActiveRef.current && isActive;
    wasActiveRef.current = isActive;
    if (justBecameActive && !isInitialMountRef.current) {
      buttonRef.current?.focus();
    }
    isInitialMountRef.current = false;
  }, [isActive]);

  const handleClick = useCallback(() => {
    onChange(value);
  }, [value, onChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const list = tabValuesRef.current;
      const index = list.indexOf(value);

      if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        onChange(list[index - 1]!);
        return;
      }
      if (e.key === 'ArrowRight' && index >= 0 && index < list.length - 1) {
        e.preventDefault();
        onChange(list[index + 1]!);
        return;
      }
      if (e.key === ' ') {
        e.preventDefault();
        onChange(value);
      }
    },
    [value, onChange, tabValuesRef]
  );

  return (
    <TabButton
      ref={buttonRef}
      type="button"
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      $active={isActive}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {icon != null ? <TabIconWrapper>{icon}</TabIconWrapper> : null}
      {label}
    </TabButton>
  );
};
