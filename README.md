# Donna Scheduler

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About

🇨🇱 A bot 🤖 that pays your taxes, automatically.

## How it works

This bot will use your SII credentials and will try to pay your taxes.

Under the hood, this bot uses [puppeteer](https://github.com/GoogleChrome/puppeteer) (via [donna](https://github.com/muzk/donna)) to automate this boring web task.

## Features

- **Easy to use**: just run `pay.js` script with the required environment variables.
- **Idempotent**: run `pay.js` the times you want, it won't do the web task again if it already worked.

## Environment variables

- `RUT` and `PASSWORD`: your [SII](https://misiir.sii.cl/cgi_misii/siihome.cgi) credentials.
- `MONGODB_URI`: a MongoDB URI.
- `BOT_TOKEN` and `BOT_CHANNEL`: Telegram bot token and channel so you can receive a notification about a successfull payment. You can setup your own with [@botfather](https://telegram.me/botfather)

## Requirements

_So you want to pay your 🇨🇱 taxes automatically?_ You have to pay your taxes using [PEC payment](http://www.sii.cl/portal_renta/como_pagar/pagar_declaracion_internet.htm#3).

_Don't know how to pay with PEC?_ Read more [here](https://medium.com/p/9c63604d8e86).

## Questions?

Send me a Twitter DM ([@muZkx](https://twitter.com/muzkx)) or open a issue.

## TODO

Add 1 click heroku deploy.
