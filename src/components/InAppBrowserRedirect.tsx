import { useEffect } from 'react';

export default function InAppBrowserRedirect() {
  useEffect(() => {
    const copyToClipboard = (val: string) => {
      const t = document.createElement('textarea');
      document.body.appendChild(t);
      t.value = val;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
    };

    const inAppBrowserOut = () => {
      copyToClipboard(window.location.href);
      alert(
        "URL주소가 복사되었습니다.\n\nSafari가 열리면 주소창을 길게 터치한 뒤, '붙여놓기 및 이동'를 누르면 정상적으로 이용하실 수 있습니다.",
      );
      location.href = 'x-web-search://?';
    };

    if (
      navigator.userAgent.match(
        /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i,
      )
    ) {
      if (navigator.userAgent.match(/iPhone|iPad/i)) {
        const mobile = document.createElement('meta');
        mobile.name = 'viewport';
        mobile.content =
          'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui';
        document.head.appendChild(mobile);

        const fonts = document.createElement('link');
        fonts.href =
          'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap';
        fonts.rel = 'stylesheet';
        document.head.appendChild(fonts);

        document.body.innerHTML = `
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Noto Sans KR', sans-serif;
              overflow: hidden;
              height: 100%;
            }
          </style>
          <h2 style="padding-top:50px; text-align:center;font-family: 'Noto Sans KR', sans-serif;">
            인앱브라우저 호환문제로 인해<br />Safari로 접속해야합니다.
          </h2>
          <article style="text-align:center; font-size:17px; word-break:keep-all;color:#999;">
            아래 버튼을 눌러 Safari를 실행해주세요<br />
            Safari가 열리면, 주소창을 길게 터치한 뒤,<br />
            '붙여놓기 및 이동'을 누르면<br />
            정상적으로 이용할 수 있습니다.<br /><br />
            <button onclick="(${inAppBrowserOut.toString()})()" 
              style="min-width:180px;margin-top:10px;height:54px;font-weight: 700;background-color:#31408E;color:#fff;border-radius: 4px;font-size:17px;border:0;">
              Safari로 열기
            </button>
          </article>
          <img style="width:70%;margin:50px 15% 0 15%" 
            src="https://tistory3.daumcdn.net/tistory/1893869/skin/images/inappbrowserout.jpeg" />
        `;
      } else {
        location.href = `intent://${location.href.replace(
          /https?:\/\//i,
          '',
        )}#Intent;scheme=http;package=com.android.chrome;end`;
      }
    }
  }, []);

  return null; // No visible UI; the script runs on mount.
}
