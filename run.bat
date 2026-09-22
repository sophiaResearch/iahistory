@ECHO OFF
set -e

pushd %~dp0

rem Activate virtual environment
call venv\Scripts\activate.bat

rem Build with Sphinx
sphinx-autobuild source build/html

popd