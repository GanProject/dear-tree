import Link from 'next/link';

export default function LoginPage() {
  return (
    <div>
      <Link href="/" passHref>
        Back
      </Link>
      로그인
    </div>
  );
}
