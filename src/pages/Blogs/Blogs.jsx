import React from "react";
import Hooks from "../Hooks/Hooks";

const Blog = () => {
  Hooks("Blogs");
  return (
    <>
      <div className="md:mt-6 mb-20 mt-48 p-4 md:px-12">
        <div className="flex text-[#41644A] font-bold gap-3 items-center justify-center">
          <h1 className="md:text-5xl text-4xl underline pb-2">Blogs</h1>
        </div>
        <div className=" bg-[#F6F1F1] text-cyan-800 my-7 p-7 rounded">
          <h2 className="text-4xl font-bold my-3">
            1.What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="mt-4 font-medium text-xl">
            (a)An access token is a credential that is issued by an
            authentication server upon successful authentication of a user. It
            represents the user's authorization to access specific resources or
            perform certain actions whereas, refresh token is a long-lived
            credential that is also issued by the authentication server
            alongside the access token. It is used to obtain a new access token
            when the current one expires or becomes invalid.
          </p>
          <p className="mt-4   font-medium text-xl">
            (b)Access tokens are typically short-lived and have an expiration
            time. They are used to authenticate requests to protected APIs or
            services whereas, Refresh tokens are securely stored on the
            client-side and are not included in every API request like access
            tokens.
          </p>
          <p className="mt-4 font-medium text-xl">
            (c)With Access tokens when a client wants to access a protected
            resource, it includes the access token in the request headers. The
            server verifies the token's validity and grants or denies access
            accordingly but, when the access token expires, the client sends the
            refresh token to the authentication server. If the refresh token is
            valid, the server issues a new access token to the client without
            requiring the user to re-authenticate.
          </p>
        </div>
        <div className=" bg-[#F6F1F1] text-cyan-800 my-7 p-7 rounded">
          <h2 className="text-4xl font-bold my-3">
            2.Compare SQL and NoSQL databases?
          </h2>
          <p className="mt-4 font-medium text-xl">
            (a)SQL databases use a structured data model based on tables with
            predefined schemas. Data is organized into rows and columns, and
            relationships between tables are established using foreign keys
            whereas NoSQL databases use a flexible data model that can be
            document-based, key-value, graph-based. They do not enforce strict
            schemas, allowing for dynamic and unstructured data storage.
          </p>
          <p className="mt-4 font-medium text-xl">
            (b)SQL databases traditionally use a vertical scaling approach,
            where you increase the hardware resources of a single server to
            handle more data and traffic. Some SQL databases now support
            horizontal scaling as well whereas, NoSQL databases are designed to
            scale horizontally by distributing data across multiple servers.
          </p>
          <p className="mt-4 font-medium text-xl">
            (c)SQL databases enforce a fixed schema, meaning the structure and
            types of data must be defined before storing it. Altering the schema
            often requires migrations and downtime whereas, NoSQL databases
            offer schema flexibility, allowing for dynamic and evolving data
            structures. Fields can be added or modified without affecting
            existing data, providing greater flexibility in handling changing
            requirements.
          </p>
          <p className="mt-4 font-medium text-xl">
            (d) SQL databases use the SQL query language for data manipulation
            and retrieval. SQL provides a powerful and standardized way to
            perform complex queries, joins, aggregations, and transactions
            whereas, NoSQL databases use various query languages depending on
            the type of database. For example, document-based NoSQL databases
            often use query languages similar to JSON or XML, while key-value
            stores use simple CRUD (Create, Read, Update, Delete) operations.
          </p>
        </div>
        {/* 3rd question */}
        <div className=" bg-[#F6F1F1] text-cyan-800 my-7 p-7 rounded">
          <h2 className="text-4xl font-bold my-3">
            3.What is express js? What is Nest JS?
          </h2>
          <p className="mt-4 font-medium text-xl">
            (a)Express.js is a minimalist and flexible web application framework
            for Node.js. It provides a simple and unopinionated approach to
            building web servers and APIs. It offers a straightforward API for
            defining routes, handling different HTTP methods and implementing
            middleware functions to process requests and responses.
          </p>
          <p className="mt-4 font-medium text-xl">
            (b)Express.js focuses on providing a robust set of features for
            routing, middleware, and handling HTTP requests and responses.
            Express.js allows developers to quickly create lightweight and
            efficient web applications, RESTful APIs, and single-page
            applications
          </p>
          <p className="mt-4 font-medium text-xl">
            (c)Nest JS is a progressive, TypeScript-based web application
            framework that builds upon the concepts and features of Express.js.
            It provides an opinionated structure and additional functionality
            for building scalable and maintainable server-side applications.
          </p>
          <p className="mt-4 font-medium text-xl">
            (d)Nest JS follows the architectural pattern of modules,
            controllers, and services, which promotes a modular and organized
            codebase. It supports the creation of RESTful APIs, real-time
            applications, microservices, and server-side rendering (SSR)
            applications.
          </p>
          <p className="mt-4 font-medium text-xl">
            (e)Nest JS offers features like dependency injection, decorators,
            and TypeScript decorators to enhance code reusability,
            maintainability, and testability.
          </p>
        </div>
        {/* 4th question */}
        <div className=" bg-[#F6F1F1] text-cyan-800 my-7 p-7 rounded">
          <h2 className="text-4xl font-bold my-3">
            4.What is MongoDB aggregate and how does it work?
          </h2>
          <p className="mt-4 font-medium text-xl">
            (a) In MongoDB, the aggregate method is used to perform advanced
            data aggregation operations on collections. It allows us to process
            and transform data within the database, combining multiple stages to
            perform complex data manipulations and analysis. The aggregate
            method takes an array of stages as input, where each stage
            represents a specific operation or transformation to be applied to
            the data.
          </p>
          <p className="mt-4 font-medium text-xl">
            (b)The aggregate method operates on a collection and processes data
            using a data pipeline. The data pipeline consists of an ordered
            sequence of stages, where each stage performs a specific operation
            on the data.
          </p>
          <p className="mt-4 font-medium text-xl">
            (c)Each stage in the pipeline performs a specific data
            transformation. This common stages are $match, $group,$peoject,
            $lookup,$limit, $skip. The data flows through the stages in the
            pipeline, with the output of each stage becoming the input for the
            next stage.
          </p>
          <p className="mt-4 font-medium text-xl">
            (d)Each stage operates on the documents received from the previous
            stage, applying its transformation or aggregation logic.
          </p>
          <p className="mt-4 font-medium text-xl">
            (e)The final stage in the pipeline returns the aggregated result,
            which can be a single document or an array of documents.
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
