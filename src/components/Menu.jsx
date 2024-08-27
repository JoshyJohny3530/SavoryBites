import React, { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('drinks');

    const categories = [
        { id: 'drinks', name: 'Drinks', image: require('../assets/drink1-1.jpg') },
        { id: 'maincourse', name: 'Main Course', image: require('../assets/main1.jpg') },
        { id: 'starters', name: 'Starters', image: require('../assets/starters1.jpg') },
    ];

    const items = {
        drinks: [
            { id: 1, name: 'Cowboy Colada', price: '$14.50', description: 'Colada-Style Cocktail', image: require('../assets/drink1-1.jpg') },
            { id: 2, name: 'Iced Pistachio Latte', price: '$12.00', description: 'Cool & Refreshing', image: require('../assets/drink2.jpg') },
            { id: 3, name: 'Thai Spice Sweet Tea', price: '$19.50', description: 'Lighter, More Refreshing, and Less Sweet', image: require('../assets/drink3.jpg') },
            { id: 4, name: 'Strawberry Iced Tea', price: '$14.00', description: 'Cool and Refreshing', image: require('../assets/drink4.jpg') },
            { id: 5, name: 'Tequila Old Fashioned', price: '$15.50', description: 'Tequila Lover`s Delight', image: require('../assets/drink5.jpg') },
            { id: 6, name: 'Spicy Mango Margarita', price: '$12.00', description: 'Sweet, Spicy, and Tangy', image: require('../assets/drink6.jpg') }
        ],
        maincourse: [
            { id: 1, name: 'Lemon Garlic Parmesan Chicken', price: '$30.00', description: 'Family Favorite in One Pan', image: require('../assets/main1.jpg') },
            { id: 2, name: 'Beef Birria Queso', price: '$28.00', description: 'Trendiest Taco Treat', image: require('../assets/main2.jpg') },
            { id: 3, name: 'Chicken Chalupas', price: '$22.00', description: 'South-of-the-Border Delight', image: require('../assets/main3.jpg') },
            { id: 4, name: 'Fresh Tomato Curry', price: '$23.50', description: 'Versatile Tomato Curry Sauce', image: require('../assets/main4.jpg') },
            { id: 5, name: 'Chicken Ricotta Meatballs', price: '$20.00', description: 'Light and Flavorful Meatballs', image: require('../assets/main5.jpg') },
            { id: 6, name: 'Shrimp Biryani', price: '$18.00', description: 'Aromatic and Comforting Biryani', image: require('../assets/main6.jpg') }
        ],
        starters: [
            { id: 1, name: 'Tomato bruschetta', price: '$25.00', description: 'Fresh & Flavorful Classic', image: require('../assets/starters1.jpg') },
            { id: 2, name: 'Smoked mackerel', price: '$16.00', description: 'Effortless Entertaining', image: require('../assets/starters2.jpg') },
            { id: 3, name: 'Buffalo cauliflower wings', price: '$24.00', description: 'Veggie Twist on a Classic Buffalo', image: require('../assets/starters3.jpg') },
            { id: 4, name: 'Padron peppers', price: '$12.00', description: 'Quick and Simple Spanish Delight', image: require('../assets/starters4.jpg') },
            { id: 5, name: 'Mackerel paté', price: '$15.00', description: 'Easy Smoked Mackerel Paté', image: require('../assets/starters5.jpg') },
            { id: 6, name: 'Vegetable gyoza', price: '$18.00', description: 'Versatile Veggie Gyoza', image: require('../assets/starters6.jpg') }
        ]
    };

    return (
        <div className="menu-page">
            <section className="hero-section">
                <div className="hero-section__content">
                    <h1>Menu</h1>
                </div>
            </section>

            <div className="menu-outer">
                <div className="menu-categories">
                    {categories.map(category => (
                        <div
                            key={category.id}
                            className={`menu-category ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            <h3>{category.name}</h3>
                            <img
                                src={category.image}
                                alt={category.name}
                            />
                        </div>
                    ))}
                </div>

                <div className="menu-items">
                    {items[selectedCategory].map(item => (
                        <div key={item.id} className="menu-item">
                            <img src={item.image} alt={item.name} />
                            <div className="menu-item__details">
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <p><b>{item.price}</b></p>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;
