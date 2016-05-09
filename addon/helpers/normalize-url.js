import Ember from 'ember';
import _normalizeUrl from 'normalize-url';

export function normalizeUrl(params, options) {
  return params.length && params[0] ? _normalizeUrl(...params, options) : '';
}

export default Ember.Helper.helper(normalizeUrl);
