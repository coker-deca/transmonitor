import './App.css';
import './resources/fonts/segoe-ui-4-cufonfonts-webfont/style.css';

import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header/Header';

const notifications = [
  "registration success",
  "profile updated successfully",
  "Trasfer successful",
];

function App() {
  const searchFieldChange = () => {};
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header
          searchFieldChange={searchFieldChange}
          notifications={notifications}
        />
      </div>
    </>
  );
}

export default App;
