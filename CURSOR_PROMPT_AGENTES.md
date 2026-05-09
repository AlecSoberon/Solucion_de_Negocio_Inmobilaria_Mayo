# Prompt para Cursor · Aplicaciones y agentes comerciales

Quiero que mejores una página web estática de GitHub Pages para un proyecto de Business Analytics de una inmobiliaria.

## Objetivo
Construir una versión más funcional y visualmente más sólida de la sección **Aplicación** de una web académica sobre Inmobiliaria Mayo.

## Contexto funcional
El flujo comercial es el siguiente:
1. Registrar proyecto, torres, tipos de unidad y unidades.
2. Configurar canales de captación.
3. Captar clientes por canal presencial o virtual.
4. Registrar cliente.
5. Asignar vendedor.
6. Generar lead de venta.
7. Permitir selección de unidad.
8. Negociar descuento y precio ofertado.
9. Generar contrato.
10. Actualizar estado de contrato y estado de unidad.

## Aplicaciones que deben existir
### Aplicación 1 · Registro del Cliente
- Formulario con tipo_documento, num_documento, nombres, apellidos, teléfono, email, canal de origen, fecha_registro, urgencia y presupuesto.
- Debe crear un lead inicial.
- Debe mostrar feedback visual de guardado.

### Aplicación 2 · Selección del Departamento
- Permitir filtrar por proyecto, torre, tipo de unidad, habitaciones y presupuesto.
- Mostrar unidades disponibles.
- Vincular unidad al lead.
- Calcular precio ofertado según descuento.

### Aplicación 3 · Asignación Comercial
- Mostrar lead, cliente, canal y proyecto.
- Permitir definir prioridad y asesor.
- Guardar estado de gestión y observaciones.
- Mostrar una bandeja final de leads asignados.

## Agentes que quiero
### Agente 1 · Calificador de Leads
- Entradas: canal, urgencia, presupuesto, unidad.
- Salidas: score 0 a 100, prioridad, siguiente acción.

### Agente 2 · Recomendador de Unidades
- Entradas: presupuesto, habitaciones, distrito, preferencia.
- Salidas: unidad recomendada, precio, metraje, proyecto y justificación.

### Agente 3 · Asignador de Asesor
- Entradas: lead, prioridad, proyecto.
- Salidas: asesor sugerido, motivo de asignación y siguiente acción.

## Requisitos técnicos
- Mantener una estética elegante y ejecutiva, alineada con una web institucional.
- Usar HTML, CSS y JavaScript vanilla o, si prefieres, React simple sin backend pesado.
- Mantener colores azul marino, azul medio, fondos claros y tarjetas limpias.
- Hacer que las tarjetas de agentes estén en layout horizontal y bien alineadas.
- Hacer responsive.
- Agregar iconografía simple o ilustraciones minimalistas si ayuda.
- No usar emojis.
- Preparar el código para que luego se pueda conectar a endpoints reales.
- Incluir comentarios en el código para indicar dónde conectar APIs.

## Requisitos visuales
- Hacer más presentable el flujograma comercial usando imágenes o una visualización ordenada.
- Crear una galería con vista general del flujo y vistas de detalle por etapas.
- Crear tarjetas elegantes para las tres aplicaciones.
- Crear tarjetas horizontales para los agentes con inputs, botón de acción y salida visible.
- Mantener una bandeja final de leads asignados.

## Entregables esperados
- HTML/CSS/JS actualizado.
- Componentes visuales bien alineados.
- Código limpio y entendible.
- Lista breve de mejoras implementadas.
