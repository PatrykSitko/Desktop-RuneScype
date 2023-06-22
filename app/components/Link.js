import React from "react";
import { push } from "redux-first-routing";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return { setPathname: location => dispatch(push(location)) };
};
function Link({ setPathname, href, children, ...other }) {
  return (
    <a
      onClick={e => {
        e.preventDefault();
        if (typeof href === "string") {
          setPathname(href);
        }
      }}
      {...other}
    >
      {children}
    </a>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Link);
