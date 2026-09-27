#!/bin/bash
set -e
source ./venv/bin/activate
# 1. Definimos la función de limpieza directamente en Bash
limpiar_tikz() {
    # Obtener la ruta limpia del .tex modificado en Git
    TEX_MODIFICADO=$(git status --porcelain | grep "\.tex$" | head -n 1 | awk '{print $2}')
    echo "Modificado: $TEX_MODIFICADO"

    if [ -n "$TEX_MODIFICADO" ] && [ -f "$TEX_MODIFICADO" ]; then
        # Obtener la fecha ISO del ultimo commit del .tex
        FECHA_COMMIT=$(git log -1 --format="%ad" --date=iso -- "$TEX_MODIFICADO" 2>/dev/null)

        # Borrar SVGs generados DESPUES de la fecha previa del commit
        if [ -n "$FECHA_COMMIT" ]; then
            find build/html/_images -name "tikz-*.svg" \( -newermt "$FECHA_COMMIT" -o -mtime +30 \) -delete 2>/dev/null || true
        else
            find build/html/_images -name "tikz-*.svg" -delete 2>/dev/null || true
        fi

        # Eliminar el doctree del capitulo especifico para invalidar el HTML en cache
        DIR_DOCTREE=$(echo "$TEX_MODIFICADO" | sed -E 's|(source/chapters/[^/]+).*|\1|' | sed 's|source/|build/doctrees/|')
        if [ -d "$DIR_DOCTREE" ]; then
            rm -rf "$DIR_DOCTREE"
        fi
    fi
}

# Exportamos la función para que sub-shells creados por sphinx-autobuild la puedan ejecutar
export -f limpiar_tikz

echo -e "\n\t============================================="
echo -e "\tEJECUTANDO EN MODO DESARROLLO"
echo -e "\t=============================================\n"
sphinx-autobuild source build/html \
  --fresh-env \
  --host 0.0.0.0 \
  --port 8000 \
  --pre-build "bash -c 'limpiar_tikz'" \
  --watch source \
  --ignore "build/*" \
  --ignore "*.log" \
  --ignore "*.fdb_latexmk" \
  --ignore "*.fls" \
  --ignore "*.aux"

