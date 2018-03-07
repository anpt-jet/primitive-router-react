import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const paramsType = PropTypes.shape({
  id: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
});

const propTypes = {
  match: PropTypes.shape({
    params: paramsType,
  }).isRequired,
};

export const DetailsPage = ({ match }) => (
  <React.Fragment>
    <div>{match.params.id}</div>
    <Link to="/" href="/">
      Home
    </Link>
  </React.Fragment>
);

DetailsPage.propTypes = propTypes;

export default DetailsPage;
