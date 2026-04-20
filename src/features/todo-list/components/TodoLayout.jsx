import React from 'react'
import TodoSection from './TodoSection'

const TodoLayout = ({children}) => {
  return (
      <div>
          <TodoSection />
          {children}
    </div>
  )
}

export default TodoLayout