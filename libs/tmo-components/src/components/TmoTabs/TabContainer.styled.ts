// eslint-disable-next-line @nx/enforce-module-boundaries -- styled-components is an external package
import styled from 'styled-components';
import { viewSizeCalculator } from '../../utils';

function isWideAspect(): boolean {
  if (
    typeof globalThis !== 'undefined' &&
    'innerWidth' in globalThis &&
    'innerHeight' in globalThis
  ) {
    const w = globalThis as unknown as {
      innerWidth: number;
      innerHeight: number;
    };
    return w.innerWidth / w.innerHeight < 2.5;
  }
  return false;
}

export const TabContainer = styled.div`
  margin: ${() => `${viewSizeCalculator(0.9375)} 0`};

  & .MuiTabs-root {
    min-height: ${() => (isWideAspect() ? '1.50vw' : '1.17vw')};
  }
  .css-1g1t9ls {
    width: ${() => viewSizeCalculator(5, true)};
    height: ${() => viewSizeCalculator(5, true)};
  }
`;
