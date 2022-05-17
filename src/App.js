import './App.css';
import './resources/fonts/segoe-ui-4-cufonfonts-webfont/style.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import theme from './constants/themes';

const notifications = [
  "registration success",
  "profile updated successfully",
  "Trasfer successful",
];

function App() {
  const searchFieldChange = () => {};
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header
          searchFieldChange={searchFieldChange}
          notifications={notifications}
        />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
