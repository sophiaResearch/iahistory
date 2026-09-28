===================================================
Los datos también se pueden dibujar como puntos
===================================================

De una observación a sus características
-----------------------------------------

Imagina que queremos estudiar si las horas dedicadas a practicar se
relacionan con el resultado de una evaluación. Cada estudiante es una
**observación**: un caso que registramos. Para describirlo, seleccionamos
características que podamos medir, por ejemplo, las horas de práctica y
el puntaje obtenido.

Una característica es una propiedad representada por un valor. En la
tabla, las dos primeras columnas son características; la última es la
etiqueta que queremos observar o predecir.

.. list-table:: Datos hipotéticos de seis estudiantes
   :header-rows: 1
   :widths: 20 25 25 30

   * - Observación
     - Horas de práctica
     - Puntaje
     - Resultado
   * - A
     - 1
     - 42
     - No aprobó
   * - B
     - 2
     - 51
     - No aprobó
   * - C
     - 3
     - 63
     - Aprobó
   * - D
     - 4
     - 68
     - Aprobó
   * - E
     - 2
     - 58
     - Aprobó
   * - F
     - 1
     - 49
     - No aprobó

Estos valores son un ejemplo inventado para aprender a representar
datos; no demuestran que practicar más cause por sí solo un mejor
resultado. Para estudiar una situación real harían falta más datos y
considerar otros factores.

El plano cartesiano como mapa
----------------------------

Si elegimos dos características, podemos usar una como eje horizontal y
la otra como eje vertical. Cada observación se convierte entonces en un
punto. Para el estudiante C, las coordenadas son :math:`(3, 63)`: tres
horas de práctica y un puntaje de 63.

En general, escribiremos las características de una observación como el
vector de entrada :math:`x`. En este ejemplo:

.. math::

   x = (x_1, x_2) = (\text{horas de práctica}, \text{puntaje})

La etiqueta asociada, por ejemplo «aprobó» o «no aprobó», es información
distinta de las coordenadas. Podemos representarla con :math:`y`. Así,
el registro del estudiante C se puede escribir como
:math:`x = (3, 63)` y :math:`y = \text{aprobó}`.

Al dibujar todos los registros, los puntos con la misma etiqueta podrían
formar grupos. Una futura regla podría usar la posición de un punto para
proponer una categoría. En el próximo capítulo estudiaremos cómo una
neurona combina los valores de entrada para construir una regla de ese
tipo.

Una representación no es el objeto completo
-------------------------------------------

El vector :math:`x = (3, 63)` solo conserva las dos características que
decidimos registrar. No nos dice, por ejemplo, si el estudiante durmió
bien, qué temas estudió o si tuvo interrupciones. Los datos son una
representación parcial del mundo, y elegir características relevantes
es parte importante de plantear un problema de IA.

Además, las escalas de los ejes pueden ser diferentes: las horas están
entre valores pequeños y los puntajes entre 0 y 100. Por eso, al leer un
gráfico hay que mirar qué representa cada eje y cuáles son sus unidades.
Más adelante veremos cuándo las diferencias de escala afectan los
cálculos de un modelo.

Laboratorio: registrar puntos con Python
----------------------------------------

Podemos guardar cada observación como un par de características y su
etiqueta. El siguiente programa usa únicamente estructuras básicas de
Python; no entrena todavía un modelo.

.. code-block:: python

   datos = [
       ((1, 42), "no aprobo"),
       ((2, 51), "no aprobo"),
       ((3, 63), "aprobo"),
       ((4, 68), "aprobo"),
       ((2, 58), "aprobo"),
       ((1, 49), "no aprobo"),
   ]

   for caracteristicas, etiqueta in datos:
       horas, puntaje = caracteristicas
       print(f"Punto ({horas}, {puntaje}) -> {etiqueta}")

Al ejecutarlo, cada línea muestra el punto que podríamos ubicar en el
plano y la etiqueta que acompaña a esa observación. Cambia uno de los
registros y observa cómo cambia su representación.

Preguntas de repaso
-------------------

1. En la tabla, ¿cuáles son las características y cuál es la etiqueta?
2. ¿Qué punto representa a la observación D?
3. ¿Qué información sobre una persona no aparece en el vector de dos
   características del ejemplo?
4. ¿Por qué estos datos hipotéticos no bastan para concluir que las
   horas de práctica causan un mejor resultado?
5. Modifica un registro del programa y explica qué coordenada cambió.