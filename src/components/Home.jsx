import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaTwitter, FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
    const [showScroll, setShowScroll] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: require('../assets/corosel-1.jpg'),
            heading: 'Gourmet Excellence',
            text: 'SavoryBites is the place where you can indulge in flavorful dishes from the worlds finest culinary traditions...',
        },
        {
            image: require('../assets/corosel-2.jpg'),
            heading: 'A World of Flavors',
            text: 'Experience a world of flavors at SavoryBites, where every dish is a masterpiece from renowned kitchens worldwide',
        }
    ];

    const testimonials = [
        {
            name: 'Nibin',
            image: require('../assets/human.png'),
            text: 'This place is a hidden gem! The ambiance was cozy, and the food was absolutely delicious. I loved the attention to detail in every dish, and the service was top-notch. I’ll definitely be coming back!',
        },
        {
            name: 'Aimy',
            image: require('../assets/human.png'),
            text: 'A delightful experience from start to finish. The flavors were exquisite, and the presentation was beautiful. The staff made us feel right at home. Highly recommend trying the chef`s special!',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    return (
        <div className="home">
            <div className="carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel__item ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="carousel__caption">
                            <h2>{slide.heading}</h2>
                            <p>{slide.text}</p>
                            <Link to="/about" className="about-section__button btn">Read More</Link>
                        </div>
                    </div>
                ))}
                <div className="carousel__indicators">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>

            <section className="about-section">
                <div className="about-section_outer">
                    <div className="about-section__content">
                        <h5>Best For You</h5>
                        <h2>Who we are.</h2>
                        <p>
                            At SavoryBites, we believe in the power of flavors to create memories. From our signature dishes inspired by international cuisines to our chef's specials crafted with creativity and love, each bite is a journey of culinary delight
                        </p>
                        <Link to="/about" className="about-section__button btn">Learn More</Link>
                    </div>
                    <div className="about-section__images">
                        <img src={require('../assets/about-image1.jpg')} alt="about Image 1" />
                        <img src={require('../assets/about-image2.jpg')} alt="about Image 2" />
                        <img src={require('../assets/about-image3.jpg')} alt="about Image 3" />
                    </div>
                </div>
            </section>

            <section className="products-section">
                <h5>Our Services</h5>
                <h2>Our Products</h2>
                <div className="products-section__cards">
                    <div className="products-section__card">
                        <img src={require('../assets/product1.jpg')} alt="Product 1" />
                        <h3>Drinks</h3>
                        <p>Refreshing beverages including soft drinks, juices, cocktails, and a selection of wines and beers.</p>
                    </div>
                    <div className="products-section__card">
                        <img src={require('../assets/product2.jpg')} alt="Product 2" />
                        <h3>Starters</h3>
                        <p>Tasty appetizers like calamari, bruschetta, salads, nachos, and chicken wings.</p>
                    </div>
                    <div className="products-section__card">
                        <img src={require('../assets/product3.jpg')} alt="Product 3" />
                        <h3>Main Course</h3>
                        <p>Diverse entrees such as steaks, seafood, burgers, pasta, and vegetarian options.</p>
                    </div>
                </div>
            </section>

            <section className="gallery-section">
                <h5>Gallery</h5>
                <h2>Savorybites Gallery</h2>
                <div className="gallery-section__images">
                    <img src={require('../assets/gallery1.jpg')} alt="Gallery Image 1" />
                    <img src={require('../assets/gallery2.jpg')} alt="Gallery Image 2" />
                    <img src={require('../assets/gallery3.jpg')} alt="Gallery Image 3" />
                    <img src={require('../assets/gallery4.jpg')} alt="Gallery Image 4" />
                </div>
                <br />
                <br />
                <Link to="/menu" className="gallery-section__button btn">
                    View Menu
                </Link>
            </section>

            <section className="testimonials-section">
                <h5>Testimonials</h5>
                <h2>What our Customers say</h2>
                <div className="testimonials-section__content">
                    <FaArrowLeft className="testimonials-section__arrow" onClick={prevTestimonial} />
                    <div className="testimonials-section__testimonial">
                        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                        <h3>{testimonials[currentIndex].name}</h3>
                        <p>{testimonials[currentIndex].text}</p>
                        <div className="testimonials-section__socials">
                            <FaTwitter />
                            <FaFacebookF />
                            <FaInstagram />
                        </div>
                    </div>
                    <FaArrowRight className="testimonials-section__arrow" onClick={nextTestimonial} />
                </div>
            </section>

        </div>
    );
};

export default Home;
