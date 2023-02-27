import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { DashboardLayout, MainLayout } from '../layouts';
import routes from '../routes';

import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'nprogress/nprogress.css';

import '../../public/styles/global.css';
import '../../public/styles/dashboard.css';
import '../../public/styles/responsive.css';
import '../../public/styles/dashboard-responsive.css';
import CartContextProvider from '../context/CartContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const { auth } = routes;

const authRoutes = [auth.login.path, auth.resetPassword.path, auth.signup.path, auth.signup2.path];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  if (authRoutes.includes(router.route) || router.pathname === routes.create.path) {
    // eslint-disable-next-line
    return <Fragment>{children}</Fragment>;
  }

  if (router.pathname.indexOf('/dashboard/') > -1) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <MainLayout>{children}</MainLayout>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
