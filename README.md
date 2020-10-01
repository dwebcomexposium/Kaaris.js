# Kaaris JavaScript Widget

This is a simple POC javascript widget that load a form into the page and display a legal text from an API

## Usage

``` js
(function (w, d, s, o, f, js, fjs) {
    w['Kaaris'] = o; w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'kaaris', 'https://www.comexposium.com/kaaris.min.js'));

kaaris('init');

````

## Options

### init

`init` option will load the form

example:

``` js
kaaris('init');
```

### goulag

`goulag` option loads a custom bordered and centered text

example:

``` js
kaaris('goulag', 'Any text I want to display here');
````

### debug

`debug` option will log informations about the instance

example:

``` js
kaaris('debug');
````

## Demo

Test Kaaris on your own environment:

``` shell
git clone https://github.com/dwebcomexposium/widget-js.git
````

Then:

``` shell
npm install
````

Finally:

``` shell
npm run start
````
