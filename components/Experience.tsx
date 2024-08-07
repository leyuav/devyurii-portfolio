import React from 'react';
import Link from 'next/link';
import { workExperience } from '@/data';
import { Button } from './ui/MovingBorders';
import Image from 'next/image';

const Experience = () => {
  return (
    <div id="testimonials" className="py-10">
      <h1 className="heading">
        My versatile <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid md:grid-cols-2 items-center justify-center grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Link key={card.id} href={card.link} passHref target="_blank" rel="noopener noreferrer">
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="2rem"
              className="min-h-[200px] flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex flex-1 lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p10 gap-2">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  width={200}
                  height={200}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5 p-2">
                  <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                  <p className="text-start lg:text-lg text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Experience;
