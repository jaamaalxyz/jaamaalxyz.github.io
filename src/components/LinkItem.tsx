import Link from 'next/link';

function LinkItem({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <Link
        href={link}
        className="text-md md:text-xl 2xl:text-3xl hover:text-sky-500 active:text-sky-700"
      >
        {title}
      </Link>
    </li>
  );
}

export default LinkItem;
