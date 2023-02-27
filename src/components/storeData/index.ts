import {
  reddit,
  facebook,
  instagram,
  twitter,
  cloth1,
  cloth2,
  cloth3,
} from '../../svg/storeSvg/index';

interface IStoreData {
  id: number;
  img: any;
  title?: string;
  price?: string;
}

export const storeIcons: IStoreData[] = [
  { id: 1, img: facebook },
  { id: 2, img: twitter },
  { id: 3, img: instagram },
  { id: 4, img: reddit },
];

export const storeData: IStoreData[] = [
  { id: 1, img: cloth1, title: 'Davido T-Shirts', price: '$340.02' },
  { id: 2, img: cloth2, title: 'Lorgnur Over', price: '$40.45' },
  { id: 3, img: cloth3, title: 'Checkered Shirt', price: '$130.00' },
];
