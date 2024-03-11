import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

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

const PieWidget: React.FC<DataDisplayProps> = ({ jsonData,backgroundColor }) => {
  const [activeTab, setActiveTab] = useState<string>('7d');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const data = Object.entries(jsonData[activeTab]).map(([product, values]) => ({
    name: product,
    value: parseInt((values as Data)['Q1-23']) + parseInt((values as Data)['Q2-23']),
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Define colors for pie chart slices

  return (
    <div className='Widget-Pro' style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}>
      <div className="tabs">
        <button style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}} className={activeTab === '7d' ? 'active' : 'unset'} onClick={() => handleTabChange('7d')}>7d</button>
        <button style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}className={activeTab === '14d' ? 'active' : 'unset'} onClick={() => handleTabChange('14d')}>14d</button>
        <button style={{ backgroundColor: backgroundColor, color: (backgroundColor === "#5E5ADB"||backgroundColor=== 
    "#282828") ? '#cfcfcf' : 'inherit'}}className={activeTab === '30d' ? 'active' : 'unset'} onClick={() => handleTabChange('30d')}>30d</button>
      </div>
      <hr/>
      <ResponsiveContainer width="90%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="55%"
            cy="25%"
            labelLine={false}
            label={(entry) => entry.name}
            outerRadius={40}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieWidget;
