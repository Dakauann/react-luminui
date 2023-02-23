const translatedClasses: {
    wfull?: string;
    wauto?: string;
    wmin?: string;
    wmax?: string;
    wscreen?: string;

    hfull?: string;
    hauto?: string;
    hmin?: string;
    hmax?: string;
    hscreen?: string;

    fcol?: string;
    frow?: string;
    fwrap?: string;
    fnowrap?: string;
} = {
    wfull: 'w-full',
    wauto: 'w-auto',
    wmin: 'w-min',
    wmax: 'w-max',
    wscreen: 'w-screen',

    hfull: 'h-full',
    hauto: 'h-auto',
    hmin: 'h-min',
    hmax: 'h-max',
    hscreen: 'h-screen',

    fcol: 'flex-col',
    frow: 'flex-row',
    fwrap: 'flex-wrap',
    fnowrap: 'flex-nowrap'
};

type ITranslatedClasses = {
    wfull?: boolean;
    wauto?: boolean;
    wmin?: boolean;
    wmax?: boolean;
    wscreen?: boolean;

    hfull?: boolean;
    hauto?: boolean;
    hmin?: boolean;
    hmax?: boolean;
    hscreen?: boolean;

    fcol?: boolean;
    frow?: boolean;
    fwrap?: boolean;
    fnowrap?: boolean;
};

export { ITranslatedClasses, translatedClasses };
