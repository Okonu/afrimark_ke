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
                    }}>How It Works</h2>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        color: '#666'
                    }}>Our platform aggregates trade data to help businesses make informed decisions.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;