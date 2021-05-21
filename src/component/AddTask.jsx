import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
  
        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }


    return ( 

        <form onSubmit = {onSubmit}>
            <div className="form-control">
                <label >Task</label>
                <input required type="text" placeholder = 'Add Task' value = {text} onChange= {(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label >Day & Time</label>
                <input type="text" placeholder = 'Add Day & Time'  value = {day} onChange= {(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label >Set Reminder</label>
                <input type="checkbox" checked = {reminder} value = {reminder} onChange = {(e) => setReminder(e.target.checked)} />
            </div>
            <input  style = {{marginBottom : '40px'}} type="submit" value ='Save Task' className = 'btn btn-block' />
        </form>
     );
}
 
export default AddTask;