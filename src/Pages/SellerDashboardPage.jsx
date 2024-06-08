import { useState } from 'react';
import axios from 'axios';
import './SellerDashboard.css';
import BackgroundContainer from '../Components/BackgroundContainer';

const SellerDashboardPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startingBid: 0,
    endDate: '',
    category: '',
    images: null  
  });

  const handleChange = (e) => {
    
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();  
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('startingBid', formData.startingBid);
      formDataToSend.append('endDate', formData.endDate);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('images', formData.images);  

      const response = await axios.post('https://auction-platform-backend.onrender.com', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'  
        }
      });
      console.log('Auction created:', response.data);
      
      setFormData({
        title: '',
        description: '',
        startingBid: 0,
        endDate: '',
        category: '',
        images: null
      });
    } catch (error) {
      console.error('Error creating auction:', error);
    }
  };

  return (
    <BackgroundContainer>
      <div className="seller-dashboard-container">
        <h2>Create Auction</h2>
        <form onSubmit={handleSubmit} className="auction-form">
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
          <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
          <input type="number" name="startingBid" value={formData.startingBid} onChange={handleChange} placeholder="Starting Bid" />
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" />
          <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
          <input type="file" name="images" onChange={handleChange} accept="image/*" /> {/* Image upload input */}
          <button type="submit">Create Auction</button>
        </form>
      </div>
    </BackgroundContainer>
  );
};

export default SellerDashboardPage;
