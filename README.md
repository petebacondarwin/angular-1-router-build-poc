# Angular 1 Router Build

This is a proof of concept to demo how to build the Angular 1 version of the router
from outside the Angular 2 repository, while only relying upon the Angular 2 npm package.

## Install

I recommend using node 5 and npm 3...

```bash
npm install
```

## Build

The build has two steps, copying the various files into a `tmp` folder and packaging
the files up into a bundle using webpack. Both these steps are run by:

```
npm start
```

## Layout

The folder structure of the project is as follows:

```
- node_modules
  - angular2
    - src
      - router : ES5 builds of the Angular 2 router files
- src          : Angular 1 specific router files
- overrides    : will be copied over the Angular 2 router files
- shims        : alternatives to the core Angular 2 modules used by the router

- tmp          : contains the copies of the files that will be webpacked
- dist         : contains the final bundle file
```
