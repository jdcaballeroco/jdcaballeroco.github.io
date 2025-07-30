@echo off
set FECHA=%date:~10,4%-%date:~4,2%-%date:~7,2%
git add .
git commit -m "Actualizacion automatica - %FECHA%"
git push
