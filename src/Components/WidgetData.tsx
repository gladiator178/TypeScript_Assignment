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
}

const DataDisplay: React.FC<DataDisplayProps> = ({ jsonData }) => {
  const [activeTab, setActiveTab] = useState<string>('7d');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='Widget'>
      <div className="tabs">
        <button className={activeTab === '7d' ? 'active' : 'unset'} onClick={() => handleTabChange('7d')}>7d</button>
        <button className={activeTab === '14d' ? 'active' : 'unset'} onClick={() => handleTabChange('14d')}>14d</button>
        <button className={activeTab === '30d' ? 'active' : 'unset'} onClick={() => handleTabChange('30d')}>30d</button>
      </div>
      <hr/>
      <table>
        <thead>
          <tr>
            <th className='th1'>Product</th>
            <th>Q1-23</th>
            <th>Q2-23</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(jsonData[activeTab]).map(([product, values]) => (
            <tr key={product}>
              <td>{product}</td>
              <td>{(values as unknown as Data)['Q1-23']}</td>
              <td>{(values as unknown as Data)['Q2-23']}</td> {/* Corrected to 'Q2-23' */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplay;
