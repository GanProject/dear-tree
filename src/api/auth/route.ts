import { NextResponse } from 'next/server';

// 회원가입
export async function sendSignUpApi(
  username: string,
  password: string,
  passwordConfirm: string,
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          passwordConfirm,
        }),
      },
    );

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching data:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to fetch data from the backend' },
      { status: 500 },
    );
  }
}

// 로그인
export async function sendSignInApi(username: string, password: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      },
    );

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching data:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to fetch data from the backend' },
      { status: 500 },
    );
  }
}
