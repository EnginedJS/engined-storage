# engined-storage

Storage service for engined, used to managing various storage backend.

[![NPM](https://nodei.co/npm/engined-storage.png)](https://nodei.co/npm/engined-storage/)

## Installation

Install via NPM:

```shell
npm install engined-storage
```

## Usage

Start engined-storage service in engined, see example below:

```javascript
const { Manager } = require('engined');
const StorageService = require('engined-storage');

const storage = StorageService();

const main = async () => {

	// Create manager
	let serviceManager = new Manager({ verbose: true });

	// Adding service to manager
	serviceManager.add('Storage', storage);

	// Start all services
	await serviceManager.startAll();
};

main();
```

## Using specific storage backend

```javascript

// Using local storage backend
let localAgent = this.getContext('Storage').getAgent('local');

// Save file
localAgent.save(readStream, 'myimage.png', 12345);

```

## License
Licensed under the MIT License
 
## Authors
Copyright(c) 2017 Fred Chien（錢逢祥） <<cfsghost@gmail.com>>
