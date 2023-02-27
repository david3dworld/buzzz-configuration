import routes from '../routes';
import {
  CustomersIcon,
  DashboardIcon,
  DesignIcon,
  ListingsIcon,
  OrdersIcon,
  ReportsIcon,
} from '../svg';

export const middleLinksArray = [
  { id: 1, link: 'About us', route: routes.about.path },
  { id: 2, link: 'How it works', route: routes.design.path },
  { id: 3, link: 'Marketplace', route: routes.marketplace.path },
  { id: 4, link: 'Resources', route: routes.resources.path },
];

export const mobileMiddleLinksArray = [
  { id: 1, link: 'About us', route: routes.about.path },
  { id: 2, link: 'How it works', route: routes.design.path },
  { id: 3, link: 'Marketplace', route: routes.marketplace.path },
  { id: 4, link: 'Resources', route: routes.resources.path },
  { id: 5, link: 'Cart', route: routes.cart.path },
];

export const productCardArray = [
  {
    id: 1,
    img: './images/product.png',
    content: 'Its good to have a good day',
    name: 'Yujhyena',
    price: '345.60',
  },
  {
    id: 2,
    img: './images/product.png',
    content: 'Its good to have a good day',
    name: 'Yujhyena',
    price: '345.60',
  },
  {
    id: 3,
    img: './images/product.png',
    content: 'Its good to have a good day',
    name: 'Yujhyena',
    price: '345.60',
  },
  {
    id: 4,
    img: './images/product.png',
    content: 'Its good to have a good day',
    name: 'Yujhyena',
    price: '345.60',
  },
];

export const carouselCardArray = [
  {
    id: 1,
    content: 'Express Yourself with Buzz',
    // img: './images/section4.png',
    // name: 'Hakeem Olapujo',
    // web: 'digitalforus.com',
  },
  {
    id: 2,
    content:
      'I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.',
    img: './images/section4.png',
    name: 'Hakeem Olapujo',
    web: 'digitalforus.com',
  },
  {
    id: 3,
    content:
      'I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.',
    img: './images/section4.png',
    name: 'Hakeem Olapujo',
    web: 'digitalforus.com',
  },
  {
    id: 4,
    content:
      'I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.',
    img: './images/section4.png',
    name: 'Hakeem Olapujo',
    web: 'digitalforus.com',
  },
  {
    id: 5,
    content:
      'I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.',
    img: './images/section4.png',
    name: 'Hakeem Olapujo',
    web: 'digitalforus.com',
  },
  {
    id: 6,
    content:
      'I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.',
    img: './images/section4.png',
    name: 'Hakeem Olapujo',
    web: 'digitalforus.com',
  },
  {
    id: 7,
    content:
      'I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.',
    img: './images/section4.png',
    name: 'Hakeem Olapujo',
    web: 'digitalforus.com',
  },
  {
    id: 8,
    content:
      'I made my first $99/yr sale within the first hour of setup! Finally, an all-in-one solution for makers with multiple products, with the ability to sell with both subscription and one-off pricing. Incredible.',
    img: './images/section4.png',
    name: 'Hakeem Olapujo',
    web: 'digitalforus.com',
  },
];

export const footerLinksArray = [
  {
    id: 2,
    header: 'Company',
    links: [
      { key: 1, title: 'About Us', a: routes.about.path },
      { key: 2, title: 'Careers', a: '/' },
      { key: 3, title: 'Blog', a: routes.resources.path },
      { key: 4, title: 'Print Providers', a: '/' },
    ],
  },
  {
    id: 4,
    header: 'Help',
    links: [
      { key: 3, title: 'Help Center', a: routes.contact.path },
      { key: 4, title: 'Guidelines', a: routes.design.path },
      { key: 5, title: 'Track order', a: '/' },
      { key: 6, title: 'Terms and Conditions', a: '/' },
    ],
  },
  {
    id: 5,
    header: 'Resources',
    links: [
      { key: 1, title: 'Presskit', a: '/' },
      { key: 2, title: 'Brand Guidelines', a: '/' },
    ],
  },
];

export type ProductsCardDataType = ReturnType<() => typeof productCardArray>;

export type CarouselCardDataType = ReturnType<() => typeof carouselCardArray>;

export const contactUsArray = [
  {
    id: 1,
    title: 'Contact Support',
    details: 'Do you have a question about using Buzzz or a problem with your account?',
    link: '#',
    bg: 'rgba(255, 95, 160, 0.1)',
    bgUrl: '/images/contact_bg.png',
    button: 'Contact us',
  },
  {
    id: 2,
    title: 'Media Relations',
    details: 'Are you press and looking to do a story about Buzzz?',
    link: '#',
    bg: 'rgba(0, 140, 255, 0.1)',
    bgUrl: '/images/contact_bg2.png',
    button: 'Contact us',
  },
  {
    id: 3,
    title: 'Business & Partnerships',
    details: 'Are you interested in partnering with Buzzz?',
    link: '#',
    bg: 'rgba(0, 215, 145, 0.1)',
    bgUrl: '/images/contact_bg3.png',
    button: 'Contact us',
  },
];

export const resourcesArray = [
  {
    id: 1,
    title: '3 Easy Steps to Come Up With Custom T-Shirt Design Ideas',
    image: '/images/resources_card1.png',
    details:
      'Disclosure: some of the links to products or services in this article are affiliate links, meaning that Printful might earn a commission if you sign up or make a purchase...',
    link: '',
    author: 'James David',
    authorLink: '',
  },

  {
    id: 2,
    title: 'How We Can Reduce Textile Waste and Contribute to a More Sustainable Future',
    image: '/images/resources_card2.png',
    details:
      'Back when I was a student, I was an avid fast fashion consumer. I’d drop in the popular stores just to see the newest trends. The pressure to keep up',
    link: '',
    author: 'Hakeem Olasupo',
    authorLink: '',
  },

  {
    id: 3,
    title: 'How to Create Passive Income with Affiliate Marketing',
    image: '/images/resources_card3.png',
    details:
      'Affiliate marketing is one of the most accessible and flexible ways to generate passive income in 2022. As a business owner, I’ve experimented with many different ways to make money...',
    link: '',
    author: 'James David',
    authorLink: '',
  },

  {
    id: 4,
    title: '3 Easy Steps to Come Up With Custom T-Shirt Design Ideas',
    image: '/images/resources_card4.png',
    details:
      'Disclosure: some of the links to products or services in this article are affiliate links, meaning that Printful might earn a commission if you sign up or make a purchase...',
    link: '',
    author: 'James David',
    authorLink: '',
  },

  {
    id: 5,
    title: 'How We Can Reduce Textile Waste and Contribute to a More Sustainable Future',
    image: '/images/resources_card5.png',
    details:
      'Back when I was a student, I was an avid fast fashion consumer. I’d drop in the popular stores just to see the newest trends. The pressure to keep up',
    link: '',
    author: 'Hakeem Olasupo',
    authorLink: '',
  },

  {
    id: 6,
    title: 'How to Create Passive Income with Affiliate Marketing',
    image: '/images/resources_card1.png',
    details:
      'Affiliate marketing is one of the most accessible and flexible ways to generate passive income in 2022. As a business owner, I’ve experimented with many different ways to make money...',
    link: '',
    author: 'James David',
    authorLink: '',
  },

  {
    id: 7,
    title: '3 Easy Steps to Come Up With Custom T-Shirt Design Ideas',
    image: '/images/resources_card2.png',
    details:
      'Disclosure: some of the links to products or services in this article are affiliate links, meaning that Printful might earn a commission if you sign up or make a purchase...',
    link: '',
    author: 'James David',
    authorLink: '',
  },

  {
    id: 8,
    title: 'How We Can Reduce Textile Waste and Contribute to a More Sustainable Future',
    image: '/images/resources_card3.png',
    details:
      'Back when I was a student, I was an avid fast fashion consumer. I’d drop in the popular stores just to see the newest trends. The pressure to keep up',
    link: '',
    author: 'Hakeem Olasupo',
    authorLink: '',
  },

  {
    id: 9,
    title: 'How to Create Passive Income with Affiliate Marketing',
    image: '/images/resources_card4.png',
    details:
      'Affiliate marketing is one of the most accessible and flexible ways to generate passive income in 2022. As a business owner, I’ve experimented with many different ways to make money...',
    link: '',
    author: 'James David',
    authorLink: '',
  },

  {
    id: 10,
    title: '3 Easy Steps to Come Up With Custom T-Shirt Design Ideas',
    image: '/images/resources_card5.png',
    details:
      'Disclosure: some of the links to products or services in this article are affiliate links, meaning that Printful might earn a commission if you sign up or make a purchase...',
    link: '',
    author: 'James David',
    authorLink: '',
  },

  {
    id: 11,
    title: 'How We Can Reduce Textile Waste and Contribute to a More Sustainable Future',
    image: '/images/resources_card1.png',
    details:
      'Back when I was a student, I was an avid fast fashion consumer. I’d drop in the popular stores just to see the newest trends. The pressure to keep up',
    link: '',
    author: 'Hakeem Olasupo',
    authorLink: '',
  },

  {
    id: 12,
    title: 'How to Create Passive Income with Affiliate Marketing',
    image: '/images/resources_card2.png',
    details:
      'Affiliate marketing is one of the most accessible and flexible ways to generate passive income in 2022. As a business owner, I’ve experimented with many different ways to make money...',
    link: '',
    author: 'James David',
    authorLink: '',
  },
];

export const productNavigationOptionsArray = [
  { id: 1, label: 'Men’s Clothing', value: 'men' },
  { id: 2, label: 'Women’s clothing', value: 'women' },
  { id: 3, label: 'Kids & youth clothing', value: 'kids' },
];

export const marketplaceNavigationOptionsArray = [
  { id: 1, label: "Men's Clothing", value: 'men' },
  { id: 2, label: "Sport's Merch", value: 'sport' },
  { id: 3, label: 'Kids & youth clothing', value: 'youth' },
];

export const countrySelectArray = [
  {
    id: 1,
    value: 'nigeria',
    label: 'Nigeria',
    icon: '/svg/nigeria_flag.svg',
  },
];

export const shippingSelectArray = [
  {
    id: 1,
    value: 'shirts',
    label: 'Shirts',
    icon: '/svg/shirt_icon.svg',
  },
];

export const designPageArray = [
  {
    id: 1,
    title: 'Pick a Product',
    details: 'Choose from 328 custom products in our catalog',
    link: '#',
    bg: 'rgba(255, 95, 160, 0.1)',
    bgUrl: '/images/contact_bg.png',
    button: '1',
  },
  {
    id: 2,
    title: 'Add your design',
    details: 'Upload your own design or pick something from our library of design assets',
    link: '#',
    bg: 'rgba(0, 140, 255, 0.1)',
    bgUrl: '/images/contact_bg2.png',
    button: '2',
  },
  {
    id: 3,
    title: 'Enjoy your product',
    details: 'Order it for yourself or start selling online',
    link: '#',
    bg: 'rgba(0, 215, 145, 0.1)',
    bgUrl: '/images/contact_bg3.png',
    button: '3',
  },
];

export const designAccordionArray = [
  {
    id: 1,
    header: 'How does product customization work?',
    body: 'It starts with you choosing a specific product. Then, you add your design—you can either upload your own or create a new one from scratch with our Design Maker. After that, you either order the product for yourself or add it to your store catalog. If you choose to sell your custom product online, we’ll make, pack, and ship the product to your customers every time you receive an order.',
  },
  {
    id: 2,
    header: 'How does product customization work?',
    body: 'It starts with you choosing a specific product. Then, you add your design—you can either upload your own or create a new one from scratch with our Design Maker. After that, you either order the product for yourself or add it to your store catalog. If you choose to sell your custom product online, we’ll make, pack, and ship the product to your customers every time you receive an order.',
  },
  {
    id: 3,
    header: 'What products can I customize?',
    body: 'It starts with you choosing a specific product. Then, you add your design—you can either upload your own or create a new one from scratch with our Design Maker. After that, you either order the product for yourself or add it to your store catalog. If you choose to sell your custom product online, we’ll make, pack, and ship the product to your customers every time you receive an order.',
  },
  {
    id: 4,
    header: 'How do I start my own product line?',
    body: 'It starts with you choosing a specific product. Then, you add your design—you can either upload your own or create a new one from scratch with our Design Maker. After that, you either order the product for yourself or add it to your store catalog. If you choose to sell your custom product online, we’ll make, pack, and ship the product to your customers every time you receive an order.',
  },
  {
    id: 5,
    header: 'Where do I sell custom products?',
    body: 'It starts with you choosing a specific product. Then, you add your design—you can either upload your own or create a new one from scratch with our Design Maker. After that, you either order the product for yourself or add it to your store catalog. If you choose to sell your custom product online, we’ll make, pack, and ship the product to your customers every time you receive an order.',
  },
];

export const businessArray = [
  {
    id: 1,
    title: 'Online Brands',
    desc: 'Warehouses full of unsold stock? Takes months to launch a new product? Go withon-demand manufacturing and grow your product collection fast and inventory-free.',
  },
  {
    id: 2,
    title: 'Fashion Retailers',
    desc: 'Returning customers are gold, but you won’t get them by selling shabby merch. Instead, go with quality products made on demand and don’t cap your growth.',
  },
  {
    id: 3,
    title: 'Entertainment and media companies',
    desc: 'Premium content calls for premium merchandise. Create as many brand products as you like, all items are made on demand so you don’t invest money in stock.',
  },
  {
    id: 4,
    title: 'Web3 Superstars ',
    desc: 'Let your fans customize your merchandise with their names and metaverse rankings! Social commerce is growing fast, and you need to get in on the ground floor.',
  },
  {
    id: 5,
    title: 'Full-service merchandice agencies ',
    desc: 'Limited edition collections don’t have to be limited supply. Uncover limitless design capabilities and massive catalog scaling with on-demand products, quick and free of inventory.',
  },
];

export const landingBrandCard = [
  {
    id: 1,
    icon: './svg/section1_svg1.svg',
    title: 'Connect to Buzz',
    body: 'Connect your store to Buzzz, add your products, and set your own retail prices',
  },
  {
    id: 2,
    icon: './svg/section1_svg2.svg',
    title: 'Customer places their order',
    body: ' A customer buys from your store, we charge for fulfillment, and you keep the profit',
  },
  {
    id: 3,
    icon: './svg/section1_svg3.svg',
    title: 'Buzzz fulfills the order',
    body: 'We take care of your order from A to Z, and control the whole fulfillment process',
  },
  {
    id: 4,
    icon: './svg/section1_svg4.svg',
    title: 'Order ships to your customer',
    body: 'Your customer receives their order with your brand attached to it',
  },
];

export const sellBrandCard = [
  {
    id: 1,
    icon: './svg/section1_svg1.svg',
    title: 'Open a FREE Buzz Store',
    body: 'Tell us about your brand, the email address you would like to use to access your account. Click on "Register" and we will send you an email once your store has been created',
  },
  {
    id: 2,
    icon: './svg/section1_svg2.svg',
    title: 'Create your designs',
    body: ' Choose a product that you want to add a design to. Next, upload your images or create text using the buzzz designer tool. Arrange and resize the different elements of your design as desired.',
  },
  {
    id: 3,
    icon: './svg/section1_svg3.svg',
    title: 'Post your design for sale',
    body: 'Once you are satisfied with how your design looks, click "Post for sale.” Our team will review and approve your design to go live on the website.',
  },
  {
    id: 4,
    icon: './svg/section1_svg4.svg',
    title: 'Start making money!',
    body: "Every time your design sells, you'll receive 50% of the profit. Buzzz handles everything related to the order, including inventory, customer service, and logistics. Just sit back and make money!💰",
  },
];

export const dashboardLinksArray = [
  {
    id: 2,
    icon: DashboardIcon,
    name: 'Dashboard',
    route: routes.dashboard.home.path,
  },
  {
    id: 3,
    icon: DesignIcon,
    name: 'Design',
    route: routes.dashboard.design.path,
  },
  {
    id: 4,
    icon: OrdersIcon,
    name: 'Orders',
    route: routes.dashboard.orders.path,
  },
  {
    id: 5,
    icon: OrdersIcon,
    name: 'Templates',
    route: routes.dashboard.templates.path,
  },
  {
    id: 6,
    icon: ListingsIcon,
    name: 'Transaction',
    route: routes.dashboard.billing.wallet.path,
  },
  {
    id: 7,
    icon: ReportsIcon,
    name: 'Reports',
    route: routes.dashboard.reports.path,
  },
  {
    id: 8,
    icon: CustomersIcon,
    name: 'Customers',
    route: routes.dashboard.customers.path,
  },
];

export const dashboardSubRoutesArray = [
  {
    id: 1,
    name: 'BRANDING',
    subRoutes: [
      { id: 1, route: '/kwlwlwl', name: 'Branding Assets' },
      { id: 2, route: '/kekjsw', name: 'Logo Maker' },
    ],
    route: '/dashboard/branding',
  },

  {
    id: 2,
    name: 'BILLING',
    subRoutes: [
      { id: 1, route: '/kwoplwlwl', name: 'Payments' },
      { id: 2, route: '/kekjnsjjsw', name: 'Billing Method' },
      { id: 3, route: '/jsjswiq', name: 'Legal Info' },
      { id: 4, route: routes.dashboard.billing.wallet.path, name: 'Buzzz Wallet' },
    ],
    route: '/dashboard/billing',
  },

  {
    id: 3,
    name: 'SETTINGS',
    subRoutes: [
      { id: 1, route: routes.dashboard.settings.account.path, name: 'My Account' },
      { id: 2, route: routes.dashboard.settings.security.path, name: 'Security' },
      { id: 3, route: routes.dashboard.settings.billing.path, name: 'Billing' },
      { id: 4, route: routes.dashboard.settings.notification.path, name: 'Notification' },
    ],
    route: '/dashboard/settings',
  },
];

export const settingsRouteArray = [
  { id: 1, name: 'Account', route: routes.dashboard.settings.account.path },
  { id: 2, name: 'Security', route: routes.dashboard.settings.security.path },
  // { id: 3, name: 'Billing', route: routes.dashboard.settings.billing.path },
  { id: 4, name: 'Notification', route: routes.dashboard.settings.notification.path },
  { id: 5, name: 'Shipping', route: routes.dashboard.settings.shipping.path },
];

export const oderRouteArray = [
  { id: 1, name: 'iiiii', route: routes.dashboard.orders },
  { id: 2, name: 'Secuiiiiirity', route: routes.dashboard.settings.security.path },
  { id: 3, name: 'Bilooiling', route: routes.dashboard.settings.billing.path },
  { id: 4, name: 'Notifiiiication', route: routes.dashboard.settings.notification.path },
];

export const devicesArray = [
  {
    id: 1,
    image: '../../images/phone.png',
    name: 'iPhone 11',
    location: 'London, UK',
    date: 'Oct 23 at 1:15 AM',
  },
  {
    id: 2,
    image: '../../images/phone.png',
    name: 'iPhone 11',
    location: 'London, UK',
    date: 'Oct 23 at 1:15 AM',
  },
];

export const statsCardData = [
  {
    id: 1,
    name: 'Orders',
    data: '52%',
    bg: '#F6F2FF',
    img: '/svg/order_stats_icon.svg',
    active: true,
  },
  {
    id: 2,
    name: 'Business Revenue',
    data: '25%',
    bg: 'rgba(33, 163, 102, 0.2)',
    img: '/svg/business_stats_icon.svg',
    active: false,
  },
  {
    id: 3,
    name: 'Monthly Views',
    data: '133333',
    bg: 'rgba(255, 147, 68, 0.2)',
    img: '/svg/views_stats_icon.svg',
    active: false,
  },
  {
    id: 4,
    name: 'Customers',
    data: '52%',
    addData: '(+5%)',
    bg: 'rgba(15, 169, 255, 0.2)',
    img: '/svg/customers_stats_icon.svg',
    active: false,
  },
];

export const chartData = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export const topCustomerArray = [
  {
    id: 1,
    image: '../../images/tc_report.png',
    name: 'Angela Doe',
    email: 'Angela@gmail.com',
    amount: '$200k',
  },
  {
    id: 1,
    image: '../../images/tc_report.png',
    name: 'Angela Doe',
    email: 'Angela@gmail.com',
    amount: '$200k',
  },
  {
    id: 1,
    image: '../../images/tc_report.png',
    name: 'Angela Doe',
    email: 'Angela@gmail.com',
    amount: '$200k',
  },
  {
    id: 1,
    image: '../../images/tc_report.png',
    name: 'Angela Doe',
    email: 'Angela@gmail.com',
    amount: '$200k',
  },
  {
    id: 1,
    image: '../../images/tc_report.png',
    name: 'Angela Doe',
    email: 'Angela@gmail.com',
    amount: '$200k',
  },
  {
    id: 1,
    image: '../../images/tc_report.png',
    name: 'Angela Doe',
    email: 'Angela@gmail.com',
    amount: '$200k',
  },
  {
    id: 1,
    image: '../../images/tc_report.png',
    name: 'Angela Doe',
    email: 'Angela@gmail.com',
    amount: '$200k',
  },
];

export const salesDataArray = [
  {
    Total: 1000,
    amt: 2210,
  },
  {
    Total: 3000,
    amt: 2400,
  },
  {
    Total: 2000,
    amt: 2290,
  },
  {
    Total: 2780,
    amt: 2000,
  },
  {
    Total: 1890,
    amt: 2181,
  },
  {
    Total: 2390,
    amt: 2500,
  },
  {
    Total: 3490,
    amt: 2100,
  },
];

export const visitDataArray = [
  {
    Total: 4000,
    amt: 2400,
  },
  {
    Total: 3000,
    amt: 2210,
  },
  {
    Total: 2000,
    amt: 2290,
  },
  {
    Total: 2780,
    amt: 2000,
  },
  {
    Total: 1890,
    amt: 2181,
  },
  {
    Total: 3490,
    amt: 2100,
  },
  {
    Total: 2390,
    amt: 2500,
  },
];

export const landingProducts = [
  {
    id: 1,
    img: '/images/landing_prod1.png',
    coming: false,
    name: 'Jet back/shirt',
  },
  {
    id: 2,
    img: '/images/landing_prod2.png',
    coming: false,
    name: 'Coming soon',
  },
  {
    id: 3,
    img: '/images/landing_prod3.png',
    coming: true,
    name: 'Jet back/shirt',
  },
  // {
  //   id: 4,
  //   img: '/images/landing_prod3.png',
  //   coming: false,
  //   name: 'Jet back/shirt',
  // },
];

export type LandingProductsType = ReturnType<() => typeof landingProducts>;

export const stepsData = [
  {
    id: 1,
    title: 'Connect to Buzzz',
    text: 'Connect your store to Buzzz, add your products, and set your own retail prices',
    img: '/images/steps_img1.png',
  },
  {
    id: 2,
    title: 'Customer places their order',
    text: 'A customer buys from your store, we charge for fulfillment, and you keep the profit',
    img: '/images/steps_img2.png',
  },
  {
    id: 3,
    title: 'Buzzz fulfills the order',
    text: 'We take care of your order from A to Z, and control the whole fulfillment process',
    img: '/images/steps_img1.png',
  },
  {
    id: 4,
    title: 'Buzzz fulfills the order',
    text: 'We take care of your order from A to Z, and control the whole fulfillment process',
    img: '/images/steps_img2.png',
  },
];

export const landingFeatured = [
  { id: 1, img: '/images/landing_featured1.png' },
  { id: 2, img: '/images/landing_featured2.png' },
  { id: 3, img: '/images/landing_featured3.png' },
  { id: 4, img: '/images/landing_featured1.png' },
  { id: 5, img: '/images/landing_featured2.png' },
  { id: 6, img: '/images/landing_featured3.png' },
  { id: 7, img: '/images/landing_featured1.png' },
  { id: 8, img: '/images/landing_featured2.png' },
  { id: 9, img: '/images/landing_featured3.png' },
  { id: 10, img: '/images/landing_featured1.png' },
  { id: 11, img: '/images/landing_featured2.png' },
  { id: 12, img: '/images/landing_featured3.png' },
  { id: 13, img: '/images/landing_featured1.png' },
  { id: 14, img: '/images/landing_featured2.png' },
  { id: 15, img: '/images/landing_featured3.png' },
];

export const landingSection5Array = [
  {
    id: 1,
    text: 'Want some swag?',
    body: 'Download the creator’s guide to making money online selling digital products.',
    button: 'Coming Soon',
  },
  {
    id: 2,
    text: 'A creators guide',
    body: 'Download the creator’s guide to making money online selling digital products.',
    button: 'Grab your free guide',
  },
];

export type LandingSection5Type = ReturnType<() => typeof landingSection5Array>;

export const templatesArray = [
  {
    id: 1,
    img: '/images/template1.png',
    title: 'Meta Legend Shirt',
    text: 'DavidoFans',
  },
  {
    id: 2,
    img: '/images/template2.png',
    title: 'Meta Legend Shirt',
    text: 'DavidoFans',
  },
  {
    id: 3,
    img: '/images/template3.png',
    title: 'Meta Legend Shirt',
    text: 'DavidoFans',
  },
  {
    id: 4,
    img: '/images/template3.png',
    title: 'Meta Legend Shirt',
    text: 'DavidoFans',
  },
  {
    id: 5,
    img: '/images/template3.png',
    title: 'Meta Legend Shirt',
    text: 'DavidoFans',
  },
  {
    id: 6,
    img: '/images/template3.png',
    title: 'Meta Legend Shirt',
    text: 'DavidoFans',
  },
];

export const allTemplatesArray = [
  { id: 1, tempName: 'College' },
  { id: 2, tempName: 'Charities' },
  { id: 3, tempName: 'Real life heroes' },
  { id: 4, tempName: 'Religious' },
  { id: 5, tempName: 'Spiritual' },
];

export const cartArray = [
  {
    id: 1,
    img: '/images/cart-image.png',
    productName: 'Blair 1u.6 Shirts and Trouser',
    price: '$9.78',
    quantity: 3,
    total: '$9.78',
  },
  {
    id: 2,
    img: '/images/cart-image.png',
    productName: 'Blair 1u.6 Shirts and Trouser',
    price: '$9.78',
    quantity: 6,
    total: '$9.78',
  },
];

export type CartDataType = ReturnType<() => typeof cartArray>;

export const paymentArray = [
  {
    id: 1,
    img: '/svg/visa.svg',
    name: 'visa',
  },
  {
    id: 2,
    img: '/svg/master.svg',
    name: 'Master',
  },
  {
    id: 3,
    img: '/svg/amex.svg',
    name: 'Amex',
  },
  {
    id: 4,
    img: '/svg/apple.svg',
    name: 'Apple',
  },
  {
    id: 5,
    img: '/svg/google.svg',
    name: 'Google',
  },
  {
    id: 6,
    img: '/svg/affirm.svg',
    name: 'Affirm',
  },
  {
    id: 7,
    img: '/svg/amazon.svg',
    name: 'Amazon',
  },
  {
    id: 8,
    img: '/svg/prime.svg',
    name: 'Prime',
  },
];
