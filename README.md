![Image of Chewbacca](http://i.imgur.com/BLbkyGd.jpg)
Image from http://i.imgur.com/BLbkyGd.jpg not related to this project

# Chewie

Chewie is a home assistant.
It allows you to control your home without any limit. The system is entirely based on plugins that extend its base and functionalities. The main goal of Chewie is to be completely open and act as a very simple base for plugins from community while being evolutive to last in time. The project is free of use and open source. Please your are welcome to contribute :)

## Why another home assistant?

Well, at first it was a personal project started before all these home assistant where released and popular. At that time I wanted to learn node.js and play with my raspberry. Then I rapidly took alot of fun developing it and decided to make a complete plateform based on plugins. My philosophy is to develop a solid base system which may be extended thanks to plugins and live for a long time. Chewie is very open minded.

## Installing

### Prerequisites
- [Git](https://git-scm.com)
- [node.js](https://nodejs.org)
- [npm](https://www.npmjs.com)
- [mplayer2](https://doc.ubuntu-fr.org/mplayer2)

Installation of assistant itself is globally the same on Windows/Linux.

### Installation on Windows

1. `git clone https://github.com/mbret/chewie-app.git chewie`.
2. Move to newly created `chewie` folder and run `npm install`. You now have the assistant installed and ready.
3. To run chewie move inside chewie folder and run `npm run start`

### Installation on Linux

1. `git clone https://github.com/mbret/chewie-app.git chewie`.
2. Move to newly created `chewie` folder and run `npm install`. You now have the assistant installed and ready.
3. To run chewie move inside `chewie` folder and run `npm run start`

## Getting started

To start chewie move to the assistant folder. By default it's `chewie` and run
```
npm run start
```
You should have access to [https://localhost:3000](https://localhost:3000) to get the web app.

## FAQ

Coming soon.
- I have updated node.js and I get some errors when starting the app. (ex `Please install sqlite3 package manually`)

Try to run `npm rebuild` to see if it helps.

## I want to create a plugin

Read the contributing [guide](https://github.com/mbret/chewie/blob/master/CONTRIBUTING.md)

## Bruh I found a bug!

Read the contributing [guide](https://github.com/mbret/chewie/blob/master/CONTRIBUTING.md)

## I want to contribute to the core project

Read the contributing [guide](https://github.com/mbret/chewie/blob/master/CONTRIBUTING.md)

## Work in progess

- complete cli to manage chewie
