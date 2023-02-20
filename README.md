# How to install react-luminui?

## Using npm:

```console
npm i @lumin-ui/react lumin-ui
```

## Installing from this repository:

```console
npm i git+https://github.com/Dakauann/react-luminui.git git+https://github.com/Dakauann/lumin-ui.git
```

## Using yarn:

```console
yarn add @lumin-ui/react lumin-ui
```

## Using pnpm:

```console
pnpm add @lumin-ui/react lumin-ui
```

## Tailwind configuration

```js
module.exports = {
    //..
    plugins: [require('lumin-ui')]
};
```

## Usage

```js
import { Button } from '@lumin-ui/react';

export default function App() {
    // variants: primary, secondary, ghost, outline and warning
    return (
        <div className="bg-gray-100 min-h-screen">
            <Button variant="primary">Click me</Button>
        </div>
    );
}
```

## !⚠! Lumin-ui is currently in development, it may have some bugs, if you find any, please report them in the issues tab.
