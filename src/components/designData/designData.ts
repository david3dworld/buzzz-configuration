import {
  business,
  charity,
  college,
  Event,
  fun,
  religious,
  school,
  sports,
} from '../../svg/designSvg';

import {
  hoodie,
  sportWear,
  shirt,
  sleeve,
  sweatShirt,
  longSleeve,
  tankTops,
  organic,
  men,
  baby,
  women,
} from '../../svg/designPageSvg';

interface IDesignData {
  id: number;
  svg?: any;
  alt?: string;
  link?: string;
  img?: any;
  title?: string;
}
const designData: IDesignData[] = [
  {
    id: 1,
    alt: 'business_img',
    link: '',
    svg: business,
  },
  {
    id: 2,
    alt: 'college_img',
    link: '',
    svg: college,
  },
  {
    id: 3,
    alt: 'school_img',
    link: '',
    svg: school,
  },
  {
    id: 4,
    alt: 'sports_img',
    link: '',
    svg: sports,
  },
  {
    id: 5,
    alt: 'party_img',
    link: '',
    svg: Event,
  },
  {
    id: 6,
    alt: 'religious_img',
    link: '',
    svg: religious,
  },
  {
    id: 7,
    alt: 'charity_img',
    link: '',
    svg: charity,
  },
  {
    id: 8,
    alt: 'for_fun_img',
    link: '',
    svg: fun,
  },
];

const designPageData: IDesignData[] = [
  {
    id: 1,
    title: 'T-Shirts',
    img: shirt,
  },
  {
    id: 2,
    title: '3/4 Sleeve Shirts',
    img: sleeve,
  },
  {
    id: 3,
    title: 'Long Sleeve Shirts',
    img: longSleeve,
  },
  {
    id: 4,
    title: 'Tank Tops',
    img: tankTops,
  },
  {
    id: 5,
    title: 'Sports wear ',
    img: sportWear,
  },
  {
    id: 6,
    title: 'Organic',
    img: organic,
  },
  {
    id: 7,
    title: 'Sweathshirts',
    img: sweatShirt,
  },
  {
    id: 8,
    title: 'Hoodies',
    img: hoodie,
  },
];

const onDemanData: IDesignData[] = [
  {
    id: 1,
    title: "Men's clothing",
    img: men,
  },
  {
    id: 2,
    title: "Women's clothing",
    img: women,
  },
  {
    id: 3,
    title: 'Kids and Baby Clothing',
    img: baby,
  },
];

export { designData, designPageData, onDemanData };
