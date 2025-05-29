import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsAndConditions = () => {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'white',
            color: '#333'
        }}>
            <Header />
            
            {/* Hero Section */}
            <section style={{
                paddingTop: '120px',
                paddingBottom: '60px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 5%'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        color: '#1a1a2e',
                        marginBottom: '20px',
                        fontWeight: 800
                    }}>
                        Terms and Conditions
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#4a4a68',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Please read these terms and conditions carefully before using our services.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{
                padding: '60px 0 100px',
                backgroundColor: 'white'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '0 5%'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        lineHeight: '1.8'
                    }}>
                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                1. INTRODUCTION
                            </h2>
                            <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                These Terms and Conditions ("Terms") govern the use of services provided by Afrimark ("we," "us," "our"), 
                                a business trade credit bureau operating in Kenya and across Africa. By accessing or using our services, 
                                you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not 
                                agree to these Terms, please do not use our services.
                            </p>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                2. DEFINITIONS
                            </h2>
                            <div style={{ paddingLeft: '20px' }}>
                                <p style={{ color: '#4a4a68', marginBottom: '10px' }}>
                                    <strong>2.1.</strong> "Afrimark" means Afrimark, a registered business trade credit bureau operating in Kenya and across Africa.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '10px' }}>
                                    <strong>2.2.</strong> "Client" means any person or entity that engages Afrimark's services, creates an account with Afrimark, or accesses Afrimark's platform.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '10px' }}>
                                    <strong>2.3.</strong> "Business Credit Information" means information concerning a business's credit history, including previous credit applications, payment behavior, credit relationships, and financial obligations.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '10px' }}>
                                    <strong>2.4.</strong> "Services" means all services provided by Afrimark, including but not limited to business credit reports, credit monitoring, credit scoring, and related services.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '10px' }}>
                                    <strong>2.5.</strong> "Platform" means Afrimark's website, applications, and any other technology used to deliver the Services.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '10px' }}>
                                    <strong>2.6.</strong> "User" means any person who accesses or uses the Platform or Services, whether on their own behalf or on behalf of a Client.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '10px' }}>
                                    <strong>2.7.</strong> "Data Subject" means an individual whose personal data is processed.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                3. ACCOUNT REGISTRATION AND SECURITY
                            </h2>
                            <div style={{ paddingLeft: '20px' }}>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>3.1. Registration Requirements:</strong> To use certain Services, you may need to register for an account. 
                                    You agree to provide accurate, current, and complete information during the registration process and to update 
                                    such information to keep it accurate, current, and complete.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>3.2. Account Security:</strong> You are responsible for maintaining the confidentiality of your account 
                                    credentials and for all activities that occur under your account. You must immediately notify Afrimark of any 
                                    unauthorized use of your account or any other breach of security.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>3.3. User Verification:</strong> Afrimark reserves the right to verify your identity and business 
                                    information before providing access to certain Services. This may include requesting additional documentation or information.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                4. SERVICES AND FEES
                            </h2>
                            <div style={{ paddingLeft: '20px' }}>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>4.1. Service Description:</strong> Afrimark provides business trade credit information services, 
                                    including business credit reports, monitoring services, and related products. The specific features and 
                                    limitations of each Service are described on our Platform or in a separate agreement.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>4.2. Fees and Payment:</strong> Fees for our Services are as stated on our Platform or as agreed 
                                    in writing between you and Afrimark. All fees are due in advance or as specified in the payment terms, 
                                    and are non-refundable except as required by law or as expressly stated in these Terms.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>4.3. Taxes:</strong> All fees are exclusive of applicable taxes, which will be charged additionally where required by law.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>4.4. Changes to Fees:</strong> Afrimark reserves the right to modify its fees at any time with 
                                    reasonable notice to ongoing subscribers. Such changes will not affect fees for Services already paid for.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                5. PERMITTED USE AND RESTRICTIONS
                            </h2>
                            <div style={{ paddingLeft: '20px' }}>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>5.1. Permitted Use:</strong> Subject to these Terms, Afrimark grants you a limited, non-exclusive, 
                                    non-transferable, non-sublicensable right to access and use the Services for legitimate business purposes 
                                    related to credit assessment, risk management, and business decision-making.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>5.2. Restrictions:</strong> You agree not to:
                                </p>
                                <ul style={{ paddingLeft: '20px', marginBottom: '15px' }}>
                                    <li style={{ color: '#4a4a68', marginBottom: '8px' }}>Use the Services for any illegal purpose or in violation of any law or regulation</li>
                                    <li style={{ color: '#4a4a68', marginBottom: '8px' }}>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services without express written permission from Afrimark</li>
                                    <li style={{ color: '#4a4a68', marginBottom: '8px' }}>Use the Services to harass, abuse, or harm another person or entity</li>
                                    <li style={{ color: '#4a4a68', marginBottom: '8px' }}>Access or attempt to access any other user's account</li>
                                    <li style={{ color: '#4a4a68', marginBottom: '8px' }}>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                                    <li style={{ color: '#4a4a68', marginBottom: '8px' }}>Share your login credentials with any third party</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                6. DISCLAIMER OF WARRANTIES
                            </h2>
                            <div style={{ paddingLeft: '20px' }}>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>6.1. "As Is" and "As Available":</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" 
                                    WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED 
                                    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>6.2. No Guarantees:</strong> Afrimark does not warrant that the Services will function uninterrupted, 
                                    secure, or available at any particular time or location; any errors or defects will be corrected; the Services 
                                    are free of viruses or other harmful components; or the results of using the Services will meet your requirements.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                7. LIMITATION OF LIABILITY
                            </h2>
                            <div style={{ paddingLeft: '20px' }}>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL AFRIMARK, ITS AFFILIATES, 
                                    OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, 
                                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES 
                                    FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                8. GOVERNING LAW AND DISPUTE RESOLUTION
                            </h2>
                            <div style={{ paddingLeft: '20px' }}>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>8.1. Governing Law:</strong> These Terms and your use of the Services shall be governed by and 
                                    construed in accordance with the laws of Kenya, without regard to its conflict of law principles.
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                    <strong>8.2. Dispute Resolution:</strong> Any dispute arising out of or in connection with these Terms, 
                                    including any question regarding its existence, validity, or termination, shall be referred to and finally 
                                    resolved by arbitration. The seat of the arbitration shall be Nairobi, Kenya.
                                </p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <h2 style={{ color: '#1a1a2e', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 700 }}>
                                9. CONTACT INFORMATION
                            </h2>
                            <p style={{ color: '#4a4a68', marginBottom: '15px' }}>
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div style={{ 
                                backgroundColor: '#f8f9fa', 
                                padding: '20px', 
                                borderRadius: '10px',
                                border: '1px solid #e9ecef'
                            }}>
                                <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                    <strong>Afrimark</strong>
                                </p>
                                <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                    Email: hello@afrimark.com
                                </p>
                                <p style={{ color: '#4a4a68' }}>
                                    Address: Nairobi, Kenya
                                </p>
                            </div>
                        </div>

                        <div style={{
                            borderTop: '2px solid #e9ecef',
                            paddingTop: '20px',
                            textAlign: 'center'
                        }}>
                            <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>
                                Last Updated: May 2025
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;
