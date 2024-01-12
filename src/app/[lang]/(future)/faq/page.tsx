'use client';

import { Link } from '@core';
import { FAQ } from '@types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FAQBlock } from './_components';

const Page = () => {
    const { data: session } = useSession();
    const [faqs, setFAQs] = useState<FAQ[]>([]);

    const getAllFAQs = async () => {
        const url = '/api/faqs';
        const response = await fetch(url);
        const faqs = await response.json();
        setFAQs(faqs);
    };

    useEffect(() => {
        getAllFAQs();
    }, []);

    if (!session) {
        return (
            <div>
                <h1>FAQ</h1>
                <p>You need to be logged in to see the FAQ.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>FAQ</h1>
            <Link url='faq/new-question' label='New Question' />
            <div>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <FAQBlock faq={faq} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
