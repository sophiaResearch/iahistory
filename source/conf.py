# -- Project information -----------------------------------------------------

project = 'Semillero Sophia'
copyright = '2026, UNIMINUTO'
author = 'CarlosMahecha'
release = '1.0'

# -- General configuration ---------------------------------------------------

extensions = [
    "sphinx_design",
]

templates_path = ['_templates']
exclude_patterns = []

language = 'es'

# -- HTML output -------------------------------------------------------------

html_theme = "sphinx_rtd_theme"


html_baseurl = '/semillero-sophia-docs/'

html_title = "Documentación"
html_favicon = "_static/img/logoSophia.png"
html_logo = None

html_theme_options = {
    'collapse_navigation': False,
    'navigation_depth': 4,
}

# Archivos estáticos
html_static_path = ['_static']

# CSS personalizado (opcional)
html_css_files = [
    'custom.css',
]

html_js_files = [
    'js/particles.min.js',
    'js/particles-config.js',
]
# html_extra_path = []

# Opcional (mejora compatibilidad)
html_context = {
    "display_github": True,
}