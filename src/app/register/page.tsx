import styles from './style.module.css';
import Link from 'next/link';

import SmallTree from '@/components/auth/SmallTree';
import DearTreeText from '@/components/common/DearTreeText/DearTreeText';

export default function RegisterPage() {
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
          <input type="text" placeholder="닉네임" />
          <input type="password" placeholder="비밀번호" />
        </div>
        <button>회원가입</button>
      </div>
      <div />
    </div>
  );
}
