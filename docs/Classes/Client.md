---
sidebar_position: 1
---

# Client

 Extends [EventEmitter](https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter)

> The main for interact with the [Discord API](https://discord.com/developers/docs/intro)

# Constructor
```js
const { Client } = require("esmerald.js")

new Client({ <options> })
```

<details>
<summary> Properties </summary>
<a href="#channels">channels</a>
<div></div>
<a href="#users">users</a>
</details>

<div id="channels"></div>

---
**channels**
> All of the [TextChannels](https://github.com/esmeraldjs/esmerald.js/blob/main/src/structures/TextChannel.js) that the client is currently handling, mapped by their ids.

---

<div id="users"> </div>

**Users**

> All [Users](https://github.com/esmeraldjs/esmerald.js/blob/main/src/structures/User.js) Object that have been cached

---