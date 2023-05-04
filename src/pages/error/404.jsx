import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-20650.jpg"
        alt="404"
      />
      <h1 className="mb-4 text-4xl font-extrabold">Oops!</h1>
      <p className="mb-4 text-2xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="mb-8 text-xl text-red-600">
        <i>{error.status} </i>
        <i>{error.statusText}</i>
      </p>
      <Link
        to="/"
        className="rounded-lg bg-amber-900 px-4 py-4 text-xl font-bold text-white"
      >
        Back to Homepage
      </Link>
    </div>
  );
}
