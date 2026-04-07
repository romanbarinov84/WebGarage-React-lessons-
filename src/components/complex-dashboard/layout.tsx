
import React from 'react'

const ComplexDashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>Панель управления</h1>
        {children}
    </div>
  )
}

export default ComplexDashboardLayout