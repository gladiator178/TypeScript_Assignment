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

const DataWidget: React.FC<DataDisplayProps> = ({ jsonData,backgroundColor }) => {
  const [activeTab, setActiveTab] = useState<string>('7d');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='Widget-Pro' style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>
      <div className="tabs">
        <button style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}className={activeTab === '7d' ? 'active' : 'unset'} onClick={() => handleTabChange('7d')}>7d</button>
        <button style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}className={activeTab === '14d' ? 'active' : 'unset'} onClick={() => handleTabChange('14d')}>14d</button>
        <button style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}className={activeTab === '30d' ? 'active' : 'unset'} onClick={() => handleTabChange('30d')}>30d</button>
      </div>
      <hr/>
      <table style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>
        <thead>
          <tr>
            <th className='th1' style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>Product</th>
            <th style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>Q1-23</th>
            <th style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>Q2-23</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(jsonData[activeTab]).map(([product, values]) => (
            <tr key={product}>
              <td style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>{product}</td>
              <td style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>{(values as unknown as Data)['Q1-23']}</td>
              <td style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>{(values as unknown as Data)['Q2-23']}</td> {/* Corrected to 'Q2-23' */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataWidget;
