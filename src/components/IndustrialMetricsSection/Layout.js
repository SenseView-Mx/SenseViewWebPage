import React from 'react';
import NavbarLayout from './NavbarLayout';
import CaracteristicsSections from './CaracteristicsSections';
import SoftwareSection from './SoftwareSection';
import BenefitsSections from './BenefitsSections';
import './Layout.css';

const Layout = ({ variantB = "default", title }) => {
  return (
    <div className="layout-container">
      <NavbarLayout title={title} toLink={"/contact"} />
      <CaracteristicsSections variant={variantB} /> {/* Se pasa la variante */}
      <SoftwareSection variant={variantB} />
      <BenefitsSections variant={variantB} />
    </div>
  );
};

export default Layout;
