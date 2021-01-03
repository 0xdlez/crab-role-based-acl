# octopus-immutable-store

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/octopus-immutable-store.svg?style=flat-square
[npm-url]: http://npmjs.org/package/octopus-immutable-store
[download-image]: https://img.shields.io/npm/dm/octopus-immutable-store.svg?style=flat-square
[download-url]: https://npmjs.org/package/octopus-immutable-store

## Install

[![octopus-immutable-store](https://nodei.co/npm/octopus-immutable-store.png)](https://npmjs.org/package/octopus-immutable-store)

```
npm install --save octopus-immutable-store
```

## Features

```
- Customize immuatble redux store
- Durable redux store
```

## Install

- Install octopus-immutable-store

```
npm install octopus-immutable-store
```

## How it work

#### Override process env

- Init redux store instance:

```
import { initRootStore } from "octopus-immutable-store";

initRootStore(store);
```

- Get current state:

```
import { getRootState } from "octopus-immutable-store";

getRootState();
```

- Dispatch a action as root:

```
import { rootDispatch } from "octopus-immutable-store";

rootDispatch(type, payload);
```

- Dispatch a debounce action as root:

```
import { debounceRootDispatch } from "octopus-immutable-store";

debounceRootDispatch(type, payload, wait = 2000);
```

## LICENSE

MIT
