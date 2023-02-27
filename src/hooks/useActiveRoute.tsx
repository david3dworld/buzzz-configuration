import { useRouter } from 'next/router';

export default function useActiveRoute() {
  const router = useRouter();
  const isActive = (route: string) => {
    if (router.pathname === route || router.pathname.indexOf(route) > -1) {
      return 'active';
    }

    return '';
  };

  return [isActive];
}
