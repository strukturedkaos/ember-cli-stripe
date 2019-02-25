import config from '../config/environment';
import injectScript from 'ember-inject-script';

export function initialize(container, application) {
  if(!config.stripe.publishableKey) {
    throw new Ember.Error('ServiceService: Missing Stripe Publishable Key, please set `ENV.stripe.publishableKey` in config.environment.js');
  }
  stripe.configure(config.stripe.publishableKey);
}

export default {
  name: 'stripev3',
  initialize: initialize
};
