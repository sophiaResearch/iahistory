import subprocess
import os
import shutil

def convertir_tex_a_rst(archivo_tex, archivo_rst):
    subprocess.run([
        "pandoc", archivo_tex, "-f", "latex", "-t", "rst", "-o", archivo_rst
    ])

def mover_imagenes(origenes, destino, subcarpeta="figures"):
    destino_final = os.path.join(destino, subcarpeta)
    if not os.path.exists(destino_final):
        os.makedirs(destino_final)
    moved_files = []
    for origen in origenes:
        if os.path.exists(origen):
            for archivo in os.listdir(origen):
                if archivo.lower().endswith((".png", ".jpg", ".jpeg")):
                    origen_path = os.path.join(origen, archivo)
                    destino_path = os.path.join(destino_final, archivo)
                    if not os.path.exists(destino_path):
                        shutil.copy(origen_path, destino_path)
                    moved_files.append((archivo, subcarpeta))
    return moved_files

def actualizar_rst(rst_file, moved_files):
    with open(rst_file, "r", encoding="utf-8") as f:
        contenido = f.read()
    for archivo, subcarpeta in moved_files:
        contenido = contenido.replace(archivo, f"_static/{subcarpeta}/{archivo}")
    with open(rst_file, "w", encoding="utf-8") as f:
        f.write(contenido)

if __name__ == "__main__":
    archivo_tex = r"D:\Semillero Sophia\source\latex\VinosProyectoReducido\investigacion.tex"
    archivo_rst = r"D:\Semillero Sophia\source\investigacion.rst"

    convertir_tex_a_rst(archivo_tex, archivo_rst)

    carpetas_origen = [
        r"D:\Semillero Sophia\source\latex\VinosProyectoReducido\investigacion_files",
        r"D:\Semillero Sophia\source\latex\VinosProyectoReducido\assets"
    ]
    moved_files = mover_imagenes(carpetas_origen, r"D:\Semillero Sophia\source\_static", "figures")

    actualizar_rst(archivo_rst, moved_files)

    print("Conversión terminada. Archivo guardado en:", archivo_rst)