// pages/index.js
import React from 'react';
import PropertyCard from '../../ui/properties/property-card';
import { Property } from '../../lib/definitions';

const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in the City Center',
    address: '123 Main St, Cityville',
    image_url: 'https://placekitten.com/800/600', // Replace with your actual image URL
    monthly_rent: 1500,
    tenants: 2,
    isLet: false,
    compliance_status: 'complete',
  },
  // Add more properties as needed
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-left">
      {properties.map((property) => (
        <div key={property.id} className="m-4">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default Home;
