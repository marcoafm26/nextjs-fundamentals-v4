'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import Button from '../components/ui/Button'
import { AlertTriangleIcon, RefreshCwIcon } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <div className="mb-6">
        <AlertTriangleIcon size={48} className="text-red-500 mx-auto" />
      </div>
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        We encountered an error while loading this page. Please try again or
        contact support if the problem persists.
      </p>
      {error.digest && (
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
          Error ID: {error.digest}
        </p>
      )}
      <Button onClick={() => reset()} className="flex items-center">
        <RefreshCwIcon size={18} className="mr-2" />
        Try again
      </Button>
    </div>
  )
}
