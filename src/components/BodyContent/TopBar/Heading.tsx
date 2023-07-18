
interface HeadingProps {
  heading: string;
}

export default function Heading({ heading }: HeadingProps) {
  return (
    <>
        <div className="heading-area">
           <h2>{heading}</h2>
        </div>
    </>
  );
}
