//declare and export all of your action descriptors in this file
//Example:
// export const USER_ACCEPTED = "User accepted the terms";
/*
comment-1
example of an action:
export default action = props => {
  return {
    type: USER_ACCEPTED,
    payload: { actionKey: props }
  };
};*/
/*
comment-2
  you will be able later to access the value of those action keys using connect from react-redux 
  on your components. example:
  import React from 'react';
  import {connect} from 'react-redux';

  export const mapStateToProps = state=>{return {actionKey:state.actionKey}};

  export default connect(mapStateToProps)(props => <h1>{props.actionKey}</h1>);
  */
/*
  to dispatch actions you will be using connect from react-redux 
  on your components. example:
  import React from 'react';
  import {connect} from 'react-redux';
  import action from 'comment-1';
  import {mapStateToProps} from 'comment-2';
}
const mapDispatchToProps = dispatch=>{return {changeActionKeyValue:(newValue)=>dispatch(action(newValue))}};
  export default connect(mapStateToProps,mapDispatchToProps)(props => {props.changeActionKeyValue(1); return <h1>{props.actionKey}</h1>});
  */
