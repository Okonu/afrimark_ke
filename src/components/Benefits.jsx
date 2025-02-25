import BenefitItem from './BenefitItem';

const Benefits = () => {
    const benefits = [
        {
            title: "Grow your business",
            description: "Leverage your positive trade history for loans and partnerships"
        },
        {
            title: "Avoid bad debt",
            description: "Make informed decisions with real-time insights into buyers' creditworthiness"
        },
        {
            title: "Build trust",
            description: "Establish your business as a reliable partner in the marketplace"
        }
    ];

    return (
        <section id="benefits" style={{
            padding: '80px 0',
            backgroundColor: '#f5f5f5'
        }}>
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: '40px',
                    width: '100%'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        marginBottom: '20px'
                    }}>Built for SMEs</h2>
                    <p style={{
                        color: '#666',
                        marginBottom: '30px'
                    }}>We exist to protect <strong>you</strong> and help your business thrive in a market where information is power.</p>

                    <div>
                        {benefits.map((benefit, index) => (
                            <BenefitItem
                                key={index}
                                title={benefit.title}
                                description={benefit.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;