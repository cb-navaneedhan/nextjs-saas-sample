import Form from '@/app/ui/properties/create-property';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import PropertyForm from '@/app/ui/properties/create-property';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'properties', href: '/dashboard/properties' },
          {
            label: 'Create Property',
            href: '/dashboard/properties/create',
            active: true,
          },
        ]}
      />
      <PropertyForm />
    </main>
  );
}