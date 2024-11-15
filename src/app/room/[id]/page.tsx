// src/app/room/[id]/page.tsx
"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

interface RoomDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function RoomDetailPage({ params }: RoomDetailPageProps) {
  const router = useRouter();

  // React.use를 사용하여 비동기적으로 params를 해제
  const id = React.use(params).id;

  return (
    <div style={{ padding: '20px' }}>
      <h2>방 상세 페이지 - 방 이름: {id}</h2>
      <button
        onClick={() => router.back()}
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#fce5cd',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
}
