# ember-cli-stripe

This addon is a solution for integrating Stripe.js into your Ember.js web app.

## Installation

```
ember install ember-cli-stripe
```

## Configuration

### Stripe Publishable Key

You must set your [publishable key](https://support.stripe.com/questions/where-do-i-find-my-api-keys) in `config/environment.js`.

```js
ENV.stripe = {
  publishableKey: 'pk_thisIsATestKey'
};
```

### Lazy loading

You can configure Stripe.js to lazy load when you need it.

```js
ENV.stripe = {
  lazyLoad: true
};
```

When enabled, Stripe.js will not be loaded until you call the `load()` function on the service. It's best to call this function in a route's `beforeModel` hook.

```js
// subscription page route

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  stripe: service('stripev3'),

  beforeModel() {
    return this.get('stripe').load();
  }
});
```

#### Testing autofill in browsers

There are self-signed certs in `/ssl` that will allow you to test autofill inside of the dummy app (or serve as a blueprint for doing this yourself in your own app).

To run using the self-signed certificate, you must:

- Add `127.0.0.1 localhost.ssl` to your `hosts` file
- Run the app with `ember serve --ssl`
- Add the certificate to your keychain and trust it for SSL
- Visit the app at [https://localhost.ssl:4200](https://localhost.ssl:4200).

### Building

```sh
ember build
```

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
