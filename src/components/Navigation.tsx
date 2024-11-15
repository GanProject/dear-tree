// src/components/Navigation.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <div className="nav-bar">
      <div className="nav-item" onClick={() => router.push('/')}>
        <div className="icon-placeholder" />
        <div>방 목록</div>
      </div>
      <div className="nav-item" onClick={() => router.push('/inbox')}>
        <div className="icon-placeholder" />
        <div>받은 편지함</div>
      </div>
      <div className="nav-item" onClick={() => router.push('/mypage')}>
        <div className="icon-placeholder" />
        <div>마이페이지</div>
      </div>
    </div>
  );
};

export default Navigation;
