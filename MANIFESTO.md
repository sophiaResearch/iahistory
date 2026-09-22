# 🛠️ Manifiesto de Redacción: Nuestra Filosofía de Enseñanza

> *"No entendemos verdaderamente cómo funciona un algoritmo hasta que somos capaces de construirlo con nuestras propias manos desde las bases matemáticas."*

Este libro no es un manual de usuario para librerías de IA. **AIBook-SOPHIA** nace con la misión pedagógica de abrir cada caja negra y mostrar la matemática, la geometría y el código puro que hacen funcionar a la Inteligencia Artificial moderna.

---

### 📌 Nuestros 5 Principios Fundamentales

#### 1. Prohibido usar "magia" (`No Black-Box AI`)
En los laboratorios y ejemplos de código centrales, **no dependemos de frameworks de alto nivel** (PyTorch, TensorFlow, Scikit-Learn) que oculten los algoritmos tras funciones prefabricadas. Construimos las neuronas, las funciones de activación y los algoritmos de optimización paso a paso desde las operaciones aritméticas y matriciales básicas.

#### 2. La intuición geométrica primero
Antes de lanzar una fórmula o una notación abstracta, el lector debe **ver y sentir el problema en el espacio**. Cada concepto matemático (un vector $x$, una frontera $w \cdot x + b = 0$, la compresión $\sigma(z)$) debe introducirse a través de analogías claras y diagramas visuales (TikZ) que apelen a la geometría.

#### 3. Progresión *Bottom-Up* (De la pieza al edificio)
No enseñamos conceptos flotando en el aire. Cada capítulo construye directamente sobre la "pieza de Lego" explicada en el capítulo anterior:
- **Datos y plano cartesiano** $\to$
- **Neurona aislada y frontera recta** $\to$
- **Composición de capas y curvas** $\to$
- **Ajuste de error y aprendizaje.**

#### 4. Notación matemática unificada
Para evitar confundir al estudiante entre capítulos, **respetamos estrictamente las convenciones del proyecto**:
- Entradas: $x$
- Red neuronal completa: $f_{\text{NN}}(x)$
- Capas individuales: $f^{(l)}$ donde $L$ es la capa final
- Predicción final: $\hat{y}$
- Combinación lineal: $z = w \cdot x + b$

#### 5. Laboratorios funcionales en código puro
Cada sección teórica culmina en un laboratorio ejecutable donde el lector traduce la teoría directamente a código (Python/NumPy puro o C++ básico). Si el código no refleja exactamente la ecuación escrita en el texto, el capítulo no está terminado.

---

### 🤝 Guía para autores y colaboradores
Si vas a redactar o revisar una sección:
1. **Haz la prueba de la abuela:** ¿Puede un estudiante de primeros semestres entender la idea intuitiva antes de ver la deducción formal?
2. **Revisa los diagramas TikZ:** Asegúrate de que las figuras manejen paletas adaptables a tema claro y oscuro (`only-light` y `only-dark`).
3. **No saltes pasos:** Muestra las simplificaciones algebraicas intermedias cuando pases de una forma geométrica a una vectorial.
