import type { ReactNode } from 'react';

/** Props for the root CardAccordion component. */
export interface CardAccordionProps {
  children: ReactNode;
  /** When true, multiple items can be open at once. When false (default), only one item is open at a time. */
  allowMultiple?: boolean;
}

/** Props for each CardAccordionItem. */
export interface CardAccordionItemProps {
  id: string;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

/** Props for a single metric row (label + value + optional trend). */
export interface CardAccordionMetricRowProps {
  label: string;
  value: string;
  trend?: 'up' | 'down';
}

/** Data shape for one item in CardAccordionMetricList. */
export interface CardAccordionMetricItem {
  label: string;
  value: string;
  trend?: 'up' | 'down';
}

/** Props for the list of metric rows. */
export interface CardAccordionMetricListProps {
  items: CardAccordionMetricItem[];
}
