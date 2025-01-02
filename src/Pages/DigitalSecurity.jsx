import React from 'react'

function DigitalSecurity() {
    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0 d-none d-lg-block">
                <div className="container px-0">
                    <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a href="" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                                <a href="" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.com</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                                <a href="https://www.instagram.com/fabritech_ltd/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
                                <a href="https://www.linkedin.com/in/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-linkedin-in text-white"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech.rw!&amp;phone=+250788601280" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
                                    <i className="fab fa-whatsapp text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar & Hero Start --> */}
            <div className="container-fluid sticky-top px-0">
                <div className="position-absolute bg-dark" style={{ left: 0, top: 0, width: '100%', height: '100%' }}>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
                        <a href="index.html" className="navbar-brand p-0">
                            {/* <!-- <h1 classNameName="text-primary m-0"><i classNameName="fas fa-donate me-3"></i>Investa</h1> --> */}
                            <img src="img/logoF.jpg.png" alt="Logo" style={{ height: '40px' }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <a href="/" className="nav-item nav-link ">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/service" className="nav-item nav-link active">Services</a>
                                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                                <a href="/contact" className="nav-item nav-link ">Contact</a>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar & Hero End --> */}

            {/* <!-- Header Start --> */}
            <div className="container-fluid bg-breadcrumb">
                <div className="bg-breadcrumb-single"></div>
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Digital Security</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/service">Service</a></li>
                        <li className="breadcrumb-item active text-primary">Digital Security</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}

            {/* <!-- Security Solutions Showcase Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">CCTV Surveillance</h4>
                        <h1 className="display-5 mb-3">Professional Camera Systems</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/bulletCamera.jpg"
                                    alt="IP Camera"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">IP Cameras</h3>
                                    <p className="card-text">High-resolution video cameras with remote monitoring capabilities and advanced features.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>4K Resolution</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Night Vision</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Motion Detection</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/domeCameras.jpg"
                                    alt="Dome Camera"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Dome Cameras</h3>
                                    <p className="card-text">Discreet surveillance solutions perfect for indoor and outdoor monitoring.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>360° Coverage</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Vandal Proof</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Weather Resistant</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/ptzCamera.jpg"
                                    alt="PTZ Camera"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">PTZ Cameras</h3>
                                    <p className="card-text">Pan, tilt, and zoom functionality for comprehensive area coverage.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Remote Control</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Auto Tracking</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>30x Optical Zoom</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Security Solutions Showcase End --> */}

            {/* <!-- Security Features Start --> */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Security Features</h4>
                        <h1 className="display-5 mb-3">Advanced Security Features</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="feature-item bg-white rounded p-4 text-center">
                                <div className="feature-icon mb-4">
                                    <i className="fas fa-video fa-3x text-primary"></i>
                                </div>
                                <h5 className="mb-3">HD Surveillance</h5>
                                <p className="mb-0">High-definition cameras for crystal clear monitoring</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="feature-item bg-white rounded p-4 text-center">
                                <div className="feature-icon mb-4">
                                    <i className="fas fa-fingerprint fa-3x text-primary"></i>
                                </div>
                                <h5 className="mb-3">Biometric Access</h5>
                                <p className="mb-0">Advanced biometric security systems</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="feature-item bg-white rounded p-4 text-center">
                                <div className="feature-icon mb-4">
                                    <i className="fas fa-cloud fa-3x text-primary"></i>
                                </div>
                                <h5 className="mb-3">Cloud Storage</h5>
                                <p className="mb-0">Secure cloud backup and storage solutions</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="feature-item bg-white rounded p-4 text-center">
                                <div className="feature-icon mb-4">
                                    <i className="fas fa-mobile-alt fa-3x text-primary"></i>
                                </div>
                                <h5 className="mb-3">Mobile Access</h5>
                                <p className="mb-0">Remote monitoring via mobile devices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Security Features End --> */}

            {/* Access Control Section */}
            <div className="container-fluid py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Access Control</h4>
                        <h1 className="display-5 mb-3">Smart Entry Management</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/biometricSystem.jpeg"
                                    alt="Biometric Access"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Biometric Systems</h3>
                                    <p className="card-text">Advanced fingerprint and facial recognition for secure access control.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Fingerprint Scanner</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Facial Recognition</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Time Attendance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/cardReader.jpg"
                                    alt="Card Reader"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">RFID Systems</h3>
                                    <p className="card-text">Card-based access control for efficient entry management.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Proximity Cards</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Smart Cards</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Mobile Access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/entryGates.jpg"
                                    alt="Turnstile"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Entry Gates</h3>
                                    <p className="card-text">Physical barriers and turnstiles for controlled access.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Turnstiles</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Boom Barriers</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Speed Gates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detection Systems Section */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Detection Systems</h4>
                        <h1 className="display-5 mb-3">Advanced Screening Solutions</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/metalDetector.jpg"
                                    alt="Metal Detector"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Metal Detectors</h3>
                                    <p className="card-text">Walk-through and handheld metal detection systems.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Multi-Zone Detection</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>High Sensitivity</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Traffic Counter</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/scannerXray.jpg"
                                    alt="X-Ray Scanner"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">X-Ray Scanners</h3>
                                    <p className="card-text">Advanced baggage and package screening systems.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>High Resolution</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Threat Detection</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Image Analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/motionSensor.png"
                                    alt="Motion Sensors"
                                    style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Motion Sensors</h3>
                                    <p className="card-text">Comprehensive intrusion detection systems.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>PIR Technology</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Glass Break Detection</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Pet Immunity</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intercom & Safety Systems Section */}
            <div className="container-fluid py-5 bg-light">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Additional Systems</h4>
                        <h1 className="display-5 mb-3">Complete Security Solutions</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/videoIntercom.jpeg"
                                    alt="Video Intercom"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Video Intercoms</h3>
                                    <p className="card-text">Smart communication systems with video verification.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>HD Video Quality</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Mobile App Integration</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Two-way Audio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/fireDetection.png"
                                    alt="Fire Alarm"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Fire Detection</h3>
                                    <p className="card-text">Advanced fire and smoke detection systems.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Smoke & Heat Detection</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Emergency Alerts</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Automatic Sprinklers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/backupPower.jpg"
                                    alt="UPS System"
                                    style={{ height: '250px', objectFit: 'contain', padding: '10px' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Backup Power</h3>
                                    <p className="card-text">Uninterrupted power supply solutions.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Instant Power Backup</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Surge Protection</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Battery Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/dataProtection.jpg"
                                    alt="Network Security"
                                    style={{ height: '250px', objectFit: 'contain' }} />
                                <div className="card-body">
                                    <h3 className="card-title h5 text-primary">Network Security</h3>
                                    <p className="card-text">
                                        Comprehensive network protection and monitoring solutions.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Firewall Protection</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Intrusion Detection</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>24/7 Monitoring</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-1 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* First Column - Logo and Description */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <div className="footer-item">
                                    {/* Company logo */}
                                    <img src="img/logoF.jpg.png" alt="Company Logo" style={{ width: "150px", height: "auto" }} className="mb-4" />

                                    {/* Company description */}
                                    <p className="mb-3">
                                        At Fabritech, we are dedicated to providing top-notch IT solutions and services. From networking to surveillance,
                                        we ensure high standards in every project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Column - Explore Links */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Explore</h4>
                                <a href="/"><i className="fas fa-angle-right me-2"></i> Home</a>
                                <a href="/service"><i className="fas fa-angle-right me-2"></i> Services</a>
                                <a href="/about"><i className="fas fa-angle-right me-2"></i> About Us</a>
                                <a href="/contact"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                                <a href="/gallery"><i className="fas fa-angle-right me-2"></i> Gallery</a>
                            </div>
                        </div>

                        {/* Third Column - Contact Info */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Contact Info</h4>
                                <a href="#"><i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza, Kisimenti, Remera</a>
                                <a href="mailto:fabrice.sugira@fabritech.rw"><i className="fas fa-envelope me-2"></i> info@fabritech.rw</a>
                                <a href="tel:+250788601280"><i className="fas fa-phone me-2"></i> +250788601280</a>
                                {/* Social media icons */}
                                <div className="d-flex align-items-center">
                                    <a className="btn btn-light btn-md-square me-2" href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-light btn-md-square me-2" href="https://www.instagram.com/fabritech_ltd/"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-light btn-md-square me-2" href="https://www.linkedin.com/in/fabritech_ltd"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech.rw!&amp;phone=+250788601280" className="btn btn-light btn-md-square me-2">
                                        <i className="fab fa-whatsapp text-white"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-md-0">
                            <span className="text-body">
                                Fabritech, <i className="fas fa-copyright text-light me-2"></i>All rights reserved 2025.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-primary btn-lg-square back-to-top">
                <i className="fa fa-arrow-up"></i>
            </a>
            {/* <!-- Copyright End --> */}
        </div>
    )
}

export default DigitalSecurity