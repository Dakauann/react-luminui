import React from 'react';
import { translatedClasses } from '../utils/TranslatedClasses';
import { ComponentType, BooleanKeys } from '../types/ComponentType';

type ButtonProps = ComponentType<'button'> & {
    variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warning';
};
type ButtonBooleanProps = Pick<ButtonProps, BooleanKeys<ButtonProps>>;

export default function Button({ children, variant, ...props }: ButtonProps) {
    const variantClass = {
        primary: 'btn',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        ghost: 'btn-ghost',
        warning: 'btn-warning'
    }[variant];

    const classes = Object.keys(props)
        .filter((key) => Boolean(props[key as keyof ButtonBooleanProps]))
        .map((key) => {
            if (props[key as keyof ButtonBooleanProps]) {
                return translatedClasses[key as keyof typeof translatedClasses];
            } else {
                return null;
            }
        })
        .filter(Boolean)
        .join(' ');

    return (
        <button {...props} className={props.className ? `${variantClass} ${classes} ${props.className}` : variantClass + ' ' + classes}>
            {children}
        </button>
    );
}
