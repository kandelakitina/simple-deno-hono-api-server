# Simple Deno Hono API Server
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/kandelakitina/simple-deno-hono-api-server)

This repository contains a simple REST API server built with Deno and the Hono web framework. It provides basic CRUD (Create, Read, Update, Delete) operations for managing a collection of "trees", using the Web `localStorage` API for data storage.

The project is configured with a reproducible development environment using Nix and Flakes.

## Tech Stack

*   **Runtime**: [Deno](https://deno.com/)
*   **Web Framework**: [Hono](https://hono.dev/)
*   **Environment Management**: [Nix](https://nixos.org/)
*   **Command Runner**: [Just](https://just.systems/)

## Getting Started

### Prerequisites

You must have [Nix installed](https://nixos.org/download.html) with Flake support enabled on your system.

### Installation & Setup

1.  Clone the repository:
    ```sh
    git clone https://github.com/kandelakitina/simple-deno-hono-api-server.git
    cd simple-deno-hono-api-server
    ```

2.  Enter the development environment using the Nix flake. This will install Deno and Just, making them available in your shell session.
    ```sh
    nix develop
    ```

### Running the Server

Start the development server with hot-reloading using either Just or Deno tasks:

Using Just:
```sh
just dev
```

Or using Deno's task runner:
```sh
deno task dev
```

The server will start, typically on `http://localhost:8000`.

## API Endpoints

The API provides the following endpoints to manage tree data.

### `GET /`

Returns a simple welcome message.

*   **Response (200 OK)**:
    ```
    Hello from the Trees
    ```

### `GET /trees/:id`

Retrieves a single tree by its ID.

*   **Parameters**:
    *   `id` (string): The unique identifier of the tree.
*   **Response (200 OK)**:
    ```json
    {
      "id": "3",
      "species": "oak",
      "age": 3,
      "location": "Jim's Park"
    }
    ```
*   **Response (404 Not Found)**:
    ```json
    {
      "message": "Tree not found"
    }
    ```

### `POST /trees`

Creates a new tree.

*   **Request Body**:
    ```json
    {
      "id": "4",
      "species": "pine",
      "age": 10,
      "location": "The Forest"
    }
    ```
*   **Response (200 OK)**:
    ```json
    {
      "message": "We just added a pine tree!"
    }
    ```

### `PUT /trees/:id`

Updates an existing tree's information.

*   **Parameters**:
    *   `id` (string): The unique identifier of the tree to update.
*   **Request Body**:
    ```json
    {
      "species": "Ancient Oak",
      "age": 500,
      "location": "Historic Village"
    }
    ```
*   **Response (200 OK)**:
    ```json
    {
      "message": "Tree has relocated to Historic Village!"
    }
    ```

### `DELETE /trees/:id`

Deletes a tree by its ID.

*   **Parameters**:
    *   `id` (string): The unique identifier of the tree to delete.
*   **Response (200 OK)**:
    ```json
    {
      "message": "Tree 3 has been cut down!"
    }