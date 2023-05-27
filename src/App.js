
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
 
      <Header />
      {/* <PageContent /> */}
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
