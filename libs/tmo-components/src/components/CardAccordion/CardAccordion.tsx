'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useId,
} from 'react';
import {
  CardAccordionWrapper,
  CardAccordionItemCard,
  CardAccordionHeader,
  CardAccordionTitle,
  CardAccordionChevron,
  CardAccordionPanel,
  CardAccordionContent,
  MetricRowCard,
  MetricRowLabel,
  MetricRowValue,
  MetricRowTrend,
} from './CardAccordion.styles';
import type {
  CardAccordionProps,
  CardAccordionItemProps,
  CardAccordionMetricRowProps,
  CardAccordionMetricListProps,
} from './CardAccordion.types';

const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface CardAccordionContextValue {
  openIds: Set<string>;
  allowMultiple: boolean;
  toggleItem: (id: string) => void;
  registerDefaultOpen: (id: string) => void;
}

const CardAccordionContext = createContext<CardAccordionContextValue | null>(
  null
);

function useCardAccordion(): CardAccordionContextValue {
  const ctx = useContext(CardAccordionContext);
  if (!ctx) {
    throw new Error(
      'CardAccordionItem must be used within a CardAccordion.'
    );
  }
  return ctx;
}

/**
 * Usage (single open, default):
 * <CardAccordion>
 *   <CardAccordionItem id="section-1" title="Section 1" defaultOpen>...</CardAccordionItem>
 *   <CardAccordionItem id="section-2" title="Section 2">...</CardAccordionItem>
 * </CardAccordion>
 *
 * Usage (multiple open):
 * <CardAccordion allowMultiple>
 *   <CardAccordionItem id="a" title="A" defaultOpen>...</CardAccordionItem>
 *   <CardAccordionItem id="b" title="B" defaultOpen>...</CardAccordionItem>
 * </CardAccordion>
 */
export const CardAccordion: React.FC<CardAccordionProps> = ({
  children,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const defaultAppliedRef = useRef(false);

  const toggleItem = useCallback(
    (id: string) => {
      setOpenIds((prev) => {
        const next = new Set(prev);
        if (allowMultiple) {
          if (next.has(id)) next.delete(id);
          else next.add(id);
        } else {
          if (next.has(id)) return new Set();
          return new Set([id]);
        }
        return next;
      });
    },
    [allowMultiple]
  );

  const registerDefaultOpen = useCallback(
    (id: string) => {
      if (allowMultiple) {
        setOpenIds((prev) => new Set(prev).add(id));
      } else if (!defaultAppliedRef.current) {
        defaultAppliedRef.current = true;
        setOpenIds(new Set([id]));
      }
    },
    [allowMultiple]
  );

  const value: CardAccordionContextValue = {
    openIds,
    allowMultiple,
    toggleItem,
    registerDefaultOpen,
  };

  return (
    <CardAccordionContext.Provider value={value}>
      <CardAccordionWrapper>{children}</CardAccordionWrapper>
    </CardAccordionContext.Provider>
  );
};

export const CardAccordionItem: React.FC<CardAccordionItemProps> = ({
  id,
  title,
  defaultOpen = false,
  children,
}) => {
  const { openIds, toggleItem, registerDefaultOpen } = useCardAccordion();
  const headerId = useId();
  const panelId = useId();
  const isOpen = openIds.has(id);

  useEffect(() => {
    if (defaultOpen) {
      registerDefaultOpen(id);
    }
  }, [id, defaultOpen, registerDefaultOpen]);

  const handleToggle = useCallback(() => {
    toggleItem(id);
  }, [id, toggleItem]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleToggle();
      }
    },
    [handleToggle]
  );

  return (
    <CardAccordionItemCard $isOpen={isOpen}>
      <CardAccordionHeader
        type="button"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={headerId}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <CardAccordionChevron $isOpen={isOpen}>
          <ChevronIcon />
        </CardAccordionChevron>
        <CardAccordionTitle>{title}</CardAccordionTitle>
      </CardAccordionHeader>
      <CardAccordionPanel
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        $isOpen={isOpen}
      >
        <CardAccordionContent>{children}</CardAccordionContent>
      </CardAccordionPanel>
    </CardAccordionItemCard>
  );
};

export const CardAccordionMetricRow: React.FC<CardAccordionMetricRowProps> = ({
  label,
  value,
  trend,
}) => (
  <MetricRowCard>
    <MetricRowLabel>{label}</MetricRowLabel>
    <MetricRowValue>
      {value}
      {trend !== undefined && (
        <MetricRowTrend $positive={trend === 'up'}>
          {trend === 'up' ? '↑' : '↓'}
        </MetricRowTrend>
      )}
    </MetricRowValue>
  </MetricRowCard>
);

export const CardAccordionMetricList: React.FC<CardAccordionMetricListProps> = ({
  items,
}) => (
  <>
    {items.map((item, index) => (
      <CardAccordionMetricRow
        key={item.label + index}
        label={item.label}
        value={item.value}
        trend={item.trend}
      />
    ))}
  </>
);
