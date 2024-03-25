import { Button } from 'react-bootstrap';
import React from 'react';


const Navbar = () => {
  const handleGoToCart = () => {
    console.log('Go to cart');
    // Add your logic here to navigate to the cart page
  };

  return (
    <div>
      <div className='nav-container'>
        <div>Cart App</div>
        <div>All Products</div>
        <div>
            Cart : 
          <Button className='btn-varient-primary ' onClick={handleGoToCart}> Go to cart </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;