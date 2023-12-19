// pages/properties.js
import React from 'react';
import PropertyCard from '@/app/ui/properties/property-card';
import { Property } from '../../lib/definitions'; // Assuming you have a properties array in your index page
import { fetchProperties } from '@/app/lib/data';

export default async function Properties() {
  const properties = await fetchProperties();
  return (
    <div className="flex flex-wrap justify-center">
      {properties.map((property) => (
        <div key={property.id} className="m-4">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
}