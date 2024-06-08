import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap'; 
import './AuctionList.css';

const AuctionList = () => {
  const [auctions, setAuctions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/auctions');
        setAuctions(response.data);
      } catch (error) {
        console.error('Error fetching auctions:', error);
        setError('Failed to fetch auctions. Please try again later.');
      }
    };

    fetchAuctions();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Auctions</h2>
      <Row xs={1} md={2} lg={3} className="g-4"> 
        {auctions.map((auction) => (
          <Col key={auction._id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{auction.title}</Card.Title>
                <Card.Text>{auction.description}</Card.Text>
                <Card.Text>Starting Bid: ${auction.startingBid}</Card.Text>
                <Card.Text>End Date: {new Date(auction.endDate).toLocaleDateString()}</Card.Text>
                <Card.Text>Category: {auction.category}</Card.Text>
                <Button variant="primary">Place Bid</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AuctionList;
