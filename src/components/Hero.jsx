// Hero.jsx
import React from 'react';

const Hero = () => {
    return (
        <section style={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2000&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: '70px'
        }}>
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    padding: '30px',
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',5
                    borderRadius: '10px'
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        marginBottom: '20px',
                        fontWeight: 700
                    }}>Navigating Trade and Credit Shouldn't Be a Gamble</h1>

                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '40px'
                    }}>For SMEs, cash flow is oxygen—and we're here to help you breathe easier. Our platform transforms everyday trade data into actionable insights.</p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '15px',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#contact" style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            padding: '12px 25px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 600
                        }}>Get Started</a>

                        <a href="#features" style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '10px 25px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            border: '2px solid white'
                        }}>Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;