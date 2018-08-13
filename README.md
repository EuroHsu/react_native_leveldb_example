# react_native_leveldb_example

## How to Use

### 1. Install dependencies

    npm install

### 2. Run in Android

    react-native run-android

## How to install leveldb in project 

### 1. Open your react native project

### 2. Install [node-libs-browser](https://github.com/webpack/node-libs-browser)

    npm install node-libs-browser

### 3. Install [levelup](https://github.com/Level/levelup) and [asyncstorage-down](https://github.com/tradle/asyncstorage-down)

    npm install levelup asyncstorage-down

### 4. Create a file called global.js on the root of the project and add the following code into it:

    global.Buffer = require('buffer').Buffer;
    global.process = require('process');

### 5. Import the global.js file into your App.js file

    import './global';

### 6. Initialize leveldb

    let levelup = require('levelup');
    let asyncstorage = require('asyncstorage-down');
    let db = levelup(new asyncstorage('/does/not/matter'));

### 7. Try it

    db.put('key', 'value');
    db.get('key');
