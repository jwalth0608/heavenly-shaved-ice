import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import reducer from "./reducer";

export default function configureStore(initialState = {
    shavedIceOptions: [
		{name: "Tiger's Blood", flavors: ['Watermelon', 'Strawberry', 'Coconut'], color: ''}, 
		{name: "Strawberry Cheesecake", flavors: ['Strawberry', 'Strawberry', 'Vanilla', 'Lime'], color: ''}, 
		{name: "Pink Lemonade", flavors: ['Raspberry', 'Raspberry', 'Lemon', 'Lemon'], color: ''}, 
		{name: "Red Velvet", flavors: ['Cherry', 'Cherry', 'Raspberry', 'Raspberry', 'Vanilla'], color: ''},
		{name: 'Watermelon', flavors: ['Watermelon'], color: '#D6297B'}, 
		{name: 'Strawberry', flavors: ['Strawberry'], color: '#D6292F'},
		{name: 'Coconut', flavors: ['Coconut'], color: '#F8F7DC'},
		{name: 'Vanilla', flavors: ['Vanilla'], color: '#D1BEA8'},
		{name: 'Lime', flavors: ['Lime'], color: '#BFFF00'},
		{name: 'Raspberry', flavors: ['Raspberry'], color: '#0066FF'},
		{name: 'Lemon', flavors: ['Lemon'], color: '#651A14'},
		{name: 'Cherry', flavors: ['Cherry'], color: '#FDE910'}
	],
	flavorColorKey: {
		Watermelon: '#D6297B',
		Strawberry: '#D6292F',
		Coconut: '#F8F7DC',
		Vanilla: '#D1BEA8',
		Lime: '#BFFF00',
		Raspberry: '#0066FF',
		Cherry: '#651A14',
		Lemon: '#FDE910'
	},
	items: [],
	showPurchaseOrder: false
}) {
  const store = createStore(reducer, initialState, applyMiddleware(logger));
  return store;
}