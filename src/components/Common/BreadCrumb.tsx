import Image from 'next/image';

interface BreadcrumbProps {
  logo: string;
  placeName: string;
  leagueName: string;
  theme:string;
}

export default function Breadcrumb({ logo, placeName, leagueName,theme }: BreadcrumbProps) {
  return (
    <ul className={`${theme==="header" ? 'header-breadcrumb' : 'game-main-block-header'}`}>
    <li className="breadcrumb-country-name">
      <span className="team-logo">
        <Image src={logo} width={16} height={16} alt="Sport Icon" />
      </span>
      {placeName}
    </li>
    <li>{leagueName}</li>
  </ul>
  );
}
