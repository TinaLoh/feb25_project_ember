import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var q = params.query;
     return Ember.$.getJSON('http://data.cityofnewyork.us/resource/kh2m-kcyz.json?sub_subindustry=' + q).then(function(results){
      return results;
    });
  }
});
