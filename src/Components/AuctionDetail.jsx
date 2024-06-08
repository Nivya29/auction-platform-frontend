import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AuctionDetail = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await axios.get(`/api/auctions/${id}`);
      setAuction(response.data);
    };

    fetchAuction();
  }, [id]);

  if (!auction) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>
      <p>Current Bid: ${auction.currentBid}</p>
    </div>
  );
};

export default AuctionDetail;
