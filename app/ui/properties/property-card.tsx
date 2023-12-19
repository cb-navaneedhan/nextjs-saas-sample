// components/PropertyCard.js
import React from 'react';
import { Property } from '../../lib/definitions'; // Assuming your types are stored in a 'types.js' file

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    title,
    address,
    image_url,
    monthly_rent,
    tenants,
    isLet,
    compliance_status,
  } = property;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
      <img className="w-full h-48 object-cover" src={image_url} alt={title} />

      <div className="p-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{address}</p>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-base">Monthly Rent: ${monthly_rent}</p>
        <p className="text-gray-700 text-base">Number of Tenants: {tenants}</p>
        <p className={`text-${isLet ? 'green' : 'red'}-500 text-base`}>
          Status: {isLet ? 'Available' : 'Not Available'}
        </p>
        <p className={`text-${compliance_status === 'complete' ? 'green' : 'orange'}-500 text-base`}>
          Compliance Status: {compliance_status}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
