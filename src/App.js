import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
