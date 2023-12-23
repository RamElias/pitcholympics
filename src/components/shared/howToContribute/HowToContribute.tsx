import { Locale } from '@/i18n.config';
import React, { useState } from 'react';
import ContributionForm from './ContributionForm';


interface Instruction {
  text: string;
  buttonText: string;
}

interface HowToContributeProps {
  lang: Locale;
}

const HowToContribute = ({ lang }) => {
  const langData = require(`path/to/${lang}.json`);
  const [showForm, setShowForm] = useState(false);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px',
  };

  const handleFormSubmit = (formData: any) => {
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
    // You can add further logic, such as sending data to a server, etc.
  };

  return (
    <div style={containerStyle}>
      <h1>{langData.howToContribute}</h1>
      {langData.instructions.map((instruction: Instruction, index: number) => (
        <div key={index}>
          <p>{instruction.text}</p>
          <button onClick={() => setShowForm(true)}>{instruction.buttonText}</button>
        </div>
      ))}
      {showForm && <ContributionForm onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default HowToContribute;
