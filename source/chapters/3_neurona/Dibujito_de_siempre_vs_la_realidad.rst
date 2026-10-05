===================================================
El "dibujito de siempre" vs. la realidad matemática
===================================================

Una vez comprendido el papel de las capas a nivel general, es momento de inspeccionar sus componentes internos. Para lograrlo, elijamos una de las capas intermedias y acerquémonos a examinar su estructura desde dentro.

.. container:: only-light

    .. tikz:: Zoom a la capa :math:`f^{(3)}`
       :align: center

       \activarPaletaClara
       \input{zoom_capa.tex}


.. container:: only-dark

    .. tikz:: Zoom a la capa :math:`f^{(3)}`
       :align: center

       \activarPaletaOscura
       \input{zoom_capa.tex}

Tomemos como ejemplo la tercera capa, :math:`f^{(3)}`, la cual recibe como entrada la salida de la capa anterior, :math:`f^{(2)}`, y transfiere su propio resultado a la capa siguiente, :math:`f^{(4)}`, tal como ilustra nuestro esquema.

Con esta imagen en mente, abrimos paso a nuestro segundo bloque fundamental: la famosa **neurona artificial**. 

Históricamente, la forma habitual de presentar la neurona artificial ha sido comparándola con una neurona biológica: se habla de dendritas que reciben señales, un soma que las procesa y un axón que transmite el impulso eléctrico. El problema de esta metáfora es que, a menos que tengas formación en biología, no ayuda a entender qué hace realmente el algoritmo en una computadora. Peor aún, hace parecer que la inteligencia artificial es un misterio biológico cuando, en realidad, es una estructura matemática elegante y accesible.

Para nosotros, una **neurona artificial** es simplemente una máquina de decisiones binarias. Su trabajo consiste en recibir un conjunto de datos de entrada y, tras evaluar su importancia, entregar una respuesta categórica: **SÍ** o **NO**.

.. note::
 
   Aun cuando afirmamos que el resultado es un **SÍ** o un **NO**, cabe precisar que en la práctica la salida puede representar un grado de certeza o probabilidad. Sin embargo, para esta primera aproximación, la interpretación binaria es perfecta para construir una intuición sólida.

Cada **capa** de la red está compuesta internamente por estas **neuronas** trabajando en paralelo; de allí la importancia de estudiarlas primero de forma individual. 

Con esto completamos el mapa conceptual de nuestra arquitectura: la **Red Neuronal** es el modelo global (una función :math:`y = f(x)` que transforma entradas en salidas con sentido); esta red está construida a partir de **capas** compuestas que se encadenan mediante la composición de funciones; y, a su vez, cada capa está integrada por un conjunto de **neuronas**.

.. math::
   :label: relacion_RN_capa_neurona

   {\huge \text{Red Neuronal} \leftarrow \text{Capa} \leftarrow \text{Neurona}}

Para entender cómo la neurona toma decisiones, debemos resolver un problema: imagina que tienes un grupo de figuras mezcladas en el piso algunas son **cuadrados** y otras son **triángulos** y tu misión es encontrar de qué lado están los **triángulos**. 

No las puedes ver directamente con los ojos, pero conoces la posición exacta de cada una en el piso y también sabes qué tipo de figura es. Además, la ubicación de estas figuras no es aleatoria: los cuadrados tienden a ocupar una región del piso y los triángulos otra. Conociendo únicamente sus posiciones y sus tipos, ¿cómo encontrarías una forma para clasificarlas?

.. list-table:: Posiciones y tipos de figuras en el piso
   :widths: 25 25 25 25
   :header-rows: 1
   :align: center

   * - Figura
     - Coordenada :math:`x_1`
     - Coordenada :math:`x_2`
     - ¿Es Triángulo? (:math:`y`)
   * - 1
     - 1.0
     - 1.5
     - NO
   * - 2
     - 2.0
     - 1.0
     - NO
   * - 3
     - 1.5
     - 3.0
     - NO
   * - 4
     - 3.0
     - 2.0
     - NO
   * - 5
     - 4.5
     - 2.0
     - SÍ
   * - 6
     - 2.0
     - 5.0
     - SÍ
   * - 7
     - 4.0
     - 4.5
     - SÍ
   * - 8
     - 3.5
     - 3.5
     - SÍ

Estamos de acuerdo en que, con estos datos, podemos hacer una representación de dónde está cada una de las figuras. Nosotros, como humanos, podemos ver esta gráfica y decir que los triángulos están en la parte superior derecha del plano; pero una máquina solo tiene los datos como información de entrada y nada más.

.. container:: only-light

    .. tikz:: Figuras en el piso
       :align: center

       \activarPaletaClara
       \input{grafica_datos_neurona.tex}


.. container:: only-dark

    .. tikz:: Figuras en el piso
       :align: center

       \activarPaletaOscura
       \input{grafica_datos_neurona.tex}


Para solucionarlo, tal como lo haría una máquina, tenemos que definir nuestro problema de forma matemática. Para esto vamos a utilizar geometría. ¿Cómo sabemos en qué lugar están los triángulos? El primer pensamiento es separar las figuras de alguna manera; en este caso, vamos a utilizar una línea, la cual va a ser la frontera entre los triángulos y los cuadrados.

La forma matemática de "dibujar" líneas dentro de este espacio es utilizando la ecuación de la recta. Para nuestro caso, vamos a definirla como una función, recuerdan nuestra primera pieza de lego :eq:`funcion_recta`. 

.. math::
   :label: funcion_recta

   {\huge f(x_1) = mx_1 + b = x_2}

¿Qué significa esta expresión? Lo primero que tenemos es :math:`f(x_1)` que, como ya lo habíamos hablado, es el nombre de la función y también nos indica que su entrada es :math:`x_1`. La expresión :math:`mx_1 + b` es lo que hace nuestra máquina, es decir, la transformación. Por último, :math:`x_2` representa la salida de nuestra máquina. Aunque en matemáticas generalmente se omite escribir de forma explícita la salida (en este caso :math:`x_2`), la incluimos aquí por motivos pedagógicos: para visibilizar con claridad qué valor resulta de aplicar esta transformación en el plano.
