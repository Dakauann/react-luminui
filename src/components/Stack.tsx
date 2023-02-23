import React from 'react';
import { translatedClasses } from '../utils/TranslatedClasses';
import { ComponentType, BooleanKeys } from '../types/ComponentType';

type StackProps = ComponentType<'div'> & {
    variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warning';
};
type StackBooleanProps = Pick<StackProps, BooleanKeys<StackProps>>;

export default function Stack({ children, variant, ...props }: StackProps) {
    const classes = Object.keys(props)
        .filter((key) => Boolean(props[key as keyof StackBooleanProps]))
        .map((key) => {
            if (props[key as keyof StackBooleanProps]) {
                return translatedClasses[key as keyof typeof translatedClasses];
            } else {
                return null;
            }
        })
        .filter(Boolean)
        .join(' ');

    console.log('Stack: ', classes);

    return (
        <div {...props} className={props.className ? `flex border-2 border-red-500 ${classes} ${props.className}` : classes}>
            {children}
        </div>
    );
}
