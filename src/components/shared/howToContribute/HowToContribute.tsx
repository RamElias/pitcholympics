'use client';
import React, { useEffect, useState } from 'react';
import ContributionForm from './ContributionForm';

type Props = {
    howToContribute: {
        title: string;
        instructions: Array<{ text: string }>;
    };
};


const HowToContribute = ({ howToContribute} : Props ) => {
  const [showForm, setShowForm] = useState(false);  

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px',
  };

  const paragraphStyle: React.CSSProperties = {
        marginBottom: '20px',
    };

  const handleFormSubmit = (formData: any) => {
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
    // You can add further logic, such as sending data to a server, etc.
  };

  return (
        <div style={containerStyle}>
            <h1>{howToContribute.title}</h1>
            {howToContribute.instructions.map((instruction, index) => (
                <div key={index} style={paragraphStyle}>
                    <p>{instruction.text}</p>
                </div>
            ))}
            <ContributionForm onSubmit={handleFormSubmit} />
        </div>
    );
};

export default HowToContribute;