import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Gallery from "./components/gallery/Gallery";
import Reviews from "./components/reviews/Reviews";
import Hero from "./components/hero/Hero";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <About/>
            <Service/>
            <Gallery/>
            <Reviews/>
        </div>
    );
}

export default App;
