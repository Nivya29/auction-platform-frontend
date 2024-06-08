
import PropTypes from 'prop-types';
import backgroundImg from '../assets/img1.jpg';

const BackgroundContainer = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: `url(${backgroundImg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        }}
      />

      <div
        style={{
          position: 'relative', 
          zIndex: 1, 
          textAlign: 'center',
          color: '#fff',
          padding: '2rem',
        }}
      >
        {children}
      </div>
    </div>
  );
};
BackgroundContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default BackgroundContainer;
