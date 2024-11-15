// src/components/MyPage.tsx
"use client";
import React from 'react';
import '../styles/MyPage.css';

const MyPage: React.FC = () => {
  return (
    <div className="my-page">
      <button className="my-page-button">로그아웃</button>
      <button className="my-page-button">회원탈퇴</button>
    </div>
  );
};

export default MyPage;
