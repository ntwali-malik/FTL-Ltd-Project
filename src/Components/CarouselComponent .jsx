import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import './carousel.css';  // Import your custom CSS for arrows and positioning

const CarouselComponent = () => {
  return (
    <div className="header-carousel">
      <OwlCarousel
        className="owl-theme"
        items={1}
        loop
        autoplay
        autoplayTimeout={5000}
        autoplayHoverPause
        nav  // Enable navigation arrows
        dots={false}  // Disable dots
        smartSpeed={1000}
        navText={['<span class="custom-prev-arrow">‹</span>', '<span class="custom-next-arrow">›</span>']} // Custom arrow text
        animateOut="fadeOut"
        animateIn="fadeIn"
      >
        <div className="header-carousel-item">
          <img src="img/carou1.jpg" className="img-fluid w-100" alt="Image" style={{ height: '770px' }} />
          <div className="carousel-content"> {/* Common container for uniform styling */}
            <h1 className="display-1 text-capitalize text-white mb-4">FabriTech Ltd</h1>
            <p className="mb-5 fs-5">Your trusted partner in Networking, Security, and IT Solutions.</p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" href="#">Get Started</a>
            <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">Learn More</a>
          </div>
        </div>

        <div className="header-carousel-item">
          <img src="img/carou2.jpg" className="img-fluid w-100" alt="Image" style={{ height: '770px' }} />
          <div className="carousel-content"> {/* Common container for uniform styling */}
            <h1 className="display-1 text-capitalize text-white mb-4">Expert Networking Solutions</h1>
            <p className="mb-5 fs-5">Seamless, secure, and scalable networking services to keep your business connected.</p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" href="#">Get Started</a>
            <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">Learn More</a>
          </div>
        </div>

        <div className="header-carousel-item">
          <img src="img/carou3.jpg" className="img-fluid w-100" alt="Image" style={{ height: '770px' }} />
          <div className="carousel-content"> {/* Common container for uniform styling */}
            <h1 className="display-1 text-capitalize text-white mb-4">Digital Security Solutions</h1>
            <p className="mb-5 fs-5">Ensure the safety of your property with our state-of-the-art CCTV camera installations.</p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mb-4 me-4" href="#">Get Started</a>
            <a className="btn btn-dark rounded-pill py-3 px-5 mb-4" href="#">Learn More</a>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default CarouselComponent;
