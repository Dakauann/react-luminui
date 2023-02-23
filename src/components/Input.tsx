import React from 'react';
import { translatedClasses } from '../utils/TranslatedClasses';
import { ComponentType, BooleanKeys } from '../types/ComponentType';

type InputProps = ComponentType<'input'> & {
    variant: 'outline' | 'flushed' | 'full';
};
type InputBooleanProps = Pick<InputProps, BooleanKeys<InputProps>>;

export default function Input({ variant, ...props }: InputProps) {
    const variantClass = {
        outline: 'input-outline',
        flushed: 'input-flushed',
        full: 'input-full'
    }[variant];

    const classes = Object.keys(props)
        .filter((key) => Boolean(props[key as keyof InputBooleanProps]))
        .map((key) => {
            if (props[key as keyof InputBooleanProps]) {
                return translatedClasses[key as keyof typeof translatedClasses];
            } else {
                return null;
            }
        })
        .filter(Boolean)
        .join(' ');

    return <input {...props} className={props.className ? `${variantClass} ${classes} ${props.className} ` : variantClass} />;
}
