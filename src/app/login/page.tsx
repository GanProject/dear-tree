import styles from './style.module.css';
import Link from 'next/link';

import SmallTree from '@/components/auth/SmallTree';
import DearTreeText from '@/components/common/DearTreeText/DearTreeText';

export default function LoginPage() {
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
            <button className={styles.active}>로그인</button>
            <button>회원가입</button>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="text">닉네임</label>
            <input type="text" placeholder="" />
            <label htmlFor="password">비밀번호</label>
            <input type="password" placeholder="" />
          </div>
        </div>
        <button>로그인</button>
      </div>
      <div />
    </div>
  );
}
