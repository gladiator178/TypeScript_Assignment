import React from 'react';
import './Bars.css';
import img1 from './Images/homeimg.png';
import img2 from './Images/Cross.png';
import img3 from './Images/plus.png';
import img4 from './Images/settings.png';

interface NavbarProps {
  handleAddWidget: () => void;
}



const Navbar: React.FC<NavbarProps> = ({ handleAddWidget }) => {
  return (
    <nav id="nav-head">
      <ul id="nav-list">
        <li className='nav-li1'>
          <img src={img1} alt="img" />
        </li>
        <li className='nav-li'>
          Overview
        </li>
        <li className='nav-li'>
          <div className="nav-li-active">Customers <img className='cross' src={img2} /></div>
        </li>
        <li className='nav-li'>
          Product
        </li>
        <li className='nav-li'>
          Settings
        </li>
      </ul>
      <div className='nav-right'>
        <ul>
          <li className='nav-li'>
            <button className='nav-btn'><img src={img3} id="img3" alt="link" /></button>
          </li>
          <li className='nav-li'>
            <button className='nav-btn' onClick={handleAddWidget}>
              <img src={img3} className='plus' />
              <span className='nav-addw'>Add widget</span>
            </button>
          </li>
          <li className='nav-li'>
            <img src={img4} alt="settings" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
