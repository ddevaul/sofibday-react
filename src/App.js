import logo from './logo.svg';
import './App.css';
import CarouselFilled from "./components/Carousel"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="carousel-container">
       <CarouselFilled className="carousel"></CarouselFilled>
      </div>
    </div>
  );
}

export default App;
