import * as React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Container from './components/Container/Container';
import HotelProvider from './context/ContextHotel';
import properties from './data';
import Footer from './components/Footer/Footer';
import TopScrollBtn from './components/TopScrollBtn/TopScrollBtn';

function App() {
  const [hotelData, setHotelData] = React.useState(properties);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <HotelProvider value={{ hotelData, setHotelData }}>
      <header
        className={`sticky z-50 h-0 top-0 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow h-32 text-black'
            : 'bg-transparent text-white'
        }`}
      >
        <Container classes="h-32">
          <NavBar scrolled={scrolled} />
        </Container>
      </header>

      <main>
        <Home />
        <TopScrollBtn />
      </main>

      <Footer />
    </HotelProvider>
  );
}

export default App;
