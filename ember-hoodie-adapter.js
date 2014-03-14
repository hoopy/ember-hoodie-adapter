/*global Ember */
/*global DS */
/*global hoodie */
(function () {
  'use strict';

  DS.HoodieAdapter = DS.Adapter.extend(Ember.Evented, {

    find: function(store, type, id/*, opts*/) {
      return hoodie.store.find(type.typeKey, id);
    },

    findAll: function (store, type) {
      return hoodie.store.findAll(type.typeKey);
    },

    createRecord: function (store, type, record) {
      return hoodie.store.add(type.typeKey, record);
    },

    updateRecord: function (store, type, record) {
      return hoodie.store.update(type.typeKey, record.id);
    },

    deleteRecord: function (store, type, record) {
      return hoodie.store.remove(type.typeKey, record.id);
    }
  });
}());
