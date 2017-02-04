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
		return [
			{ id:'1', name:'Don'},
			{ id:'2', name:'Uschi'}
		];
	}
});
