'use client';

import { useEffect, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';

import InitScreen from '@/components/home/InitScreen';
import ChristmasTree from '@/components/home/ChristmasTree';
import DearTreeText from '@/components/common/DearTreeText/DearTreeText';

export default function HomePage() {
  const [isInitImageVisible, setIsInitImageVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitImageVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isInitImageVisible ? (
        <div className={styles.initContainer}>
          <InitScreen />
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.upperContainer}>
            <ChristmasTree />
          </div>
          <div className={styles.bottomContainer}>
            <DearTreeText />
            <Link href="/login" passHref>
              <button className={styles.button}>로그인</button>
            </Link>
            <Link href="/register" passHref>
              <button className={styles.button}>회원가입</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
