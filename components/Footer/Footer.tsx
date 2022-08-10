import FooterLink from './FooterLink';

export const Footer: React.FC = () => (
  <footer className="w-3/6 border-t border-blue-400">
    <p className="text-center text-base py-3">
      Powered by <FooterLink href="https://nextjs.org/" title="Next.js" /> and
      Deployed on <FooterLink href="https://vercel.com/" title="Vercel" />
    </p>
  </footer>
);
