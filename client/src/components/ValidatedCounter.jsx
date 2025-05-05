import PropTypes from 'prop-types';

export default function ValidatedCounter({ count }) {
  return <div>Validated Count: {count}</div>;
}

ValidatedCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
