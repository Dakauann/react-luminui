import React from 'react';
import { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    variant: 'outline' | 'flushed' | 'full';
}

export default function Input({ variant, ...props }: InputProps) {
    const variantClass = {
        outline: 'input-outline',
        flushed: 'input-flushed',
        full: 'input-full'
    }[variant];

    return <input {...props} className={props.className ? `${props.className} ${variantClass}` : variantClass} />;
}
