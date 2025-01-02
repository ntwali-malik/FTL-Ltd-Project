import React from 'react'

function Starlink() {
  return (
    <div>
         {/* <!-- Topbar Start --> */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
            <div className="container px-0">
                <div className="row gx-0 align-items-center" style={{height: '45px'}}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                            <a href='mailto:info@fabritech.rw' className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.rw</a>
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
                        <img src="img/logoF.jpg.png" alt="Logo" style={{height: '40px'}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/service" className="nav-item nav-link active">Services</a>
                            <a href="/gallery" className="nav-item nav-link">Gallery</a>
                            <a href="/contact" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Header Start --> */}
        <div className="container-fluid bg-breadcrumb">
            <div className="bg-breadcrumb-single"></div>
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Installation</h4>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><a href="/service">Service</a></li>
                    <li className="breadcrumb-item active text-primary">Starlink Internet</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}

        {/* <!-- Starlink Services Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="text-primary text-uppercase">Our Services</h4>
                    <h1 className="display-4 mb-3">Experience Next-Generation Internet with Starlink</h1>
                    <p className="mb-4" style={{maxWidth: '600px', margin: '0 auto', color: '#666'}}>
                        Join the future of internet connectivity with Starlink's revolutionary satellite network, 
                        professionally installed and supported by Fabritech's expert team.
                    </p>
                </div>

                <div className="row g-5">
                    {/* Left Column - Features */}
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="position-relative h-100">
                            {/* Speed Feature */}
                            <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-center justify-content-center rounded-circle" 
                                         style={{width: '60px', height: '60px', backgroundColor: 'rgba(78, 115, 223, 0.1)'}}>
                                        <i className="fas fa-rocket fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="mb-1">High-Speed Internet</h5>
                                        <span>100-200+ Mbps Download Speed</span>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    Experience lightning-fast internet speeds that enable seamless streaming, 
                                    gaming, and video conferencing anywhere in the world.
                                </p>
                            </div>

                            {/* Latency Feature */}
                            <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-center justify-content-center rounded-circle" 
                                         style={{width: '60px', height: '60px', backgroundColor: 'rgba(78, 115, 223, 0.1)'}}>
                                        <i className="fas fa-bolt fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="mb-1">Low Latency</h5>
                                        <span>20-40ms Response Time</span>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    Enjoy minimal delay in your online activities with Starlink's 
                                    low-latency satellite network, perfect for real-time applications.
                                </p>
                            </div>

                            {/* Support Feature */}
                            <div className="bg-white rounded p-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="d-flex align-items-center justify-content-center rounded-circle" 
                                         style={{width: '60px', height: '60px', backgroundColor: 'rgba(78, 115, 223, 0.1)'}}>
                                        <i className="fas fa-headset fa-2x text-primary"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="mb-1">24/7 Support</h5>
                                        <span>Expert Technical Assistance</span>
                                    </div>
                                </div>
                                <p className="mb-0">
                                    Our dedicated support team is always ready to help with any technical 
                                    issues or questions about your Starlink service.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image and Benefits */}
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.5s">
                        <div className="position-relative h-100">
                            <div className="position-relative">
                                <img className="img-fluid rounded w-100 mb-5" 
                                     src="img/starlink.jpg" 
                                     alt="Starlink Installation"
                                     style={{objectFit: 'cover', height: '400px'}} />
                                <div className="position-relative mt-4" 
                                     style={{
                                         background: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95))',
                                         borderRadius: '10px',
                                         boxShadow: '0 0 30px rgba(0,0,0,0.1)'
                                     }}>
                                    <div className="p-4">
                                        <h4 className="text-primary mb-4 text-center">Why Choose Fabritech for Starlink?</h4>
                                        <div className="row g-3">
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center bg-light rounded p-2">
                                                    <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                    <span style={{
                                                        fontSize: '0.95rem',
                                                        fontWeight: '500',
                                                        color: '#333'
                                                    }}>Professional Installation</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center bg-light rounded p-2">
                                                    <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                    <span style={{
                                                        fontSize: '0.95rem',
                                                        fontWeight: '500',
                                                        color: '#333'
                                                    }}>Expert Configuration</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center bg-light rounded p-2">
                                                    <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                    <span style={{
                                                        fontSize: '0.95rem',
                                                        fontWeight: '500',
                                                        color: '#333'
                                                    }}>Site Survey Included</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="d-flex align-items-center bg-light rounded p-2">
                                                    <i className="fas fa-check-circle text-primary me-3 fa-lg"></i>
                                                    <span style={{
                                                        fontSize: '0.95rem',
                                                        fontWeight: '500',
                                                        color: '#333'
                                                    }}>Ongoing Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Starlink Services End --> */}

        {/* <!-- Starlink Products Start --> */}
        <div className="container-fluid py-5 bg-light">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h4 className="text-primary">Our Products</h4>
                    <h1 className="display-5 mb-4">Starlink Equipment & Accessories</h1>
                </div>
                
                {/* Starlink Kits Section */}
                <h2 className="text-center mb-4">Starlink Kits</h2>
                <div className="row g-4 mb-5">
                    {/* Starlink V2 Kit */}
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="card h-100 shadow-sm">
                            <img src="img/starlinkV2.jpg" className="card-img-top" alt="Starlink V2" style={{height: '250px', objectFit: 'cover'}} />
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Starlink V2 Kit</h3>
                                <p className="card-text">
                                    Second-generation Starlink kit with improved performance and reliability. 
                                    Perfect for residential and small business use.
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-primary me-2"></i>Enhanced antenna design</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Improved thermal management</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Standard mounting options</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Starlink V3 Kit */}
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="card h-100 shadow-sm">
                            <img src="img/starlinkV3.jpg" className="card-img-top" alt="Starlink V3" style={{height: '250px', objectFit: 'contain'}} />
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Starlink V3 Kit</h3>
                                <p className="card-text">
                                    Latest generation Starlink kit offering maximum performance and advanced features.
                                    Ideal for high-demand users.
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-primary me-2"></i>Latest technology</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Maximum speed potential</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Advanced features</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Starlink Mini */}
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="card h-100 shadow-sm">
                            <img src="img/starlinkMini.jpg" className="card-img-top" alt="Starlink Mini" style={{height: '250px', objectFit: 'contain'}} />
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Starlink Mini Kit</h3>
                                <p className="card-text">
                                    Compact and portable Starlink solution, perfect for mobile applications
                                    and smaller installations.
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-primary me-2"></i>Portable design</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Easy setup</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Travel-friendly</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accessories Section */}
                <h2 className="text-center mb-4">Accessories</h2>
                <div className="row g-4">
                    {/* Starlink Router */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="card h-100 shadow-sm">
                            <img src="img/starlinkRouter.png" className="card-img-top" alt="Starlink Router" style={{height: '200px', objectFit: 'cover'}} />
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Starlink Router</h3>
                                <p className="card-text">
                                    High-performance WiFi router optimized for Starlink service.
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-primary me-2"></i>Dual-band WiFi</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Easy management</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Ethernet Adapter */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="card h-100 shadow-sm">
                            <img src="img/starlinkEthernetAdapter.jpg" className="card-img-top" alt="Ethernet Adapter" style={{height: '200px', objectFit: 'contain'}} />
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">Ethernet Adapter</h3>
                                <p className="card-text">
                                    Connect devices directly to your Starlink network.
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-primary me-2"></i>Gigabit connection</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Simple plug-and-play</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 25m Cable */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="card h-100 shadow-sm">
                            <img src="img/starlinkCable25m.jpg" className="card-img-top" alt="25m Cable" style={{height: '200px', objectFit: 'contain'}} />
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">25m Cable</h3>
                                <p className="card-text">
                                    Standard length cable for most installations.
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-primary me-2"></i>Weather-resistant</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>High-quality construction</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 45m Cable */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="card h-100 shadow-sm">
                            <img src="img/starlinkCable45m.jpg" className="card-img-top" alt="45m Cable" style={{height: '200px', objectFit: 'cover'}} />
                            <div className="card-body">
                                <h3 className="card-title h5 text-primary">45m Cable</h3>
                                <p className="card-text">
                                    Extended length cable for complex installations.
                                </p>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-primary me-2"></i>Extra reach</li>
                                    <li><i className="fas fa-check text-primary me-2"></i>Professional grade</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Starlink Products End --> */}

        {/* <!-- Speed Comparison Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="text-primary">Internet Speed</h4>
                    <h1 className="display-5 mb-3">Experience Lightning-Fast Internet</h1>
                    <p className="mb-0">Compare Starlink's performance with traditional internet options</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="position-relative rounded p-4 bg-white" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" 
                                 style={{width: '80px', height: '80px', marginBottom: '20px'}}>
                                <i className="fas fa-satellite-dish fa-2x text-primary"></i>
                            </div>
                            <h4>Starlink</h4>
                            <h2 className="display-6 text-primary mb-3">100-200+ Mbps</h2>
                            <p>Download speeds that enable seamless 4K streaming and online gaming</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="position-relative rounded p-4 bg-white" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" 
                                 style={{width: '80px', height: '80px', marginBottom: '20px'}}>
                                <i className="fas fa-wifi fa-2x text-primary"></i>
                            </div>
                            <h4>4G/LTE</h4>
                            <h2 className="display-6 text-primary mb-3">35-50 Mbps</h2>
                            <p>Standard mobile internet speeds with varying reliability</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="position-relative rounded p-4 bg-white" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" 
                                 style={{width: '80px', height: '80px', marginBottom: '20px'}}>
                                <i className="fas fa-broadcast-tower fa-2x text-primary"></i>
                            </div>
                            <h4>Traditional Satellite</h4>
                            <h2 className="display-6 text-primary mb-3">15-25 Mbps</h2>
                            <p>Conventional satellite internet with higher latency</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Speed Comparison End --> */}

        {/* <!-- Installation Process Start --> */}
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="text-primary">Installation Process</h4>
                    <h1 className="display-5 mb-3">How We Install Your Starlink</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="process-item text-center p-4">
                            <div className="process-icon mb-4">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                     style={{width: '90px', height: '90px'}}>
                                    <i className="fas fa-search fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h5>Site Survey</h5>
                            <p>We assess your location for optimal placement and signal strength</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="process-item text-center p-4">
                            <div className="process-icon mb-4">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                     style={{width: '90px', height: '90px'}}>
                                    <i className="fas fa-tools fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h5>Professional Installation</h5>
                            <p>Expert mounting and setup by our certified technicians</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="process-item text-center p-4">
                            <div className="process-icon mb-4">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                     style={{width: '90px', height: '90px'}}>
                                    <i className="fas fa-cog fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h5>Configuration</h5>
                            <p>Optimal setup and testing of your Starlink system</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="process-item text-center p-4">
                            <div className="process-icon mb-4">
                                <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white" 
                                     style={{width: '90px', height: '90px'}}>
                                    <i className="fas fa-check-circle fa-3x text-primary"></i>
                                </div>
                            </div>
                            <h5>Final Testing</h5>
                            <p>Comprehensive speed and connection quality verification</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Installation Process End --> */}

        {/* <!-- FAQ Section Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="text-primary">FAQ</h4>
                    <h1 className="display-5 mb-3">Frequently Asked Questions</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                            <h5>What speeds can I expect from Starlink?</h5>
                            <p className="mb-0">Users typically experience download speeds between 100-200+ Mbps, with some areas receiving even faster connections.</p>
                        </div>
                        <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                            <h5>Is professional installation necessary?</h5>
                            <p className="mb-0">While self-installation is possible, professional installation ensures optimal placement and performance of your Starlink system.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                            <h5>How long does installation take?</h5>
                            <p className="mb-0">A typical professional installation takes 2-3 hours, including setup and testing.</p>
                        </div>
                        <div className="bg-white rounded p-4 mb-4" style={{boxShadow: '0 0 45px rgba(0,0,0,.08)'}}>
                            <h5>What affects Starlink performance?</h5>
                            <p className="mb-0">Performance can be affected by weather conditions, obstructions like trees or buildings, and satellite coverage in your area.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FAQ Section End --> */}

        {/* <!-- Footer Start --> */}
        <div className="container-fluid footer py-1 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* First Column - Logo and Description */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                <img src="img/logoF.jpg.png" alt="Company Logo" style={{ width: "150px", height: "auto" }} className="mb-4" />
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
                            <a href="https://maps.app.goo.gl/GMRDwb39xqjckVDD9"><i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza, Kisimenti, Remera</a>
                            <a href="mailto:info@fabritech.rw"><i className="fas fa-envelope me-2"></i> info@fabritech.rw</a>
                            <a href="tel:+250788601280"><i className="fas fa-phone me-2"></i> +250788601280</a>
                            <div className="d-flex align-items-center">
                                <a className="btn btn-light btn-md-square me-2" href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-md-square me-2" href="https://www.instagram.com/fabritech_ltd/"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-light btn-md-square me-2" href="https://www.linkedin.com/in/fabritech_ltd"><i className="fab fa-linkedin-in"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech&amp;phone=+250788601280" className="btn btn-light btn-md-square me-2">
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

export default Starlink 