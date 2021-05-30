import ThemeContextProvider from './context/themeContext';
import Router from './pages/Router';

function App() {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
}

export default App;
