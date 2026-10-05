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
