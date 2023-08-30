import React from 'react';
import './MenuContainer.css';

const MenuContainer = () => {
  const menuItems = [
    {
      image: 'photo1.png',
      name: 'Dish 1',
      price: '$10.99',
      description: 'A delicious dish with a mix of flavors and ingredients.',
    },
    {
      image: 'photo2.png',
      name: 'Dish 2',
      price: '$12.99',
      description: 'A savory dish that combines traditional and modern elements.',
    },
    {
      image: 'photo3.png',
      name: 'Dish 3',
      price: '$8.99',
      description: 'A flavorful dish that captures the essence of Mediterranean cuisine.',
    },
  ];

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-image">
              <img src={require(`../images/${item.image}`)} alt={item.name} />
            </div>
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
