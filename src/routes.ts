const routes = {
  home: {
    path: '/',
  },
  auth: {
    login: {
      path: '/auth/login',
    },
    signup: {
      path: '/auth/signup',
    },
    signup2: {
      path: '/auth/signup2',
    },
    resetPassword: {
      path: '/auth/reset-password',
    },
  },
  contact: {
    path: '/contact-us',
    contact: {
      path: '/contact-us/contact',
    },
  },
  resources: {
    path: '/resources',
  },
  ondemand: {
    path: '/ondemand',
  },
  preview: {
    path: (pid: string) => `/preview/${pid}`,
    name: '/preview/[pid]',
  },
  cart: {
    path: '/cart',
  },
  designpage: {
    path: '/designpage',
  },
  product: {
    path: '/product',
  },
  shipping: {
    path: '/shipping',
  },
  design: {
    path: '/design',
  },
  about: {
    path: '/about',
  },
  marketplace: {
    path: '/marketplace',
  },

  create: {
    path: '/create',
  },

  dashboard: {
    myBuzz: {
      path: '/dashboard/my-buzzz',
    },
    home: {
      path: '/dashboard/home',
    },

    design: {
      path: '/dashboard/design',
      design: {
        path: '/dashboard/design/design',
      },
      select: {
        path: '/dashboard/design/select',
      },
      create: {
        path: '/dashboard/design/create',
      },
      shipping: {
        path: '/dashboard/design/shipping',
      },
      review: {
        path: '/dashboard/design/review',
      },
      preview: {
        path: (pid: string) => `/dashboard/design/preview/${pid}`,
        name: '/dashboard/design/preview/[pid]',
      },
    },
    createDesign: {
      path: '/dashboard/design/design',
    },
    orders: {
      path: '/dashboard/orders',
    },
    payout: {
      path: '/dashboard/payout',
    },
    templates: {
      path: '/dashboard/templates',
    },
    listings: {
      path: '/dashboard/listings',
    },
    reports: {
      path: '/dashboard/reports',
    },
    customers: {
      path: '/dashboard/customers',
    },
    store: {
      path: '/dashboard/store',
    },
    cart: {
      path: '/dashboard/cart',
    },

    billing: {
      wallet: {
        path: '/dashboard/billing/wallet',
      },
    },

    settings: {
      path: '/dashboard/settings/account',
      account: {
        path: '/dashboard/settings/account',
      },
      shipping: {
        path: '/dashboard/settings/shipping',
      },
      security: {
        path: '/dashboard/settings/security',
      },

      billing: {
        path: '/dashboard/settings/billing',
      },

      notification: {
        path: '/dashboard/settings/notification',
      },
    },
    notfound: {
      path: '*',
    },
  },
};

export default routes;
