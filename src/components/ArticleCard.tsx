import Link from 'next/link';

export default function ArticleCard({
  data,
}: {
  data: {
    title: string;
    date: string;
    readingTime: string;
    summary: string;
    url: string;
  };
}) {
  const { title, date, readingTime, summary, url } = data;
  const dateString = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div
      className={
        'border-2 px-3 py-5 border-slate-700 mt-3 shadow-lg shadow-slate-600 rounded-lg hover:shadow-emerald-300 hover:shadow-lg'
      }
    >
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-lg md:text-xl xl:text-2xl">{title}</h3>
        <div className="flex gap-1">
          <p className="text-sm md:text-base xl:text-lg text-emerald-300">
            Published on {dateString}
          </p>
          <p>
            <span>|</span>
          </p>
          <p className="text-sm md:text-base xl:text-lg text-emerald-300">
            {readingTime} min read.
          </p>
        </div>

        <p className="text-sm md:text-base xl:text-lg">
          {summary}{' '}
          <span className="text-sky-500 cursor-pointer underline">
            Read more
          </span>
        </p>
      </Link>
    </div>
  );
}
