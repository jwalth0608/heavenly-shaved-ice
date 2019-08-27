import { createStore, applyMiddleware } from "redux";

// Logger with default options
import logger from "redux-logger";

import reducer from "./reducer";

export default function configureStore(initialState = {
    shavedIceOptions: [
		{name: "Tiger's Blood", flavors: ['Watermelon', 'Strawberry', 'Coconut']}, 
		{name: "Strawberry Cheesecake", flavors: ['Strawberry', 'Strawberry', 'Vanilla', 'Lime']}, 
		{name: "Pink Lemonade", flavors: ['Raspberry', 'Raspberry', 'Lemon', 'Lemon']}, 
		{name: "Red Velvet", flavors: ['Cherry', 'Cherry', 'Raspberry', 'Raspberry', 'Vanilla']},
		{name: 'Watermelon', flavors: ['Watermelon']}, 
		{name: 'Strawberry', flavors: ['Strawberry']},
		{name: 'Coconut', flavors: ['Coconut']},
		{name: 'Vanilla', flavors: ['Vanilla']},
		{name: 'Lime', flavors: ['Lime']},
		{name: 'Raspberry', flavors: ['Raspberry']},
		{name: 'Lemon', flavors: ['Lemon']},
		{name: 'Cherry', flavors: ['Cherry']}
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