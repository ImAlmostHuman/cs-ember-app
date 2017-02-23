import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
	Product.create({title: 'Tent', price: 10}),
	Product.create({title: 'Sleeping Bag', price: 5}),
	Product.create({title: 'Flashlight', price: 3}),
	Product.create({title: 'First-Aid', price: 2})
];

const orders = [
    Order.create({
        id: '123', name: 'Dusty Coat',
        items:[
            LineItems.create({product: products[0], quantity: 1}),
            LineItems.create({product: products[1], quantity: 1}),
            LineItems.create({product: products[2], quantity: 0})
        ]    
    }),
    Order.create({
        id: '124', name: 'Usch Monster',
        items:[
            LineItems.create({product: products[0], quantity: 0}),
            LineItems.create({product: products[1], quantity: 2}),
            LineItems.create({product: products[2], quantity: 0})
        ]       
    })
];

export default Ember.Service.extend({
  getOrderById(id) { return orders.findBy('id', id); },
  getOrders() { return orders; },
  getProducts() { return products; }
});