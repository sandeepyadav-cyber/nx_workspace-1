import type { ReactNode } from 'react';

/** Props for the root Tabs component. */
export interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}

/** Props for each Tab. */
export interface TabProps {
  value: string;
  label: string;
  icon?: ReactNode;
}
