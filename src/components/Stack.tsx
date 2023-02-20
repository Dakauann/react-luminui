import React from 'react';
import { ComponentPropsWithoutRef } from 'react';

interface StackProps extends ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode;
    hCentered?: boolean;
    vCentered?: boolean;
}

export default function Stack({ children, vCentered, hCentered, ...props }: StackProps) {
    const horizontallyCentered = {
        0: 'flex items-center justify-center',
        1: 'flex items-center justify-start'
    }[hCentered ? 0 : 1];
    const verticallyCentered = {
        0: 'flex items-center justify-center',
        1: 'flex items-start justify-center'
    }[vCentered ? 0 : 1];

    return (
        <div {...props} className={props.className ? `${props.className} ${verticallyCentered} ${horizontallyCentered}` : horizontallyCentered + ' ' + verticallyCentered}>
            {children}
        </div>
    );
}
