import * as React from "react";
import {Route} from "react-router-dom";
import Base from "../../../pages/Base";

import PropTypes from "prop-types";

const DefaultRoute = React.memo((props) => {
  const {path, exact, component: Component} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routerProps) => (
        <Base routerProps={routerProps}>
          <Component />
        </Base>
      )}
    />
  );
});

DefaultRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  component: PropTypes.object.isRequired,
};

export default DefaultRoute;
