import React from 'react';
import { SiTicktick } from 'react-icons/si';

function OptionsPlaceSuggestion({
  children = `   Praesent sapien massa, convallis a pellentesque nec, egestas non nisi
        sed porttitor lectus nibh.`,
}) {
  return (
    <li className="flex gap-5">
      <SiTicktick className="tick" />
      <span className="text-text-green max-w-[30rem]">{children}</span>
    </li>
  );
}

export default OptionsPlaceSuggestion;
