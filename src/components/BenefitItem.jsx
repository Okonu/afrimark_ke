const BenefitItem = ({ title, description }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '25px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
        }}
             onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-5px)';
                 e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
             }}
             onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.05)';
             }}>
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                flexShrink: 0,
                boxShadow: '0 8px 20px rgba(76, 175, 80, 0.3)'
            }}>
                <span style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                }}>
                    ✓
                </span>
            </div>
            <div>
                <h4 style={{
                    fontSize: '1.2rem',
                    marginBottom: '10px',
                    color: '#1a1a2e',
                    fontWeight: 700
                }}>
                    {title}
                </h4>
                <p style={{
                    color: '#4a4a68',
                    lineHeight: '1.6'
                }}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BenefitItem;