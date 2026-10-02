from typing import List

from latex_theme import latex_themes
from latex_tkz_styles import latex_tkz_style

class LatexStyles:
    __styles_list: List = [
        latex_themes,
        latex_tkz_style        
    ]

    @classmethod
    def create_styles(cls) -> str:
        styles_out = ""
        for style in cls.__styles_list:
            styles_out += style
            styles_out += "\n"

        return styles_out
