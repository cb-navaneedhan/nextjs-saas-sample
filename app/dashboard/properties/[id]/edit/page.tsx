import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers, fetchPropertyById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import PropertyForm from '@/app/ui/properties/create-property';


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [property] = await Promise.all([
        fetchPropertyById(id),
    ]);
    if (!property) {
        notFound();
    }
    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Properties', href: '/dashboard/properties' },
          {
            label: 'Edit Property',
            href: `/dashboard/properties/${id}/edit`,
            active: true,
          },
        ]}
      />
      <PropertyForm property={property} />
    </main>
  );
}