'use client';
import React, { useEffect, useState } from 'react';
import ContributionForm from './ContributionForm';

type Props = {
    howToContribute: {
        title: string;
        instructions: Array<{ text: string }>;
    };
};

const HowToContribute = ({ howToContribute }: Props) => {

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto', 
    };
    
    const paragraphStyle = {
        margin: '10px 0',
    };
    

    return (
        <div style={containerStyle}>
            <h1>{howToContribute.title}</h1>
            {howToContribute.instructions.map((instruction, index) => (
                <div key={index} style={paragraphStyle}>
                    <p>{instruction.text}</p>
                </div>
            ))}
            <div>
                <ContributionForm howToContribute={howToContribute} />
            </div>
        </div>
    );
};

export default HowToContribute;
