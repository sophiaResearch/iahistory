latex_themes = r"""
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

