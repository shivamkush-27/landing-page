import React from 'react';
import './layout.css';
import 'boxicons';
import logo from './assets/logo.png';
import trophy from './assets/1.png';
import prize from './assets/2.png';
import item from './assets/3.png';

const Landing = () => {
  return (
    <section className="layout">
      <div className="header">
      <img className="logo" src={logo} alt="Logo" height="120"  />
      </div>
      <div className="main">
        <section className="layout">
          <div>
            <img src={trophy} alt="Trophy" className="trophy"/>
          </div>
          <div className="grow1">
            <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
            <ul>
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img src={prize} alt="Award" height="500" />
            <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </section>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <div className='center'>
            <img src={item} alt="Items" className='itemImg' />
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        </div>
        <hr />
        <div className="ab-ft">
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <ul class="pipe-list">
        <li>CHEMICALS & PROCESS</li>
        <li>POWER</li>
        <li>WATER & WASTE WATER</li>
        <li>OILS & GAS</li>
        <li>PHARMA SUGARS & DISTILLERIES</li>
        <li>PAPER & PULP</li>
        <li>MARINE & DEFENCE</li>
        <li>METAL & MINING</li>
        <li>FOOD & BEVERAGE</li>
        <li>PETROCHEMICAL & REFINERIES</li>
        <li>SOLAR</li>
        <li>BUILDING</li>
        <li>HVAC</li>
        <li>FIRE FIGHTING</li>
        <li>AGRICULTURE & RESIDENTIAL</li>
        </ul>
      </div>
      </div>
      <div className="footer">
        <section class="layout2">
            <div class="grow2">
            <box-icon type='solid' name='phone' color='#ffffff'></box-icon> Toll-free <strong>1800 200 1234</strong>
            </div>
            <div class="grow2">
            <box-icon type='logo' name='facebook-circle' color='#ffffff'></box-icon> www.facebook.com/cripumps
            </div>
            <div class="grow2">
            <box-icon name='globe' color='#ffffff' ></box-icon> www.crigroups.com
            </div>
            </section>
      </div>
    </section>
  )
}

export default Landing