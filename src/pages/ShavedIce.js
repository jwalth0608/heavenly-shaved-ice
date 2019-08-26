import React, { Component } from "react";
import"./ShavedIce.css"
import logo from "../logo.svg";
import _ from 'lodash';
import actions from '../modules/actions';
import { connect } from "react-redux";
import PurchaseOrder from "./PurchaseOrder";
import {
  withStyles,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
  }
});

const ColorButton = withStyles(theme => ({
	root: {
		backgroundColor: 'green',
	}
}))(Button);

const SecondFlavorButton = withStyles(theme => ({
	root: {
		backgroundColor: 'blue',
	}
}))(Button);


const CompleteButton = withStyles(theme => ({
	root: {
		backgroundColor: 'red',
	}
}))(Button);

/* GOALS:
 * When a user clicks on a shaved ice option, add the selection to the rendered purchases
 * A purchased flavor's background color should be a combination of the colors in that flavor's recipe
 * Refactor purchased items into their own component
 *  * display the item with its color, name, and ingredients
 * */

class ShavedIce extends Component {
    state = { purchasedFlavors: [], name:'', completeOrder: false };

    getPurchasedFlavors = () => {
        return <img key={Math.random()} src={logo} style={{background: this.getFlavorColor(this.state.purchasedFlavors)}} />
    }

    getColorFromFlavors = (flavors) => {
		const { flavorColorKey } = this.props;
		return _.map(flavors, flav => flavorColorKey[flav]);
    }

    getFlavorColor = (flavor) => {
		const flavorColor = this.getColorFromFlavors(flavor);
        const color = this.getColorAverage(flavorColor);
        return color;
    }

    getColorAverage = colors => {
        return "#" + (_.sumBy(colors, color => parseInt(color.replace("#", ""), 16)) / colors.length).toString(16).split('.')[0];
    }

    getMenuOptions = () => {
        return this.props.shavedIceOptions.map(item => (
            <Button key={item.name} onClick={() => this.orderShavedIce(item)}>{item.name}</Button>
        ));
    };

    orderShavedIce = (item) => {
        this.setState({ purchasedFlavors: item.flavors, name: item.name})
    }
	
	addToOrder = () => {
		this.props.createItem(this.state.name);
		this.setState({ purchasedFlavors: [], name: '', colors: []});
	}
	
	goToPurchaseOrder = () => {
		this.setState({completeOrder: true});
	}
	
	 orderCompleted = () => {
		 this.setState({completeOrder: false});
	 }
	
    render() {
        return (
            <div>
                <div className="vending-machine">
                    <div className="left-panel">

                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Heavenly Shaved Ice</h1>
                        </header>
                    </div>
                    <div className="right-menu">
                        <div className="menu-options">
                            {!this.state.completeOrder && this.getMenuOptions()}
							{this.state.completeOrder && <PurchaseOrder/>}
                        </div>
                    </div>
                    <div className="purchased-flavors">
                        {!_.isEmpty(this.state.purchasedFlavors) && 
						<div>
						{this.getPurchasedFlavors()}
						<ColorButton className='purchased-button' key='Add' onClick={this.addToOrder}>Add To Order</ColorButton>
						<SecondFlavorButton className='purchased-button' key='Second' onClick={this.addToOrder}>Add Another Flavor</SecondFlavorButton>
						</div>}
						{!_.isEmpty(this.props.items) && !this.state.completeOrder && <CompleteButton className='purchased-button' key='Complete' onClick={this.goToPurchaseOrder}>Pay for Order</CompleteButton>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shavedIceOptions: state.shavedIceOptions,
	flavorColorKey: state.flavorColorKey,
	items: state.items
});

const mapDispatchToProps = dispatch => ({
	createItem: payload => dispatch(actions.createItem(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ShavedIce));