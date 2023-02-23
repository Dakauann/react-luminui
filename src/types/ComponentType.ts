import { ComponentPropsWithoutRef } from 'react';
import { ITranslatedClasses } from '../utils/TranslatedClasses';

type ComponentType<T extends keyof JSX.IntrinsicElements> = Omit<ComponentPropsWithoutRef<T>, T> & ComponentPropsWithoutRef<'button'> & ITranslatedClasses;

type BooleanKeys<T> = {
    [K in keyof T]-?: T[K] extends boolean ? K : never;
}[keyof T];

export { ComponentType, BooleanKeys };
