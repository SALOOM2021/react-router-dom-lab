
import { Link } from "react-router";

const MailboxList = (props) => {

    return (
      <>
      <h1>Mailbox List</h1>
        <ul>
            
          {props.mailboxes.map((mail) => (
            
            <li key={mail.boxSize}>
                <Link to={`/mailboxes/${mail._id}`}>
                <div className="mail-box">Mailbox {mail._id}</div>
                </Link> 
                </li>
           
          ))}
          
        </ul>
      </>
    );
  };
  
  export default MailboxList;
  