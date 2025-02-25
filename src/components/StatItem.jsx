const StatItem = ({ value, description }) => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease'
        }}
             onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'scale(1.05)';
                 e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
             }}
             onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'scale(1)';
                 e.currentTarget.style.boxShadow = 'none';
             }}>
            <div style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '15px',
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
                {value}
            </div>
            <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1.1rem',
                lineHeight: '1.6'
            }}>
                {description}
            </p>
        </div>
    );
};

export default StatItem;