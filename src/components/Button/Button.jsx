function Button({ children = 'Explore' }) {
  return (
    <button className="btn cursor-pointer transition-colors">{children}</button>
  );
}

export default Button;
