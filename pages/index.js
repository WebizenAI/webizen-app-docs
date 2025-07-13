import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/webizen-app-docs/docs');
  }, [router]);
  return null;
}
