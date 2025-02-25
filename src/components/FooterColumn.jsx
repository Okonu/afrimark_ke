const FooterColumn = ({ title, links }) => {
    return (
        <div>
            <h4 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '15px',
                color: 'white'
            }}>{title}</h4>
            <ul style={{
                listStyle: 'none',
                padding: 0
            }}>
                {links.map((link, index) => (
                    <li key={index} style={{
                        marginBottom: '10px'
                    }}>
                        <a href={link.href} style={{
                            textDecoration: 'none',
                            color: '#aaa',
                            transition: 'color 0.3s'
                        }}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;