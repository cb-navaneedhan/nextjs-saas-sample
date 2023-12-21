// pages/properties.js
import React from 'react';
import PropertyCard from '@/app/ui/properties/property-card';
import { Property } from '../../lib/definitions'; // Assuming you have a properties array in your index page
import { fetchProperties } from '@/app/lib/data';
import { CreateProperty } from '@/app/ui/properties/buttons';
import Search from '@/app/ui/search';
import PropertyCardGrid from '@/app/ui/properties/property-grid';

export default async function Properties() {
  const properties = await fetchProperties();
  return (
    <div className="w-full">
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search properties..." />
          <CreateProperty />
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <PropertyCardGrid />
      </div>
    </div>
  );
}