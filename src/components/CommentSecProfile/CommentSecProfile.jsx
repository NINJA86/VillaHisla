import React from 'react';

function CommentSecProfile({
  img,
  name,
  desc = 'Integer ac interdum lacus. Nunc porta semper lacus a varius Pellentesque habitant morbi tristique senectus.',
  occupation = 'Consultant',
}) {
  return (
    <div
      className="relative w-full border-b
border-[#ffffff1a] py-20  rounded-lg overflow-hidden flex items-center gap-8"
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="relative w-[272px] h-[310px] bg-[url('/img/person/home-testimonial-user-1.jpg')] bg-cover bg-center bg-[#0b453fb0]"
      ></div>

      <div className="p-4 max-w-80">
        <span className="text-xl font-bold block">{name}</span>
        <p className="my-4 ">{desc}</p>
        <span className="text-sm ">{occupation}</span>
      </div>
    </div>
  );
}

export default CommentSecProfile;
