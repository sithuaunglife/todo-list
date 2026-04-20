import React from 'react'
import JsonServerTodoSection from './JsonServerTodoSection'

const JsonServerTodoLayout = ({children}) => {
  return (
      <div>
          <JsonServerTodoSection />
          {children}
    </div>
  )
}

export default JsonServerTodoLayout