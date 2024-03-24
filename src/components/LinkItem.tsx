import Link from 'next/link';

function LinkItem({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <Link href={link}>
        <span className="text-md md:text-xl 2xl:text-3xl hover:text-sky-500">
          {title}
        </span>
      </Link>
    </li>
  );
}

export default LinkItem;
