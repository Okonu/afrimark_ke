import React, { useState } from 'react';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Afrimark brand colors
    const COLORS = {
        primary: '#FF5722',      // Orange from logo
        primaryDark: '#E64A19',  // Darker orange
        navy: '#2C3E50',         // Navy blue from logo
        navyLight: '#34495E'     // Lighter navy
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            setErrorMessage('');

            const urlParams = new URLSearchParams(window.location.search);
            const utmSource = urlParams.get('utm_source');
            const utmMedium = urlParams.get('utm_medium');
            const utmCampaign = urlParams.get('utm_campaign');

            // Simulated API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setEmail('');
            setSubmitStatus('success');

            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);

        } catch (error) {
            console.error('Error submitting email:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again later.');

            setTimeout(() => {
                setSubmitStatus(null);
                setErrorMessage('');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={{
            position: 'relative',
            padding: '100px 0',
            background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`, // Updated gradient
            color: 'white',
            textAlign: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 30% 80%, rgba(255, 87, 34, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 70% 20%, rgba(44, 62, 80, 0.1) 0%, transparent 50%)
                `,
                opacity: 0.5,
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            <div style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 5%',
                position: 'relative',
                zIndex: 2
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                    marginBottom: '20px',
                    fontWeight: 800,
                    background: 'linear-gradient(95deg, #ffffff 20%, #e0e0e0 80%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Get Early Access
                </h2>
                <p style={{
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                    maxWidth: '700px',
                    margin: '0 auto 40px',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: '1.6'
                }}>
                    Be the first to know when we launch. Sign up for early access and updates.
                </p>

                <form
                    onSubmit={handleSubmit}
                    style={{
                        maxWidth: '500px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                        style={{
                            padding: '15px 20px',
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            fontSize: '1rem',
                            width: '100%',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = COLORS.primary; // Updated to Afrimark orange
                            e.target.style.boxShadow = `0 0 0 3px rgba(255, 87, 34, 0.2)`; // Updated shadow
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            backgroundColor: isSubmitting ? '#888888' : COLORS.primary, // Updated to Afrimark orange
                            color: 'white',
                            padding: '15px 25px',
                            borderRadius: '10px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 700,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            transform: 'translateY(0)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                        onMouseEnter={(e) => {
                            if (!isSubmitting) {
                                e.target.style.transform = 'translateY(-5px)';
                                e.target.style.boxShadow = `0 15px 25px rgba(255, 87, 34, 0.3)`; // Updated shadow
                                e.target.style.backgroundColor = COLORS.primaryDark; // Darker orange on hover
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                            if (!isSubmitting) {
                                e.target.style.backgroundColor = COLORS.primary;
                            }
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <span style={{
                                    display: 'inline-block',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    border: '2px solid white',
                                    borderTopColor: 'transparent',
                                    animation: 'spin 1s linear infinite'
                                }}></span>
                                <style>{`
                                    @keyframes spin {
                                        0% { transform: rotate(0deg); }
                                        100% { transform: rotate(360deg); }
                                    }
                                `}</style>
                                Processing...
                            </>
                        ) : 'Join Waitlist'}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div style={{
                            backgroundColor: `rgba(255, 87, 34, 0.2)`, // Updated to Afrimark orange
                            border: `1px solid ${COLORS.primary}`,
                            color: COLORS.primary,
                            padding: '10px',
                            borderRadius: '10px',
                            marginTop: '10px',
                            animation: 'fadeInUp 0.5s ease'
                        }}>
                            <style>{`
                                @keyframes fadeInUp {
                                    0% { opacity: 0; transform: translateY(10px); }
                                    100% { opacity: 1; transform: translateY(0); }
                                }
                            `}</style>
                            Thank you for joining our waitlist! We have sent you a confirmation email with more details.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div style={{
                            backgroundColor: 'rgba(244, 67, 54, 0.2)',
                            border: '1px solid #F44336',
                            color: '#F44336',
                            padding: '10px',
                            borderRadius: '10px',
                            marginTop: '10px',
                            animation: 'fadeInUp 0.5s ease'
                        }}>
                            {errorMessage || 'Sorry, something went wrong. Please try again later.'}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default CTA;