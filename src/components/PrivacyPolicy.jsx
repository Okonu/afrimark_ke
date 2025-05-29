import React from 'react';
import LegalDocumentLayout from './LegalDocumentLayout';
import privacyData from '../data/privacyPolicyData.json';

const PrivacyPolicy = () => {
    return <LegalDocumentLayout data={privacyData} />;
};

export default PrivacyPolicy;