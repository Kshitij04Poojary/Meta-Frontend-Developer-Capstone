import './App.css';
import Nav from './components/Nav';
import { Menu } from './components/Menu';
import { Main } from './components/Main';
import {Footer} from './components/Footer';
import { TestimonialCard } from './components/TestimonialCard';
function App() {
  return (
    <>
    <Nav/>
    <Main/>
    <Menu/>
    <TestimonialCard/>
    <Footer/>
    </>
  );
}

export default App;
