#!/bin/bash
set -e
git config --global --add safe.directory /app 2>/dev/null || true
source ./venv/bin/activate
# 1. Definimos la función de limpieza directamente en Bash
limpiar_tikz() {
    git config --global --add safe.directory /app 2>/dev/null || true

    # 1. Buscar si se modificó algún archivo .rst o .tex (incluye unstaged y untracked)
    CAMBIO_DETECTADO=$(git status --porcelain | grep -E '\.(rst|tex)$' | head -n 1 | sed -E 's/^..[[:space:]]*//')

    if [ -n "$CAMBIO_DETECTADO" ]; then
        echo -e "\n[TikZ-Cleaner] Cambio detectado en: $CAMBIO_DETECTADO"
        
        # 2. Borrar las imágenes SVG de TikZ acumuladas para forzar a Sphinx a recompilar
        if [ -d "build/html/_images" ]; then
            echo "[TikZ-Cleaner] Borrando imágenes TikZ en build/html/_images..."
            find build/html/_images -name "tikz-*.svg" -delete 2>/dev/null || true
        fi

        # 3. Borrar el caché de doctrees si se modificó un archivo en source/chapters
        DIR_DOCTREE=$(echo "$CAMBIO_DETECTADO" | sed -E 's|(source/chapters/[^/]+).*|\1|' | sed 's|source/|build/doctrees/|')
        if [ -d "$DIR_DOCTREE" ]; then
            echo "[TikZ-Cleaner] Invalidando caché en: $DIR_DOCTREE"
            rm -rf "$DIR_DOCTREE"
        fi
    else
        echo "[TikZ-Cleaner] No hay cambios recientes en archivos .rst o .tex."
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

