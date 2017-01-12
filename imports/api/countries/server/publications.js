// All countries-related publications

import { Meteor } from 'meteor/meteor';
import { Countries } from '../countries.js';

Meteor.publish('countries.all', function () {
  return Countries.find();
});
