import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

function CommentSec() {
  return (
    <div className="text-white">
      <h2 className="capitalize  text-4xl">what our customer say about us</h2>
      <div className="flex justify-between">
        <div className="bg-[url()]">
          <a>Malesuada Pharetra Augue Bibendum</a>
          <p className="mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <button>
            <BiRightArrowAlt />
          </button>
        </div>

        <div className="bg-[url()]">
          <a>Malesuada Scleresque Augue Lobortis</a>

          <p className="mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <button>
            <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentSec;
