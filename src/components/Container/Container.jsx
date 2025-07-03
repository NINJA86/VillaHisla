import { twMerge } from "tailwind-merge";

function Container({ className = '', children }) {
  return (
    <div className={twMerge("container mx-auto", className)}>
      {children}
    </div>
  );
}

export default Container;
