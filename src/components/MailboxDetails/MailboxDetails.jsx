import { useParams } from "react-router";
const MailboxDetails = (props) => {

const { mailboxId } = useParams();

const selectedBox = props.mailboxes.find((mailbox) => (
   mailbox._id === Number(mailboxId)
));

  return (
    <>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <dl>
      <dt>Boxholder: {selectedBox.boxOwner}</dt>
        <dd></dd>
        <dt>Box Size: {selectedBox.boxSize}</dt>
        <dd></dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
