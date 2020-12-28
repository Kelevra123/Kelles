import './App.css';
import Categories from './components/categories';
import Header from './components/header';
import MobileToolbar from './components/mobileToolbar';
import Slider from './components/slider';

function App() {
  return (
    <>
      <Header/>
      <MobileToolbar/>
      <Slider/>
      <Categories/>
  </>
  );
}

export default App;
