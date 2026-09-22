
=============================================================
Desmitificando la caja negra: toda la red es una sola función
=============================================================

De la "caja negra" a las funciones matemáticas
-----------------------------------------------------

Vamos a empezar por algo que ya sabemos, que una red neuronal es una "caja negra", y que además de alguna manera misteriosa le entregamos información, pasa por nuestra "caja negra" y como resultado nos da una respuesta coherente y lógica simulando "inteligencia".

.. container:: only-light

   .. tikz:: La caja negra de la red neuronal
      :align: center

      \activarPaletaClara
      \input{caja_negra.tex}


.. container:: only-dark

   .. tikz:: La caja negra de la red neuronal
      :align: center

      \activarPaletaOscura
      \input{caja_negra.tex}

Esta forma de ver el problema, aunque es muy simple, es una manera muy acertada de cómo funciona en este caso nuestra primera pieza de Lego, y si me permiten podemos empezar a definir nuestro problema de una forma un poco más rigurosa, lo primero de todo es saber que nuestro dibujito de la "caja negra" tiene relación con algo llamado "funciones" en matemáticas.

De una forma muy sencilla, y por supuesto sin entrar mucho a detalles formales de la matemática, vamos a decir que una "función" es una máquina que transforma una entrada (cualquiera) y saca una salida (también cualquiera) que depende de la entrada, en otras palabras, entra un "elemento" a la máquina, la máquina "modifica" dicho elemento, y sale un nuevo elemento que es resultado de la modificación del primero, esto último es muy importante, porque si se cambia la entrada también se cambia la salida.

La representación de una función en matemáticas es muy simple: elegimos una letra (generalmente en minúscula), la cual representa el nombre de dicha máquina, y utilizamos "(" y ")" para describir qué entrada tiene nuestra "caja negra". El nombre más común es la letra :math:`f` seguido de :math:`(x)`, donde :math:`x` representa la entrada (cualquiera que sea). Además, representamos la salida como otra letra diferente, la más común es :math:`y`, la cual vamos a igualar a toda nuestra máquina, como se observa en :eq:`primera_funcion`.

   Para leer la ecuación :eq:`primera_funcion`, se hace de la siguiente manera: se dice el nombre de la función seguido de "de" y el nombre de los parámetros internos; en este caso, se dice ":math:`f` de :math:`x`".

.. math::
   :label: primera_funcion

   {\huge f(x) = y}

Vamos a recapitular: nuestra primera pieza de Lego se va a llamar "función", la cual es una máquina a la que se le pasa una entrada (llamada en este caso :math:`x`) y como resultado genera una salida (en este caso :math:`y`). Además, esta pieza de Lego es exactamente igual al primer dibujito de nuestra caja negra que representa una red neuronal.

.. container:: only-light

   .. tikz:: La caja negra como una funcion
      :align: center

      \activarPaletaClara
      \input{caja_negra_definida.tex}


.. container:: only-dark

   .. tikz:: La caja negra como una funcion
      :align: center

      \activarPaletaOscura
      \input{caja_negra_definida.tex}


Composición de funciones: la metáfora de la cebolla
-----------------------------------------------------

Otra cosa importante es que una sola función puede estar compuesta por más funciones, como se observa en la ecuación :eq:`suma_funciones`.
Esta forma de escribir nos dice que una función (cualquiera) llamada :math:`h(x)` más otra función (cualquiera) llamada :math:`g(x)` es igual a la función :math:`f(x)`. Nótese que cuando escribimos :math:`g(x)` o :math:`h(x)`, solo es un nombre y no nos dice qué hace exactamente. En otras palabras, la suma de dos "cajas negras" ( :math:`g(x)` y :math:`h(x)` ) me da como resultado otra "caja negra" ( :math:`f(x)` ).

.. math::
   :label: suma_funciones

   {\huge f(x) = h(x) + g(x)}


Finalmente, tenemos el último elemento importante para comprender el interior de nuestra red neuronal: una operación llamada composición. Se puede ver de dos formas distintas:

1. **Perspectiva de proceso:** Si tenemos una función llamada :math:`s(x)` y otra llamada :math:`g(x)`, la composición consiste en que la salida de la primera función se convierte en la entrada de la segunda.
2. **Perspectiva matemática:** Teniendo las mismas dos funciones, la composición es utilizar la primera función directamente como la entrada de la segunda. En otras palabras, tomamos la función :math:`g(x)` y reemplazamos su entrada :math:`x` por la función :math:`s(x)`, obteniendo :math:`g(s(x))`.

Matemáticamente hablando esta operación se escribe de esta forma :eq:`composicion_funciones`:

.. math::
   :label: composicion_funciones

   {\huge (g \circ s)(x) = g(s(x))}

Okey, pero vamos con algo más interesante: el contenido de nuestra red neuronal "caja negra". Tal vez ya pudieron intuir que efectivamente dentro de la red neuronal existen más funciones (máquinas), a las cuales las vamos a llamar "capas" (o en inglés *layers*), y estas están relacionadas o, mejor dicho, se les aplica la operación de composición entre ellas. Cabe aclarar que la forma de disponer nuestras capas define un tipo de arquitectura.

   Entiéndase **arquitectura** como la forma de organizar nuestros bloques de Lego y cómo estos interactúan; si se ordenan o interactúan de forma diferente, se dice que cambió la arquitectura.

En este caso, esta arquitectura en particular se llama de **capas densas** (*dense layers*), la cual es la más fundamental y por la que vamos a empezar a explicar. Con esta información, ya podemos empezar a visualizar cómo podría estar representada gráficamente dentro de nuestra "caja negra".

.. container:: only-light

   .. tikz:: La caja negra con capas
      :align: center

      \activarPaletaClara
      \input{caja_con_capas.tex}


.. container:: only-dark

   .. tikz:: La caja negra con capas
      :align: center

      \activarPaletaOscura
      \input{caja_con_capas.tex}

Como lo veníamos diciendo, cada una de estas capas está representada como una función en sí misma, la cual tiene una entrada y una salida y, por supuesto, la entrada es modificada dentro de ella. Además, dijimos que la salida de una capa se convierte en la entrada de la siguiente, es decir, se realiza una composición de todas las capas (que simplemente son funciones).

Cabe aclarar que, para este ejemplo, las capas son exactamente iguales entre sí, pero en la práctica pueden ser de distinto tipo o estar organizadas de forma diferente dentro de la arquitectura.

Pero, ¿cómo representamos esto matemáticamente? Para entenderlo, lo primero que vamos a hacer es dar nombre a nuestras capas. Por ejemplo, la **capa 1** se puede llamar :math:`f^{(1)}`, la **capa 2** :math:`f^{(2)}` y así sucesivamente, recordando que :math:`f^{(1)}` solo es un nombre y por el momento no representa una operación de potencia, no hay que confundirlo con elevar dicha función a la unidad.

Entonces, sabiendo cómo llamamos a nuestras capas, vamos a resolver el problema paso a paso. Tenemos claro que a la **capa 1** (:math:`f^{(1)}`) entran datos, los transforma y genera una salida; dicha salida se convierte en la entrada de la **capa 2** (:math:`f^{(2)}`), lo cual nos indica que tenemos que hacer una composición entre estas dos. Por lo tanto, quedaría de la forma como se muestra en la ecuación :eq:`composicion_dos_capas`.

.. math::
   :label: composicion_dos_capas

   {\huge (f^{(2)} \circ f^{(1)})(x) = f^{(2)}(f^{(1)}(x))}

¿Qué pasaría si agregamos otra capa, la **capa 3** (:math:`f^{(3)}`)? ¿Con cuál función tendría que hacer esta operación de composición? La respuesta es directamente con el resultado de la composición anterior. Desde este instante podemos saber que la información de la **capa 1** no desaparece, se mantiene dentro de estas operaciones. Además, podemos ver algo interesante: todo este trabajo que hemos estado realizando nos muestra que, de alguna forma, estas operaciones actúan como las "capas" de una cebolla, como se puede ver en la ecuación :eq:`composicion_tres_capas`.

.. math::
   :label: composicion_tres_capas

   {\huge (f^{(3)} \circ f^{(2)} \circ f^{(1)})(x) = f^{(3)}(f^{(2)}(f^{(1)}(x)))}

Formalizando la notación de la red
-----------------------------------------------------

Con estas herramientas tenemos lo necesario para representar nuestra red neuronal de forma un poco más elegante y rigurosa. Por lo pronto, vamos a introducir la notación definitiva que vamos a utilizar. Por notación me refiero simplemente a ponerle nombres a estos elementos que vamos a manipular y, por supuesto, al dibujito que siempre nos ayudará a encajar qué cosa se relaciona con cuál otra.

Empezamos con la entrada, a la cual llamaremos como siempre :math:`x` (la de toda la vida). Continuamos con nuestra "caja negra" (red neuronal); esta vez sí le vamos a cambiar un poco el nombre y la llamaremos :math:`f_{\text{NN}}(x)`, donde las siglas :math:`\text{NN}` provienen simplemente de *Neural Network* en inglés.

Continuamos con la salida, a la cual le vamos a cambiar el nombre a :math:`\hat{y}`. Este cambio nos permitirá hacer una distinción más adelante respecto a otros elementos; por el momento, solo vamos a decir que se llama de esa manera.

Finalmente las capas, a las cuales no les vamos a cambiar el nombre: seguirán siendo :math:`f^{(\text{algo})}`. Sin embargo, aquí podemos hacer algo muy útil: en matemáticas podemos reemplazar ese :math:`(\text{algo})` por una variable, y para este caso utilizaremos la letra :math:`L`, donde :math:`L` viene de *layer* (capa en inglés).

Esto nos permite generalizar el concepto para cualquier cantidad de capas. Si nuestra red neuronal tiene :math:`L` capas en total, la salida final no es más que la composición encadenada desde la primera capa :math:`f^{(1)}` hasta la última capa :math:`f^{(L)}`, como se observa en la ecuación :eq:`generalizacion_red`.

.. math::
   :label: generalizacion_red

   {\huge f_{\text{NN}}(x) = f^{(L)}( \dots f^{(2)}(f^{(1)}(x)) \dots) = \hat{y}}

No se asusten por la cantidad de paréntesis, la ecuación :eq:`generalizacion_red` solo nos dice de forma elegante lo mismo que ya descubrimos con nuestra cebolla: que la información entra por :math:`f^{(1)}`, se va transformando de capa en capa y finalmente sale convertida en nuestra :math:`\hat{y}`.

Visualizando el flujo completo
-----------------------------------------------------

Y, por supuesto, no podíamos dejar esto en puras fórmulas. Aquí está el dibujito que conecta toda nuestra nueva notación con lo que realmente está pasando por dentro de la máquina:

.. container:: only-light

   .. tikz:: La caja negra final
      :align: center

      \activarPaletaClara
      \input{caja_negra_final.tex}


.. container:: only-dark

   .. tikz:: La caja negra final
      :align: center

      \activarPaletaOscura
      \input{caja_negra_final.tex}

Como pueden ver en el dibujito, no hay magia: la entrada :math:`x` entra a la primera capa :math:`f^{(1)}`, su salida pasa inmediatamente a ser la entrada de :math:`f^{(2)}`, el proceso se repite sucesivamente a través de todas las :math:`L` capas hasta que la última función :math:`f^{(L)}` nos entrega el resultado final :math:`\hat{y}`.

Hasta aquí todo parece bastante ordenado, pero... ¿qué hay realmente dentro de cada una de estas capas :math:`f^{(l)}`? ¿De qué está hecha esa función por dentro? En la siguiente sección abriremos por fin estas capas para conocer al verdadero ladrillo fundamental de todo este edificio: la neurona.
