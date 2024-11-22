'use client';

import styles from './style.module.css';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import SmallTree from '@/components/auth/SmallTree';
import DearTreeText from '@/components/common/DearTreeText/DearTreeText';

export default function LoginPage() {
  const router = useRouter();

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
            <button onClick={() => router.push('/login')}>로그인</button>
            <button className={styles.activeButton}>회원가입</button>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="text">닉네임</label>
            <input type="text" placeholder="" />
            <label htmlFor="password">비밀번호</label>
            <div className={styles.passwordInput}>
              <input type="password" placeholder="" />
              <button className={styles.reTypeButton}>재입력</button>
            </div>
          </div>
        </div>
        <button className={styles.loginButton}>회원가입</button>
      </div>
      <div />
    </div>
  );
}
