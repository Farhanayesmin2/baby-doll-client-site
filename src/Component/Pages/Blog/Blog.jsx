import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-r from-cyan-900 via-green-200 to-cyan-700 p-4 w-full text-start mt-5 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Access Token and Refresh Token:
          </h5>
          <p>
            Access Token is a credential that can be used by an application to
            access an API. It's a string representing the authorization granted
            to the client by the resource owner. The string is usually opaque to
            the client. Refresh Token is a credential used to obtain a new
            access token. Access tokens expire after some time (which is
            typically short), but refresh tokens can help get a new access token
            without the need for user interaction, hence maintaining the user
            session.
          </p>
        </div>
        <div className="bg-gradient-to-br from-cyan-900 via-green-200 to-cyan-700   p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            SQL and NoSQL databases:
          </h5>
          <p>
            SQL databases are relational, NoSQL are non-relational. SQL
            databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            SQL databases are vertically scalable, NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases can be document-based, key-value pairs, wide-column
            stores, or graph databases.
            <br />
          </p>
        </div>
        <div className="bg-gradient-to-br from-cyan-900 via-green-200 to-cyan-700   p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Express.js and Nest.js:
          </h5>
          <p>
            Express.js is a minimal and flexible Node.js web application
            framework that provides a robust set of features for web and mobile
            applications. It's a part of the MEAN (MongoDB, Express.js,
            Angular.js, Node.js) stack.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-cyan-900 via-green-200 to-cyan-700  p-4 text-start mt-5 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            MongoDB Aggregate:
          </h5>

          <p>
            Aggregation operations process data records and return computed
            results. MongoDB provides a feature called Aggregation Framework,
            modeled on the concept of data processing pipelines, where you can
            use it to perform operations like filtering, grouping, and sorting
            on your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
