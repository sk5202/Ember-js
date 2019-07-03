import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    content: DS.attr(),
    publishedDate: DS.attr(),
    title: DS.attr()
    
  
});