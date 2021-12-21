import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

const FeedbackForm = ( {handleAdd} ) => {

    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")


    const handleTextChange = e => {
        if (e.target.value === "" || e.target.value.length === 0) {
            setBtnDisabled(true)
            setMessage(null)
        } else if (e.target.value !== "" && e.target.value.trim().length < 10) {
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text, 
                rating
            }
            handleAdd(newFeedback)
            setText("")
        }
    }
    

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your experience with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
