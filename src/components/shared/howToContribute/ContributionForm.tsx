import { resolve } from 'path';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormFields = {
    name: string;
    email: string;
    note: string;
};

type Props = {
    howToContribute: {
        title: string;
        instructions: Array<{ text: string }>;
    };
};

const ContributionForm = ({ howToContribute }: Props) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = async data => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(data);
        } catch (error) {
            setError('root', {
                message: 'This email is already taken',
            });
        }
    };

    return (
        <form className='contributeForm' onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('name', { required: 'Name is required' })}
                type='text'
                name='name'
                placeholder='Name'>
                {errors.name && (
                    <div className='text-red-500'>{errors.name.message}</div>
                )}
            </input>
            <input
                {...register('email', {
                    required: 'Email is required',
                    validate: value => value.includes('@'),
                })}
                type='email'
                name='email'
                placeholder='Email'>
                {errors.email && (
                    <div className='text-red-500'>{errors.email.message}</div>
                )}
            </input>
            <input
                {...register('note')}
                type='text'
                name='note'
                placeholder='If you have anything to add please write it here'
            />
            <button disabled={isSubmitting} type='submit'>
                {isSubmitting ? 'Loading...' : 'Submit'}
            </button>
            {errors.root && (
                <div className='text-red-500'> {errors.root.message} </div>
            )}
        </form>
    );
};

export default ContributionForm;
