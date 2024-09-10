interface PageHeaderProps {
  heading: string,
  text?: string,
}

export default function PageHeader({ heading, text } : PageHeaderProps) {
  return (
    <div className="my-16 w-full text-center">
    { text && <span className="font-AA">{text}</span> }
    <h2 className="my-4 font-AA">{heading}</h2>
  </div>
  );
}
