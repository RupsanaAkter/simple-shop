
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      {/* <AppHeader />
      <PageContent /> */}
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
