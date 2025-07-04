import React from 'react';

import CommentSecAdv from '../CommentSecAdv/CommentSecAdv';
import CommentSecProfile from '../CommentSecProfile/CommentSecProfile';
import CommentSecLogo from '../CommentSecLogo/CommentSecLogo';

function CommentSec() {
  return (
    <div className="text-white">
      <h2 className="capitalize  text-4xl mb-12">
        what our customer say about us
      </h2>
      <div
        className="flex justify-between border-b
border-[#ffffff1a] pb-16"
      >
        <CommentSecAdv
          bg="/img/bgs/testimonials-section-img-1.jpg"
          title="Malesuada Pharetra Augue Bibendum"
          txt="Lorem ipsum dolor sit , sth but wrong"
        />
        <CommentSecAdv
          bg="/img/bgs/testimonials-section-img-2.jpg"
          title="Mauris Scelerisque Phare Lobortis"
          txt="Lorem ipsum dolor sit , sth but wrong"
        />
      </div>
      <div className="flex items-center justify-between">
        <CommentSecProfile
          key={'Julie'}
          img={'img/person/home-testimonial-user-1.jpg'}
          name={'Julie McCan'}
        />
        <CommentSecProfile
          key={'Rodger'}
          img={'img/person/home-testimonial-user-2.jpg'}
          name={'Rodger Gordon'}
          occupation={'Lawyer'}
        />
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 6 }, () => (
          <CommentSecLogo />
        ))}
      </div>
    </div>
  );
}

export default CommentSec;
