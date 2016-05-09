# ember-normalize-url

An Ember add-on wrapper for the [normalize-url](https://github.com/sindresorhus/normalize-url) node package.

## Install

```
ember install ember-normalize-url
```

## Usage

Import the add-on as a basic shim:

```javascript
import normalizeUrl from 'normalize-url';

export default Ember.Component.extend({
  coolUrl: normalizeUrl('twitter.com') // coolUrl === http://twitter.com
});
```

Or use the included helper in your templates:

```handlebars
{{#badass-urls as |url|}}
  {{normalize-url url}}
{{/badass-urls}}
```

normalize-url options work as well:

```handlebars
{{normalize-url someUrl normalizeProtocol=false stripWWW=false}}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
