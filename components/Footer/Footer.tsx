import FooterLink from './FooterLink';

export const Footer: React.FC = () => (
  <footer className="w-11/12 lg:w-3/6 border-t border-blue-400">
    <p className="text-center text-xs lg:text-base py-3">
      This site is powered by{' '}
      <FooterLink href="https://nextjs.org/" title="Next.js" /> &amp; deployed
      on <FooterLink href="https://vercel.com/" title="Vercel" />
    </p>
  </footer>
);
