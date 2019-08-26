// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
	SHOW_PURCHASE_ORDER: "SHOW_PURCHASE_ORDER"
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


  export default {
    createItem,
	showPurchaseOrder,
    Types
  };