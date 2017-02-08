import Ember from 'ember';

export default Ember.Route.extend({
// Custom model
	// model() {
	// 		return 'Nate';
	// }

// custom model object
	// 	model() {
	// 		return { id:'1', name:'Don'};
	// }

// custom model collection
	model(){
		const store = this.get('store');
		return store.getOrders();
	},

	store: Ember.inject.service()
});
