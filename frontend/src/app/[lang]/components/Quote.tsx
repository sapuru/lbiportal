import LineChart from "./linechart";

interface QuoteProps {
  data: {
    title: string;
    body: string;
    author: string;
  };
}

export default function Quote({ data }: QuoteProps) {
  const { title, body, author } = data;

  return (
    <div className="container mx-auto p-8">
    {renderLineChart}
  </div>
  );
}
