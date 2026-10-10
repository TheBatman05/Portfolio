import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="Home">
          <Hero />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Projects">
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;
