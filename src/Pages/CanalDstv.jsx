import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

function CanalDstv() {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('mtn'); // 'mtn' or 'airtel'
    const [paymentDetails, setPaymentDetails] = useState({
        smartCard: '',
        phone: '',
        email: '',
        name: ''
    });
    const [loading, setLoading] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [subscriptionHistory, setSubscriptionHistory] = useState([]);
    const [showDecoderPaymentModal, setShowDecoderPaymentModal] = useState(false);
    const [decoderOrderDetails, setDecoderOrderDetails] = useState({
        decoderType: '',
        installationType: '',
        name: '',
        phone: '',
        email: '',
        location: '',
    });
    const [technicalSupportForm, setTechnicalSupportForm] = useState({
        serviceProvider: '',
        issueType: '',
        smartCardNumber: '',
        issueDescription: '',
        name: '',
        phoneNumber: '',
        email: ''
    });

    // Enhanced styles with animations and responsive design
    const styles = {
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050,
            padding: '1rem'
        },
        modalDialog: {
            width: '900px',
            maxWidth: '95%',
            margin: '20px auto',
            position: 'relative'
        },
        modalContent: {
            display: 'flex',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        },
        modalSidebar: {
            width: '300px',
            background: 'linear-gradient(135deg, #0d6efd, #0a58ca)',
            padding: '2rem',
            color: '#fff'
        },
        modalMain: {
            flex: 1,
            padding: '2rem',
            backgroundColor: '#fff'
        },
        paymentMethods: {
            display: 'flex',
            gap: '15px',
            marginBottom: '25px'
        },
        paymentMethodCard: {
            flex: 1,
            padding: '15px',
            border: '2px solid #dee2e6',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease'
        },
        selectedPaymentMethod: {
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13, 110, 253, 0.05)'
        },
        formGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px'
        },
        inputGroup: {
            marginBottom: '15px'
        },
        input: {
            width: '100%',
            padding: '12px',
            border: '2px solid #dee2e6',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
        },
        payButton: {
            width: '100%',
            padding: '14px',
            backgroundColor: '#0d6efd',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        },
        spinner: {
            display: 'inline-block',
            width: '20px',
            height: '20px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            borderTopColor: 'white',
            animation: 'spin 1s ease-in-out infinite'
        }
    };

    // Add keyframe animations
    useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { 
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }

            @media (max-width: 768px) {
                .modal-dialog {
                    margin: 0.5rem;
                }
                
                .form-control {
                    font-size: 16px; /* Prevents zoom on mobile */
                }
            }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
    }, []);

    useEffect(() => {
        document.body.style.overflow = showPaymentModal ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showPaymentModal]);

    const canalPackages = [
        {
            id: 'c1',
            name: 'Access',
            price: 7000,
            channels: '150+ channels',
            features: [
                'Entertainment channels',
                'News channels',
                'Kids channels',
                'Local channels'
            ],
            provider: 'Canal+'
        },
        {
            id: 'c2',
            name: 'Evasion',
            price: 12000,
            channels: '180+ channels',
            features: [
                'All Access features',
                'Sports channels',
                'Movie channels',
                'Documentary channels'
            ],
            provider: 'Canal+'
        },
        {
            id: 'c3',
            name: 'Essentiel+',
            price: 18000,
            channels: '200+ channels',
            features: [
                'All Evasion features',
                'Premium sports',
                'Premium movies',
                'International channels'
            ],
            provider: 'Canal+'
        }
    ];

    const dstvPackages = [
        {
            id: 'd1',
            name: 'Access',
            price: 8000,
            channels: '140+ channels',
            features: [
                'Entertainment channels',
                'News channels',
                'Kids channels',
                'Local content'
            ],
            provider: 'DStv'
        },
        {
            id: 'd2',
            name: 'Family',
            price: 14000,
            channels: '170+ channels',
            features: [
                'All Access features',
                'Sports channels',
                'Movie channels',
                'Music channels'
            ],
            provider: 'DStv'
        },
        {
            id: 'd3',
            name: 'Premium',
            price: 20000,
            channels: '200+ channels',
            features: [
                'All Family features',
                'Premium sports',
                'Premium movies',
                'International channels'
            ],
            provider: 'DStv'
        }
    ];

    const handlePackageSelect = (pkg) => {
        setSelectedPackage(pkg);
        setShowPaymentModal(true);
        resetForm();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prev => ({
            ...prev,
            [name]: value
        }));
        if (validationErrors[name]) {
            setValidationErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const errors = {};
        
        if (!paymentDetails.smartCard) {
            errors.smartCard = 'Smart card number is required';
        } else if (!/^\d{10,12}$/.test(paymentDetails.smartCard)) {
            errors.smartCard = 'Invalid smart card number (10-12 digits)';
        }

        if (!paymentDetails.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^07[8,2,3,9]\d{7}$/.test(paymentDetails.phone)) {
            errors.phone = 'Invalid Rwanda phone number';
        }

        if (!paymentDetails.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(paymentDetails.email)) {
            errors.email = 'Invalid email address';
        }

        if (!paymentDetails.name) {
            errors.name = 'Full name is required';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            const newSubscription = {
                id: Date.now(),
                package: selectedPackage.name,
                date: new Date().toISOString(),
                status: 'pending',
                amount: selectedPackage.price,
                paymentMethod: paymentMethod,
                smartCard: paymentDetails.smartCard
            };
            setSubscriptionHistory(prev => [newSubscription, ...prev]);

            toast.success(`Payment request sent! Please check your ${paymentMethod.toUpperCase()} to confirm payment.`);
            setShowPaymentModal(false);
            resetForm();
        } catch (error) {
            toast.error('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setPaymentDetails({
            smartCard: '',
            phone: '',
            email: '',
            name: ''
        });
        setValidationErrors({});
    };

    const handleDecoderOrder = (e) => {
        e.preventDefault();
        setShowDecoderPaymentModal(true);
    };

    const handleTechnicalSupportSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await technicalSupportService.submitTechnicalSupport(technicalSupportForm);
            toast.success('Technical support request submitted successfully! Check your email for confirmation.');
            
            // Reset form
            setTechnicalSupportForm({
                serviceProvider: '',
                issueType: '',
                smartCardNumber: '',
                issueDescription: '',
                name: '',
                phoneNumber: '',
                email: ''
            });
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleTechnicalSupportInputChange = (e) => {
        const { name, value } = e.target;
        setTechnicalSupportForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const renderDecoderPaymentModal = () => (
        <div style={styles.modalOverlay}>
            <div style={styles.modalDialog}>
                <div style={styles.modalContent}>
                    <div style={styles.modalSidebar}>
                        <h4 className="text-white mb-4">Order Summary</h4>
                        <div className="package-details">
                            <div className="mb-4">
                                <small className="text-light-50">Decoder Type</small>
                                <h3 className="text-white">{decoderOrderDetails.decoderType === 'canal' ? 'Canal+' : 'DStv'}</h3>
                            </div>
                            <div className="mb-4">
                                <small className="text-light-50">Installation Type</small>
                                <h4 className="text-white">{decoderOrderDetails.installationType === 'new' ? 'New Installation' : 'Replacement'}</h4>
                            </div>
                            <div className="mb-4">
                                <small className="text-light-50">Price</small>
                                <h4 className="text-white">
                                    {decoderOrderDetails.decoderType === 'canal' ? '25,000' : '30,000'} RWF
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div style={styles.modalMain}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="mb-0">Payment Details</h4>
                            <button 
                                type="button" 
                                className="btn-close"
                                onClick={() => setShowDecoderPaymentModal(false)}
                            ></button>
                        </div>

                        <form onSubmit={handleDecoderPayment}>
                            <div className="payment-methods mb-4">
                                <label className="mb-3">Select Payment Method</label>
                                <div className="d-flex gap-3">
                                    <div 
                                        className={`payment-option ${paymentMethod === 'mtn' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('mtn')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/mtn-logo.png" alt="MTN" height="30" />
                                            <span className="ms-2">MTN Mobile Money</span>
                                        </div>
                                    </div>
                                    <div 
                                        className={`payment-option ${paymentMethod === 'airtel' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('airtel')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/airtel-logo.png" alt="Airtel" height="30" />
                                            <span className="ms-2">Airtel Money</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="paymentPhone"
                                    placeholder="Enter phone number"
                                    value={decoderOrderDetails.phone}
                                    readOnly
                                />
                                <label htmlFor="paymentPhone">Phone Number</label>
                            </div>

                            <div className="mt-4 d-flex justify-content-end gap-2">
                                <button 
                                    type="button" 
                                    className="btn btn-light"
                                    onClick={() => setShowDecoderPaymentModal(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Processing...
                                        </>
                                    ) : (
                                        `Pay ${decoderOrderDetails.decoderType === 'canal' ? '25,000' : '30,000'} RWF`
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    const handleDecoderPayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));
            toast.success('Payment successful! Our team will contact you soon for installation.');
            setShowDecoderPaymentModal(false);
            setDecoderOrderDetails({
                decoderType: '',
                installationType: '',
                name: '',
                phone: '',
                email: '',
                location: '',
            });
        } catch (error) {
            toast.error('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const renderPaymentModal = () => (
        <div style={styles.modalOverlay}>
            <div style={styles.modalDialog}>
                <div style={styles.modalContent}>
                    <div style={styles.modalSidebar}>
                        <h4 className="text-white mb-4">Package Summary</h4>
                        <div className="package-details">
                            <div className="mb-4">
                                <small className="text-light-50">Selected Package</small>
                                <h3 className="text-white">{selectedPackage?.name}</h3>
                            </div>
                            <div className="mb-4">
                                <small className="text-light-50">Monthly Fee</small>
                                <h4 className="text-white">{selectedPackage?.price.toLocaleString()} RWF</h4>
                            </div>
                            <div className="features">
                                <small className="text-light-50 d-block mb-3">Package Features:</small>
                                {selectedPackage?.features.map((feature, index) => (
                                    <div key={index} className="d-flex align-items-center mb-2">
                                        <i className="fas fa-check text-white me-2"></i>
                                        <span className="text-white-50">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={styles.modalMain}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="mb-0">Payment Details</h4>
                            <button 
                                type="button" 
                                className="btn-close"
                                onClick={() => setShowPaymentModal(false)}
                            ></button>
                        </div>

                        <form onSubmit={handlePayment}>
                            <div className="payment-methods mb-4">
                                <label className="mb-3">Select Payment Method</label>
                                <div className="d-flex gap-3">
                                    <div 
                                        className={`payment-option ${paymentMethod === 'mtn' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('mtn')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/mtn-logo.png" alt="MTN" height="30" />
                                            <span className="ms-2">MTN Mobile Money</span>
                                        </div>
                                    </div>
                                    <div 
                                        className={`payment-option ${paymentMethod === 'airtel' ? 'active' : ''}`}
                                        onClick={() => setPaymentMethod('airtel')}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img src="/img/airtel-logo.png" alt="Airtel" height="30" />
                                            <span className="ms-2">Airtel Money</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className={`form-control ${validationErrors.smartCard ? 'is-invalid' : ''}`}
                                            id="smartCard"
                                            name="smartCard"
                                            placeholder="Enter smart card number"
                                            value={paymentDetails.smartCard}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="smartCard">Smart Card Number</label>
                                        {validationErrors.smartCard && (
                                            <div className="invalid-feedback">{validationErrors.smartCard}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={paymentDetails.name}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="name">Full Name</label>
                                        {validationErrors.name && (
                                            <div className="invalid-feedback">{validationErrors.name}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="tel"
                                            className={`form-control ${validationErrors.phone ? 'is-invalid' : ''}`}
                                            id="phone"
                                            name="phone"
                                            placeholder="Enter phone number"
                                            value={paymentDetails.phone}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="phone">Phone Number</label>
                                        {validationErrors.phone && (
                                            <div className="invalid-feedback">{validationErrors.phone}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            name="email"
                                            placeholder="Enter email"
                                            value={paymentDetails.email}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="email">Email Address</label>
                                        {validationErrors.email && (
                                            <div className="invalid-feedback">{validationErrors.email}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 d-flex justify-content-end gap-2">
                                <button 
                                    type="button" 
                                    className="btn btn-light"
                                    onClick={() => setShowPaymentModal(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Processing...
                                        </>
                                    ) : (
                                        `Pay ${selectedPackage?.price.toLocaleString()} RWF`
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSupportSection = () => (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <h4 className="text-primary">Support & Orders</h4>
                    <h1 className="display-5 mb-4">Need a New Decoder or Technical Support?</h1>
                </div>
                
                <div className="row g-4">
                    {/* Decoder Order Card */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="mb-4">
                                    <h4 className="card-title text-primary">Order New Decoder</h4>
                                    <p className="text-muted">Get your new Canal+ or DStv decoder with professional installation</p>
                                </div>
                                <form onSubmit={handleDecoderOrder}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                required
                                                value={decoderOrderDetails.decoderType}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    decoderType: e.target.value
                                                }))}
                                            >
                                                <option value="">Select Decoder Type</option>
                                                <option value="canal">Canal+ Decoder</option>
                                                <option value="dstv">DStv Decoder</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                required
                                                value={decoderOrderDetails.installationType}
                                                onChange={(e) => setDecoderOrderDetails(prev => ({
                                                    ...prev,
                                                    installationType: e.target.value
                                                }))}
                                            >
                                                <option value="">Installation Type</option>
                                                <option value="new">New Installation</option>
                                                <option value="replacement">Replacement</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control py-3" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="tel" className="form-control py-3" placeholder="Phone Number" required />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control py-3" placeholder="Email Address" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control py-3" placeholder="Your Location" required />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Order Decoder
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Technical Support Card */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body p-4">
                                <div className="mb-4">
                                    <h4 className="card-title text-primary">Technical Support</h4>
                                    <p className="text-muted">Having issues with your decoder? Let us help you</p>
                                </div>
                                <form onSubmit={handleTechnicalSupportSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                name="serviceProvider"
                                                value={technicalSupportForm.serviceProvider}
                                                onChange={handleTechnicalSupportInputChange}
                                                required
                                            >
                                                <option value="">Service Provider</option>
                                                <option value="canal">Canal+</option>
                                                <option value="dstv">DStv</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <select 
                                                className="form-select py-3" 
                                                name="issueType"
                                                value={technicalSupportForm.issueType}
                                                onChange={handleTechnicalSupportInputChange}
                                                required
                                            >
                                                <option value="">Issue Type</option>
                                                <option value="signal">Signal Problems</option>
                                                <option value="activation">Activation Issues</option>
                                                <option value="hardware">Hardware Problems</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <input 
                                                type="text" 
                                                className="form-control py-3" 
                                                placeholder="Smart Card Number (if applicable)"
                                                name="smartCardNumber"
                                                value={technicalSupportForm.smartCardNumber}
                                                onChange={handleTechnicalSupportInputChange}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea 
                                                className="form-control py-3" 
                                                rows="3" 
                                                placeholder="Describe your issue"
                                                name="issueDescription"
                                                value={technicalSupportForm.issueDescription}
                                                onChange={handleTechnicalSupportInputChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <input 
                                                type="text" 
                                                className="form-control py-3" 
                                                placeholder="Your Name"
                                                name="name"
                                                value={technicalSupportForm.name}
                                                onChange={handleTechnicalSupportInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input 
                                                type="tel" 
                                                className="form-control py-3" 
                                                placeholder="Phone Number"
                                                name="phoneNumber"
                                                value={technicalSupportForm.phoneNumber}
                                                onChange={handleTechnicalSupportInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input 
                                                type="email" 
                                                className="form-control py-3" 
                                                placeholder="Email Address"
                                                name="email"
                                                value={technicalSupportForm.email}
                                                onChange={handleTechnicalSupportInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button 
                                                className="btn btn-primary w-100 py-3" 
                                                type="submit"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    'Submit Support Request'
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid topbar px-0 d-none d-lg-block">
                <div className="container px-0">
                    <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <a className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                                <a href= "mailto:info@fabritech.rw" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.rw</a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                                <a href="https://www.instagram.com/fabritech_ltd/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
                                <a href="https://www.linkedin.com/in/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-linkedin-in text-white"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech&amp;phone=+250788601280" className="btn btn-primary btn-square rounded-circle nav-fill me-3">
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
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Installation</h4>
                    <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="/service">Service</a></li>
                        <li className="breadcrumb-item active text-primary">Canal + and Dstv</li>
                    </ol>
                </div>
            </div>
            {/* <!-- Header End --> */}
            {/* <!-- Canal+ & DStv Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-5 mb-4">Premium Entertainment at Your Fingertips</h1>
                            <p className="mb-4">Experience world-class entertainment with professional Canal+ and DStv installation services from Fabritech. We ensure crystal-clear reception and seamless setup for your ultimate viewing pleasure.</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Professional Installation</h6>
                                            <span>Expert technicians for perfect signal reception</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>Quick Service</h6>
                                            <span>Same-day installation and activation</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <h6><i className="fas fa-check-circle text-primary me-2"></i>24/7 Support</h6>
                                            <span>Round-the-clock technical assistance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative overflow-hidden rounded">
                                <img src="img/dstv.jpg" className="w-100" alt="DStv Installation" />
                                <div className="position-absolute" style={{
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(11, 33, 84, 0.1)'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Canal+ & DStv Services End --> */}

            {/* Services Section */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Our Services</h4>
                        <h1 className="display-5 mb-4">Complete Satellite TV Solutions</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/canal+.jpg"
                                    alt="Canal+"
                                    style={{
                                        height: '250px',
                                        objectFit: 'cover',
                                        padding: '15px'
                                    }} />
                                <div className="card-body text-center">
                                    <h3 className="card-title h5 text-primary">Canal+ Services</h3>
                                    <p className="card-text">Complete Canal+ installation and subscription services.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>New Installations</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Subscription Renewal</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Technical Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="card h-100 shadow-sm">
                                <img className="card-img-top"
                                    src="img/dstv.jpg"
                                    alt="DStv"
                                    style={{
                                        height: '250px',
                                        objectFit: 'contain',
                                        padding: '15px'
                                    }} />
                                <div className="card-body text-center">
                                    <h3 className="card-title h5 text-primary">DStv Solutions</h3>
                                    <p className="card-text">Professional DStv installation and maintenance services.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="fas fa-check text-primary me-2"></i>Full Installation</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Package Upgrades</li>
                                        <li><i className="fas fa-check text-primary me-2"></i>Signal Optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Why Choose Us</h4>
                        <h1 className="display-5 mb-4">Your Trusted Installation Partner</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-tools text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">Expert Installation</h4>
                                <p className="mb-4">Professional technicians with years of experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-headset text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">24/7 Support</h4>
                                <p className="mb-4">Always available to assist with any issues</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-check text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">Quality Service</h4>
                                <p className="mb-4">Guaranteed satisfaction with our service</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item bg-white text-center rounded p-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="fa fa-dollar-sign text-white fs-5"></i>
                                </div>
                                <h4 className="mb-3">Competitive Pricing</h4>
                                <p className="mb-4">Best value for professional installation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscription Packages Section */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 className="text-primary">Our Packages</h4>
                        <h1 className="display-5 mb-4">Choose Your Subscription Package</h1>
                    </div>

                    {/* Canal+ Packages */}
                    <h2 className="text-center mb-4">Canal+ Packages</h2>
                    <div className="row g-4 justify-content-center mb-5">
                        {canalPackages.map((pkg) => (
                            <div key={pkg.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="card h-100 shadow-sm hover-scale">
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title text-primary mb-3">{pkg.name}</h3>
                                        <h4 className="display-6 mb-4">
                                            {pkg.price.toLocaleString()} RWF
                                            <span className="fs-6 text-muted">/month</span>
                                        </h4>
                                        <p className="mb-3 text-muted">{pkg.channels}</p>
                                        <ul className="list-unstyled mb-4">
                                            {pkg.features.map((feature, index) => (
                                                <li key={index} className="mb-2">
                                                    <i className="fas fa-check text-primary me-2"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <button 
                                            className="btn btn-primary px-4 py-2"
                                            onClick={() => handlePackageSelect(pkg)}
                                        >
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DStv Packages */}
                    <h2 className="text-center mb-4">DStv Packages</h2>
                    <div className="row g-4 justify-content-center">
                        {dstvPackages.map((pkg) => (
                            <div key={pkg.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="card h-100 shadow-sm hover-scale">
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title text-primary mb-3">{pkg.name}</h3>
                                        <h4 className="display-6 mb-4">
                                            {pkg.price.toLocaleString()} RWF
                                            <span className="fs-6 text-muted">/month</span>
                                        </h4>
                                        <p className="mb-3 text-muted">{pkg.channels}</p>
                                        <ul className="list-unstyled mb-4">
                                            {pkg.features.map((feature, index) => (
                                                <li key={index} className="mb-2">
                                                    <i className="fas fa-check text-primary me-2"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <button 
                                            className="btn btn-primary px-4 py-2"
                                            onClick={() => handlePackageSelect(pkg)}
                                        >
                                            Subscribe Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showPaymentModal && renderPaymentModal()}
            {showDecoderPaymentModal && renderDecoderPaymentModal()}
            
            {/* {renderSubscriptionHistory()} */}
            
            {renderSupportSection()}
            
            {/* Contact Section */}
            <div className="container-fluid bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 className="text-primary">Contact Us</h4>
                            <h1 className="display-5 mb-4">Need Installation or Support?</h1>
                            <p className="mb-4">Contact us today for professional Canal+ and DStv installation services. Our team is ready to assist you!</p>
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-phone-alt"></i>
                                        </div>
                                        <div className="ms-3">
                                            <h6>Call Us</h6>
                                            <span>+250788601280</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="ms-3">
                                            <h6>Mail Us</h6>
                                            <span>info@fabritech.rw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="bg-white rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s">
                                <img src="img/Canal+andDstv.jpg" alt="Canal+ and DStv" className="img-fluid rounded" />
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
                                <a href="https://maps.app.goo.gl/GMRDwb39xqjckVDD9"><i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza, Kisimenti, Remera</a>
                                <a href="mailto:info@fabritech.rw"><i className="fas fa-envelope me-2"></i> info@fabritech.rw</a>
                                <a href="tel:+250788601280"><i className="fas fa-phone me-2"></i> +250788601280</a>
                                {/* Social media icons */}
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

export default CanalDstv