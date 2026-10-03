from typing import List

from theme_builder import create_latex_theme,create_css_theme
from latex_tkz_styles import latex_tkz_style

class StylesProject:
    __styles_list: List = [
        create_latex_theme(),
        latex_tkz_style        
    ]

    @classmethod
    def create_latex_code(cls) -> str:
        styles_out = ""
        for style in cls.__styles_list:
            styles_out += style
            styles_out += "\n"

        return styles_out

    @classmethod
    def create_css_code(cls) -> None:
        create_css_theme()
