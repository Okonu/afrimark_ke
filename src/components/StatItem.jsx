const StatItem = ({ value, description }) => {
    return (
        <div>
            <div className="text-4xl font-bold text-green-400 mb-2">{value}</div>
            <p className="text-xl">{description}</p>
        </div>
    );
};

export default StatItem;