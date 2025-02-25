const FeatureCard = ({ title, description }) => {
    return (
        <div style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            padding: '30px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
        }}>
            <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px'
            }}>{title}</h3>
            <p style={{
                color: '#666'
            }}>{description}</p>
        </div>
    );
};

export default FeatureCard;