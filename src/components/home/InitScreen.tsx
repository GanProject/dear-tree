import Image from 'next/image';
import InitScreenImage from '/public/img/init-screen.png';

export default function InitScreen() {
  return <Image src={InitScreenImage} alt="init screen image" />;
}
