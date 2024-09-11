interface PageHeaderProps {
  heading: string,
  text?: string,
}

export default function PageHeader({ heading, text } : PageHeaderProps) {
  return (
    <div className="my-16 w-full text-center">
    { text && <span className="">{text}</span> }
    <h2 className="my-4">{heading}</h2>
  </div>
  );
}
