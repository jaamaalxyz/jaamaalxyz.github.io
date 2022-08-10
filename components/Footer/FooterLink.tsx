import Link from 'next/link';

type FooterLinkType = {
  href: string;
  title: string;
};

const FooterLink: React.FC<FooterLinkType> = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <a target={'_blank'} className="bg-slate-900 hover:border-b-2">
        {title}
      </a>
    </Link>
  );
};

export default FooterLink;
