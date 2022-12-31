import "./App.css";
import Food from "./components/Food";
import HeadlineCart from "./components/HeadlineCart";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCart />
      <Food />
    </div>
  );
}

export default App;
