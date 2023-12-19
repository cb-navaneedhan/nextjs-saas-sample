// pages/properties.js
import React from 'react';
import PropertyCard from '@/app/ui/properties/property-card';
import { Property } from '../../lib/definitions'; // Assuming you have a properties array in your index page
import { fetchProperties } from '@/app/lib/data';
import { CreateProperty } from '@/app/ui/properties/buttons';
import Search from '@/app/ui/search';

export default async function Properties() {
  const properties = await fetchProperties();
  return (
    <div className="w-full">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search properties..." />
                <CreateProperty />
            </div>
        {properties.map((property) => (
            <div key={property.id} className="m-4">
            <PropertyCard property={property} />
            </div>
        ))}
        </div>
    </div>
  );
}