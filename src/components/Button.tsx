import React from 'react';
import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warning';
}

export default function Button({ children, variant, ...props }: ButtonProps) {
    const variantClass = {
        primary: 'btn',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        ghost: 'btn-ghost',
        warning: 'btn-warning'
    }[variant];

    return (
        <button {...props} className={props.className ? `${props.className} ${variantClass}` : variantClass}>
            {children}
        </button>
    );
}
