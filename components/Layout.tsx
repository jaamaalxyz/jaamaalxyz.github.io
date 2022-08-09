import React from 'react';
import FooterLink from './Footer/FooterLink';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC = () => (
  <div className="bg-[#1A202C] text-[#f2f2f9] flex flex-col items-center space-y-4">
    <header className="w-3/6">
      <section className="py-20">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold lg:font-extrabold text-blue-500 md:text-green-500 xl:text-blue-600">
          Md. Jamal Uddin
        </h1>
        <p className="pt-2 pl-1 text-sm md:text-lg">
          Full Stack Software Developer -{' '}
          <span className="text-blue-400">
            React <span className="text-blue-100">(Native)</span>
          </span>{' '}
          | <span className="text-green-500">Node.js</span> |{' '}
          <span className="text-blue-600">TypeScript</span>
        </p>
      </section>
      <section className="pl-1">
        <p>
          I started off my career as a{' '}
          <span className="text-teal-200">Planning Assistant</span>
        </p>
        <p>
          I transitioned to{' '}
          <span className="text-cyan-300">Network Engineering</span>
        </p>
        <p>
          I fell in love with{' '}
          <span className="text-purple-300">Databases &amp; Data Analysis</span>
        </p>
        <p className="text-orange-700">We broke up</p>
        <p className="text-green-400">It was mutual</p>
        <p>
          I transitioned to{' '}
          <span className="text-blue-600">Full Stack (React/Node.js)</span>{' '}
          software development &amp;{' '}
          <span className="text-teal-500">never looked back</span>
        </p>
      </section>
    </header>
    <main className="w-3/6">
      <section className="py-10">
        <h2 className="text-5xl font-extrabold text-green-500 py-10">
          Guiding Philoshophies
        </h2>
        <div className="pl-1">
          <p>
            There&apos;s always a <span className="text-orange-300">kind</span>{' '}
            alternative
          </p>
          <p>
            Use <span className="text-amber-500">social media</span>{' '}
            <span className="text-orange-500">wisely</span>
          </p>
          <p>
            I prioritize <span className="text-blue-500">deep work</span>
          </p>
          <p>
            Keep <span className="text-green-500">learning</span>
          </p>
          <p>Walking</p>
          <p>Always give back</p>
          <p>
            The art of <span className="text-purple-500">being calm</span> is
            priceless
          </p>
        </div>
      </section>
    </main>
    <footer className="w-3/6 border-t border-blue-400">
      <p className="text-center text-base py-3">
        Powered by <FooterLink href="https://nextjs.org/" title="Next.js" /> and
        Deployed on <FooterLink href="https://vercel.com/" title="Vercel" />
      </p>
    </footer>
  </div>
);

export default Layout;
