import React from 'react'
import { Button } from './Button';

interface Props {
    title: string;
    oldPrice?: number;
    newPrice: number;
    perDay: string;
    billingCycle: string;
}

const PackageCard = ({ title, oldPrice, newPrice, perDay, billingCycle }: Props) => {
    const percentageOff = (oldPrice && ((oldPrice - newPrice) / oldPrice) * 100) ?? 0;

    return (
      <div className="lg:w-1/3 px-4">
        <div className="bg-white rounded-lg p-10 text-center h-full">
          <h2 className="text-xl font-bold mb-3 uppercase text-primary">{title}</h2>
          <p className='text-7xl text-primary'>{oldPrice && <s className='text-2xl text-black'>£{oldPrice}</s>}£{newPrice}</p>
          <p><strong>Just {perDay} per day </strong></p>
          <div className='my-6'>
            <p className='text-sm text-black/70'>Subscription billed {billingCycle}</p>
            <p className='text-sm text-black/70'>Cancel anytime</p>
          </div>
          <Button className='mt-6'>Purchase Now</Button>
        </div>
      </div>
    );
  };
  
  export default PackageCard;
  