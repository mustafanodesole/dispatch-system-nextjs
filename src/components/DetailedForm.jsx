'use client';
import { useState } from 'react';
import AdditionalInformationForm from './AdditionalInformationForm'
import ImmediateResponseForm from './ImmediateResponseForm'
// Immediate Response Form Component


// Additional Information Form Component


const BillingForm = () => {
    const [showImmediateForm, setShowImmediateForm] = useState(true);

    const handleImmediateSubmit = (data) => {
        console.log('Immediate Data:', data);
        setShowImmediateForm(false);
    };

    const handleAdditionalSubmit = (data) => {
        console.log('Additional Data:', data);
    };

    return (
        <div>
            {showImmediateForm ? (
                <ImmediateResponseForm onSubmit={handleImmediateSubmit} />
            ) : (
                <AdditionalInformationForm
                    onSubmit={handleAdditionalSubmit}
                    onClose={() => setShowImmediateForm(true)}
                />
            )}
        </div>
    );
};

export default BillingForm;
