import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return(
    <div className="h-screen w-full flex flex-col items-center justify-center gap-2">
      <h1>Error Lek!</h1>
      <p className="text-red-600">
        {error.statusText || error.message}
      </p>
    </div>
  )
}

export default ErrorPage