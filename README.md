# Donna Scheduler

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## About

🇨🇱 A bot 🤖 that pays your taxes, automatically.

⚠️ If you only want a CLI command to pay your taxes, you can use [donna](https://github.com/muzk/donna) directly. `donna-scheduler` was done specifically to automate the CLI script without worrying about it.

## How it works

This bot will use your SII credentials and will try to pay your taxes.

Under the hood, this bot uses [puppeteer](https://github.com/GoogleChrome/puppeteer) (via [donna](https://github.com/muzk/donna)) to automate this boring web task.

## Features

- **Easy to use**: just run `pay.js` script with the required environment variables.
- **Idempotent**: run `pay.js` the times you want, it won't do the web task again if it already worked.
- **1 click deploy**: click "Deploy to Heroku" button or [here](https://heroku.com/deploy) and you're (almost) done.

## Deployment

I recommend you to deploy it to heroku because it's easy and free (free tier). Just click Deploy button and configure the scheduler.

**Step 1:**

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

**Step 2:**

Now add a job to your scheduler:

- _Schedule_: every day at anytime you want
- _Run command_: node pay

Done 🎉 click "Save Job"

![scheduler](https://user-images.githubusercontent.com/1679496/59076084-1468c200-88a2-11e9-96e4-4db6cb4b3f33.png)

## Environment variables

Here is a description of the environment variables:

- `RUT` and `PASSWORD`: your [SII](https://misiir.sii.cl/cgi_misii/siihome.cgi) credentials (**Required**).
- `MONGODB_URI`: a MongoDB URI (**Required**).
- `BOT_TOKEN` and `BOT_CHANNEL`: Telegram bot token and channel so you can receive a notification about a successfull payment. You can setup your own with [@botfather](https://telegram.me/botfather) (**Optional**).

## Requirements

_So you want to pay your 🇨🇱 taxes automatically?_ You have to pay your taxes using [PEC payment](http://www.sii.cl/portal_renta/como_pagar/pagar_declaracion_internet.htm#3).

_Don't know how to pay with PEC?_ Read more [here](https://medium.com/p/9c63604d8e86).

## Questions?

Send me a Twitter DM ([@codewithnico](https://twitter.com/codewithnico)) or open a issue.
