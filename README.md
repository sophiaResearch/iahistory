# AIBook-SOPHIA Documentation

## Prerequisites

- Docker and Docker Compose installed

## Usage with Docker Compose

This project uses Docker Compose to provide a consistent development environment and to build the documentation.

### 1. Start the Development Server (Live Preview)

To run the documentation server with live reloading:

```bash
docker-compose up
```

This command will:
*   Build the Docker image (if not already built).
*   Start a container with `sphinx-autobuild` running inside.
*   Mount the `source/` directory from your host machine into the container, so any changes you make to the reStructuredText files will automatically trigger a rebuild and refresh in your browser.
*   Mount the `build/` directory, making the generated HTML available on your host.
*   The documentation will be accessible at `http://localhost:8000`.

To stop the server, press `Ctrl+C` in your terminal.

### 2. Build Static HTML Documentation

To build the static HTML documentation without starting the live server:

```bash
docker-compose run --rm docs make html
```

This command will:
*   Build the documentation inside a temporary container.
*   Place the generated HTML files in the `build/html` directory on your host machine.

### 3. Clean Build Artifacts

To remove the generated `build/` directory:

```bash
docker-compose run --rm docs make clean
```

## Project Structure

- `source/` - Sphinx source files (`.rst`, `.py`, configs)
- `build/` - Generated HTML output
- `Dockerfile` - Docker configuration for the documentation environment.
- `docker-compose.yml` - Docker Compose configuration for local development.

## Licencia

Este proyecto y el contenido del libro están bajo la licencia [Creative Commons Attribution-NonCommercial 4.0 International](LICENSE).
