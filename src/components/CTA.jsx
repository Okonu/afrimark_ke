import React, { useState } from 'react';

const CTA = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <section id="contact" style={{
            position: 'relative',
            padding: '100px 0',
            background: 'linear-gradient(135deg, #121622 0%, #1E2537 100%)',
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
                    radial-gradient(circle at 30% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 70% 20%, rgba(41, 128, 185, 0.1) 0%, transparent 50%)
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
                    MVP Coming Soon
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
                            e.target.style.borderColor = '#4CAF50';
                            e.target.style.boxShadow = '0 0 0 3px rgba(76, 175, 80, 0.2)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                            e.target.style.boxShadow = 'none';
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            padding: '15px 25px',
                            borderRadius: '10px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            transform: 'translateY(0)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 15px 25px rgba(76, 175, 80, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        Join Waitlist
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CTA;