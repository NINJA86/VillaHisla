import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Container from "./components/Container/Container";
import HotelProvider from "./context/ContextHotel";
import properties from "./data";

function App() {
  const [hotelData, setHotelData] = useState(properties);

  return (
    <HotelProvider value={{ hotelData, setHotelData }}>
      <header className="sticky z-50 top-0">
        <Container className="h-0">
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
