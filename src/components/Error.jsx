import { useNavigate } from "react-router-dom";

const Error = ({ message = "Oops! Something went wrong." }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">Error</h1>
      <p className="mt-4 text-xl text-gray-600">{message}</p>
      <button
        onClick={goHome}
        className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-200"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
