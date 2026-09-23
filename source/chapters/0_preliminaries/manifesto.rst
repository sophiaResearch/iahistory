.. _manifiesto_redaccion:

==================================================
Manifiesto de Redacción: Filosofía de Enseñanza
==================================================

.. epigraph::

   *"No entendemos verdaderamente cómo funciona un algoritmo hasta que somos capaces de construirlo con nuestras propias manos desde las bases matemáticas."*

Este libro no es un manual de usuario para librerías de IA. **AIBook-SOPHIA** nace con la misión pedagógica de abrir cada caja negra y mostrar la matemática, la geometría y el código puro que hacen funcionar a la Inteligencia Artificial moderna.

--------------------------------------------------
Nuestros 5 Principios Fundamentales
--------------------------------------------------

1. **Prohibido usar "magia" (No Black-Box Frameworks):**
   Queda estrictamente prohibido el uso de librerías de alto nivel como ``PyTorch``, ``TensorFlow``, ``scikit-learn`` o ``Keras``. Permitimos únicamente estructuras de soporte vectorial/matricial básicas (como ``NumPy`` o arreglos puros) usadas exclusivamente como calculadoras matriciales, asegurando que la lógica y la matemática del algoritmo sean programadas a mano.

2. **La intuición geométrica primero:**
   Antes de introducir notación abstracta, el estudiante debe visualizar el problema en el espacio. Cada concepto matemático (:math:`x`, :math:`w \cdot x + b = 0`, :math:`\sigma(z)`) se introduce con analogías claras y diagramación en TikZ.

3. **Progresión Bottom-Up:**
   Cada capítulo construye directamente sobre la base explicada en el capítulo anterior: datos en el espacio :math:`\to` neurona y frontera :math:`\to` composición de capas :math:`\to` optimización.

4. **Notación matemática unificada:**

   * Entradas: :math:`x`
   * Red neuronal completa: :math:`f_{\text{NN}}(x)`
   * Capas individuales: :math:`f^{(l)}` donde :math:`L` es la capa final
   * Predicción final: :math:`\hat{y}`
   * Combinación lineal: :math:`z = w \cdot x + b`

5. **Laboratorios funcionales en código puro:**
   Cada sección teórica culmina en un laboratorio ejecutable traducido a código. Si el código no refleja exactamente la ecuación escrita en el texto, el capítulo no está terminado.
