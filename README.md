# gnome-terminal-version

[![Build Status](https://api.travis-ci.org/Tyriar/gnome-terminal-version.svg)](https://travis-ci.org/Tyriar/gnome-terminal-version)

## Install

```bash
npm install --save gnome-terminal-version
```

## Usage

```js
var gnomeTerminalVersion = require('gnome-terminal-version');
gnomeTerminalVersion(function (version) {
  if (typeof version !== 'undefined') {
    console.log('Version: ' + version);
  }
});
```

## API

### index

Gets the version of the system's gnome-terminal.

**Parameters**

-   `callback`

Returns **string or undefined** the version for the system's gnome-terminal.
undefined if gnome-terminal does not exist or gives unexpected output.
