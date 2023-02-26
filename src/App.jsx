import './styles/App.css';
import NabBar from './components/NabBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProjectContainer from './components/ProjectContainer';

function App() {
  return (
    <div className="App">
      <NabBar />
      <Hero />
      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;
