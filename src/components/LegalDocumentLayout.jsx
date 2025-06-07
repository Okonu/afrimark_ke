import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const LegalDocumentLayout = ({ data }) => {
    const { title, subtitle, lastUpdated, sections } = data;
    const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(section => ({
                id: section.id,
                element: document.getElementById(section.id)
            })).filter(item => item.element);

            const scrollPosition = window.scrollY + 150;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const { id, element } = sectionElements[i];
                if (element.offsetTop <= scrollPosition) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    // Render different types of content sections
    const renderContent = (section) => {
        const contentStyles = {
            color: '#4a4a68',
            lineHeight: '1.7',
            fontSize: '1rem'
        };

        const listStyles = {
            paddingLeft: '0',
            listStyle: 'none',
            marginBottom: '20px'
        };

        const listItemStyles = {
            color: '#4a4a68',
            marginBottom: '12px',
            paddingLeft: '20px',
            position: 'relative'
        };

        return (
            <div>
                {/* Regular content paragraphs */}
                {section.content && section.content.map((paragraph, index) => (
                    <p key={index} style={{ ...contentStyles, marginBottom: '16px' }}>
                        {paragraph}
                    </p>
                ))}

                {/* Numbered lists */}
                {section.list && section.list.length > 0 && section.list[0]?.number && (
                    <div style={{ paddingLeft: '0', marginTop: '20px' }}>
                        {section.list.map((item, index) => (
                            <div key={index} style={{ marginBottom: '20px' }}>
                                <p style={{ ...contentStyles, marginBottom: item.subList ? '10px' : '0' }}>
                                    <strong style={{ color: '#1a1a2e' }}>{item.number}.</strong> {item.text}
                                </p>
                                {item.subList && (
                                    <ul style={{ paddingLeft: '25px', marginTop: '8px', listStyle: 'none' }}>
                                        {item.subList.map((subItem, subIndex) => (
                                            <li key={subIndex} style={{ ...listItemStyles, marginBottom: '8px' }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '8px',
                                                    width: '4px',
                                                    height: '4px',
                                                    backgroundColor: '#FF5722',
                                                    borderRadius: '50%'
                                                }}></span>
                                                {typeof subItem === 'string' ? subItem :
                                                    (subItem.type ? `${subItem.type}: ${subItem.text}` : subItem.text)}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.highlight && (
                                    <div style={{
                                        backgroundColor: 'rgba(255, 87, 34, 0.1)',
                                        border: '1px solid #FF5722',
                                        padding: '12px',
                                        borderRadius: '6px',
                                        marginTop: '10px'
                                    }}>
                                        <strong style={{ color: '#E64A19' }}>Key Point: 10 year retention period</strong>
                                    </div>
                                )}
                            </div>
                        ))}
                        {section.note && (
                            <p style={{ ...contentStyles, fontStyle: 'italic', marginTop: '16px' }}>
                                {section.note}
                            </p>
                        )}
                    </div>
                )}

                {/* Simple lists (for sharing section, etc.) */}
                {section.list && section.list.length > 0 && !section.list[0]?.number && (
                    <ul style={listStyles}>
                        {section.list.map((item, index) => (
                            <li key={index} style={listItemStyles}>
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '6px',
                                    width: '6px',
                                    height: '6px',
                                    backgroundColor: '#FF5722',
                                    borderRadius: '50%'
                                }}></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Definitions */}
                {section.definitions && (
                    <div style={{ marginTop: '20px' }}>
                        {section.definitions.map((def, index) => (
                            <div key={index} style={{
                                backgroundColor: '#f8f9fa',
                                padding: '16px 20px',
                                borderRadius: '8px',
                                marginBottom: '12px',
                                borderLeft: '4px solid #FF5722'
                            }}>
                                <p style={{ ...contentStyles, marginBottom: '0' }}>
                                    <strong style={{ color: '#1a1a2e' }}>{def.number}. "{def.term}"</strong> {def.definition}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Subsections */}
                {section.subsections && (
                    <div style={{ marginTop: '20px' }}>
                        {section.subsections.map((subsection, index) => (
                            <div key={index} style={{
                                marginBottom: '24px',
                                paddingBottom: '20px',
                                borderBottom: index < section.subsections.length - 1 ? '1px solid #e9ecef' : 'none'
                            }}>
                                <h4 style={{
                                    color: '#1a1a2e',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    marginBottom: '12px'
                                }}>
                                    {subsection.number}. {subsection.title}
                                </h4>
                                <p style={{ ...contentStyles, marginBottom: subsection.list ? '12px' : '0' }}>
                                    {subsection.content}
                                </p>
                                {subsection.list && (
                                    <ul style={listStyles}>
                                        {subsection.list.map((item, itemIndex) => (
                                            <li key={itemIndex} style={listItemStyles}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '6px',
                                                    width: '6px',
                                                    height: '6px',
                                                    backgroundColor: '#FF5722',
                                                    borderRadius: '50%'
                                                }}></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Data categories (for privacy policy) */}
                {section.dataCategories && (
                    <div style={{ marginTop: '20px' }}>
                        {section.dataCategories.map((category, index) => (
                            <div key={index} style={{
                                backgroundColor: '#f8f9fa',
                                padding: '20px',
                                borderRadius: '12px',
                                border: '1px solid #e9ecef',
                                marginBottom: '16px'
                            }}>
                                <h4 style={{
                                    color: '#1a1a2e',
                                    marginBottom: '10px',
                                    fontSize: '1.1rem',
                                    fontWeight: 600
                                }}>
                                    {category.category}
                                </h4>
                                {category.description && (
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '0.95rem',
                                        marginBottom: '10px',
                                        fontStyle: 'italic'
                                    }}>
                                        {category.description}
                                    </p>
                                )}
                                <p style={{
                                    color: '#4a4a68',
                                    fontSize: '0.95rem',
                                    marginBottom: '0'
                                }}>
                                    <strong>Purpose:</strong> {category.purpose}
                                </p>
                            </div>
                        ))}
                        {section.note && (
                            <p style={{ ...contentStyles, fontStyle: 'italic', marginTop: '16px' }}>
                                {section.note}
                            </p>
                        )}
                    </div>
                )}

                {/* Obligations section */}
                {section.obligations && (
                    <div style={{ paddingLeft: '0', marginTop: '20px' }}>
                        {section.obligations.map((obligation, index) => (
                            <div key={index} style={{ marginBottom: '20px' }}>
                                <p style={{ ...contentStyles, marginBottom: obligation.subList ? '10px' : '0' }}>
                                    <strong style={{ color: '#1a1a2e' }}>{obligation.number}.</strong> {obligation.text}
                                </p>
                                {obligation.subList && (
                                    <ul style={{ paddingLeft: '25px', marginTop: '8px', listStyle: 'none' }}>
                                        {obligation.subList.map((subItem, subIndex) => (
                                            <li key={subIndex} style={{ ...listItemStyles, marginBottom: '12px' }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '6px',
                                                    width: '6px',
                                                    height: '6px',
                                                    backgroundColor: '#FF5722',
                                                    borderRadius: '50%'
                                                }}></span>
                                                <strong>{subItem.type}:</strong> {subItem.text}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Rights section */}
                {section.rights && (
                    <div style={{ paddingLeft: '0', marginTop: '20px' }}>
                        {section.rights.map((right, index) => (
                            <div key={index} style={{
                                padding: '16px 0',
                                borderBottom: index < section.rights.length - 1 ? '1px solid #f0f0f0' : 'none'
                            }}>
                                <p style={contentStyles}>
                                    <strong style={{ color: '#1a1a2e' }}>{right.number}.</strong>
                                    <span style={{ fontWeight: 600, color: '#E64A19' }}> {right.title}.</span> {right.description}
                                </p>
                            </div>
                        ))}
                        {section.note && (
                            <p style={{ ...contentStyles, fontStyle: 'italic', marginTop: '16px' }}>
                                {section.note}
                            </p>
                        )}
                    </div>
                )}

                {/* Important note (warning box) */}
                {section.importantNote && (
                    <div style={{
                        backgroundColor: section.importantNote.type === 'warning' ? '#fff3cd' : '#f8f9fa',
                        border: `1px solid ${section.importantNote.type === 'warning' ? '#ffeaa7' : '#e9ecef'}`,
                        padding: '16px',
                        borderRadius: '8px',
                        marginTop: '20px'
                    }}>
                        <p style={{
                            color: section.importantNote.type === 'warning' ? '#856404' : '#4a4a68',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            marginBottom: '0'
                        }}>
                            <strong>Important Note:</strong> {section.importantNote.text}
                        </p>
                    </div>
                )}

                {/* Contact information */}
                {section.contacts && (
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '24px',
                        borderRadius: '12px',
                        border: '1px solid #e9ecef'
                    }}>
                        {section.contacts.map((contact, index) => (
                            <div key={index} style={{
                                marginBottom: index < section.contacts.length - 1 ? '20px' : '0'
                            }}>
                                <h4 style={{
                                    color: '#1a1a2e',
                                    marginBottom: '10px',
                                    fontSize: '1.1rem',
                                    fontWeight: 600
                                }}>
                                    {contact.name || contact.title}
                                </h4>
                                {contact.email && (
                                    <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                        <strong>Email:</strong> {contact.email}
                                    </p>
                                )}
                                {contact.phone && (
                                    <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                        <strong>Phone:</strong> {contact.phone}
                                    </p>
                                )}
                                {contact.address && (
                                    <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                        <strong>Address:</strong> {contact.address}
                                    </p>
                                )}
                                {contact.website && (
                                    <p style={{ color: '#4a4a68', marginBottom: '0' }}>
                                        <strong>Website:</strong> {contact.website}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#fafbfc',
            color: '#333'
        }}>
            <Header />

            {/* Compact Hero Section */}
            <section style={{
                paddingTop: '100px',
                paddingBottom: '40px',
                background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
                color: 'white'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 5%'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        marginBottom: '12px',
                        fontWeight: 800
                    }}>
                        {title}
                    </h1>
                    <p style={{
                        fontSize: '1rem',
                        opacity: 0.9,
                        maxWidth: '600px'
                    }}>
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* Main Content - Two Column Layout */}
            <section style={{
                padding: '40px 0 80px',
                backgroundColor: '#fafbfc'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 5%',
                    display: 'grid',
                    gridTemplateColumns: '280px 1fr',
                    gap: '40px',
                    '@media (max-width: 768px)': {
                        gridTemplateColumns: '1fr',
                        gap: '20px'
                    }
                }}>
                    {/* Sidebar Navigation */}
                    <div style={{
                        position: 'sticky',
                        top: '120px',
                        height: 'fit-content'
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            padding: '20px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                            border: '1px solid #e9ecef'
                        }}>
                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: '#1a1a2e',
                                marginBottom: '16px',
                                paddingBottom: '12px',
                                borderBottom: '2px solid #FF5722'
                            }}>
                                Table of Contents
                            </h3>
                            <nav>
                                {sections.map((section, index) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveSection(section.id);
                                            const element = document.getElementById(section.id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        }}
                                        style={{
                                            display: 'block',
                                            padding: '8px 12px',
                                            margin: '4px 0',
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            fontSize: '0.85rem',
                                            lineHeight: '1.4',
                                            transition: 'all 0.2s ease',
                                            backgroundColor: activeSection === section.id ? '#FF5722' : 'transparent',
                                            color: activeSection === section.id ? 'white' : '#4a4a68',
                                            fontWeight: activeSection === section.id ? 600 : 400
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeSection !== section.id) {
                                                e.target.style.backgroundColor = '#f8f9fa';
                                                e.target.style.color = '#1a1a2e';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeSection !== section.id) {
                                                e.target.style.backgroundColor = 'transparent';
                                                e.target.style.color = '#4a4a68';
                                            }
                                        }}
                                    >
                                        {section.title.replace(/^\d+\.\s*/, '')}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '40px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                        border: '1px solid #e9ecef'
                    }}>
                        {/* Render all sections */}
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                id={section.id}
                                style={{
                                    marginBottom: index < sections.length - 1 ? '48px' : '0',
                                    paddingBottom: index < sections.length - 1 ? '32px' : '0',
                                    borderBottom: index < sections.length - 1 ? '1px solid #f0f0f0' : 'none'
                                }}
                            >
                                <h2 style={{
                                    color: '#1a1a2e',
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    marginBottom: '20px',
                                    paddingBottom: '12px',
                                    borderBottom: '2px solid #e9ecef'
                                }}>
                                    {section.title}
                                </h2>
                                {renderContent(section)}
                            </div>
                        ))}

                        {/* Footer */}
                        <div style={{
                            borderTop: '2px solid #e9ecef',
                            paddingTop: '24px',
                            textAlign: 'center',
                            backgroundColor: '#f8f9fa',
                            margin: '32px -40px -40px -40px',
                            padding: '24px 40px',
                            borderRadius: '0 0 12px 12px'
                        }}>
                            <p style={{
                                color: '#6c757d',
                                fontSize: '0.9rem',
                                marginBottom: '8px',
                                fontWeight: 500
                            }}>
                                Last Updated: {lastUpdated}
                            </p>
                            <p style={{
                                color: '#6c757d',
                                fontSize: '0.8rem',
                                fontStyle: 'italic',
                                marginBottom: '0'
                            }}>
                                This document may be updated from time to time. Please check this page regularly for any changes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LegalDocumentLayout;