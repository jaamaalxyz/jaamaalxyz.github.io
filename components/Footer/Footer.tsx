import FooterLink from './FooterLink';

export const Footer: React.FC = () => (
  <footer className="w-full lg:w-5/8 border-t border-teal-400">
    <p className="text-center text-xs md:text-lg py-3">
      Powered by <FooterLink href="https://nextjs.org/" title="Next.js" /> and
      Deployed on <FooterLink href="https://vercel.com/" title="Vercel" />
    </p>
  </footer>
);
