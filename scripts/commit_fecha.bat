@echo off
set FECHA=%date:~10,4%-%date:~4,2%-%date:~7,2%
git add .
git commit -m "Actualización automática - %FECHA%"
git push
