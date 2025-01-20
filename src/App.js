import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';


function App() {
  return (
    <div className="">
      
      <Navigation/>
      <div>
        <Product/>
        {/**<HomePage/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
