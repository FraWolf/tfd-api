<h1 align="center">The First Descendant | API</h1>
<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT"/>
    </a>
    <a href="https://www.npmjs.com/package/tfd-api">
        <img alt="npm" src="https://img.shields.io/npm/v/tfd-api" />
    </a>
</p>

<h2>Installation</h2>

<p>To use this library, <b>Node.js 14.17.0</b> or newer are required.</p>

```sh
npm install tfd-api

yarn add tfd-api
```

<h2>Examples</h2>

<details>
  <summary>Basic usage</summary>

```js
import { TFDApi } from "tfd-api";

const api = new TFDApi({
  api_key: "YOUR_API_KEY_HERE",
});

api.account.getId("Nickname#1234").then((response) => {
  console.log(response);
});
```

</details>

<h2>Documentation</h2>

You can use the [Nexon Open API Docs](https://openapi.nexon.com/game/tfd/?id=20) as documentation because all of it's methods are the same as the docs says.

<h2>Links</h2>

- [Nexon Open API](https://openapi.nexon.com/game/tfd/?id=20)
- [GitHub](https://github.com/FraWolf/tfd-api/)
- [NPM](https://www.npmjs.com/package/tfd-api)

<h2>Projects that uses TFD-API</h2>

Currently no projects uses TFD-API because it's still in development phase. If you would to include your project here, open an issues with the name, repository/website and a small description.

<h2>Contributing</h2>

If you would contribute to this project, just fork the repository and then send a pull request. We will validate your request and, if it's valid, we will commit into the main branch.

<h2>Disclaimer</h2>

Data based on NEXON Open API, all rights reserved to NEXON. Using the API you agree to [Terms and Conditions](https://openapi.nexon.com/support/terms/) from NEXON.
