import Link from 'next/link';
import H2 from './UI/H2';
import Section from './UI/Section';

const Contact: React.FC = () => (
  <Section>
    <H2 subTitle="Talk to me" color="text-rose-700" />
    <p>
      Write an email to{' '}
      <a href="mailto:jaamaalxyz@gmail.com" className="text-cyan-500">
        jaamaalxyz@gmail.com
      </a>
    </p>
    <p>
      Follow me on{' '}
      <Link href={'https://twitter.com/jaamaalxyz'}>
        <a className="text-blue-500 font-bold">Twitter</a>
      </Link>
    </p>
    <p>
      Connect me on{' '}
      <Link href={'https://facebook.com/jaamaalxyz'}>
        <a className="text-blue-600 font-bold">Facebook</a>
      </Link>
    </p>
  </Section>
);

export default Contact;
