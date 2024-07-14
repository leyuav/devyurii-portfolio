import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full py-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center dark:bg-grid-white/[0.02] bg-grid-black/[0.2] py-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to enhance <span className="text-purple">your</span> digital presence?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect today to discuss how I can assist you in achieving your goals.
        </p>
        <a href="mailto:leyu.av@gmail.com" className="z-10">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Yu-Rii</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a key={profile.id} href={profile.link}>
              <div
                key={profile.id}
                className="w-10 h-10 lg:mt-0 mt-5 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image src={profile.img} alt={profile.img} width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
