import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()
  console.log(error)
    return (
      <div
        id='error-page'
        className='flex flex-col gap-8 justify-center items-center h-screen'
      >
        <h1 className='text-4xl font-bold'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className='text-slate-400'>
          <i>
            {
              isRouteErrorResponse(error) ?
                  (
                      error.data || error.statusText
                  ) :
                  'Unknown error message'
            }
        </i>
        </p>
      </div>
    )
}