Ember Data Hoodie Adapter
=========================

Store your ember application data with [Hoodie](http://hood.ie)

I'm new to Ember, please help me :)
-----------------------------------

I used Ember for the first time today, your feedback & bug fixes
are much appreciated.

The Code so simple thus far, I can as well just paste it here:

```js
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
```

Looking good? Anything missing? [Let me know](https://github.com/gr2m/ember-hoodie-adapter)
