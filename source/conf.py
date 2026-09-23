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
]

# Preámbulo de TikZ con la paleta "Deep Tech" y estilos centralizados
tikz_latex_preamble = r"""
\usepackage{xcolor}
\usepackage{tikz}
\usepackage{pagecolor}
\usepackage{pgfplots}
\usetikzlibrary{arrows.meta}
\pgfplotsset{compat=1.18}


% Desactiva el fondo del lienzo en LaTeX
\nopagecolor

% ==============================================================================
% PALETA MODO CLARO (LIGHT THEME)
% ==============================================================================
\definecolor{GrisPizarraClaro}{HTML}{E9ECEF} % Fondo mate general
\definecolor{BlancoSuperficie}{HTML}{F8FAFC} % Fondo de nodos / tarjetas
\definecolor{GrisCarbon}{HTML}{1E293B}        % Texto principal
\definecolor{GrisMedio}{HTML}{475569}         % Texto secundario / leyendas
\definecolor{Violeta}{HTML}{7C3AED}           % Elementos primarios / CTA
\definecolor{CyanProfundo}{HTML}{0891B2}      % Entradas / Acento 1
\definecolor{RosaCoral}{HTML}{E05670}         % Salidas / Errores / Acento 2
\definecolor{GrisBorde}{HTML}{CBD5E1}         % Ejes cartesianos y bordes

% ==============================================================================
% PALETA MODO OSCURO (DARK THEME)
% ==============================================================================
\definecolor{GrisPizarraOscuro}{HTML}{2C2C2C} % Fondo oscuro general
\definecolor{GrisSuperficieOscuro}{HTML}{383838} % Fondo de nodos / tarjetas
\definecolor{GrisClaro}{HTML}{E4E4E4}         % Texto principal
\definecolor{GrisNeutroMuted}{HTML}{A3A3A3}    % Texto secundario / leyendas
\definecolor{Lavanda}{HTML}{B39CD0}           % Elementos primarios / CTA
\definecolor{CyanClaro}{HTML}{A8DADC}         % Entradas / Acento 1
\definecolor{RosaSuave}{HTML}{FFC1CC}         % Salidas / Errores / Acento 2
\definecolor{GrisBordeOscuro}{HTML}{444444}   % Ejes cartesianos y bordes

% ==============================================================================
% COMANDOS PARA CAMBIAR TODAS LAS VARIABLES GLOBALES DE GOLPE
% ==============================================================================
\newcommand{\activarPaletaOscura}{%
  \colorlet{colorFondo}{GrisPizarraOscuro}%
  \colorlet{colorSuperficie}{GrisSuperficieOscuro}%
  \colorlet{colorTexto}{GrisClaro}%
  \colorlet{colorTextoMuted}{GrisNeutroMuted}%
  \colorlet{colorPrimario}{Lavanda}%
  \colorlet{colorEntrada}{CyanClaro}%
  \colorlet{colorSalida}{RosaSuave}%
  \colorlet{colorEjes}{GrisBordeOscuro}%
}

\newcommand{\activarPaletaClara}{%
  \colorlet{colorFondo}{GrisPizarraClaro}%
  \colorlet{colorSuperficie}{BlancoSuperficie}%
  \colorlet{colorTexto}{GrisCarbon}%
  \colorlet{colorTextoMuted}{GrisMedio}%
  \colorlet{colorPrimario}{Violeta}%
  \colorlet{colorEntrada}{CyanProfundo}%
  \colorlet{colorSalida}{RosaCoral}%
  \colorlet{colorEjes}{GrisBorde}%
}
"""

# Atajos de LaTeX y colores para ecuaciones MathJax en HTML
# mathjax3_config = {
#     'tex': {
#         'macros': {
#             'vx': r'\vec{x}',
#             'vw': r'\vec{w}',
#             'sigmoide': r'\sigma(z)',
#         }
#     }
# }

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
html_css_files = [
    'custom.css',
]

html_js_files =[
    # Libreria para crear canvas (interaciones, animacion, etc..)
    'https://cdn.jsdelivr.net/npm/p5@2.3.3/lib/p5.min.js',
    # 2. Configuración global de colores y tema para el libro
    'js/theme_config.js',
]

