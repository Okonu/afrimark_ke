import React from 'react';
import LegalDocumentLayout from './LegalDocumentLayout';
import termsData from '../data/termsData.json';

const TermsAndConditions = () => {
    return <LegalDocumentLayout data={termsData} />;
};

export default TermsAndConditions;