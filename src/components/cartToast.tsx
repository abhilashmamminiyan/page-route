import { useEffect, useState } from 'react'

interface CartToastProps {
  show: boolean
  message: string
  onClose: () => void
}

export default function CartToast({ show, message, onClose }: CartToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div 
      className="position-fixed top-0 end-0 p-3" 
      style={{ zIndex: 11 }}
    >
      <div className="toast show bg-success text-white" role="alert">
        <div className="toast-header bg-success text-white">
          <strong className="me-auto">✓ Success</strong>
          <button 
            type="button" 
            className="btn-close btn-close-white" 
            onClick={onClose}
          />
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  )
}