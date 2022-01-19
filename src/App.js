
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
