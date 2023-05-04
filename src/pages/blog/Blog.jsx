const Blog = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">
        1. Tell us the differences between uncontrolled and controlled
        components?
      </h1>
      <p className="mb-4 text-xl font-semibold">
        Controlled components provide more control and flexibility over user
        input and application state, while uncontrolled components are simpler
        and easier to implement for basic form inputs. However, the choice
        between controlled and uncontrolled components ultimately depends on the
        specific needs of the application and the complexity of the user
        interface.
      </p>
      <h1 className="mb-4 text-2xl font-bold">
        2. How to validate React props using PropTypes?
      </h1>
      <p className="mb-4 text-xl font-semibold">
        PropTypes is a library in React that allows developers to specify the
        data types and shapes of props that a component should receive. It
        provides a way to validate that the props passed to a component match
        the expected data types and structures
      </p>
      <h1 className="mb-4 text-2xl font-bold">
        3. Tell us the difference between nodejs and express js.
      </h1>
      <p className="mb-4 text-xl font-semibold">
        Node.js is a server-side JavaScript runtime environment that allows
        developers to run JavaScript code outside of a web browser. On the other
        Hand Express.js, on the other hand, is a web application framework built
        on top of Node.js that simplifies the process of building web
        applications by providing a set of features and tools for routing,
        middleware, and template engines
      </p>
      <h1 className="mb-4 text-2xl font-bold">
        4. What is a custom hook, and why will you create a custom hook?
      </h1>
      <p className="mb-4 text-xl font-semibold">
        A custom hook is a function in React that allows developers to
        encapsulate and reuse logic in functional components. Custom hooks
        enable developers to create reusable code that can be shared across
        multiple components, reducing duplication and improving code
        organization. Thats why we should use custom hook
      </p>
    </div>
  );
};

export default Blog;
