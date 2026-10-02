# Este archivo contiene todos los estilos globales
# para las imagenes/diagramas hecho en latex

latex_tkz_style = r"""

\tikzset{
    % Estilo red neuronal
    nodo red_neuronal/.style={
        rectangle,
        rounded corners,
        draw=colorEjes,
        color=colorTexto,
        very thick
    },
    % Estilo Capa 
    nodo capa/.style={
        rectangle,
        rounded corners,
        draw=colorPrimario, % Color del borde
        fill=colorPrimario, % Color del relleno (fondo)
        text=colorFondo,    % Color de la letra
        very thick
    }
}

"""
