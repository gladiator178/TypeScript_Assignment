import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const BarWidget: React.FC<DataDisplayProps> = ({ jsonData, backgroundColor }) => {
  const [activeTab, setActiveTab] = useState<string>('7d');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const data = Object.entries(jsonData[activeTab]).map(([product, values], index) => ({
    name: product,
    'Q1-23': parseInt((values as Data)['Q1-23']),
    'Q2-23': parseInt((values as Data)['Q2-23']),
    fill: `rgb(${index * 50}, ${255 - index * 50}, ${index * 30})`, // Generate a unique color for each bar
  }));

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
      <ResponsiveContainer width="90%" height={150}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={11} />
          <YAxis
            label={{
              value: 'Visitors',
              angle: -90,
              position: 'insideLeft',
              fontSize: 11,
            }}
            tick={{ fontSize: 11 }}
          />
          <Tooltip />
          <Bar dataKey="Q1-23" barSize={15} fill="#5E5ADB" />
          <Bar dataKey="Q2-23" barSize={15} fill="#3AC8DA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarWidget;
