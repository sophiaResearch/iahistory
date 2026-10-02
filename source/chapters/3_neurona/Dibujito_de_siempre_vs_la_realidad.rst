
===================================================
El "dibujito de siempre" vs. la realidad matemática
===================================================

Ya que entendemos cómo funcionan las capas a un nivel superficial, podemos entrar en los componentes de estas. Para esto, tenemos que ponernos en perspectiva y elegir una de estas capas, y acercarnos para verla por dentro.

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

Tomemos como ejemplo la capa número 3 :math:`f^{(3)}`, la cual tiene como entrada la salida de la capa número 2 :math:`f^{(2)}`, y le pasa su salida a la capa 4 :math:`f^{(4)}`, como nos muestra nuestro dibujito.

Con esto, abrimos paso a nuestro segundo bloque de Lego, la famosa **Neurona**. Históricamente, la forma habitual de presentar la **Neurona Artificial** es comparándola con una neurona biológica: nos hablan de dendritas que reciben señales, un soma que las procesa y un axón que transmite el impulso eléctrico. 

El problema de esta metáfora es que, a menos que seas biólogo, no te ayuda a entender qué hace realmente el algoritmo en una computadora. Peor aún, hace parecer que la inteligencia artificial es un misterio biológico cuando en realidad es algo mucho más sencillo y elegante.

Para nosotros, una **Neurona artificial** es simplemente una máquina que toma decisiones; específicamente, decisiones binarias o decisiones de **SÍ** o **NO**. Esto lo hace con base en unas entradas que recibe y, como resultado, nos entrega una respuesta definitiva: **SÍ** o **NO**.

.. note::
 
   Ahora bien, cuando decimos que el resultado es un **SÍ** o un **NO**, debemos hacer la precisión de que en la práctica esto es algo un poco más sutil que una respuesta categórica. Sin embargo, para esta primera instancia, esta simplificación nos sirve perfectamente para avanzar y construir una idea clara y general de cómo funciona.

Otra cosa muy importante que debemos saber es que una **Capa** está compuesta por **Neuronas**; esta es la razón principal para empezar a explicarlas de forma individual. 

Por eso, vamos a repasar rápidamente toda nuestra **Arquitectura**: tenemos el modelo general de la Red Neuronal, la cual no es más que una máquina (**Función**) donde entra un dato y sale otro resultado con sentido. Esta Red Neuronal está compuesta por un conjunto de capas que van transformando progresivamente la entrada para generar una salida, donde la interacción entre ellas consiste en que la salida de una capa es la entrada de la siguiente (**operación de composición de funciones**). Y, a su vez, cada una de esas capas está compuesta internamente por **Neuronas**.

.. math::
   :label: relacion_RN_capa_neurona

   {\huge \text{Red Neuronal} \leftarrow \text{Capa} \leftarrow \text{Neurona}}


