
const Stepper = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-white border border-blue-500 rounded-lg shadow-md p-6">
      <h2 className="sr-only">Steps</h2>

      <div className="relative">
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-white border border-blue-500 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
              <span className="text-blue-700 font-bold">1</span>
            </span>
            <h3 className="font-medium leading-tight text-blue-700">Inventor Information</h3>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-gray-300 rounded-full start-0 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
            <h3 className="text-sm font-medium leading-tight text-gray-400">Area of Technology</h3>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-gray-300 rounded-full start-0 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
            <h3 className="text-sm font-medium leading-tight text-gray-400">Summary of Invention</h3>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-white border border-blue-500 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
              <span className="text-blue-700 font-bold">2</span>
            </span>
            <h3 className="font-medium leading-tight text-blue-700">Inventor Information</h3>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-gray-300 rounded-full start-0 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
            <h3 className="text-sm font-medium leading-tight text-gray-400">Step Description</h3>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-2.5 h-2.5 bg-gray-300 rounded-full start-0 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
            <h3 className="text-sm font-medium leading-tight text-gray-400">Step Description</h3>
          </li>

          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-white border border-blue-500 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900">
              <span className="text-blue-700 font-bold">3</span>
            </span>
            <h3 className="font-medium leading-tight text-blue-700">Inventor Information</h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Stepper;
