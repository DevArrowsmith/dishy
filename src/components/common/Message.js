import React from "react";
import PropTypes from "prop-types";
import "../../styles/common/message.css";

const Message = ({ messageType, messageText }) => (
  <p className={`message ${messageType}`}>{messageText}</p>
);
Message.defaultProps = {
  messageType: "",
};

Message.propTypes = {
  messageType: PropTypes.string,
  messageText: PropTypes.string.isRequired,
};

export default Message;
