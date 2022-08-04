import FooterLink from './FooterLink';

export const Footer: React.FC = () => (
  <footer className="sm:w-full xl:w-8/12 my-0 mx-auto">
    <p className="border-t-2">
      Powered by <FooterLink href="https://nextjs.org/" title="Next.js" /> and
      Deployed on <FooterLink href="https://vercel.com/" title="Vercel" />
    </p>
  </footer>
);
