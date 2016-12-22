'use strict'

const Aws = require('aws-sdk')
const Stringify = require('fast-safe-stringify')
const Joi = require('joi')

const defaults = {
}

const Squib = module.exports = function (opts) {
  if (!(this instanceof Squib)) {
    return new Squib(opts)
  }

  this.opts = Object.assign({}, defaults, opts)
  Aws.config.update(opts.aws)
  this.s3 = new Aws.S3({apiVersion: '2006-03-01'})
}

Squib.prototype.write = function (key, schema, data, done) {
  Joi.validate(data, schema, err => {
    if (err) {
      console.log(err)
      return done(err)
    }

    const payload = {
      Bucket: this.opts.bucket,
      Key: key,
      Body: Stringify(data, null, 2)
    }

    this.s3.putObject(payload, done)
  })
}
