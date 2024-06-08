import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuctions } from '../Redux/AuctionSlice';
import { Link } from 'react-router-dom';
import BackgroundContainer from '../Components/BackgroundContainer';

const UserDashboardPage = ({ userId }) => {
  const dispatch = useDispatch();
  const auctions = useSelector((state) => state.auctions.auctions);
  const status = useSelector((state) => state.auctions.status);
  const error = useSelector((state) => state.auctions.error);

  useEffect(() => {
    if (userId) {
      dispatch(fetchAuctions(userId));
    }
  }, [dispatch, userId]);

  
  if (status === 'loading') {
    return (
      <BackgroundContainer>
        <div className="container mt-4">
          <p>Loading auctions...</p>
        </div>
      </BackgroundContainer>
    );
  }

  if (status === 'failed') {
    return (
      <BackgroundContainer>
        <div className="container mt-4">
          <p>Error: {error}</p>
        </div>
      </BackgroundContainer>
    );
  }

  
  if (!Array.isArray(auctions) || auctions.length === 0) {
    return (
      <BackgroundContainer>
        <div className="container mt-4">
          <h2>User Dashboard</h2>
          <p className="text-center">Welcome, User!</p>
          <h3>Your Auctions</h3>
          <p>No auctions found for this user.</p>
          <Link to="/auctions" className="btn btn-primary">View All Auctions</Link>
        </div>
      </BackgroundContainer>
    );
  }

  return (
    <BackgroundContainer>
      <div className="container mt-4">
        <h2>User Dashboard</h2>
        <p className="text-center">Welcome, User!</p>
        <h3>Your Auctions</h3>
        <ul className="list-group">
          {auctions.map((auction) => (
            <li key={auction.id} className="list-group-item">
              <strong>{auction.title}</strong> - {auction.description}
            </li>
          ))}
        </ul>
        <Link to="/auctions" className="btn btn-primary mt-3">View All Auctions</Link>
      </div>
    </BackgroundContainer>
  );
};

UserDashboardPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserDashboardPage;
