import Image from 'next/image';
import SmallTreeImage from '/public/img/small_tree.png';

export default function SmallTree() {
  return <Image src={SmallTreeImage} alt="Small Tree Image" />;
}
