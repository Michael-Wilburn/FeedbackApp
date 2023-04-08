import {FaTimes} from 'react-icons/fa'
import { useContext } from 'react'
import Card from '../components/shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackItem({item}){
    // const [rating, setRating] =  useState(7);
    // const [text, setText] =  useState('');

    const {deleteFeedback} = useContext(FeedbackContext)


    return(
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>{deleteFeedback(item.id)}} className="close">
                <FaTimes color='purple'/>
            </button>
            <div className="tetx-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}