import { useState, useContext, useEffect } from 'react'
import FeedbackContext from "../context/FeedbackContext";

export default function RatingSelect({select, rating}){

    const [selected, setSelected] = useState(rating)
    
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=>{
        setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])

    const ratingScore =  [1,2,3,4,5,6,7,8,9,10];

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return(
        <div>
            <ul className='rating'>
                {ratingScore.map(score => {
                    return (
                        <li key={`${score}`} >
                            <input
                            type='radio'
                            id={`num${score}`}
                            name='ratingScore'
                            value={score.toString()}
                            onChange={handleChange}
                            checked={selected === score}
                            />
                            <label htmlFor={`num${score}`}>{score}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}