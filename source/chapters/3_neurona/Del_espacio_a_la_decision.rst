============================================================
Del espacio a la decisión: separando cuadrados de triángulos
============================================================

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

------------------------------------------------------
El problema en el plano: organizando datos no visibles
------------------------------------------------------

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

---------------------------------------------
De la regla escolar a la frontera de decisión
---------------------------------------------

Para solucionarlo, tal como lo haría una máquina, tenemos que definir nuestro problema de forma matemática. Para esto vamos a utilizar geometría. ¿Cómo sabemos en qué lugar están los triángulos? El primer pensamiento es separar las figuras de alguna manera; en este caso, vamos a utilizar una línea, la cual va a ser la frontera entre los triángulos y los cuadrados.

La forma matemática de "dibujar" líneas dentro de este espacio es utilizando la ecuación de la recta. Para nuestro caso, vamos a definirla como una función, recuerdan nuestra primera pieza de lego :eq:`funcion_recta`. 

.. math::
   :label: funcion_recta

   {\huge f(x_1) = mx_1 + b = x_2}

¿Qué significa esta expresión? Lo primero que tenemos es :math:`f(x_1)` que, como ya lo habíamos hablado, es el nombre de la función y también nos indica que su entrada es :math:`x_1`. La expresión :math:`mx_1 + b` es lo que hace nuestra máquina, es decir, la transformación. Por último, :math:`x_2` representa la salida de nuestra máquina. Aunque en matemáticas generalmente se omite escribir de forma explícita la salida (en este caso :math:`x_2`), la incluimos aquí por motivos pedagógicos: para visibilizar con claridad qué valor resulta de aplicar esta transformación en el plano.

El contenido de nuestra máquina :eq:`funcion_recta` está dado por la expresión :math:`mx_1 + b`, y vamos a analizarlo. Lo primero es recordar que :math:`x_1` es un número, y de alguna manera nosotros somos "libres" de decidir su valor, el que nosotros queramos, esto en matemáticas se llama una variable independiente. Por otra parte, tenemos a :math:`m` y a :math:`b`, que son números llamados constantes, es decir, no cambian de valor. A su vez, :math:`b` se llama término independiente, en otras palabras, es un número libre que no está atado al valor de otro número. Por último, :math:`m` se llama pendiente, este numerito me dice qué tan inclinada está la línea "frontera" en nuestro caso. Para verlo de una mejor forma, vamos a tener este pequeño elemento interactivo a continuación que nos ilustra cómo funciona todo esto.

.. raw:: html

	<div class="contenedor-interactivos">
	      <div id="lineal-controls" class="panel-controles"></div>
	      <div id="funcion_lineal"></div>
    </div>
	<script src="../../_static/js/chapters/3_neurona/funcion_lineal.js"></script>

Como se observa en el panel anterior, tenemos varios elementos; tenemos 3 inputs los cuales cambian los valores de :math:`x_1`, :math:`m` y :math:`b` respectivamente. Pero entonces, ¿por qué decimos que :math:`m` y :math:`b` son constantes y no cambian su valor, si claramente en nuestro modelo interactivo sí los podemos cambiar? Lo importante aquí es la línea morada: notarán que si se cambia :math:`m` o :math:`b`, esta línea se moverá de alguna manera, pero si cambian :math:`x_1`, la línea morada no se moverá y por el contrario, el que se mueve es el punto azul.

Como se observa, este punto azul siempre se va a "deslizar" a lo largo de la línea morada. Se preguntarán: ¿por qué necesitamos :math:`x_1` si con :math:`m` y :math:`b` ya tenemos la línea, y qué tiene que ver el punto azul? Lo que sucede (y esto es para todas las funciones) es que si nosotros agarramos muchos valores de entrada :math:`x_1` y los pasamos por la máquina (función lineal :eq:`funcion_recta`), los resultados serían dibujados como una línea de puntos; es decir, al pasar infinitos valores por nuestra función, serían tantos puntos que como resultado nos darían esa línea morada. Una forma de ver cómo esto se desarrolla es que la función guarda la información de infinitos puntos en una expresión fácil de leer y de escribir, como lo es la función lineal :eq:`funcion_recta`.

-------------------------------------
Evaluando puntos y separando regiones
-------------------------------------

Ahora que comprendemos cómo una recta se proyecta en el plano, apliquémosla a nuestro problema original: separar las figuras geométricas. En el siguiente laboratorio interactivo puedes ajustar la pendiente :math:`m` y el corte :math:`b` para trazar una recta que divida con éxito los cuadrados de los triángulos.

.. raw:: html

	<div class="contenedor-interactivos">
	      <div id="frontera-controls" class="panel-controles"></div>
	      <div id="frontera_figuras"></div>
    </div>
	<script src="../../_static/js/chapters/3_neurona/frontera_figuras.js"></script>

Al mover los controles del panel, notarás algo fundamental: la recta actúa como una **tijera geométrica** que fragmenta el plano en dos regiones claramente diferenciadas. 

Cuando la línea está correctamente posicionada, todas las coordenadas que pertenecen a los triángulos quedan ubicadas en un lado de la frontera, mientras que los cuadrados se agrupan en el lado opuesto. Matemáticamente, lo que hace la recta no es solo dibujar un límite visual: nos ayuda a trazar una línea divisoria que separa con éxito ambos mundos.

Pero al ver esto, es natural preguntarnos: si resolver este problema consiste en trazar una línea recta, ¿dónde está la "neurona" de la que todo el mundo habla? ¿De dónde sale ese clásico círculo con entradas y salidas que suele ilustrar a la inteligencia artificial? ¿Acaso esa figura esconde algo diferente o es simplemente otra forma de dibujar la misma línea recta?

En la siguiente sección responderemos estas preguntas y descubriremos cómo ese famoso gráfico no es más que nuestra línea recta vista desde otra perspectiva.
