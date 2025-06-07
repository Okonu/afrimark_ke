import React from 'react';

const Hero = () => {
    // Afrimark brand colors
    const COLORS = {
        primary: '#FF5722',      // Orange from logo
        primaryDark: '#E64A19',  // Darker orange
        navy: '#2C3E50',         // Navy blue from logo
        navyLight: '#34495E'     // Lighter navy
    };

    return (
        <section style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            minHeight: '100vh',
            background: `
                linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url("https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2000&auto=format&fit=crop")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            overflow: 'hidden',
            padding: '0 5%'
        }}>
            {/* Animated Grid Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 50px,
                        rgba(255,255,255,0.02) 50px,
                        rgba(255,255,255,0.02) 100px
                    ),
                    repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 50px,
                        rgba(255,255,255,0.02) 50px,
                        rgba(255,255,255,0.02) 100px
                    )
                `,
                opacity: 0.1,
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            {/* Content Container */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Text Content */}
                <div style={{
                    flex: '0 0 60%',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: `rgba(255, 87, 34, 0.2)`, // Updated to use Afrimark orange
                        color: COLORS.primary, // Updated to Afrimark orange
                        padding: '8px 16px',
                        borderRadius: '20px',
                        marginBottom: '20px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        border: `1px solid rgba(255, 87, 34, 0.3)` // Updated border
                    }}>
                        Enterprise Trade Intelligence
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        marginBottom: '25px',
                        lineHeight: '1.2',
                        fontWeight: 800,
                        background: 'linear-gradient(95deg, #ffffff 30%, #b0bec5 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Navigating Trade and Credit Shouldn't Be a Gamble
                    </h1>

                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                        color: 'rgba(255,255,255,0.85)',
                        marginBottom: '35px',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        For SMEs, cash flow is oxygen—and we're here to help you breathe easier. Our platform transforms everyday trade data into actionable insights.
                    </p>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <button style={{
                            backgroundColor: COLORS.primary, // Updated to Afrimark orange
                            color: 'white',
                            padding: '14px 30px',
                            borderRadius: '10px',
                            border: 'none',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1rem',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            boxShadow: `0 10px 20px rgba(255, 87, 34, 0.3)`, // Updated shadow
                            position: 'relative',
                            overflow: 'hidden',
                            transform: 'perspective(1000px) translateZ(0)',
                            willChange: 'transform',
                            cursor: 'pointer'
                        }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'perspective(1000px) translateY(-10px) translateZ(50px)';
                                    e.target.style.boxShadow = `0 20px 30px rgba(255, 87, 34, 0.4)`; // Updated shadow
                                    e.target.style.backgroundColor = COLORS.primaryDark; // Darker orange on hover
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'perspective(1000px) translateY(0) translateZ(0)';
                                    e.target.style.boxShadow = `0 10px 20px rgba(255, 87, 34, 0.3)`;
                                    e.target.style.backgroundColor = COLORS.primary;
                                }}>
                            Get Started
                        </button>

                        <button style={{
                            color: 'white',
                            padding: '14px 30px',
                            borderRadius: '10px',
                            border: 'none',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1rem',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            borderColor: 'rgba(255,255,255,0.3)',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            backgroundColor: 'transparent',
                            transform: 'perspective(1000px) translateZ(0)',
                            willChange: 'transform',
                            cursor: 'pointer'
                        }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.target.style.transform = 'perspective(1000px) translateY(-10px) translateZ(50px)';
                                    e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.transform = 'perspective(1000px) translateY(0) translateZ(0)';
                                    e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                                }}>
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Graphic Element */}
                <div style={{
                    flex: '0 0 35%',
                    position: 'relative',
                    height: '500px'
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: `linear-gradient(135deg, rgba(255, 87, 34, 0.2) 0%, rgba(44, 62, 80, 0.2) 100%)`, // Updated gradient
                        borderRadius: '50%',
                        filter: 'blur(120px)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.6
                    }}></div>
                </div>
            </div>

            {/* Subtle Particle Effect */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                zIndex: 3,
                opacity: 0.3
            }}>
                {[...Array(50)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: '2px',
                        height: '2px',
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        borderRadius: '50%',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${2 + Math.random() * 3}s ease-in-out infinite alternate`
                    }} />
                ))}
                <style>{`
                    @keyframes float {
                        from { transform: translateY(0); }
                        to { transform: translateY(-20px); }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Hero;