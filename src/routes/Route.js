import React from "react";

import PropTypes from "prop-types";
import { Route, useHistory } from "react-router-dom";

import DefaultLayout from "../pages/_layout";

export default function RouteWrapper({
  component: Component,
  isPublic,
  layout,
  ...rest
}) {
  const signed = false;
  const history = useHistory();
  if (!signed && history.location.pathname !== "/" && !isPublic) {
    history.push("/");
  }

  const Layout = layout || DefaultLayout;
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPublic: PropTypes.bool,
  layout: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
RouteWrapper.defaultProps = {
  isPublic: false,
  layout: null,
};
