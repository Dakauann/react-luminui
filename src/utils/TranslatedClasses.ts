const translatedClasses: {
    wFull?: string;
    wAuto?: string;
    wMin?: string;
    wMax?: string;
    wScreen?: string;

    hFull?: string;
    hAuto?: string;
    hMin?: string;
    hMax?: string;
    hScreen?: string;
} = {
    wFull: 'w-full',
    wAuto: 'w-auto',
    wMin: 'w-min',
    wMax: 'w-max',
    wScreen: 'w-screen',

    hFull: 'h-full',
    hAuto: 'h-auto',
    hMin: 'h-min',
    hMax: 'h-max',
    hScreen: 'h-screen'
};

type ITranslatedClasses = {
    wFull?: boolean;
    wAuto?: boolean;
    wMin?: boolean;
    wMax?: boolean;
    wScreen?: boolean;

    hFull?: boolean;
    hAuto?: boolean;
    hMin?: boolean;
    hMax?: boolean;
    hScreen?: boolean;
};

export { ITranslatedClasses, translatedClasses };
