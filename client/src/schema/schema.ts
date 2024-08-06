
import { z, ZodType } from 'zod';
import { ShippingFormInputs } from '../types/types';

export const shippingInformationSchema: ZodType<ShippingFormInputs> = z.object({
  fullName: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email address."),
  address: z.string().min(1, "Address is required."),
  city: z.string().min(1, "City is required."),
  province: z.string().min(1, "Province is required."),
  zipCode: z.string().min(1, "Zip Code is required."),
  country: z.string().min(1, "Country is required."),
});
