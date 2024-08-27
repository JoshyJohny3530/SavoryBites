import React from 'react';
import '../styles/Contact.css';
import { FaUser, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaStore } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="hero-section">
                <div className="hero-section__content">
                    <h1>Contact Us</h1>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="contact-form-section_outer">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184092.9319266019!2d-80.54893822008764!3d43.45163902107186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8a673d1d03b7%3A0x79d238f16732c8e4!2sKitchener%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1692047681375!5m2!1sen!2sus"
                            title="Google Maps"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="form">
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Your name" />
                        </div>

                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Your email address" />
                        </div>

                        <div className="form-group">
                            <textarea id="message" name="message" placeholder="Your message"></textarea>
                        </div>

                        <div className="form-button">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="store-section">
                <h2 className="store-section__heading">Our Stores</h2>
                <div className="store-list">
                    <div className="store">
                        <div className="store__icon">
                            <FaStore style={{ fontSize: 60, color: "#e75728" }} />
                        </div>
                        <h3 className="store__name">Kitchener Store</h3>
                        <p className="store__location">Location: Fairway</p>
                        <p className="store__address">Address: 195 Fairway South</p>
                        <p className="store__postal">Postal Code: N2C4S5</p>
                        <p className="store__phone">Phone No: (516) 529 5461</p>
                        <p className="store__email">E-mail: info@fwysavorybites.com</p>
                    </div>
                    <div className="store">
                        <div className="store__icon">
                            <FaStore style={{ fontSize: 60, color: "#e75728" }} />
                        </div>
                        <h3 className="store__name">Cambridge Store</h3>
                        <p className="store__location">Location: Cambridge</p>
                        <p className="store__address">Address: 286 Elgin North</p>
                        <p className="store__postal">Postal Code: N2F6Y4</p>
                        <p className="store__phone">Phone No: (466) 128 4875</p>
                        <p className="store__email">E-mail: info@cmsavorybites.com</p>
                    </div>
                    <div className="store">
                        <div className="store__icon">
                            <FaStore style={{ fontSize: 60, color: "#e75728" }} />
                        </div>
                        <h3 className="store__name">Waterloo Store</h3>
                        <p className="store__location">Location: Waterloo</p>
                        <p className="store__address">Address: 52 King Street, East</p>
                        <p className="store__postal">Postal Code: N6R4E7</p>
                        <p className="store__phone">Phone No: (226) 548 6895</p>
                        <p className="store__email">E-mail: info@wtlsavorybites.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
