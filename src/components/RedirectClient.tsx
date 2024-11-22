// components/RedirectClient.tsx (Client-Side)
'use client';

import { useEffect, useState } from 'react';
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
  const [isInternal, setIsInternal] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || '';
    if (isInternalBrowser(userAgent)) {
      setIsInternal(true);
    }
  }, [pathname]);

  if (!isInternal) {
    return null; // 외부 브라우저일 경우 UI를 표시하지 않음
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        zIndex: 9999,
      }}
    >
      <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>
        해당 페이지는 외부 브라우저에서만 정상적으로 작동합니다.
      </h1>
      <p style={{ marginBottom: '20px', fontSize: '16px' }}>
        아래 URL을 복사하여 외부 브라우저에서 열어주세요
      </p>
      <textarea
        readOnly
        value={window.location.href}
        style={{
          width: '80%',
          height: '60px',
          fontSize: '14px',
          marginBottom: '20px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert('URL이 클립보드에 복사되었습니다!');
        }}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        URL 복사하기
      </button>
    </div>
  );
}
