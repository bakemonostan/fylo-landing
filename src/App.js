// import Hero from './components/Hero';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SectionTwo from './components/SectionTwo';

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        {/* <SectionTwo /> */}
      </main>
    </div>
  );
};
export default App;
