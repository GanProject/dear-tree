// components/RedirectClient.tsx (Client-Side)
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const isInternalBrowser = (userAgent: string): boolean => {
  const internalBrowsers = [
    'FBAN', // Facebook
    'FBAV', // Facebook
    'Instagram', // Instagram
    'Line', // LINE
    'Snapchat', // Snapchat
    'Twitter', // Twitter
    'WhatsApp', // WhatsApp
    'KAKAOTALK', // KakaoTalk
    'NAVER', // Naver
  ];
  return internalBrowsers.some((browser) => userAgent.includes(browser));
};

export default function RedirectClient() {
  const pathname = usePathname();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || '';
    if (isInternalBrowser(userAgent)) {
      window.location.href = `https://openinbrowser.com?redirect=${encodeURIComponent(
        window.location.href,
      )}`;
    }
  }, [pathname]);

  return null; // No visible UI
}
