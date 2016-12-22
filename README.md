# squib
A simple writer for AWS S3.

## Install
To install, simply use npm...

```sh
npm install squib
```

### Testing, linting, & coverage
This module can be tested and reported on in a variety of ways...
```sh
npm run test        # runs TAP based unit test suite.
npm run integration # runs TAP based integration suite.
npm run coverage    # generates and opens a coverage report.
npm run lint        # lints via standardJS.
npm run validate    # runs test, integration, and lint.
```
__Note:__ `integration` and `validate` require a valid `.env` file. Details on how to create this are below.

## Usage
```js
'use strict'

const Config = require('./config')
const Squib = require('squib')

const squib = Squib(Config.squib)
squib.write(key, schema, data, (err, meta) => {
    if (err) return done(err)

    done()
})
```

### Options
```js
const squibConfig = {
  bucket: process.env.AWS_BUCKET,
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
}
```

# License
Copyright nearForm 2016. Licensed under [MIT][License]

[License]: ./LICENSE.md 
