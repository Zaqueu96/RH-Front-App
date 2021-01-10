import React from "react";

import PropTypes from "prop-types";
import { Route, useHistory } from "react-router-dom";

import DefaultLayout from "../pages/_layout";
import store from "../services/store";

export default function RouteWrapper({
  component: Component,
  isPublic,
  layout,
  ...rest
}) {
  const token = store.token;
  const history = useHistory();

  if (token && history.location.pathname === "/" && isPublic) {
    history.push("/dashboard");
  }

  if (!token && history.location.pathname !== "/" && !isPublic) {
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
