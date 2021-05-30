import Header from './components/Header/Header';
import ThemeContextProvider from './context/themeContext';
import Router from './pages/Router';

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Router />
    </ThemeContextProvider>
  );
}

export default App;
