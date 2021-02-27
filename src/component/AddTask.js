
import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
     const [text, settext] = useState('')
     const [day, setday] = useState('')
     const [reminder, setreminder] = useState(false)

     const onSubmit = (e) => {

        e.preventDefault()

        if (!text)

        {
            alert ('please add task')
        return
        }
        if (!day)

        {
            alert ('please add date')
        return
        }

        onAdd ({text, day, reminder}) 

        settext('')
        setday ('')
        setreminder(false)

     }

    return (
        <form className= 'add-form' onSubmit = {onSubmit} >
            <div className= 'form-control'>

                <label>task</label>
                <input type= 'text' placeholder='Add Task' value = {text} onChange= {(e) => settext(e.target.value)} />

            </div>
            <div className= 'form-control'>

                <label>day & time</label>
                <input type= 'text' placeholder='Add day and time ' 
                value = {day}
                onChange= {(e) => setday(e.target.value)} />

            </div>
            <div className= 'form-control form-control-check' >

                <label>remainder</label>
                <input type= 'checkbox'
                value = {reminder}
                onChange= {(e) => setreminder(e.currentTarget.checked)} 
                checked = {reminder}
                />
                

            </div>
            <input type = 'submit' value = 'save' className= 'btn btn-block'/>
        </form>
    )
}

export default AddTask
