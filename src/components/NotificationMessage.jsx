import PropTypes from 'prop-types';
export const NotificationMessage = ({ message }) => {
  return <h4>{message}</h4>;
};
NotificationMessage.prototype = {
  message: PropTypes.string.isRequired,
};
