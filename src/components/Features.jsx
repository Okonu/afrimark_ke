import FeatureCard from './FeatureCard';

const Features = () => {
    const features = [
        {
            title: "Business Verification",
            description: "Know who you're dealing with. Verify the credit rating of businesses instantly to help you make better decisions."
        },
        {
            title: "Trade Credit Score",
            description: "Access fair credit terms. Build and share a credible payment history to unlock better financing opportunities."
        },
        {
            title: "Debt Risk Alerts",
            description: "Stay one step ahead. Receive alerts on potential clients with poor payment histories or legal disputes."
        }
    ];

    return (
        <section id="features" style={{
            padding: '80px 0',
            backgroundColor: 'white'
        }}>
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '50px'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '15px'
                    }}>What We Offer</h2>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        color: '#666'
                    }}>Our platform gives you the tools to grow confidently while avoiding risky partners.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;