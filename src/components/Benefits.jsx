import BenefitItem from './BenefitItem';

const Benefits = () => {
    const benefits = [
        {
            title: "Grow your business",
            description: "Leverage your positive trade history for loans and partnerships",
            icon: '📈'
        },
        {
            title: "Avoid bad debt",
            description: "Make informed decisions with real-time insights into buyers' creditworthiness",
            icon: '🛡️'
        },
        {
            title: "Build trust",
            description: "Establish your business as a reliable partner in the marketplace",
            icon: '🤝'
        }
    ];

    return (
        <section id="benefits" style={{
            position: 'relative',
            padding: '100px 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%)',
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
                    radial-gradient(circle at 20% 80%, rgba(255, 87, 34, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.03) 0%, transparent 50%)
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
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    maxWidth: '800px',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100px',
                        height: '4px',
                        backgroundColor: '#FF5722',
                        borderRadius: '2px'
                    }}></div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        color: '#1a1a2e',
                        marginBottom: '20px',
                        fontWeight: 800
                    }}>
                        Built for SMEs
                    </h2>
                    <p style={{
                        color: '#4a4a68',
                        fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                        lineHeight: '1.6',
                        marginBottom: '30px'
                    }}>
                        We exist to protect <strong style={{color: '#FF5722'}}>you</strong> and help your business thrive in a market where information is power.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    width: '100%'
                }}>
                    {benefits.map((benefit, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: '30px',
                            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease',
                            transform: 'translateY(0)',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                             onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'translateY(-10px)';
                                 e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
                             }}
                             onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'translateY(0)';
                                 e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.05)';
                             }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '20px',
                                opacity: 0.8,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'rgba(255, 87, 34, 0.1)',
                                borderRadius: '50%'
                            }}>
                                {benefit.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                color: '#1a1a2e',
                                marginBottom: '15px',
                                fontWeight: 700
                            }}>
                                {benefit.title}
                            </h3>
                            <p style={{
                                color: '#4a4a68',
                                lineHeight: '1.6',
                                flex: 1
                            }}>
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;