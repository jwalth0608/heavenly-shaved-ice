import React, { Component } from "react";
import"./ShavedIce.css"
import logo from "../logo.svg";
import _ from 'lodash';
import { connect } from "react-redux";
import actions from '../modules/actions';
import {
  withStyles,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
  }
});

class PurchaseOrder extends Component {
	
	purchaseComplete = () => {
		this.props.completePurchase();
		this.props.orderCompleted();
	}
	
	generateListOfSnoCones = () => {
		return this.props.items.map(item => (
			<div key={Math.random()}>
				<img  src={logo} style={{background: `linear-gradient(90deg, ${_.head(item.colors)} 50%, ${_.last(item.colors)} 50%)`}} alt='' />
				<div>{item.description}</div>
				<div style={{wordWrap: 'normal', lineHeight: '1.5'}}>{item.flavors.join()}</div>
			</div>
		));
	}

	render () {
		return (
		<div>
			{this.generateListOfSnoCones()}
			<Button key='Purchase' onClick={this.purchaseComplete}>Purchase Order</Button>
		</div>
		)
	}	

}



const mapStateToProps = state => ({
    shavedIceOptions: state.shavedIceOptions,
	items: state.items
});

const mapDispatchToProps = dispatch => ({
	completePurchase: () => dispatch(actions.completePurchase())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(PurchaseOrder));