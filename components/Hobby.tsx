import H2 from './UI/H2';
import Section from './UI/Section';

const Hobby: React.FC = () => (
  <Section>
    <H2 color="text-teal-700" subTitle="Outside Tech" />
    <p>
      Reading <span className="text-orange-400">50+ books</span> every years -
      <span className="text-slate-600"> started from 2018</span>
    </p>
    <p>
      Spend time with <span className="text-fuchsia-500">me and my family</span>
    </p>
    <p>
      <span className="text-orange-400">Mentoring</span> junior developers
      <span className="text-purple-600"> in-person</span>
    </p>
  </Section>
);

export default Hobby;
