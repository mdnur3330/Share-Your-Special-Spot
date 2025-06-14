import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
      <p className="text-2xl mt-4 text-gray-800">Something went wrong.</p>
      
      {error?.status && (
        <p className="text-xl text-red-500 mt-2">
          Error {error.status}: {error.statusText || error.message}
        </p>
      )}

      <p className="mt-6 text-gray-500">
        We’re sorry for the inconvenience. Please try again or go back to the homepage.
      </p>

      <a
        href="/"
        className="mt-6 inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
      >
        ⬅ Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
