import './App.css';
import './resources/fonts/segoe-ui-4-cufonfonts-webfont/style.css';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Header/Header';

const theme = createTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    text: {
      primary: "#262626",
      secondary: "#647787",
    },
  },
});

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
      </div>
    </ThemeProvider>
  );
}

export default App;
