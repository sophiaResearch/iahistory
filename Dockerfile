FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Instalar dependencias del sistema:
# - texlive-latex-extra, texlive-pictures, dvisvgm, pdf2svg, poppler-utils: Para compilar diagramas TikZ a SVG/PNG
# - git: Para la lógica de Git dentro del script de desarrollo
# - make: Soporte para comandos Makefile estándar de Sphinx
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    make \
    texlive-latex-base \
    texlive-latex-extra \
    texlive-pictures \
    dvisvgm \
    pdf2svg \
    poppler-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar e instalar requerimientos primero para aprovechar la caché de capas de Docker
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
RUN chmod +x run.sh
EXPOSE 8000
CMD ["./run.sh"]
