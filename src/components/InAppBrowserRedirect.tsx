import { useEffect } from 'react';

type InAppBrowserRedirectProps = {
  setShowRedirect: (value: boolean) => void;
};

export default function InAppBrowserRedirect({
  setShowRedirect,
}: InAppBrowserRedirectProps) {
  useEffect(() => {
    const isInAppBrowser = navigator.userAgent.match(
      /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i,
    );

    if (isInAppBrowser) {
      setShowRedirect(true); // Notify the parent to block rendering other content.
    } else {
      setShowRedirect(false); // Ensure the rest of the content is visible.
    }
  }, [setShowRedirect]);

  if (!setShowRedirect) return null; // Do nothing if not in an in-app browser.

  const copyToClipboard = (val: string) => {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  };

  const handleRedirect = () => {
    copyToClipboard(window.location.href);
    alert(
      "URL주소가 복사되었습니다.\n\nSafari가 열리면 주소창을 길게 터치한 뒤, '붙여놓기 및 이동'를 누르면 정상적으로 이용하실 수 있습니다.",
    );
    window.location.href = 'x-web-search://?';
  };

  return (
    <div
      style={{
        fontFamily: "'Noto Sans KR', sans-serif",
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h2>인앱브라우저 호환문제로 인해 Safari로 접속해야합니다.</h2>
      <p style={{ color: '#999', fontSize: '16px' }}>
        아래 버튼을 눌러 Safari를 실행해주세요.
        <br />
        Safari가 열리면, 주소창을 길게 터치한 뒤,
        <br />
        &apos;붙여놓기 및 이동&apos;을 누르면 정상적으로 이용할 수 있습니다.
      </p>
      <button
        onClick={handleRedirect}
        style={{
          minWidth: '180px',
          marginTop: '10px',
          height: '54px',
          fontWeight: '700',
          backgroundColor: '#31408E',
          color: '#fff',
          borderRadius: '4px',
          fontSize: '17px',
          border: 'none',
        }}
      >
        Safari로 열기
      </button>
      <img
        style={{ width: '70%', margin: '50px auto', display: 'block' }}
        src="https://tistory3.daumcdn.net/tistory/1893869/skin/images/inappbrowserout.jpeg"
        alt="Redirect instruction"
      />
    </div>
  );
}
