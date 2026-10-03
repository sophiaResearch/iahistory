# NO modificar
import sys
import os
sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('..'))
sys.path.insert(0, os.path.abspath('custom_python_scripts'))

# importar temas para latex, tkz y css
from custom_python_scripts.styles_main import StylesProject
# -------------------------------------


project = 'Inteligencia Artificial: Fundamentos, Modelos y Práctica para el Mundo Real'
copyright = '2026, Semillero de Investigación SOPHIA - Corporación Universitaria Minuto de Dios. Licenciado bajo CC BY-NC 4.0'
author = 'Semillero de Investigación SOPHIA'

release = '0.1'

# -- General configuration ---------------------------------------------------

extensions = [
    'sphinx.ext.mathjax',
    'sphinx.ext.graphviz',
    'sphinxcontrib.tikz'
]

templates_path = ['_templates']
exclude_patterns = [
    '_build', 
    'Thumbs.db', 
    '.DS_Store', 
    '**/img'
]

language = 'es'

# -- Options for HTML output -------------------------------------------------

pygments_style = 'sphinx'
pygments_dark_style = 'sphinx'

html_theme = 'sphinx_book_theme'
html_theme_options = {
    "navbar_persistent": [],
}
html_context = {
    "default_mode": "light"
}


html_title = "Inteligencia Artificial: Fundamentos, Modelos y Práctica para el Mundo Real"
html_static_path = ['_static']


StylesProject.create_css_code() 
html_css_files = [
    'css/custom.css',
    'css/theme_vars.css'
]

html_js_files =[
    # Libreria para crear canvas (interaciones, animacion, etc..)
    'js/libs/p5@2.3.3.js',
    # 2. Configuración global de colores y tema para el libro
    'js/theme_config.js',
    'js/global_config.js',
]


# -- Configuración de LaTeX / MathJax / TikZ ----------------------------------


# Formato de salida para los gráficos TikZ (svg es ultra nítido en web)
tikz_tikzgraph_format = 'svg'
tikz_transparent = True
tikz_additional_files = [
    # --------------- CAPITULO 3 ------------
    'chapters/3_neurona/img/caja_negra/caja_negra.tex',
    'chapters/3_neurona/img/caja_negra_definida/caja_negra_definida.tex',
    'chapters/3_neurona/img/caja_con_capas/caja_con_capas.tex',
    'chapters/3_neurona/img/caja_negra_final/caja_negra_final.tex',
    'chapters/3_neurona/img/zoom_capa/zoom_capa.tex',
]


tikz_latex_preamble = rf"""
\usepackage{{xcolor}}
\usepackage{{tikz}}
\usepackage{{pagecolor}}
\usepackage{{pgfplots}}
\usetikzlibrary{{arrows.meta}}
\pgfplotsset{{compat=1.18}}


% Desactiva el fondo del lienzo en LaTeX
\nopagecolor
{StylesProject.create_latex_code()}
"""
