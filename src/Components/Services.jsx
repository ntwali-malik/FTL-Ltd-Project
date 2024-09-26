import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';

const Services = () => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        arrows: true, // Hide the navigation arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                },
            },
        ],
    };

    return (
        <div className="container-fluid project py-5">
            <div className="container">
                <div className="text-center mx-auto pb-5">
                    <h4 className="text-primary text-uppercase">Our Services</h4>
                    <h1 className="display-4 mb-4 text-dark">Providing Expert IT Solutions</h1>
                    <p className="fs-5 text-muted">We offer top-notch solutions tailored to your business needs.</p>
                </div>

                <Slider {...settings}>
                    {/* Project Item 1 */}
                    <div className="project-item position-relative shadow-lg">
                        <div className="project-img">
                            <img src="img/netw.jpg" className="img-fluid w-100 rounded-top" alt="Network" />
                        </div>
                        <div className="project-content bg-white rounded-bottom p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-network-wired fa-3x text-primary"></i>
                                </div>
                                <h5 className="text-dark mb-3">Network Infrastructure</h5>
                                <p className="text-muted">High-Speed Network Setup for Corporate Offices.</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4 mt-3" href="/network">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 2 */}
                    <div className="project-item position-relative shadow-lg">
                        <div className="project-img">
                            <img src="img/Biometric-Technologies.jpg" className="img-fluid w-100 rounded-top" alt="Digital Security" />
                        </div>
                        <div className="project-content bg-white rounded-bottom p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-shield-alt fa-3x text-primary"></i>
                                </div>
                                <h5 className="text-dark mb-3">Digital Security</h5>
                                <p className="text-muted">Comprehensive Digital Security Solutions.</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4 mt-3" href="/digitalSecurity">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 3 */}
                    <div className="project-item position-relative shadow-lg">
                        <div className="project-img">
                            <img src="img/software.jpeg" className="img-fluid w-100 rounded-top" alt="Software Development" />
                        </div>
                        <div className="project-content bg-white rounded-bottom p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-code fa-3x text-primary"></i>
                                </div>
                                <h5 className="text-dark mb-3">Software Development</h5>
                                <p className="text-muted">Bespoke ERP System for Small Businesses.</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4 mt-3" href="/softwareDevelopment">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 4 */}
                    <div className="project-item position-relative shadow-lg">
                        <div className="project-img">
                            <img src="img/canal&dstv.jpg" className="img-fluid w-100 rounded-top" alt="Canal & DStv" />
                        </div>
                        <div className="project-content bg-white rounded-bottom p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-tv fa-3x text-primary"></i>
                                </div>
                                <h5 className="text-dark mb-3">Canal+ & DStv Services</h5>
                                <p className="text-muted">Installation & Subscription Services for Canal+ and DStv.</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4 mt-3" href="/canalDstv">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 5 */}
                    <div className="project-item position-relative shadow-lg">
                        <div className="project-img">
                            <img src="img/internship.jpg" className="img-fluid w-100 rounded-top" alt="Internship" />
                        </div>
                        <div className="project-content bg-white rounded-bottom p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-graduation-cap fa-3x text-primary"></i>
                                </div>
                                <h5 className="text-dark mb-3">Internships & Short Courses</h5>
                                <p className="text-muted">Gain Practical Experience with Our Internship Programs.</p>
                                <a className="btn btn-primary rounded-pill py-2 px-4 mt-3" href="/internship">Read More</a>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Services;
