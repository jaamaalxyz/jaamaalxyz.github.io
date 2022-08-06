import FooterLink from './FooterLink';

export const Footer: React.FC = () => (
  <footer className="sm:w-full xl:w-8/12 mx-auto sm:my-3 md:my-5 lg:my-8">
    <p className="border-t-2">
      Powered by <FooterLink href="https://nextjs.org/" title="Next.js" /> and
      Deployed on <FooterLink href="https://vercel.com/" title="Vercel" />
    </p>
  </footer>
);
