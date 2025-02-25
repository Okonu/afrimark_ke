const FeatureCard = ({ title, description }) => {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '30px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            position: 'relative',
            overflow: 'hidden'
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
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                borderRadius: '50%',
                opacity: 0.1
            }}></div>
            <h3 style={{
                fontSize: '1.3rem',
                color: '#1a1a2e',
                marginBottom: '15px',
                fontWeight: 700,
                position: 'relative',
                zIndex: 2
            }}>
                {title}
            </h3>
            <p style={{
                color: '#4a4a68',
                lineHeight: '1.6',
                position: 'relative',
                zIndex: 2
            }}>
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;