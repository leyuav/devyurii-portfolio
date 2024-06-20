import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { testimonials, companies } from '@/data';

const Clients = () => {
  return (
    <div id="testimonials" className="py-10">
      <h1 className="heading">
        Kind words from <span className="text-purple"> awesome clients</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default Clients;
