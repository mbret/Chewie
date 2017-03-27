![Image of Chewbacca](https://image.ibb.co/eKvgov/chewie.jpg)

# Chewie application
[![version](https://img.shields.io/npm/v/chewie.svg)](https://www.npmjs.org/package/chewie)
[![status](https://travis-ci.org/mbret/chewie.svg)](https://travis-ci.org/mbret/chewie)
[![coverage](https://img.shields.io/coveralls/mbret/chewie.svg)](https://coveralls.io/github/mbret/chewie)
[![dependencies](https://david-dm.org/mbret/chewie.svg)](https://david-dm.org/mbret/chewie)
[![devDependencies](https://david-dm.org/mbret/chewie/dev-status.svg)](https://david-dm.org/mbret/chewie#info=devDependencies)
![node](https://img.shields.io/node/v/chewie.svg)

Chewie is a home assistant.
It allows you to control your home without any limit. The system is entirely based on plugins that extend its base and functionalities. The main goal of Chewie is to be completely open and act as a very simple base for plugins from community while being evolutive to last in time. The project is free of use and open source. Please your are welcome to contribute :)

## Why another home assistant?

Well, at first it was a personal project started before all these home assistant where released and popular. At that time I wanted to learn node.js and play with my raspberry. Then I rapidly took alot of fun developing it and decided to make a complete plateform based on plugins. My philosophy is to develop a solid base system which may be extended thanks to plugins and live for a long time. Chewie is very open minded.

## Installing

### Prerequisites
- [Git](https://git-scm.com)
- [node.js](https://nodejs.org)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/)
- [mplayer2](https://doc.ubuntu-fr.org/mplayer2) (this is the default adapter for sounds output)

Installation of assistant itself is globally the same on Windows/Linux.

### Installation on Windows
s
1. `git clone https://github.com/mbret/chewie.git`.
2. Move to newly created `chewie` folder and run `npm install`. You now have the assistant installed and ready.
3. To run chewie move inside chewie folder and run `npm run start`

### Installation on Linux

1. `git clone https://github.com/mbret/chewie.git`.
2. Move to newly created `chewie` folder and run `npm install`. You now have the assistant installed and ready.
3. To run chewie move inside `chewie` folder and run `npm run start` or `npm run start:debug` if you want more debug information.

**[yarn](https://yarnpkg.com/) may works way better on low CPU devices as they are many dependencies. Unlike npm yarn proceed some parallel tasks*

### Quick overview
- [https://github.com/mbret/chewie][chewie] is the application you need to install.
- [https://github.com/mbret/chewie-system][chewie-system] is the system library than run the project. [chewie][chewie] install [chewie-system][chewie-system] as a dependencie and handle its installation for you.

## Getting started

To start chewie move to the assistant folder. By default it's `chewie` and run:
```
npm run start
```
You should have access to [https://localhost:3000][host] to get the web app.

If you may want to have more information and debug you can use:
```
npm run start:debug
```

## What next?
You may want to check out these common and popular packages:
- (hook) [https://github.com/mbret/chewie-hook-thirdparty-auth-provider](chewie-hook-thirdparty-auth-provider) Handle easily your social authentications.
- (plugin) [https://github.com/mbret/chewie-plugin-date-time](chewie-plugin-date-time) Execute task on certain time/date/interval/etc.

## How to install hooks and plugins
### Install a hook
1. Use npm to install your package. Ex: `npm install git+https://github.com/mbret/chewie-hook-thirdparty-auth-provider`.
2. Now you need to tell chewie to use it. Locate your config file (by default settings.json) and add the config:
```
{
    ...,
    "hooks": {
        "chewie-hook-thirdparty-auth-provider": true
    },
    ...
}
```

### Install a plugin
#### Web interface
Simply go to [https://localhost:3000/#!/dashboard/repository/list][host-repository]. Take note that the remote repository is not available yet.

You can set up a local repository (a folder) and place inside it the plugins you want to use. Chewie will browse the folder and let
you manage it through web interface.
- Add this config to specify a local repository:
```
{
    ...,
    "pluginsLocalRepositoryDir": "/path/to/my/folder",
    ...
}
```
- Use the web interface.

## FAQ

##### What is the difference between hooks and plugins
The purpose of a hook is to extend chewie in term of functionality while a plugin provide new actions for scenarios. A hook is a 
node package that is installed locally as module and is loaded on system startup. It has access to the entire system and can add/remove/change
the behavior of Chewie. The plugin is managed through the app and is "mounted" / "unmounted" during runtime when a scenario that use it need to start.
##### I have updated node.js and I get some errors when starting the app. (ex `Please install sqlite3 package manually`)
Try to run `npm rebuild` to see if it helps.

## Troubleshootings

##### The startup crash and I get an error who looks like `No such driver found, please try to install it via npm install db-migrate-sqlite3...` This error appears sometimes on raspberry for example:
You probably have invalid or badly installed sqlite3 dependency. Try to do `npm install sqlite3 --build-from-source` again to see if it helps.

## I want to create a plugin

Read the contributing [guide](https://github.com/mbret/chewie/blob/master/CONTRIBUTING.md)

## Bruh I found a bug!

Read the contributing [guide](https://github.com/mbret/chewie/blob/master/CONTRIBUTING.md)

## I want to contribute to the core project

Read the contributing [guide](https://github.com/mbret/chewie/blob/master/CONTRIBUTING.md)

## Work in progess

- complete cli to manage chewie

[host]: https://localhost:3000
[host-repository]: https://localhost:3000/#!/dashboard/repository/list
[chewie]: https://github.com/mbret/chewie
[chewie-system]: https://github.com/mbret/chewie-system
