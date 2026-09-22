@ECHO OFF
set -e

rem -------------------------------------------------------
rem AIBook-SOPHIA Windows Installer
rem -------------------------------------------------------

rem Check for Python
if not exist "%SystemRoot%\system32\python.exe" (
    echo Python is not installed.
    exit /b 1
)

rem Check for python3 specifically
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed.
    exit /b 1
)

rem Create virtual environment if it doesn't exist
if not exist venv\Scripts\activate (
    echo Creating virtual environment...
    python -m venv venv
)

call venv\Scripts\activate

echo Updating pip...
pip install --upgrade pip >nul
echo Installing dependencies...
pip install -r requirements.txt
echo Installed successfully.