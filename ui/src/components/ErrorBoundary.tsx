export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: any
  resetErrorBoundary: any
}) => (
  <div className="w-full h-full flex items-center">
    <div role="alert" className="mx-auto text-center">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  </div>
)

export const MyErrorHandler = (
  error: Error,
  info: { componentStack: string }
) => {
  console.error('error ==>', error)
  console.log('info ==>', info)
}
