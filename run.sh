#!/bin/bash
set -e
source ./venv/bin/activate
make html
echo -e "\n\t============================================="
echo -e "\tEJECUTANDO EN MODO DESARROLLO"
echo -e "\t=============================================\n"
sphinx-autobuild source build/html --fresh-env --pre-build "find build/html/_images -name 'tikz*' -delete"
