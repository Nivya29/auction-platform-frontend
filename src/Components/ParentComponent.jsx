import PropTypes from 'prop-types';

const ParentComponent = ({ children }) => {
  return (
    <div>
      
      {children}
    </div>
  );
};

ParentComponent.propTypes = {
  children: PropTypes.node,
};

export default ParentComponent;
