import Image from 'next/image';

interface GameTimeProps {
  gameTime: string;
}

export default function GameTime({ gameTime }: GameTimeProps) {
  return (
    <div className="sport-time-area">
      <div className="sport-time">
        <p className="m-0">{gameTime}</p>
      </div>
      <div className="shirt-icon-area">
        <Image src="/assets/images/shirt.svg" width={16} height={16} alt="Sport Icon" />
      </div>
      <div className="bars-icon-area">
        <Image src="/assets/images/bars.svg" width={16} height={16} alt="Sport Icon" />
      </div>
    </div>
  );
}
