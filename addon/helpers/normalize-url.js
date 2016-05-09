import Ember from 'ember';
import _normalizeUrl from 'normalize-url';

export function normalizeUrl(params, options) {
  return _normalizeUrl(...params, options);
}

export default Ember.Helper.helper(normalizeUrl);
