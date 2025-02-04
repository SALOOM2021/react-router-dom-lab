import { useState } from "react"
import { useNavigate } from "react-router"
const MailboxForm = (props) => {
    const initialState = {
        boxSize: 'Small',
        boxOwner: '',
    }
    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: (event.target.value) })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    return (
        <>
        <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter a Boxholder:</label>
                <input type="text" name="boxOwner" value={formData.boxOwner} onChange={handleChange}></input>
                <br></br> <br></br>
                <label htmlFor="boxSize">Select a Box Size:</label>
                <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <br /><br /><br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default MailboxForm;