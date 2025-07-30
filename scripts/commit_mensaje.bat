@echo off
if "%~1"=="" (
    echo Por favor proporciona un mensaje para el commit.
    echo Uso: commit_mensaje.bat "Mi mensaje"
    exit /b 1
)
git add .
git commit -m "%~1"
git push
