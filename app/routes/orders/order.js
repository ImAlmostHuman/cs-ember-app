import Ember from 'ember';

// export default Ember.Route.extend({
// 	model(params) {
// 		return [
// 			{ id:'1', name:'Don'},
// 			{ id:'2', name:'Uschi'}
// 		].findBy('id', params.order_id);
// 	}
// });
	
export default Ember.Route.extend({
	model(params) {
		const id = params.order_id;
		const store = this.get('store');
		return store.getOrderById(id);
	},

	store: Ember.inject.service()
});
	

