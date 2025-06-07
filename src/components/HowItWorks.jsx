import StepCard from './StepCard';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Aggregates Trade Data",
            description: "We track payment histories, legal disputes, and social feedback to create a comprehensive business profile."
        },
        {
            number: 2,
            title: "Generates Credit Scores",
            description: "Our proprietary algorithms rate businesses' creditworthiness based on their history and market data."
        },
        {
            number: 3,
            title: "Provides Actionable Insights",
            description: "Get detailed reports and real-time alerts to help you make informed business decisions."
        }
    ];

    return (
        <section id="about" style={{
            position: 'relative',
            padding: '100px 0',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)',
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
                zIndex: 2
            }}>
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
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
                        How It Works
                    </h2>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        color: '#4a4a68',
                        fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                        lineHeight: '1.6'
                    }}>
                        Our platform aggregates trade data to help businesses make informed decisions.
                    </p>
                </div>

                {/* Steps Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    position: 'relative'
                }}>
                    {/* Connecting Line */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(to right, transparent, #FF5722, transparent)',
                        zIndex: 1,
                        transform: 'translateY(-50%)'
                    }}></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                padding: '30px',
                                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                position: 'relative',
                                zIndex: 2
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.05)';
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                left: '-15px',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#FF5722',
                                color: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                            }}>
                                {step.number}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                color: '#1a1a2e',
                                marginBottom: '15px',
                                fontWeight: 700,
                                paddingLeft: '30px'
                            }}>
                                {step.title}
                            </h3>
                            <p style={{
                                color: '#4a4a68',
                                lineHeight: '1.6',
                                paddingLeft: '30px'
                            }}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;