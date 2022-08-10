import React from 'react';

const Philosophies: React.FC = () => (
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
);

export default Philosophies;
