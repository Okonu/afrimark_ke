import FeatureCard from './FeatureCard';

const Features = () => {
    const features = [
        {
            title: "Business Verification",
            description: "Know who you're dealing with. Verify the credit rating of businesses instantly to help you make better decisions.",
            icon: '🔍'
        },
        {
            title: "Trade Credit Score",
            description: "Access fair credit terms. Build and share a credible payment history to unlock better financing opportunities.",
            icon: '📊'
        },
        {
            title: "Debt Risk Alerts",
            description: "Stay one step ahead. Receive alerts on potential clients with poor payment histories or legal disputes.",
            icon: '⚠️'
        }
    ];

    return (
        <section id="features" style={{
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
                    radial-gradient(circle at 30% 80%, rgba(255, 87, 34, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 70% 20%, rgba(44, 62, 80, 0.05) 0%, transparent 50%)
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
                    }}>What We Offer</h2>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        color: '#4a4a68',
                        fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                        lineHeight: '1.6'
                    }}>
                        Our platform gives you the tools to grow confidently while avoiding risky partners.
                    </p>
                </div>

                {/* Features Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: '30px',
                            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.3s ease',
                            transform: 'translateY(0)',
                            border: '1px solid rgba(0, 0, 0, 0.05)'
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
                                opacity: 0.8
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                color: '#1a1a2e',
                                marginBottom: '15px',
                                fontWeight: 700
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{
                                color: '#4a4a68',
                                lineHeight: '1.6'
                            }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;