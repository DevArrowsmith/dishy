import "../../styles/messageStyles.css";

const ErrorMessage = ({ messageText }) => 
  <>
    <p
      className="message"
      id="ErrorMessage"
    >
      {messageText}
    </p>
  </>
;

export default ErrorMessage;