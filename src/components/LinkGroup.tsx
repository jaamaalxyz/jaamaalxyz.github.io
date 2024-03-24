import React from 'react';
import LinkItem from './LinkItem';

function LinkGroup() {
  return (
    <ul className="flex gap-5">
      <LinkItem title={'Blog'} link={'/blog'} />
      <LinkItem title={'Works'} link={'/works'} />
      <LinkItem title={'About'} link={'/about'} />
    </ul>
  );
}

export default LinkGroup;
