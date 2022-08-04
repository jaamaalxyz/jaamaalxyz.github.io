import Link from 'next/link';

type FooterLinkType = {
  href: string;
  title: string;
};

const FooterLink: React.FC<FooterLinkType> = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <a
        target={'_blank'}
        className="border-b-2 bg-slate-900 font-bold hover:text-orange-700 hover:bg-emerald-500 hover:bg-gradient-to-tr from-emerald-500 to-slate-900"
      >
        {title}
      </a>
    </Link>
  );
};

export default FooterLink;
