'use client';

import styles from './style.module.css';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SmallTree from '@/components/auth/SmallTree';
import DearTreeText from '@/components/common/DearTreeText/DearTreeText';
import { sendSignInApi } from '@/api/auth/route';

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginReq = async () => {
    try {
      const result = await sendSignInApi(username, password);
      if (result) {
        alert('로그인 성공');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <Link href="/" passHref className={styles.backLink}>
          ← Back
        </Link>
      </header>
      <div className={styles.contentContainer}>
        <SmallTree />
        <DearTreeText />
        <div className={styles.authContainer}>
          <div className={styles.buttonGroup}>
            <button className={styles.activeButton}>로그인</button>
            <button onClick={() => router.push('/register')}>회원가입</button>
          </div>
          <form
            className={styles.inputGroup}
            onSubmit={(e) => {
              e.preventDefault();
              handleLoginReq();
            }}
          >
            <label htmlFor="username">닉네임</label>
            <input
              id="username"
              type="text"
              placeholder=""
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </div>
        <button className={styles.loginButton} onClick={handleLoginReq}>
          로그인
        </button>
      </div>
      <div />
    </div>
  );
}
