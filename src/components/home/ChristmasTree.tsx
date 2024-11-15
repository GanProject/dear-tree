import Image from 'next/image';
import ChristmasTreeImage from '/public/img/christmas_tree.png';

export default function ChristmasTree() {
  return <Image src={ChristmasTreeImage} alt="Christmas Tree Image" />;
}
