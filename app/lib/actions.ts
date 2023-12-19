'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
    });
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');

}

const ProperyFormSchema = z.object({
    id: z.string(),
    title: z.string(),
    address: z.string(),
    imageUrl: z.string(),
    monthlyRent: z.coerce.number(),
    tenants: z.coerce.number(),
    lettingStatus: z.string(),
    complianceStatus: z.enum(['pending', 'complete']),
    });

const CreateProperty = ProperyFormSchema.omit({ id: true });

export async function createProperty(formData: FormData) {
    const { title, address, imageUrl, monthlyRent, tenants, lettingStatus, complianceStatus } = CreateProperty.parse({
    title: formData.get('title'),
    address: formData.get('address'),
    imageUrl: formData.get('imageUrl'),
    monthlyRent: formData.get('monthlyRent'),
    tenants: formData.get('tenants'),
    lettingStatus: formData.get('lettingStatus'),
    complianceStatus: formData.get('complianceStatus'),
    });
    await sql`
    INSERT INTO properties (title, address, image_url, monthly_rent, tenants, letting_status, compliance_status)
    VALUES (${title}, ${address}, ${imageUrl}, ${monthlyRent}, ${tenants}, ${lettingStatus}, ${complianceStatus})
    `;
    revalidatePath('/dashboard/properties');
    redirect('/dashboard/properties');

}