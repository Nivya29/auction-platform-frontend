import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store'; 
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AuctionPage from './Pages/AuctionPage';
import SellerDashboardPage from './Pages/SellerDashboardPage';
import UserDashboardPage from './Pages/UserDashboardPage'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentComponent from './Components/ParentComponent';

const App = () => {
  const userId = '{userId}'; 

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/auctions" element={<AuctionPage />} />
            <Route path="/seller-dashboard" element={<SellerDashboardPage />} />
            <Route path="/user-dashboard" element={<UserDashboardPage userId={userId} />} />
          </Routes>
        </main>
        <Footer />
        <ParentComponent />
      </Router>
    </Provider>
  );
};

export default App;
