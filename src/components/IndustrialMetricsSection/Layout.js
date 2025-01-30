import React from 'react';
import Navbar from './Navbar';
import CaracteristicsSections from './CaracteristicsSections';
import SoftwareSection from './SoftwareSection';
import BenefitsSections from './BenefitsSections';
import './Layout.css';

const Layout = ({variantB = "default", title}) => {
  return (
    <div className="layout-container">
      <Navbar title={title} toLink={"/contact"}/>
      <CaracteristicsSections />
      <SoftwareSection />
      <BenefitsSections variant={variantB}/>
    </div>
  );
};

export default Layout;
