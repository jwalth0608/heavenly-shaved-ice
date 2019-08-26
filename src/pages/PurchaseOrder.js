import React, { Component } from "react";
import"./ShavedIce.css"
import logo from "../logo.svg";
import _ from 'lodash';
import { connect } from "react-redux";
import {
  withStyles,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
  }
});

const color1 = 'red';
const color2 = 'green';


class PurchaseOrder extends Component {
	
	generateListOfSnoCones = () => {
		return this.props.items.map(item => (
			<div key={Math.random()}>
				<img  src={logo} style={{background: `linear-gradient(90deg, ${color1} 50%, ${color2} 50%)`}} alt='' />
				<div>{item.description}</div>
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

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(PurchaseOrder));