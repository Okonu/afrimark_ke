const CTA = () => {
    return (
        <section id="contact" style={{
            padding: '80px 0',
            background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
            color: 'white',
            textAlign: 'center'
        }}>
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '20px'
                }}>MVP Coming Soon</h2>
                <p style={{
                    fontSize: '1.1rem',
                    maxWidth: '700px',
                    margin: '0 auto 40px'
                }}>Be the first to know when we launch. Sign up for early access and updates.</p>

                <div style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            padding: '12px 15px',
                            borderRadius: '5px',
                            border: 'none',
                            fontSize: '16px',
                            width: '100%'
                        }}
                    />
                    <button style={{
                        backgroundColor: '#333',
                        color: 'white',
                        padding: '12px 25px',
                        borderRadius: '5px',
                        border: 'none',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        Join Waitlist
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;