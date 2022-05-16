import './App.css';
import './fonts/segoe-ui-4-cufonfonts-webfont/style.css';

import CssBaseline from '@mui/material/CssBaseline';

import { Logo } from './components/ui/Logo';
import Search from './components/ui/Search/Search';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Logo />
        <Search />
      </div>
    </>
  );
}

export default App;
