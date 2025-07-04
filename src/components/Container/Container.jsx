import { twMerge } from 'tailwind-merge';

function Container({ classes = '', children }) {
  return (
    <div className={twMerge('container mx-auto', classes)}>{children}</div>
  );
}

export default Container;
