# 🎮 Tareas de Interacciones (UX)

> Mejoras de experiencia de usuario: modales, navegación intuitiva y documentación de estructuras.

---

## Modales y Paneles

- [ ] **Convertir Bitácora en Modal**  
  El historial de partida (`log-panel`) debe ser un modal desplegable en lugar de panel fijo lateral.  
  Botón para abrir/cerrar, overlay oscuro detrás.  
  *Estructura: Historial (Lista Enlazada Simple) - recorrido secuencial para renderizar*

- [ ] **Modal de Inicio de Partida**  
  Pantalla inicial para ingresar nombres de jugadores antes de comenzar.  
  Botón "Iniciar Juego" que dispara `iniciarJuego()`.

- [ ] **Modal de Fin de Partida**  
  Resumen con puntajes finales, ganador y botón de reinicio.  
  Más elegante que el `alert()` actual.

- [ ] **Modal de Reglas/Ayuda**  
  Explicación de mecánicas del juego accesible con botón "?" en la esquina.

---

## Mecánica de Barajar (Suerte)

- [ ] **Botón "Barajar Mazo" para cambiar suerte**  
  El jugador puede ejecutar `barajar()` en el mazo para reordenar las cartas.  
  Útil cuando el jugador siente que las próximas cartas no le favorecen.  
  *Estructura: Mazo (Pila) - rompe el orden LIFO temporalmente*

- [ ] **Límite de 3 barajadas por jugador**  
  Cada jugador tiene máximo 3 usos de barajar durante toda la partida.  
  Mostrar contador visual: "Barajadas restantes: 3/3".  
  Botón deshabilitado cuando se agotan los usos.

- [ ] **Cartas destruidas vuelven al mazo + barajar automático**  
  Cuando una carta del oponente es eliminada por coincidencia de rango:
  1. La carta destruida se inserta en el mazo con `push()`
  2. Se ejecuta `barajar()` automáticamente
  
  **Justificación**: Evita que la carta destruida sea robada inmediatamente (problema LIFO).  
  Sin el shuffle, el jugador siguiente robaría la misma carta que acaba de destruir.  
  *Estructura: Mazo (Pila) + `barajar()` para aleatorizar posición*

- [ ] **Indicador visual de carta reciclada**  
  Animación breve mostrando carta volviendo al mazo antes del shuffle.

---

## Navegación Intuitiva

- [ ] **Selector de Columna con Teclado**  
  Flechas ← → para navegar entre columnas, Enter para confirmar colocación.  
  *Estructura: Selector UI (Lista Circular Doblemente Enlazada) - navegación infinita, columna 3 → columna 1*

- [ ] **Indicador visual de columna seleccionada**  
  Resaltado de la columna actualmente enfocada por el selector.

- [ ] **Feedback táctil en acciones**  
  Vibración o sonido sutil al robar carta, colocar y eliminar.

- [ ] **Tooltips en elementos**  
  Al hacer hover sobre cartas, mostrar información de valor y palo.

---

## Reorganización de Layout

- [ ] **Centrar zona de interacción**  
  El mazo y preview de carta robada deben estar más prominentes.

- [ ] **Identificar claramente tableros**  
  Nombres de jugadores más visibles, colores diferenciados por jugador.

- [ ] **Responsive design básico**  
  Adaptar grid para pantallas más pequeñas.

---

## Documentación de Estructuras de Datos

### 1. Mazo de Robo → Pila (Stack)
- **Comportamiento**: LIFO (Last In, First Out)
- **Justificación**: Representa la física de un mazo real. Solo se accede a la carta superior.
- **Operaciones**: `push()` al iniciar/descartar, `pop()` al robar
- **Archivo**: `src/Clases/ListaCircular.ts` (⚠️ nombre incorrecto, ver correcciones)

### 2. Columnas del Tablero → Lista Doblemente Enlazada
- **Comportamiento**: Bidireccional (Anterior ↔ Siguiente)
- **Justificación**: 
  - **Puntuación**: Recorrer en ambas direcciones para detectar escaleras
  - **Ataque**: Al destruir carta en medio, reconectar O(1) sin reindexar
- **Operación clave**: `nodo.anterior.siguiente = nodo.siguiente`
- **Archivo**: `src/Clases/Tablero.ts` (⚠️ actualmente usa arrays, ver correcciones)

### 3. Gestor de Turnos → Lista Circular Simple
- **Comportamiento**: El último nodo apunta al primero (`cola.siguiente = cabeza`)
- **Justificación**: Flujo infinito sin condicionales. Facilita añadir 3er jugador.
- **Archivo**: No existe (⚠️ por implementar, ver correcciones)

### 4. Selector de UI → Lista Circular Doblemente Enlazada
- **Comportamiento**: Navegación infinita en ambas direcciones
- **Justificación**: Si está en Columna 3 y pulsa "→", salta a Columna 1 instantáneamente
- **Archivo**: No existe (⚠️ por implementar)

### 5. Historial de Partida → Lista Enlazada Simple
- **Comportamiento**: Inserción al final, recorrido secuencial
- **Justificación**: Bitácora inmutable. Solo requiere `append()` y lectura lineal.
- **Archivo**: `src/Clases/ListaDoble.ts` (⚠️ implementado como doble, ver correcciones)
