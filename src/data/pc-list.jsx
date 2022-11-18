import pc1 from '../assets/pc/pc-1.png'
import pc2 from '../assets/pc/pc-2.png'
import pc3 from '../assets/pc/pc-3.png'
import pc4 from '../assets/pc/pc-4.png'
import pc5 from '../assets/pc/pc-5.png'
import pc6 from '../assets/pc/pc-6.png'
import pc7 from '../assets/pc/pc-7.png'
import pc8 from '../assets/pc/pc-8.png'

import { MdLocalMovies } from 'react-icons/md'
import { GiComputerFan } from 'react-icons/gi'

const fps = {
  icon: <MdLocalMovies />,
  name: '60+ FPS',
}

const gaming = {
  icon: <GiComputerFan />,
  name: 'GAMING',
}

export const pcList = [
  {
    id: 1,
    img: pc1,
    name: 'ASTRO',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit earum tempora corporis eligendi, cumque, eveniet eum voluptatum quaerat obcaecati molestiae, numquam amet architecto ducimus! Dolor porro necessitatibus totam quos.',
    use: [gaming, fps],
    price: 799.99,
  },

  {
    id: 2,
    img: pc2,
    name: 'CAIN',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit earum tempora corporis eligendi, cumque, eveniet eum voluptatum quaerat obcaecati molestiae, numquam amet architecto ducimus! Dolor porro necessitatibus totam quos. SOme more words dada',
    use: [gaming, fps],
    price: 899.99,
  },

  {
    id: 3,
    img: pc3,
    name: 'PLUTO',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odit earum tempora corporis eligendi, cumque, eveniet eum voluptatum quaerat obcaecati molestiae, numquam amet architecto ducimus! Dolor porro necessitatibus totam quos. SOme more words dada',
    use: [gaming, fps],
    price: 999.99,
  },

  {
    id: 4,
    img: pc4,
    name: 'SUN',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi quae reprehenderit nulla alias excepturi nisi illum hic culpa dignissimos nobis fugit, aliquid accusantium molestiae?',
    use: [gaming, fps],
    price: 699.99,
  },

  {
    id: 5,
    img: pc5,
    name: 'APRIL',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi quae reprehenderit nulla alias excepturi nisi illum hic culpa dignissimos nobis fugit, aliquid accusantium molestiae?',
    use: [gaming, fps],
    price: 999.99,
  },

  {
    id: 6,
    img: pc6,
    name: 'ROMANIA',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi quae reprehenderit nulla alias excepturi nisi illum hic culpa dignissimos nobis fugit, aliquid accusantium molestiae?',
    use: [gaming, fps],
    price: 1599.99,
  },

  {
    id: 7,
    img: pc7,
    name: 'AMSTERDAM',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi quae reprehenderit nulla alias excepturi nisi illum hic culpa dignissimos nobis fugit, aliquid accusantium molestiae?',
    use: [gaming, fps],
    price: 1699.99,
  },

  {
    id: 8,
    img: pc8,
    name: 'ZEUS',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi quae reprehenderit nulla alias excepturi nisi illum hic culpa dignissimos nobis fugit, aliquid accusantium molestiae?',
    use: [gaming, fps],
    price: 1199.99,
  },
]
