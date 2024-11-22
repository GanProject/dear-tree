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
      setShowRedirect(true);
    } else {
      setShowRedirect(false);
    }
  }, [setShowRedirect]);

  if (!setShowRedirect) return null;

  const copyToClipboard = () => {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = window.location.href;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert('주소가 복사되었습니다.');
  };

  return (
    <div
      style={{
        fontFamily: "'Noto Sans KR', sans-serif",
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3>인앱브라우저 호환문제로 인해 외부브라우저로 접속해야합니다.</h3>
      <p style={{ color: '#999', fontSize: '16px' }}>
        아래 버튼을 눌러 주소를 복사한 뒤,
        <br />
        외부 브라우저로 붙여넣기하여 이용해주세요.
      </p>
      <button
        onClick={copyToClipboard}
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
        주소 복사
      </button>
      <img
        style={{ width: '70%', margin: '50px auto', display: 'block' }}
        src="https://tistory3.daumcdn.net/tistory/1893869/skin/images/inappbrowserout.jpeg"
        alt="Redirect instruction"
      />
    </div>
  );
}
