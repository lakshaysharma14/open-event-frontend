import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.get('l10n').t('Settings');
  },
  model() {
    return this.get('store').queryRecord('setting', {});
  }
});
