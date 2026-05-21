#!/bin/bash

PORT=8000
LOG_FILE="python_server.log"

while [[ $# -gt 0 ]]; do
    case "$1" in
        -p|-PORT|--port)
            PORT="$2"; shift 2 ;;
        *)
            echo " Flag necunoscut: $1"; exit 1 ;;
    esac
done

echo "Server port $PORT..."
python3 -m http.server "$PORT" > "$LOG_FILE" 2>&1 &
SERVER_PID=$!

echo "Serverul  PID: $SERVER_PID."
echo "Poti rula mkdir, mv, cat etc."
echo "------------------------------------------------------------------------"

echo "STOP PY SERV: kill $SERVER_PID"
echo "READ LOG: tail -f $LOG_FILE"
echo "------------------------------------------------------------------------"

disown $SERVER_PID