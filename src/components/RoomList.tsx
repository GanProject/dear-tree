// src/components/RoomList.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Link 사용하여 경로 설정
import '../styles/RoomList.css';

type Room = {
  id: string;
  title: string;
  participants: number;
  icon: string;
};

const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newRoomTitle, setNewRoomTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');

  useEffect(() => {
    const storedRooms = localStorage.getItem('rooms');
    if (storedRooms) {
      setRooms(JSON.parse(storedRooms));
    }
  }, []);

  const saveRoomsToLocalStorage = (rooms: Room[]) => {
    localStorage.setItem('rooms', JSON.stringify(rooms));
  };

  const handleAddRoom = () => {
    setShowPopup(true);
  };

  const handleCreateRoom = () => {
    if (!newRoomTitle || !selectedIcon) return;
    const newRoom: Room = {
      id: newRoomTitle,
      title: newRoomTitle,
      participants: Math.floor(Math.random() * 10) + 1,
      icon: selectedIcon,
    };
    const updatedRooms = [...rooms, newRoom];
    setRooms(updatedRooms);
    saveRoomsToLocalStorage(updatedRooms);
    setShowPopup(false);
    setNewRoomTitle('');
    setSelectedIcon('');
  };

  const handleDeleteRoom = (id: string) => {
    const updatedRooms = rooms.filter(room => room.id !== id);
    setRooms(updatedRooms);
    saveRoomsToLocalStorage(updatedRooms);
  };

  return (
    <div className="room-list">
      <h2>방 목록</h2>
      <div className="room-container">
        {rooms.length === 0 ? (
          <p className="no-rooms-message">새로운 방을 생성해보세요!</p>
        ) : (
          rooms.map((room) => (
            <Link key={room.id} href={`/room/${room.id}`} passHref> {/* 각 방의 상세 페이지 경로 설정 */}
              <div className="room-item">
                <div className="room-info">
                  <div className="room-icon">{room.icon}</div>
                  <div>
                    <div className="room-title">{room.title}</div>
                    <div className="room-participants">{room.participants} 인원</div>
                  </div>
                </div>
                <button
                  className="delete-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteRoom(room.id);
                  }}
                >
                  삭제
                </button>
              </div>
            </Link>
          ))
        )}
      </div>
      <button className="add-room-button" onClick={handleAddRoom}>+</button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>방 생성</h3>
            <label>아이콘</label>
            <div className="icon-select">
              {['🟪', '❄️', '🟨', '🎁'].map((icon) => (
                <div 
                  key={icon} 
                  className={`icon-option ${selectedIcon === icon ? 'selected' : ''}`} 
                  onClick={() => setSelectedIcon(icon)}
                >
                  {icon}
                </div>
              ))}
            </div>
            <label>방 제목</label>
            <input 
              type="text" 
              value={newRoomTitle} 
              onChange={(e) => setNewRoomTitle(e.target.value)} 
              placeholder="방 제목을 입력하세요"
            />
            <button className="create-room-button" onClick={handleCreateRoom}>방 생성</button>
            <button className="close-popup-button" onClick={() => setShowPopup(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomList;
