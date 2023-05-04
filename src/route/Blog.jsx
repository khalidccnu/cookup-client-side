import React from "react";

const Blog = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="font-semibold text-2xl text-center mb-5">Blog</h2>
        <div className="max-w-lg mx-auto space-y-3">
          <div className="collapse border border-sky-900 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 mr-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
              <h5 className="w-11/12">
                Tell us the differences between controlled and uncontrolled
                component.
              </h5>
            </div>
            <div className="collapse-content">
              <ul className="list-disc pl-24 pr-10 py-10 space-y-2 text-base">
                <li>
                  Controlled component does not maintain its internal state. But
                  uncontrolled component maintains its internal state.
                </li>
                <li>
                  Controlled component data is controlled by the parent
                  component. But uncontrolled component data is controlled by
                  the DOM itself.
                </li>
                <li>
                  Controlled component accepts its current value as a prop. But
                  uncontrolled component uses a ref for their current values.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse border border-sky-900 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 mr-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
              <h5 className="w-11/12">
                How to validate React props using PropTypes?
              </h5>
            </div>
            <div className="collapse-content">
              <p className="pl-24 pr-10 py-10 text-base">
                In React, PropTypes is a library that allows to validate the
                types of props passed to a component. First, it will be needed
                to add a proptypes object to component, then define the
                PropTypes for each prop that component expects like string,
                number, boolean etc. Last pass props to component. If a prop
                doesn't match the specified data type or if a required prop is
                not passed, React will throw an error. Using PropTypes can help
                to catch these errors early in the development process, making
                code more reliable and easier to maintain.
              </p>
            </div>
          </div>
          <div className="collapse border border-sky-900 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 mr-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
              <h5 className="w-11/12">
                Tell us the differences between Node.js and Express.js.
              </h5>
            </div>
            <div className="collapse-content">
              <ul className="list-disc pl-24 pr-10 py-10 space-y-2 text-base">
                <li>
                  Node.js is used to build server-side, input-output,
                  event-driven apps. Other hand Express.js is used to build
                  web-apps using approaches and principles of Node.js.
                </li>
                <li>
                  Node.js have fewer features. But Express.js have more features
                  than Node.js.
                </li>
                <li>
                  Node.js is built on Google’s V8 engine. Other hand Express.js
                  is built on Node.js.
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse border border-sky-900 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title flex items-center font-medium hover:text-sky-500 rounded-lg shadow-sm space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 mr-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
              <h5 className="w-11/12">
                What is a custom hook, and why will you create a custom hook?
              </h5>
            </div>
            <div className="collapse-content">
              <p className="pl-24 pr-10 py-10 text-base">
                A custom hook is a special JavaScript function whose name starts
                with 'use' and can be used to call other hooks. When we have
                component logic that needs to be used by multiple components,
                then we can extract that logic to a custom Hook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
