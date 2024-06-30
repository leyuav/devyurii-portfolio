import { link } from 'fs';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration and open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[45vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.jpg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Following buddhist values in life.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently learning everything at once',
    description: 'The Inside Gossip',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-center lg:justify-end',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'leyu – mending',
    des: 'Sit back, relax, and enjoy the soothing sounds of "mending" a chill lofi type beat, perfect for unwinding or studying or just cozying up with a cup of favorite beverage.',
    img: '/p1.png',
    iconLists: ['/bi.svg', '/ni.svg'],
    link: 'https://youtu.be/rDMUP8kWM_k?si=SRzSS8ykOa-_vfbT',
  },
  {
    id: 2,
    title: 'AI Future Is Here',
    des: 'Modern minimalistic website for showcasing the latest AI advancements and their impact across industries.',
    img: '/p2.png',
    iconLists: ['/re.svg'],
    link: 'https://ai-future-is-here.vercel.app/',
  },
  {
    id: 3,
    title: 'Apple-GSAP',
    des: 'Modern minimalistic apple-like website with GSAP animations.',
    img: '/p3.png',
    iconLists: ['/re.svg', '/tail.svg'],
    link: 'https://apple-gsap.vercel.app/',
  },
  {
    id: 4,
    title: 'NoPay',
    des: 'Modern minimalistic website for payment and banking, based on Figma design.',
    img: '/p4.png',
    iconLists: ['/re.svg', '/tail.svg', '/vi.svg'],
    link: 'https://bank-app-rho-eight.vercel.app/',
  },
  {
    id: 5,
    title: 'Eat Sushi Now',
    des: 'HTML/CSS minimalistic website for food place and/or food delivery app, with animations.',
    img: '/p5.png',
    iconLists: ['/html_css.svg'],
    link: 'https://eat-sushi-now.vercel.app/',
  },
  {
    id: 6,
    title: 'Richtig Restaurant',
    des: 'Modern minimalistic website for a restaurant, based on figma design.',
    img: '/p6.png',
    iconLists: ['/re.svg'],
    link: 'https://richtig-restaurant.vercel.app/',
  },
];

export const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt elit at dolor tincidunt, id egestas quam auctor. In ut venenatis velit, a congue lacus. Aliquam interdum placerat urna malesuada viverra. Maecenas at porta diam, ut gravida enim. Proin bibendum neque fermentum tortor sagittis finibus. Integer interdum lacus id elit ornare, eu sagittis enim tincidunt. Etiam ornare feugiat quam, eu.',
    name: 'Name',
    title: 'Title',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt elit at dolor tincidunt, id egestas quam auctor. In ut venenatis velit, a congue lacus. Aliquam interdum placerat urna malesuada viverra. Maecenas at porta diam, ut gravida enim. Proin bibendum neque fermentum tortor sagittis finibus. Integer interdum lacus id elit ornare, eu sagittis enim tincidunt. Etiam ornare feugiat quam, eu.',
    name: 'Name',
    title: 'Title',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt elit at dolor tincidunt, id egestas quam auctor. In ut venenatis velit, a congue lacus. Aliquam interdum placerat urna malesuada viverra. Maecenas at porta diam, ut gravida enim. Proin bibendum neque fermentum tortor sagittis finibus. Integer interdum lacus id elit ornare, eu sagittis enim tincidunt. Etiam ornare feugiat quam, eu.',
    name: 'Name',
    title: 'Title',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt elit at dolor tincidunt, id egestas quam auctor. In ut venenatis velit, a congue lacus. Aliquam interdum placerat urna malesuada viverra. Maecenas at porta diam, ut gravida enim. Proin bibendum neque fermentum tortor sagittis finibus. Integer interdum lacus id elit ornare, eu sagittis enim tincidunt. Etiam ornare feugiat quam, eu.',
    name: 'Name',
    title: 'Title',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt elit at dolor tincidunt, id egestas quam auctor. In ut venenatis velit, a congue lacus. Aliquam interdum placerat urna malesuada viverra. Maecenas at porta diam, ut gravida enim. Proin bibendum neque fermentum tortor sagittis finibus. Integer interdum lacus id elit ornare, eu sagittis enim tincidunt. Etiam ornare feugiat quam, eu.',
    name: 'Name',
    title: 'Title',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'E-learning Content Editor',
    desc: 'Prepared e-learning content using mAuthor software and ensured content met WCAG accessibility standards',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'HVAC assistant',
    desc: 'Prepared Revit drawings of HVAC systems for single-family houses and conducted data entry.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'HVAC Design Assistant',
    desc: 'Prepared Revit drawings of HVAC systems for hospitals and collaborated with architects/electrical engineers.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Amateur Music Producer',
    desc: 'Worked with music production software such as Ableton Live, Logic Pro, Bitwig. Worked with mixing & mastering projects.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/leyuav',
  },
  {
    id: 2,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/leyuav/',
  },
];
