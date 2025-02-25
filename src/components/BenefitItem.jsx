const BenefitItem = ({ title, description }) => {
    return (
        <div style={{
            display: 'flex',
            marginBottom: '20px'
        }}>
            <div style={{
                color: '#4CAF50',
                marginRight: '15px'
            }}>
                ✓
            </div>
            <div>
                <h4 style={{
                    fontSize: '18px',
                    marginBottom: '5px'
                }}>{title}</h4>
                <p style={{
                    color: '#666'
                }}>{description}</p>
            </div>
        </div>
    );
};

export default BenefitItem;