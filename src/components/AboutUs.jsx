import React from 'react';
import '../styles/AboutUs.css';
import { FaUser, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="hero-section">
                <div className="hero-section__content">
                    <h1>About Us</h1>
                </div>
            </section>

            <section className="about-details">
                <div className="about-details_outer">
                    <div className="about-details__text">
                        <h5>Heart of Canada's Best</h5>
                        <h2>What we're all about</h2>
                        <p>
                            Our only Aim, Happy Customers." With over 25 years of culinary expertise, we at SavoryBites believe that at the end of the day, it all comes down to great food. But to create those memorable meals, it takes a dedicated, knowledgeable team with a commitment to quality and sustainability. We craft delicious dishes for food lovers who appreciate exceptional flavors. Our team of passionate food enthusiasts celebrates the art of fine dining and is here to provide a variety of services to both our new and loyal customers. All your favorite dishes, delivered straight to you.
                        </p>
                        <Link to="/about" className="about-details__button btn">
                            Learn Menu
                        </Link>
                    </div>
                    <div className="about-details__image">
                        <img src={require('../assets/Whatwe.jpg')} alt="about details" />
                    </div>
                </div>
            </section>

            <section className="services-details">
                <div className="services-details_outer">
                    <div className="services-details__image">
                        <img src={require('../assets/about-service.jpg')} alt="Services" />
                    </div>
                    <div className="services-details__text">
                        <h2>We cater to both new and loyal customers with a wide range of services.</h2>
                        <p>
                            Whether you're joining us for the first time or returning for another delightful meal, SavoryBites is committed to providing an exceptional dining experience tailored to your needs.
                        </p>
                        <Link to="/about" className="services-details__button btn">
                            Discover More
                        </Link>
                    </div>
                </div>
            </section>

            <div className="order-section">
                <div className="order-section__content">
                    <h5>SAVORYBITES SHOP</h5>
                    <h2>All your favorites, delivered straight to you.<br /> Start your order now</h2>
                    <p>Craving delicious flavors but want something lighter? Explore our menu for healthier options or ask us how we prepare your favorite dishes. At SavoryBites, we’re here to satisfy your cravings, your way.</p>
                    <Link to="/contact" className="order-section__button btn">
                        Find near you
                    </Link>
                </div>
            </div>

            <div className="team-section">
                <div className="team-member">
                    <div className="team-member__icon">
                        <FaUser style={{ fontSize: 60, color: "#e75728" }} />
                    </div>
                    <h3 className="team-member__name">Nibin M</h3>
                    <p className="team-member__role">CEO - SavoryBites</p>
                    <div className="team-member__socials">
                        <a href="mailto:nibinm@gmail.com">
                            <FaEnvelope style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://facebook.com">
                            <FaFacebook style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://twitter.com">
                            <FaTwitter style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member__icon">
                        <FaUser style={{ fontSize: 60, color: "#e75728" }} />
                    </div>
                    <h3 className="team-member__name">Aimy Shaju</h3>
                    <p className="team-member__role">Manager - Kitchener</p>
                    <div className="team-member__socials">
                        <a href="mailto:aimys@gmail.com">
                            <FaEnvelope style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://facebook.com">
                            <FaFacebook style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://twitter.com">
                            <FaTwitter style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <div className="team-member__icon">
                        <FaUser style={{ fontSize: 60, color: "#e75728" }} />
                    </div>
                    <h3 className="team-member__name">Joshy Johny</h3>
                    <p className="team-member__role">Manager - Cambridge</p>
                    <div className="team-member__socials">
                        <a href="mailto:joshy@gmail.com">
                            <FaEnvelope style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://facebook.com">
                            <FaFacebook style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://twitter.com">
                            <FaTwitter style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                        <a href="https://instagram.com">
                            <FaInstagram style={{ fontSize: 20, color: "#3a3a3a" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;