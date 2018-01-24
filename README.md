
# Hoopla Exercise

> Build a page that will display a grid of thumbnail images with the title and artist name below each image.
>
> You will need to pull the titles from our web service located here https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7. You will need to pass a header "ws-api" with the value of "2.1" to get this service to return data.
>
> The path to each image will be in the format below where artkey is part of the data returned in the API above.
>
> https://d2snwnmzyr8jue.cloudfront.net/{artKey}_270.jpeg

This project was bootstrapped with [Greenfield](https://github.com/bfillmer/greenfield).

## Commands

```bash
yarn start # development server
yarn build # production build
yarn test # Jest in watch-mode
yarn coverage # Jest coverage report
yarn lint # fix basic linting errors
```

## Overview

* Commands include `NODE_PATH` to leverage absolute pathing to `src/` for cleaner imports.
* `standardjs` linting (https://standardjs.com/)
* `styled-components` css-in-js (https://www.styled-components.com)
* `curi` routing (https://curi.js.org/)
* `redux-saga` side-effects (https://redux-saga.js.org/)
* `redux-actions` simplify actions boilerplate (https://github.com/acdlite/redux-actions)
* `redux-data-structures` simplify reducer boilerplate (https://redux-data-structures.js.org/)
* `axios` just-works http client (https://github.com/axios/axios)
