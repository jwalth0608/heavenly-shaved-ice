// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
	SHOW_PURCHASE_ORDER: "SHOW_PURCHASE_ORDER",
	COMPLETE_PURCHASE: "COMPLETE_PURCHASE"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const showPurchaseOrder = bool => ({
	type: Types.SHOW_PURCHASE_ORDER,
	payload: bool
  });
  
  const completePurchase = () => ({
	 type: Types.COMPLETE_PURCHASE 
  });


  export default {
    createItem,
	showPurchaseOrder,
	completePurchase,
    Types
  };