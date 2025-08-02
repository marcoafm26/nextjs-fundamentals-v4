export default function Loading() {
  return (
    <div className="animate-pulse max-w-4xl mx-auto p-4 md:p-8">
      {/* Back link and header skeleton */}
      <div className="mb-8">
        <div className="inline-flex items-center text-sm mb-4">
          <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded mr-1" />
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="h-8 w-64 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="flex items-center space-x-2">
            <div className="h-8 w-16 bg-gray-300 dark:bg-gray-600 rounded" />
            <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>
      </div>

      {/* Main issue content skeleton */}
      <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg shadow-sm p-6 mb-8">
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-36 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
          <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
        </div>
      </div>

      {/* Details section skeleton */}
      <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg shadow-sm p-6">
        <div className="h-6 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Assigned to */}
          <div>
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div className="h-5 w-40 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
          {/* Status */}
          <div>
            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
          {/* Priority */}
          <div>
            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
          {/* Created */}
          <div>
            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-600 rounded mb-2" />
            <div className="h-5 w-32 bg-gray-300 dark:bg-gray-600 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
