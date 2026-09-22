# AIBook-SOPHIA Documentation

## Prerequisites

- Python 3.8+ installed
- `pip` package manager

## Installation

### Linux / macOS

```bash
chmod +x install.sh
./install.sh
```

The script will:
1. Check for Python 3
2. Create a virtual environment (if not exists)
3. Upgrade pip
4. Install dependencies from `requirements.txt`

### Windows

```cmd
install.bat
```

The script will:
1. Check for Python
2. Create a virtual environment (if not exists) using `venv\Scripts`
3. Upgrade pip
4. Install dependencies from `requirements.txt`

## Building the Documentation

### Linux / macOS

```bash
./run.sh
```

Or manually:

```bash
source ./venv/bin/activate
make html
```

### Windows

```cmd
run.bat
```

Or manually:

```cmd
venv\Scripts\activate.bat
sphinx-build source build
```

## Auto-Rebuild Server (Live Preview)

Watches for changes and rebuilds automatically:

### Linux / macOS

```bash
./run.sh
```

This starts `sphinx-autobuild` which watches `source/` and rebuilds on change, serving at `http://localhost:8000`.

### Windows

```cmd
run.bat
```

The `run.bat` script activates the venv and starts `sphinx-autobuild source build/html`, serving at `http://localhost:8000`.

## Project Structure

- `source/` - Sphinx source files (`.rst`, `.py`, configs)
- `build/` - Generated HTML output
- `Makefile` - Minimal Makefile for Sphinx builds
- `make.bat` - Windows equivalent of Makefile
- `requirements.txt` - Python dependencies

## Licencia

Este proyecto y el contenido del libro están bajo la licencia [Creative Commons Attribution-NonCommercial 4.0 International](LICENSE).
