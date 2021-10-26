import Home from './pages/home'
import { MarvelProvider } from './providers/marvel-provider';
function App() {
  return (
    <MarvelProvider>
    <Home/>
    </MarvelProvider>
  );
}

export default App;
