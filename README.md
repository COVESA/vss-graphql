# Data Server with Data Feeder bundled

This setup is incorporating Data Feeder as a submodule and composed using `docker-compose`

## Downloading sources

To have full repository established, if you have already cloned the _vss-grapqhl_ repository, download the submodule _vss-feeder_ sources:
```bash
git submodule init
git submodule update
```

If you want to clone the whole setup including _vss-grapqhl_ and _vss-feeder_:
```bash
git clone --recursive https://github.com/GENIVI/vss-graphql.git
```

## Docker setup

To deploy the Data Server with Data Feeder using Docker, run the command to build and execute the setup described in `docker-compose.yml`

```bash
docker-compose up
```
When the docker container starts it will log to the console some messages saying
that server is ready and accessible on: `http://localhost:4000`

## Manual Setup

To launch the Data Server from the command line, follow the `README.md` files included in corresponding subdirectories keeping in mind that database needs to be shared across those containers.
