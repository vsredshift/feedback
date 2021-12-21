import { useState } from 'react'

function RatingSelect( {select} ) {

    const [selected, setSelected] = useState(10)

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    const radioButtons = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

    return (
        <ul className="rating">
        {radioButtons.map(item => (
            <li key={item}>
                <input 
                    type="radio"
                    id={`num${item}`}
                    name="rating"
                    value={item}
                    onChange={handleChange}
                    checked={selected === item}
                    />
                    <label htmlFor={`num${item}`}>{item}</label>
            </li>
        )
        )}
            
        </ul>
    )
}

export default RatingSelect
