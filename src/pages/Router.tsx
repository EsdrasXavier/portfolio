import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import About from './about/About';
import Home from './home/Home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Home />
      <Header />
      <About />
    </BrowserRouter>
  );
};

export default Router;
