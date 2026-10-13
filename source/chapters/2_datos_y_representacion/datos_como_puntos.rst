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

En términos más generales, una observación es la unidad que queremos
analizar. Una característica es un atributo medible de esa unidad. La
etiqueta es la respuesta que queremos aprender o predecir. En muchos
problemas reales, el objetivo no es describir el mundo completo, sino
capturar lo suficiente para tomar decisiones útiles. Por eso, elegir las
características correctas es una parte fundamental del diseño de un
sistema de IA.

Cómo escoger una buena representación
--------------------------------------

No toda información es igualmente útil. Si queremos predecir si un
estudiante aprueba un examen, puede importar la cantidad de horas que
practica, pero no necesariamente el color de su mochila ni el nombre que
tiene. Una buena representación debe conservar lo que ayuda a separar
los casos relevantes y dejar de lado detalles irrelevantes.

A veces la elección de variables es casi una decisión de modelado. Por
ejemplo, si deseamos clasificar imágenes de gatos y perros, usar el valor
numérico de cada píxel puede ser suficiente; si estudiamos ventas de un
negocio, quizá interesen la ubicación, la temporada y el precio; si
queremos detectar fraude, quizá se consideren fechas, montos y patrones
anteriores. En cada caso, las características se seleccionan según el
problema.

La misma situación puede describirse de maneras distintas. Un estudiante
puede quedar representado solo por su puntaje, por su puntaje y sus horas
de estudio, o por un conjunto más amplio de variables como sueño,
participación, dificultad del curso y rendimiento previo. Cuantas más
características consideremos, más compleja será la representación, pero
también más rica en información. El desafío es equilibrar la simplicidad
con la capacidad de capturar patrones útiles.

Esto explica por qué la forma en que representamos los datos no es un
detalle menor: la representación define el tipo de relación que un
modelo podrá detectar. Si se eligieron variables equivocadas, incluso un
algoritmo muy potente puede terminar aprendiendo patrones frágiles o
irrelevantes.

El plano cartesiano como mapa
-----------------------------

Si elegimos dos características, podemos usar una como eje horizontal y
la otra como eje vertical. Cada observación se convierte entonces en un
punto. Para el estudiante C, las coordenadas son :math:`(3, 63)`: tres
horas de práctica y un puntaje de 63.

La figura siguiente resume esta idea: cada estudiante aparece como un
punto en un plano, y los resultados “aprobó” y “no aprobó” se marcan
con colores distintos.

.. container:: only-light

   .. tikz:: Representación de los datos como puntos en el plano
      :align: center

      \activarPaletaClara
      \input{puntos_plano.tex}


.. container:: only-dark

   .. tikz:: Representación de los datos como puntos en el plano
      :align: center

      \activarPaletaOscura
      \input{puntos_plano.tex}

En general, escribiremos las características de una observación como el
vector de entrada :math:`x`. En este ejemplo:

.. math::

   {\huge x = (x_1, x_2) = (\text{horas de práctica}, \text{puntaje})}

La etiqueta asociada, por ejemplo «aprobó» o «no aprobó», es información
distinta de las coordenadas. Podemos representarla con :math:`y`. Así,
el registro del estudiante C se puede escribir como
:math:`x = (3, 63)` y :math:`y = \text{aprobó}`.

El plano cartesiano convierte a cada observación en un lugar concreto.
Si representamos varios estudiantes, los puntos pueden agruparse según la
etiqueta. Quizá los que aprobaron se ubican más a la derecha o más
arriba que los que no aprobaron. Esa estructura visual es lo que un
algoritmo intenta descubrir: relaciones entre valores y clases.

Sin embargo, incluso cuando los puntos parecen separarse, cada eje debe
interpretarse con cuidado. Un valor alto en un eje no implica
necesariamente causalidad directa. Un punto puede estar arriba o a la
derecha por varias razones, no por una sola. La geometría del gráfico
ayuda a ver patrones, pero no sustituye el análisis del contexto.

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

También hay que reconocer que una representación puede ocultar detalles
importantes. Si solo registramos horas de práctica y puntaje, perdemos
información sobre la motivación, el apoyo familiar, la salud o el nivel
de dificultad del curso. Esto no significa que la representación sea
incorrecta: simplemente es una simplificación útil para el problema que
queremos resolver. La clave es reconocer qué se está ignorando.

Un punto es una decisión de diseño. Cuando elegimos qué medir, estamos
decidiendo qué parte del mundo importa para el modelo. Esa decisión puede
hacer que el sistema funcione bien o que se confunda con señales
insuficientes o sesgadas.

Patrones, clusters y la idea de separar clases
-----------------------------------------------

Cuando se recopilan muchas observaciones, los puntos dejan de verse como
casos aislados y comienzan a formar patrones. Si la mayoría de los
estudiantes que aprobaron tienen puntajes altos y muchas horas de
práctica, sus puntos pueden aparecer agrupados en una región del plano.
Los que no aprobaron pueden quedarse en otra zona.

Ese tipo de agrupamiento es muy importante: a menudo la tarea de una IA
consiste en encontrar una regla que separe estas regiones. Aunque no
sabemos de antemano cuál es la mejor frontera, el conjunto de puntos
ofrece una pista. Un modelo intenta aproximar esa frontera a partir de
los datos observados.

En otras palabras, los datos no son solo una lista de valores; son la
huella de un fenómeno. El plano transforma esos valores en una forma que
permite ver relaciones, proximidades y diferencias entre casos. Esa
intuición es central para luego entender cómo una neurona aprende a
separar categorías.

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

Si quisieras explorar más, podrías agregar nuevas observaciones con
valores diferentes y verificar cómo cambian los grupos. Incluso un solo
registro nuevo puede modificar la percepción global del conjunto.

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
