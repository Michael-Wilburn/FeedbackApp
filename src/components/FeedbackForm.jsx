import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";

export default function FeedbackForm() {

    const [text, setText] = useState('');
    const [btbDisable, setBtnDisable] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisable(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setBtnDisable(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisable(false)
            setMessage(null)
        }

        setText(e.target.value);
    }

    return(
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/*@todo - rating select component*/}
                <div className="input-group">
                    <input 
                    onChange={handleTextChange} 
                    type='text' 
                    placeholder='Write a review'
                    value={text}
                    />
                    <Button isDisabled={btbDisable} type='submit'>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}