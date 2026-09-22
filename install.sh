#!/bin/bash
set -e

ROJO='\e[31m'
VERDE='\e[32m'
RESET='\e[0m'


if ! type -p python3 &> /dev/null; then
  echo -e "${ROJO}PYTHON NO ESTA INSTALADO ${RESET}"
  exit 0
fi

if [ ! -f "./venv/bin/activate" ]; then
  echo -e "${VERDE}CREANDO ENTORNO VIRTUAL${RESET}"
  python3 -m venv venv
fi

source ./venv/bin/activate

echo -e "${VERDE}\tACTUALIZANDO PIP${RESET}"
pip install --upgrade pip
echo -e "${VERDE}\tINSTALANDO DEPENDENCIAS${RESET}"
pip install -r requirements.txt
echo -e "${VERDE}INSTALADO CORRECTAMENTE${RESET}"
