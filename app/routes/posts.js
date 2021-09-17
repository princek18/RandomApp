import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [{
            title: "hi there",
            body: "Hello everyone!"
        },
            {title: "Bye Bye",
            body: "Its time to go."
            }
        ]
    }
});
