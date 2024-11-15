// src/components/Inbox.tsx
"use client";
import React from 'react';
import '../styles/Inbox.css';

const Inbox: React.FC = () => {
  return (
    <div className="inbox-list">
      <div className="inbox-item">
        <div className="stamp-icon">🎄</div>
        <div className="message-details">
          <div className="message-title">제목</div>
          <div className="message-content">내용</div>
        </div>
      </div>
      <div className="inbox-item">
        <div className="stamp-icon">🎄</div>
        <div className="message-details">
          <div className="message-title">제목</div>
          <div className="message-content">내용</div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
