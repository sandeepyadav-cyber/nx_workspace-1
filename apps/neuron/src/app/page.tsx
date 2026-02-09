'use client';
import { useState } from 'react';
import {
  CardAccordion,
  CardAccordionItem,
  CardAccordionMetricList,
  Tab,
  Tabs,
  TmoTabs,
} from '@my-workspace/tmo-components';
import { AdminIcon } from 'libs/tmo-components/src/images';

export default function Index() {
  const [value, setValue] = useState('1');
  const [activeTab, setActiveTab] = useState('overview');

  const metrics: CardAccordionMetricItem[] = [
    { label: 'Improvement in 5G Congestion', value: '1.15%', trend: 'up' },
    { label: 'Improvement in DCR', value: '99.94%', trend: 'down' },
    { label: 'Improvement in NEX', value: '66.7%', trend: 'down' },
  ];
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          {/* <TmoTabs
            tabsArray={[
              { label: 'Tab 1', value: '1' },
              { label: 'Tab 2', value: '2' },
            ]}
            tabValue={value}
            handleTabChange={(_e, v) => setValue(v)}
          /> */}

          <Tabs value={activeTab} onChange={setActiveTab}>
            <Tab value="overview" label="Overview" />
            <Tab value="analytics" label="Analytics" icon={<AdminIcon />} />
            <Tab value="settings" label="Settings" />
          </Tabs>
          <CardAccordion allowMultiple={true}>
            <CardAccordionItem
              id="kpis"
              title="Congestion & KPI Improvements (MoM)"
              defaultOpen
            >
              <CardAccordionMetricList items={metrics} />
              {/* <p>hello sdsafsaf</p> */}
            </CardAccordionItem>
            <CardAccordionItem id="coverage" title="Coverage quality">
              <p>Another section content.</p>
            </CardAccordionItem>
            <CardAccordionItem id="availability" title="Availability">
              <p>Third section.</p>
            </CardAccordionItem>
          </CardAccordion>
        </div>
      </div>
    </div>
  );
}
