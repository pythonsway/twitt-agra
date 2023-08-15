import './App.css';
import Footer from './components/Footer';
import Frame from './components/Frame';
import Title from './components/Title';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Title />
        <Frame />
        <Footer />
      </div>
    </div>
  );
}

export default App;
