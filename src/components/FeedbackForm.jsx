import { useState,useContext } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackForm() {

    
    const [text, setText] = useState('');
    const [btbDisable, setBtnDisable] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const {addFeedback} = useContext(FeedbackContext);
    
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
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text: text,
                rating: rating
            }

            addFeedback(newFeedback);
            setText('');
            
        }
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating)=>{setRating(rating)}} rating={rating}/>
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