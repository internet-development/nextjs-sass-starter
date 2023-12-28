# NEXT-SASS-STARTER

Why would I use this?

- Quickly start a project with TypeScript, SASS, and NextJS.
- You want to make a website quickly.
- You're learning web development and [@wwwjim](https://x.com/wwwjim) forced you to. Check out the [issues](https://github.com/internet-development/nextjs-sass-starter/issues?q=is%3Aissue+is%3Aopen+label%3ADocumentation) for some documentation.

### Setup (MacOS)

Start by cloning the repository, or by clicking on **Use this template** above.

You will have wanted to setup your development environment by following steps [here](https://github.com/internet-development/nextjs-sass-starter/issues/3).

Then run the server

```sh
npm install
npm run dev
```

Go to `http://localhost:10000` in your browser of choice.

Enjoy! We use `10000` as our `port` for more compatibility with [Render.com](https://render.com)

### Scripts

If you need to run node script without running the server, use this example to get started

```sh
npm run script example
```

### Env Variables

If you want to connect to a Postgres database, provide the following `.env` file. `5432` is the default Postgres port.

```sh
PORT=10000
DOCUMENT_DATABASE_NAME=xxxx
DOCUMENT_DATABASE_USERNAME=xxxx
DOCUMENT_DATABASE_HOST=xxxx
DOCUMENT_DATABASE_PORT=5432
DOCUMENT_DATABASE_PASSWORD=xxxx
```

### Contact

If you have questions ping me on Twitter, [@wwwjim](https://www.twitter.com/wwwjim).
