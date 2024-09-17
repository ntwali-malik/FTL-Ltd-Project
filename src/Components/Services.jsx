import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';

const Services = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200, // Animation speed for transition
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed to 1.5 seconds
        cssEase: 'ease-in-out', // Smooth transition effect
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="container-fluid project">
            <div className="container">
                <div className="text-center mx-auto pb-5">
                    <h4 className="text-primary">Our Services</h4>
                    <h1 className="display-4">Providing Expert IT Solutions</h1>
                </div>

                <Slider {...settings}>
                    {/* Project Item 1 */}
                    <div className="project-item">
                        <div className="project-img">
                            <img src="img/netw.jpg" className="img-fluid w-100 rounded" alt="Image" />
                        </div>
                        <div className="project-content bg-light rounded p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-network-wired fa-4x text-primary"></i>
                                </div>
                                <p className="text-dark fs-5 mb-3">Network Infrastructure</p>
                                <a href="#" className="h4">High-Speed Network Setup for Corporate Offices</a>
                                <div className="pt-4">
                                    <a className="btn btn-light rounded-pill py-3 px-5" href="/network">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 2 */}
                    <div className="project-item">
                        <div className="project-img">
                            <img src="img/Biometric-Technologies.jpg" className="img-fluid w-100 rounded" alt="Image" />
                        </div>
                        <div className="project-content bg-light rounded p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-shield-alt fa-4x text-primary"></i>
                                </div>
                                <p className="text-dark fs-5 mb-3">Digital Security</p>
                                <a href="#" className="h4">Comprehensive Digital Security Solutions</a>
                                <div className="pt-4">
                                    <a className="btn btn-light rounded-pill py-3 px-5" href="/digitalSecurity">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 3 */}
                    <div className="project-item">
                        <div className="project-img">
                            <img src="img/software.jpeg" className="img-fluid w-100 rounded" alt="Image" />
                        </div>
                        <div className="project-content bg-light rounded p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-code fa-4x text-primary"></i>
                                </div>
                                <p className="text-dark fs-5 mb-3">Software Development</p>
                                <a href="#" className="h4">Bespoke ERP System for Small Businesses</a>
                                <div className="pt-4">
                                    <a className="btn btn-light rounded-pill py-3 px-5" href="/softwareDevelopment">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 4 */}
                    <div className="project-item">
                        <div className="project-img">
                            <img src="img/canal&dstv.jpg" className="img-fluid w-100 rounded" alt="Image" />
                        </div>
                        <div className="project-content bg-light rounded p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-tv fa-4x text-primary"></i>
                                </div>
                                <p className="text-dark fs-5 mb-3">Canal+ & DStv Services</p>
                                <a href="#" className="h4">Installation & Subscription Services for Canal+ and DStv</a>
                                <div className="pt-4">
                                    <a className="btn btn-light rounded-pill py-3 px-5" href="/canalDstv">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Item 5 */}
                    <div className="project-item">
                        <div className="project-img">
                            <img src="img/internship.jpg" className="img-fluid w-100 rounded" alt="Image" />
                        </div>
                        <div className="project-content bg-light rounded p-4">
                            <div className="project-content-inner">
                                <div className="project-icon mb-3">
                                    <i className="fas fa-graduation-cap fa-4x text-primary"></i>
                                </div>
                                <p className="text-dark fs-5 mb-3">Internships & Short Courses</p>
                                <a href="#" className="h4">Practical Experience with Our Internship Programs</a>
                                <div className="pt-4">
                                    <a className="btn btn-light rounded-pill py-3 px-5" href="/internship">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Services;
