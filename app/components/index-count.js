import Ember from 'ember';

export default Ember.Component.extend({
    result: true,
    actions:{
        toggle(){
            this.toggleProperty('result')
        }

    }
});
