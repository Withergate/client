# Withergate client

This is a client application used for the Withergate game. The application is written in RACTjs and expects an [authorization server](https://github.com/Withergate/auth) and [resource server](https://github.com/Withergate/api) to be running.

## 🔧 Installation

This project is craeted using [Create-react-app](https://github.com/facebook/create-react-app) and expect [Node](https://nodejs.org/en/) 8+, [NPM](https://www.npmjs.com/) 3.5+ and [YARN](https://yarnpkg.com/lang/en/) to be installed locally.

## 🚦 Usage

The application can be run using `yarn dev`

Similarly, building the application can be run using `yarn build`.

When developing locally, Api and Auth server need to be running on the local machine. They can be easily launched using the bundled `docker-compose` by running `docker-compuse up`.

## 🔖 License

The code is released under the Apache 2.0 license. See [LICENSE](https://github.com/Withergate/client/blob/master/LICENSE) for details.
