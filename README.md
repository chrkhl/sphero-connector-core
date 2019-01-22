[![npm version](https://img.shields.io/npm/v/sphero-connector-core.svg?style=flat)](https://www.npmjs.org/package/sphero-connector-core)
[![Dependency Status](https://david-dm.org/chrkhl/sphero-connector-core.svg)](https://david-dm.org/chrkhl/sphero-connector-core)
[![devDependency Status](https://david-dm.org/chrkhl/sphero-connector-core/dev-status.svg)](https://david-dm.org/chrkhl/sphero-connector-core#info=devDependencies)
[![Build Status](https://travis-ci.org/chrkhl/sphero-connector-core.svg?branch=master)](https://travis-ci.org/chrkhl/sphero-connector-core)
[![Coverage](https://coveralls.io/repos/github/chrkhl/sphero-connector-core/badge.svg?branch=master)](https://coveralls.io/github/chrkhl/sphero-connector-core?branch=master)

<img src="https://rawcdn.githack.com/chrkhl/sphero-connector-core/080c775cc8704a473557454e3cef45db383a2b14/assets/sphero-connector-core.svg" alt="Sphero Connector Core" width="280" />


# Sphero Connector Core

This is a thin (and partial) wrapper around the [unofficial Sphero V2 API](https://github.com/igbopie/spherov2.js) for Sphero toys used by [Sphero Connector HTTP](https://github.com/chrkhl/sphero-connector-http) and [Sphero Connector IPC](https://github.com/chrkhl/sphero-connector-ipc).


## API

### Connect Toy

The following methods try to find a toy and establish a connection with it.

* `async connectSpheroMini()`
* `async connectSpheroMiniWithName(toyName: string)`
* `async connectLightningMcQueen()`
* `async connectR2D2()`
* `async connectR2Q5()`
* `async connectBB9E()`
* `async connectToy(toyType: string, toyName: string)`

Valid values for `toyType` are: `SpheroMini`, `LightningMcQueen`, `R2D2`, `R2Q5`, `BB9E`.

If a toy is found and connected, an object with the following structure is returned.

``` javascript
{
  wake: function() { ... },
  sleep: function() { ... },
  setMainLedColor: function(hexColor: string) { ... }
}
```

## Example: Connect Sphero Mini and set main LED color to red

``` javascript
const connector = require('sphero-connector-core');

const spheroMini = await connector.connectSpheroMini();

spheroMini.setMainLedColor('#FF0000');

```


## License

Please be aware of the licenses of the components used in this project.
Everything else that has been developed by the contributions to this project is under [MIT License](LICENSE).
