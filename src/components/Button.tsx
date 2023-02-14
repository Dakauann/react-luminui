import React from 'react';

export default function Button({ children, variant }: { children: React.ReactNode; variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warning' }) {
    const variantClass = {
        primary: 'btn',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        ghost: 'btn-ghost',
        warning: 'btn-warning'
    }[variant];

    return <button className={variantClass}>{children}</button>;
}
