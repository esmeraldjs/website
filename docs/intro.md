---
sidebar_position: 1
---

# Welcome
<p align="center">

![Banner](../static/img/Esmerald_Banner.png)

<a href="https://www.npmjs.com/package/esmerald.js"><img src="https://img.shields.io/npm/v/esmerald.js.svg?maxAge=3600" alt="npm version"/></a>
<a href="https://www.npmjs.com/package/esmerald.js"><img src="https://img.shields.io/npm/dt/esmerald.js.svg?maxAge=3600" alt="npm downloads" /></a>
</p>

<h1>About</h1>

Esmerald.js is a powerfull [Discord API](https://discord.com/developers/docs/intro) Library (WIP)

- Simple to use;
- Beta updates, and easy support;
- Save ram memory.
- Object-oriented (WIP)

<h1>Installation</h1>

 - **Node v16.14+ is required**
 
```bash
# Using NPM
npm install esmerald.js

# Using YARN
yarn add esmerald.js

# Using PNPM
pnpm add esmerald.js
```

<h1>Example Usage</h1>

Connect:
```js
const { Client, Intents } = require('esmerald.js');

const client = new Client({
  token: 'your discord bot token',
  intents: [Intents.GUILDS],
})

client.connect();
```

---
Make with ❤ by Esmerald Team
