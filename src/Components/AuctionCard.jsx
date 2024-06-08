import PropTypes from 'prop-types'; 
import axios from 'axios';

const AuctionCard = ({ auction, fetchAuctions }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5005/api/auctions/${auction._id}`);
      fetchAuctions(); // Refresh auctions after deletion
    } catch (error) {
      console.error('Error deleting auction:', error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">{auction.title}</div>
      <div className="card-body">
        <p className="card-text">{auction.description}</p>
        <p className="card-text">Current Bid: ${auction.currentBid}</p>
        <p className="card-text">Ends: {new Date(auction.endTime).toLocaleString()}</p>
        <button className="btn btn-danger" onClick={handleDelete}>Delete Auction</button>
      </div>
    </div>
  );
};

AuctionCard.propTypes = {
  auction: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currentBid: PropTypes.number.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired,
  fetchAuctions: PropTypes.func.isRequired,
};

export default AuctionCard;
