'use client';

import { PropertyForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateProperty } from '@/app/lib/actions';


export default function EditPropertyForm({
  property,
  }: {
    property: PropertyForm;
    }) {

  const updatePropertyWithId = updateProperty.bind(null, property.id);

  return (
    <form action={updatePropertyWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Property title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Property Title
          </label>
          <div className="relative">
            <input
              type="text"
              name="title"
              id="title"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Property Title"
              defaultValue={property.title}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="mb-2 block text-sm font-medium">
            Address
          </label>
          <div className="relative">
            <input
              type="text"
              name="address"
              id="address"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Address"
              defaultValue={property.address}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium">
            Image URL
          </label>
          <div className="relative">
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Image URL"
              defaultValue={property.imageUrl}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Monthly Rent */}
        <div className="mb-4">
          <label htmlFor="monthlyRent" className="mb-2 block text-sm font-medium">
            Monthly Rent
          </label>
          <div className="relative">
            <input
              type="text"
              name="monthlyRent"
              id="monthlyRent"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Monthly Rent"
              defaultValue={property.monthlyRent}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Tenants */}
        <div className="mb-4">
          <label htmlFor="tenants" className="mb-2 block text-sm font-medium">
            Tenants
          </label>
          <div className="relative">
            <input
              type="text"
              name="tenants"
              id="tenants"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Tenants"
              defaultValue={property.tenants}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Letting Status */}
        <div className="mb-4">
          <label htmlFor="lettingStatus" className="mb-2 block text-sm font-medium">
            Letting Status
          </label>
          <div className="relative">
            <input
              type="text"
              name="lettingStatus"
              id="lettingStatus"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Letting Status"
              defaultValue={property.letting_status}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Compliance Status */}
        <div className="mb-4">
          <label htmlFor="complianceStatus" className="mb-2 block text-sm font-medium">
            Compliance Status
          </label>
          <div className="relative">
            <input
              type="text"
              name="complianceStatus"
              id="complianceStatus"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              placeholder="Compliance Status"
              defaultValue={property.compliance_status}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/invoices"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <Button type="submit">Edit Invoice</Button>
          </div>
        </div>
    </form>
  );
}