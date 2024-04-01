# Flextable

FlexTable is a lightweight, flexible table component designed for React applications. It simplifies the process of displaying tabular data with customizable features and responsive design. Whether you're dealing with simple or complex datasets, FlexTable provides an intuitive API to display data efficiently.

## Features

- **Customizable Columns:** Define your table columns with ease, including headers, sorting, and rendering functions.
- **Responsive Design:** Adapts to various screen sizes for optimal viewing on any device.
- **Sorting & Filtering:** Built-in sorting and filtering capabilities to manage your data effectively.
- **Easy Integration:** Seamlessly integrates with your React projects, supporting both functional and class components.
- **Performance Optimized:** Designed with performance in mind to handle large datasets without compromising speed.

## Installation

Install FlexTable using npm:

```bash
npm install @nouget/flextable
```

Or using yarn:

```bash
yarn add @nouget/flextable
```

## Quick Start

Here's how to quickly get started with FlexTable in your React application:

- Add the basic styles to your project:

  In your main file (e.g., `index.tsx`), add the following import:

  ```typescript
  import "@nouget/flextable/dist/assets/style.css";
  ```

- Import FlexTable in your component:

  ```typescript
  import { FlexTable } from "@nouget/flextable";
  ```

- Define your columns and data:

  ```typescript
  const columns = [
    { header: "Name", key: "name" },
    { header: "Age", key: "age" },
    // Add more columns as needed
  ];

  const data = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    // Add more data as needed
  ];
  ```

- Render the FlexTable component:

  ```typescript
  <FlexTable columns={columns} data={data} />
  ```

## Documentation

For a more detailed guide on FlexTable's API, including how to customize columns, implement sorting and filtering, and more, check out our documentation.

## Examples

Explore our examples to see FlexTable in action, showcasing various use cases and customization options.

## Contributing

We welcome contributions to FlexTable! If you're interested in helping improve the project, check out our contributing guidelines.

## License

FlexTable is open-sourced software licensed under the MIT license.

## Support

If you have any questions or issues, please open an issue on our GitHub repository, and we'll do our best to assist you.
