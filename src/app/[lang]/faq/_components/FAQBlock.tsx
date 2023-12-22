'use client';

import { Locale } from '@/i18n.config';
import { FAQ } from '@/types';
import { Button } from '@core';

type Props = {
    faq: FAQ;
    lang: Locale;
};

export const FAQBlock = ({ faq, lang }: Props) => {
    const { question, answer, votes } = faq;
    return (
        <div className='flex flex-col mx-2 my-12'>
            <div className='flex flex-row'>
                <h2 className='text-xl font-bold'>{question[lang]}</h2>
            </div>
            <div className='flex flex-row'>
                <p className='text-lg'>{answer[lang]}</p>
            </div>
            <div className='flex flex-row'>
                <p className='text-xl'>Votes: {votes.length}</p>
            </div>
            <div>
                <Button onClick={() => {}} label='Up Vote' />
                <Button onClick={() => {}} label='Down Vote' />
            </div>
            <div className='h-1 bg-black m-2'></div>
        </div>
    );
};
