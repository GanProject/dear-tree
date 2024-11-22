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
    // Add the in-app browser detection and handling script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      var copytoclipboard = function(val){
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
      };
      var inappbrowserout = function(){
        copytoclipboard(window.location.href);
        alert('URL주소가 복사되었습니다.\\n\\nSafari가 열리면 주소창을 길게 터치한 뒤, "붙여놓기 및 이동"를 누르면 정상적으로 이용하실 수 있습니다.');
        location.href='x-web-search://?';
      };
      window.onload = function(){
        if(navigator.userAgent.match(/inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\\/[^1]/i)){
          if(navigator.userAgent.match(/iPhone|iPad/i)){
            var mobile = document.createElement('meta');
            mobile.name = 'viewport';
            mobile.content = "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
            document.getElementsByTagName('head')[0].appendChild(mobile);
            var fonts = document.createElement('link');
            fonts.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap';
            document.getElementsByTagName('head')[0].appendChild(fonts);
            document.body.innerHTML = "<style>body{margin:0;padding:0;font-family: 'Noto Sans KR', sans-serif;overflow: hidden;height: 100%;}</style><h2 style='padding-top:50px; text-align:center;font-family: 'Noto Sans KR', sans-serif;'>인앱브라우저 호환문제로 인해<br />Safari로 접속해야합니다.</h2><article style='text-align:center; font-size:17px; word-break:keep-all;color:#999;'>아래 버튼을 눌러 Safari를 실행해주세요<br />Safari가 열리면, 주소창을 길게 터치한 뒤,<br />'붙여놓기 및 이동'을 누르면<br />정상적으로 이용할 수 있습니다.<br /><br /><button onclick='inappbrowserout();' style='min-width:180px;margin-top:10px;height:54px;font-weight: 700;background-color:#31408E;color:#fff;border-radius: 4px;font-size:17px;border:0;'>Safari로 열기</button></article><img style='width:70%;margin:50px 15% 0 15%' src='https://tistory3.daumcdn.net/tistory/1893869/skin/images/inappbrowserout.jpeg' />";
          } else {
            location.href='intent://'+location.href.replace(/https?:\\/\\//i,'')+'#Intent;scheme=http;package=com.android.chrome;end';
          }
        }
      };
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup
    };
  }, []);

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
