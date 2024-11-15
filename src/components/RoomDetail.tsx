/* eslint-disable @typescript-eslint/no-unused-vars */
// 배포 때문에 추가한 코드입니다. 지우지 마세요.

'use client';
import React, { useState } from 'react';
import '../styles/RoomDetail.css';

type Letter = {
  id: number;
  from: string;
  content: string;
};

type RoomDetailProps = {
  roomId: string;
  initialParticipants: number;
};

const RoomDetail: React.FC<RoomDetailProps> = ({
  roomId,
  initialParticipants,
}) => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [inviteLink, setInviteLink] = useState('');
  const [progress, setProgress] = useState(0);
  const [letters, setLetters] = useState<Letter[]>([
    { id: 1, from: '닉네임1', content: '내용1' },
    { id: 2, from: '닉네임2', content: '내용2' },
    // 더 많은 편지를 추가할 수 있습니다.
  ]);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  const generateInviteLink = () => {
    const link = `${window.location.origin}/room/${roomId}?invite=true`;
    setInviteLink(link);
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    alert('링크가 복사되었습니다!');
  };

  const calculateLevel = () => {
    if (progress >= 100) return 'LV.5';
    if (progress >= 75) return 'LV.4';
    if (progress >= 50) return 'LV.3';
    if (progress >= 25) return 'LV.2';
    return 'LV.1';
  };

  return (
    <div className="room-detail">
      <div className="room-header">
        <span className="room-icon">📧</span>
        <span className="room-title">방 제목</span>
        <span className="room-participants">{participants} 인원</span>
        <button onClick={generateInviteLink} className="invite-button">
          초대
        </button>
      </div>

      {inviteLink && (
        <div className="invite-link">
          <input type="text" value={inviteLink} readOnly />
          <button onClick={copyInviteLink}>복사하기</button>
          <button
            onClick={() => alert('카카오톡으로 공유')}
            className="kakao-share-button"
          >
            카카오톡으로 공유하기
          </button>
        </div>
      )}

      <div className="letters-section">
        {letters.map((letter) => (
          <div
            key={letter.id}
            className="letter-item"
            onClick={() => setSelectedLetter(letter)}
          >
            📩
          </div>
        ))}
      </div>

      {selectedLetter && (
        <div className="letter-popup">
          <div className="letter-content">
            <h3>From. {selectedLetter.from}</h3>
            <p>{selectedLetter.content}</p>
            <button
              onClick={() => setSelectedLetter(null)}
              className="close-popup-button"
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <div className="tree-progress">
        <div className="tree">트리</div>
        <div className="level-display">
          {calculateLevel()} - 편지를 주고받을수록 트리가 성장해요!
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-percentage">{progress}%</div>
      </div>

      <button
        onClick={() => setProgress(progress + 10)}
        className="send-message-button"
      >
        편지 쓰기
      </button>
    </div>
  );
};

export default RoomDetail;
