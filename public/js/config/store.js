window.CustomMongoAdapter = DS.RESTAdapter.extend({
  serializer: DS.RESTSerializer.extend({
    serializeId: function(id) {
      return id.toString();
    },
    primaryKey: function(type) {
      return "_id";
    }
  })
});

module.exports = DS.Store.extend({
  adapter: 'window.CustomMongoAdapter'
});

