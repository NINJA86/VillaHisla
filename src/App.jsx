import * as React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './pages/Home';
import Container from './components/Container/Container';
import HotelProvider from './context/ContextHotel';
import properties from './data';

function App() {
  const [hotelData, setHotelData] = React.useState(properties);
  return (
    <HotelProvider value={{ hotelData, setHotelData }} key={484}>
      <header className="sticky z-50 top-0">
        <Container classes="h-0">
          <NavBar />
        </Container>
      </header>
      <main>
        <Home />
      </main>
      <footer></footer>
    </HotelProvider>
  );
}

export default App;
