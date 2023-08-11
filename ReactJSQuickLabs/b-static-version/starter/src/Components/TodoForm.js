import React, { useState } from 'react'
import DateCreated from './utils/DateCreated'

function TodoForm() {
    const [todoDescription, setTodoDescription] = useState('')
    const [todoDateCreated, setTodoDateCreated] = useState(null)
    const [todoCompleted, setTodoCompleted] = useState(false)

    const submitClass = (todoCompleted) ? 'btn-primary' : 'btn-danger'

  return (
    <form>
        <div className='form-group'>
            <label htmlFor='todoDescription'>
                Description:&nbsp;
            </label>
            <input
                type='text'
                name='todoDescription'
                className='form-control'
                placeholder='Todo Description'
                value={todoDescription}
                onChange={e => setTodoDescription(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='todoDateCreated'>
                Created on:&nbsp;
            </label>
            <DateCreated updateDateCreated={dateCreated => setTodoDateCreated(dateCreated)} />
        </div>
        <div className='form-group'>
            <label htmlFor='todoCompleted'>
                Completed:&nbsp;
            </label>
            <input
                type='checkbox'
                name='todoCompleted'
                checked={todoCompleted}
                onChange={e => setTodoCompleted(e.target.checked)}
            />
        </div>
        <div className='form-group'>
            <input
                type='submit'
                className={'btn' + submitClass}
                value='Submit'
                disabled={!todoDescription}
            />
        </div>
    </form>
  )
}

export default TodoForm