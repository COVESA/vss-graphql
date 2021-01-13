# Data Server

## Docker setup

To deploy the Data Server using Docker, first build the image described by the
Dockerfile with:

```bash
docker build --tag data-server:latest .
```

NOTE: this will build the image and tag it with the name `data-server:latest`

Then, to run a container with the built image:

```bash
docker run --publish 4000:4000 data-server
```

Alternatively, one can simply call a npm command that will execute the above
commands building and running the docker image:

```bash
npm run docker:up
```

When the docker container starts it will log to the console some messages saying
that server is ready and accessible on: `http://localhost:4000`

## Manual Setup

To launch the Data Server from the command line, follow the below instructions.

### Set Environment Variables

To start the server is necessary to provide all environment variables, this can
be done using a `.env` file. For a quick start just create a symbolic link to
`.env.example`

#### Manual

```console
cp .env.example .env
vim .env
```

Or for a quick start:

```console
 ln -s .env.example .env
```

### Install dependencies

To ensure the correct node version is being used, if one uses the
node version manager [nvm](https://github.com/nvm-sh/nvm) it can simply run:

```bash
nvm use
nvm install # if necessary
```

If `nvm` is not available, this project uses node version ^13.12.0. Thus, for
installing node follow instructions from [official documentation](https://nodejs.org/en/download/).

After setting up node version, to install `npm` dependencies run:

```bash
npm install
```

### Start server

To start the server with a mock data scheme just execute:

```console
npm start
```

#### GraphiQL (playground)

With the server running it is possible to access a GraphQL query playground
were you can request information from the server it should be located at
`http://localhost:4000`.
