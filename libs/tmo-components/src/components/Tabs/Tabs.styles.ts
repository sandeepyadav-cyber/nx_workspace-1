import styled from 'styled-components';

/* Tab bar; fixed values for SSR/hydration safety. */
const tabs = {
  color: '#333',
  activeBackground: '#FFF',
  activeFontWeight: 700,
  activeFontSize: '16px',
  inactiveFontSize: '14px',
  hoverBackground: 'rgba(0, 0, 0, 0.04)',
  padding: '8px 12px',
  borderRadius: '12px',
  gap: '10px',
  activeBorder: '1px solid #FFF',
  inactiveBorder: 'none',
  inactiveBackground: 'transparent',
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  focusOutline: '#333',
} as const;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: ${tabs.gap};
  width: 100%;
`;

export const TabButton = styled.button<{ $active: boolean }>`
  display: flex;
  padding: ${tabs.padding};
  justify-content: center;
  align-items: center;
  gap: ${tabs.gap};
  border-radius: ${tabs.borderRadius};
  border: ${({ $active }) => ($active ? tabs.activeBorder : tabs.inactiveBorder)};
  background: ${({ $active }) => ($active ? tabs.activeBackground : tabs.inactiveBackground)};
  color: ${tabs.color};
  font-family: ${tabs.fontFamily};
  font-size: ${({ $active }) => ($active ? tabs.activeFontSize : tabs.inactiveFontSize)};
  font-style: ${tabs.fontStyle};
  font-weight: ${({ $active }) => ($active ? tabs.activeFontWeight : tabs.fontWeight)};
  line-height: ${tabs.lineHeight};
  cursor: pointer;
  transition: background 0.2s ease, border 0.2s ease, font-size 0.2s ease, font-weight 0.2s ease;
  outline: none;

  &:hover {
    background: ${({ $active }) => ($active ? tabs.activeBackground : tabs.inactiveBackground)};
  }

  &:focus-visible {
    outline: 2px solid ${tabs.focusOutline};
    outline-offset: 2px;
  }
`;

export const TabIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
