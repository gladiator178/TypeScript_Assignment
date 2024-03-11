import React, { useState } from 'react';

interface Data {
  [key: string]: string;
}

interface JSONData {
    [key: string]: {
        [key: string]: {
          [key: string]: string;
        };
      };
}

interface DataDisplayProps {
  jsonData: JSONData;
  backgroundColor: string;
}

const SummaryWidget: React.FC<DataDisplayProps> = ({ jsonData,backgroundColor }) => {
  const [activeTab, setActiveTab] = useState<string>('Today');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='Widget-Pro' style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>
      <div className="tabs">
        <button className={activeTab === 'Today' ? 'active' : 'unset'} style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}onClick={() => handleTabChange('Today')}>Today</button>
      </div>
      <hr/>
      <p style={{color: (backgroundColor === "#5E5ADB"||backgroundColor=== "#282828") ? '#cfcfcf' : 'inherit'}}>
      Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in 
      </p>
    </div>
  );
};

export default SummaryWidget;
