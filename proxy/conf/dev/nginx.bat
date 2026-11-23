:: 폴더에 logs/, temp/ 폴더 생성 후 실행

cd %~dp0
nginx.exe -p %~dp0 -c ./nginx.conf
