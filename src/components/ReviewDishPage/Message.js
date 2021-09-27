import "../../styles/messageStyles.css";

const Message = ({ messageText }) => 
  <>
    <p
      className="message"
      id="Message"
    >
      {messageText}
    </p>
  </>
;

export default Message;