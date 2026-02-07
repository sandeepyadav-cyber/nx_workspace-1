'use client';
import { useState } from 'react';
import {
  HappynrwlUiComponents,
  NetworkDataCharts,
} from '@my-workspace/my-new-lib';
import { TmoTabs } from '@my-workspace/tmo-components';

export default function Index() {
  const [value, setValue] = useState('1');
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          {/* <HappynrwlUiComponents />
          <NetworkDataCharts /> */}
          <TmoTabs
            tabsArray={[
              { label: 'Tab 1', value: '1' },
              { label: 'Tab 2', value: '2' },
            ]}
            tabValue={value}
            handleTabChange={(_e, v) => setValue(v)}
          />
        </div>
      </div>
    </div>
  );
}
