import React, { useRef, useEffect } from "react";
import "./TestimonialsSection.css";
import { useLanguage } from "../../LanguageContext";

const TestimonialsSection = () => {
    const { t } = useLanguage(); // Translate
    const carouselRef = useRef(null);

    useEffect(() => {
        const container = carouselRef.current;
        let scrollInterval;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
                    container.classList.add("no-transition");
                    container.scrollLeft = 0;
                    setTimeout(() => {
                        container.classList.remove("no-transition");
                    }, 50);
                } else {
                    container.scrollBy({ left: container.clientWidth / 3, behavior: 'smooth' });
                }
            }, 3000);
        };

        startAutoScroll();

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <section className="testimonials-section">
            <h2>{t("TestimonialTitle")}</h2>
            <div className="logo-container">
                <img src="logo1.png" alt="Logo 1" className="company-logo" />
                <img src="logo2.png" alt="Logo 2" className="company-logo" />
                <img src="logo3.png" alt="Logo 3" className="company-logo" />
                <img src="logo4.png" alt="Logo 4" className="company-logo" />
                <img src="logo5.png" alt="Logo 5" className="company-logo" />
            </div>
            <div className="carousel-container" ref={carouselRef}>
                <div className="testimonials-container">
                    {[...Array(6)].map((_, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="testimonial-header">
                                <img src={`person${(index % 3) + 1}.jpg`} alt={`Person ${index + 1}`} className="profile-image" />
                                <div className="testimonial-info">
                                    <h3>Name Lastname</h3>
                                    <p className="testimonial-role">Director of The X Company</p>
                                </div>
                            </div>
                            <blockquote className="testimonial-text">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
