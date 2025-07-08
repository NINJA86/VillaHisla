function LogoBar({ scrolled }) {
  return (
    <img
      src={
        scrolled
          ? `https://startersites.io/blocksy/real-estate/wp-content/uploads/2023/05/logo-dark.svg`
          : 'https://startersites.io/blocksy/real-estate/wp-content/uploads/2023/05/logo-light.svg'
      }
      alt="Logo"
      className="w-[150px] h-[28px] "
    />
  );
}

export default LogoBar;
