import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
THEME_JSON = BASE_DIR / "theme.json"


def create_css_theme():
    with open(THEME_JSON, "r", encoding="utf-8") as f:
        theme_data = json.load(f)

    # 1. GENERAR CSS (_static/css/theme_vars.css)
    css_lines = []
    for mode in ["dark", "light"]:
        css_lines.append(f'html[data-theme="{mode}"] {{')
        for key, hex_val in theme_data[mode].items():
            css_var_name = key.replace("_", "-")
            css_lines.append(f"  --pst-color-{css_var_name}: {hex_val};")
        css_lines.append("}\n")

    new_content = "\n".join(css_lines)
    css_out = BASE_DIR / "_static" / "css" / "theme_vars.css"

    # Se escribe en disco solo si el contenido ha cambiado
    if not css_out.exists() or css_out.read_text(encoding="utf-8") != new_content:
        css_out.parent.mkdir(parents=True, exist_ok=True)
        css_out.write_text(new_content, encoding="utf-8")


def create_latex_theme():
    with open(THEME_JSON, "r", encoding="utf-8") as f:
        theme_data = json.load(f)
  
    light = theme_data["light"]
    dark = theme_data["dark"]

    latex_code = rf"""% GENERADO AUTOMÁTICAMENTE DESDE theme.json - NO EDITAR DIRECTAMENTE
\definecolor{{GrisPizarraClaro}}{{HTML}}{{{light['background'].lstrip('#')}}}
\definecolor{{BlancoSuperficie}}{{HTML}}{{{light['surface'].lstrip('#')}}}
\definecolor{{GrisCarbon}}{{HTML}}{{{light['text'].lstrip('#')}}}
\definecolor{{GrisMedio}}{{HTML}}{{{light['text_muted'].lstrip('#')}}}
\definecolor{{Violeta}}{{HTML}}{{{light['primary'].lstrip('#')}}}
\definecolor{{CyanProfundo}}{{HTML}}{{{light['secondary'].lstrip('#')}}}
\definecolor{{RosaCoral}}{{HTML}}{{{light['inline_code'].lstrip('#')}}}
\definecolor{{GrisBorde}}{{HTML}}{{{light['border'].lstrip('#')}}}

\definecolor{{GrisPizarraOscuro}}{{HTML}}{{{dark['background'].lstrip('#')}}}
\definecolor{{GrisSuperficieOscuro}}{{HTML}}{{{dark['surface'].lstrip('#')}}}
\definecolor{{GrisClaro}}{{HTML}}{{{dark['text'].lstrip('#')}}}
\definecolor{{GrisNeutroMuted}}{{HTML}}{{{dark['text_muted'].lstrip('#')}}}
\definecolor{{Lavanda}}{{HTML}}{{{dark['primary'].lstrip('#')}}}
\definecolor{{CyanClaro}}{{HTML}}{{{dark['secondary'].lstrip('#')}}}
\definecolor{{RosaSuave}}{{HTML}}{{{dark['inline_code'].lstrip('#')}}}
\definecolor{{GrisBordeOscuro}}{{HTML}}{{{dark['border'].lstrip('#')}}}

\newcommand{{\activarPaletaOscura}}{{%
  \colorlet{{colorFondo}}{{GrisPizarraOscuro}}%
  \colorlet{{colorSuperficie}}{{GrisSuperficieOscuro}}%
  \colorlet{{colorTexto}}{{GrisClaro}}%
  \colorlet{{colorTextoMuted}}{{GrisNeutroMuted}}%
  \colorlet{{colorPrimario}}{{Lavanda}}%
  \colorlet{{colorEntrada}}{{CyanClaro}}%
  \colorlet{{colorSalida}}{{RosaSuave}}%
  \colorlet{{colorEjes}}{{GrisBordeOscuro}}%
}}

\newcommand{{\activarPaletaClara}}{{%
  \colorlet{{colorFondo}}{{GrisPizarraClaro}}%
  \colorlet{{colorSuperficie}}{{BlancoSuperficie}}%
  \colorlet{{colorTexto}}{{GrisCarbon}}%
  \colorlet{{colorTextoMuted}}{{GrisMedio}}%
  \colorlet{{colorPrimario}}{{Violeta}}%
  \colorlet{{colorEntrada}}{{CyanProfundo}}%
  \colorlet{{colorSalida}}{{RosaCoral}}%
  \colorlet{{colorEjes}}{{GrisBorde}}%
}}
"""
    return latex_code

