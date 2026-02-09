import styled, { css } from 'styled-components';
import { theme } from '../../constants/theme';

/* Fixed values for SSR/hydration: avoid theme values that use isWideAspect(). */
const card = {
  borderRadius: '12px',
  background: '#FDFBFC',
  borderColor: '#E8E6EA',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
  // headerBackground: '#FAFAFA',
  headerBackgroundHover: '#F2F0F4',
  paddingHeader: '0.875rem 1rem',
  paddingContent: '0 1rem 1rem',
  gapChevronToTitle: '0.375rem', 
  gapBetweenChildren: '0.5rem',
  gapBetweenCards: '0.375rem', 
  gapTitleToContentClosed: '0.2rem',
  gapTitleToContentOpen: '1.5rem',
  gapBetweenArrayCards: '1rem',
  fontSizeTitle: '1rem',
  fontSizeBody: '0.875rem',
} as const;

export const CardAccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${card.gapBetweenCards};
  width: 100%;
`;

export const CardAccordionItemCard = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  align-items: stretch;
  gap: ${({ $isOpen }) =>
    $isOpen ? card.gapTitleToContentOpen : card.gapTitleToContentClosed};
  align-self: stretch;
  overflow: hidden;
  width: 100%;
  // background: ${card.background};
  transition: gap 0.25s ease;
`;

export const CardAccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: ${card.gapChevronToTitle};
  padding: ${card.paddingHeader};
  border: none;
  background: ${card.headerBackground};
  cursor: pointer;
  text-align: left;
  font-family: ${theme.typography.fontFamily};
  font-size: ${card.fontSizeTitle};
  font-weight: ${theme.typography.fontWeight.w5};
  color: ${theme.light.primaryText};
  line-height: 1.3;
  transition: background 0.2s ease;

  // &:hover {
  //   background: ${card.headerBackgroundHover};
  // }

  &:focus-visible {
    outline: 2px solid ${theme.light.primary};
    outline-offset: 2px;
  }
`;

export const CardAccordionTitle = styled.span`
  flex: 1;
  color: #333;
  text-align: right;
  padding-right: 1rem;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const CardAccordionChevron = styled.span<{ $isOpen: boolean }>`
  display: inline-flex;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: ${theme.light.primaryText};

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const CardAccordionPanel = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.3s ease;
  max-height: ${({ $isOpen }) => ($isOpen ? '2000px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
`;

export const CardAccordionContent = styled.div`
  padding: ${card.paddingContent};
  font-family: ${theme.typography.fontFamily};
  font-size: ${card.fontSizeBody};
  color: ${theme.light.secondaryText};
  line-height: 1.5;

  & > * + * {
    margin-top: ${card.gapBetweenArrayCards};
  }
`;

/* Inner metric row: label (left) + value + trend arrow (right), card-style */
const metricRow = {
  padding: '0.625rem 0.875rem',
} as const;

export const MetricRowCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  padding: ${metricRow.padding};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  box-shadow: 0 1px 5px 0 rgba(30, 30, 31, 0.1);
  backdrop-filter: blur(7.45px);
  font-family: ${theme.typography.fontFamily};
  box-sizing: border-box;
`;

export const MetricRowLabel = styled.span`
  color: #333;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  flex: 1;
  min-width: 0;
`;

export const MetricRowValue = styled.span`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

export const MetricRowTrend = styled.span<{ $positive: boolean }>`
  color: ${({ $positive }) =>
    $positive ? theme.changeColor.positive : theme.changeColor.negative};
  font-size: 0.875rem;
  line-height: 1;
`;
