
import React, { useEffect } from 'react';
import useStoreBizStore from "../../../../store/store";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { shippingInformationSchema } from '../../../../schema/schema';
import { ShippingFormInputs } from '../../../../types/types';

export default function Shipping({ triggerValidation }: { triggerValidation: React.MutableRefObject<() => Promise<boolean>> }) {
  const { shippingInformation, setShippingInformation } = useStoreBizStore();
  const { register,setValue, formState: { errors,  }, trigger } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingInformationSchema),
  });

  useEffect(() => {
    triggerValidation.current = trigger;
  }, [trigger, triggerValidation]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValue(id as keyof ShippingFormInputs, value);
    setShippingInformation({ ...shippingInformation, [id]: value });
  }

  return (
    <div className="w-[60%]">
      <small>* Indicates required information</small>
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 w-full">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            * Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            onChange={handleChange}
            onBlur={() => trigger('email')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
            * Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            onChange={handleChange}
            onBlur={() => trigger('fullName')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.fullName ? 'border-red-500' : ''}`}
          />
          {errors.fullName && <p className="text-red-500 text-xs italic">{errors.fullName.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            * Address
          </label>
          <input
            id="address"
            type="text"
            {...register('address')}
            onChange={handleChange}
            onBlur={() => trigger('address')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address ? 'border-red-500' : ''}`}
          />
          {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            * City
          </label>
          <input
            id="city"
            type="text"
            {...register('city')}
            onChange={handleChange}
            onBlur={() => trigger('city')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.city ? 'border-red-500' : ''}`}
          />
          {errors.city && <p className="text-red-500 text-xs italic">{errors.city.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="province">
            * Province
          </label>
          <input
            id="province"
            type="text"
            {...register('province')}
            onChange={handleChange}
            onBlur={() => trigger('province')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.province && <p className="text-red-500 text-xs italic">{errors.province.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
            * Zip Code
          </label>
          <input
            id="zipCode"
            type="text"
            {...register('zipCode')}
            onChange={handleChange}
            onBlur={() => trigger('zipCode')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.zipCode ? 'border-red-500' : ''}`}
          />
          {errors.zipCode && <p className="text-red-500 text-xs italic">{errors.zipCode.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            * Country
          </label>
          <input
            id="country"
            type="text"
            {...register('country')}
            onChange={handleChange}
            onBlur={() => trigger('country')}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.country ? 'border-red-500' : ''}`}
          />
          {errors.country && <p className="text-red-500 text-xs italic">{errors.country.message}</p>}
        </div>


      </form>
    </div>
  );
}