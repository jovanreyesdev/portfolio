import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/jsx-props-no-spreading */
const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  pageProps: {},
};

export default App;
