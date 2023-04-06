import {FaTimes} from 'react-icons/fa'
import Card from '../components/shared/Card'
import PropTypes from 'prop-types'

export default function FeedbackItem({item, handleDelete}){
    // const [rating, setRating] =  useState(7);
    // const [text, setText] =  useState('');

    

    return(
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=>{handleDelete(item.id)}} className="close">
                <FaTimes color='purple'/>
            </button>
            <div className="tetx-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}