import config from '../config/environment';
import injectScript from 'ember-inject-script';

export function initialize(container, application) {
  //if(!config.stripe.publishableKey) {
    //throw new Ember.Error('ServiceService: Missing Stripe Publishable Key, please set `ENV.stripe.publishableKey` in config.environment.js');
  //}

  let stripeConfig = config.stripe || {};

  application.register('config:stripe', stripeConfig, { instantiate: false });
  application.inject('service:stripev3', 'config', 'config:stripe');

  if (!stripeConfig.publishableKey) {
    throw new EmberError("stripev3: Missing Stripe key, please set `ENV.stripe.publishableKey` in config.environment.js");
  }

}

export default {
  name: 'ember-cli-stripe',
  initialize: initialize
};
