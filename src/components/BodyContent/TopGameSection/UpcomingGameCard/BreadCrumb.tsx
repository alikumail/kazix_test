import Image from 'next/image';

interface BreadcrumbProps {
  logo: string;
  placeName: string;
  leagueName: string;
}

export default function Breadcrumb({ logo, placeName, leagueName }: BreadcrumbProps) {
  return (
    <ul className="game-main-block-header">
      <li>
        <Image src={logo} width={16} height={16} alt="Sport Icon" />
      </li>
      <li>{placeName}</li>
      <li>-</li>
      <li>{leagueName}</li>
    </ul>
  );
}
