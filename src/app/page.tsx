'use client';

import { useEffect, useState } from 'react';
import InitScreen from '@/components/home/InitScreen';
import Link from 'next/link';
import styles from './style.module.css';
import Image from 'next/image';
import ChristmasTreeImage from '/public/img/chirstmas_tree.png';

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
          <p className={styles.initLoadingText}>Loading...</p>
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <div className={styles.upperContainer}>
            <Image src={ChristmasTreeImage} alt="init screen image" />
          </div>
          <div className={styles.bottomContainer}>
            <h1 className={styles.mainHeading}>Dear Tree</h1>
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
