# JS101 - DevDay

## Dinámica

1. Tenemos una carpeta por cada proyecto
2. Cada proyecto ya tiene armado su `HTML` y `CSS`
3. Solamente debemos de codear en los archivos `app.js`
4. Tenemos una guía más abajo por cada proyecto
5. Por cada paso de los proyectos vamos a hacer una introducción a cada tema

## Qué vamos a ver de JS?

- Strings, arrays y objetos
- Como definir e invocar [funciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- Como usar [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) para recorrer un array
- Definir componentes re-utilizables usando [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Como manipular el DOM usando [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) e [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- Como definir constantes usando [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) y variables usando [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- Como utilizar [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) junto con [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) para obtener datos de una API

---

### 1er Proyecto - Mi Código Postal

---

### 2do Proyecto - Feriados 2018

#### 1 - Asignar los títulos de manera dinámica

- Conceptos

  - `const`
  - `function`
  - `Template strings`
  - `document.title`
  - `document.querySelector`

* Pasos a seguir
  1. Definir una función `setTitles`
  2. Dentro de la misma definir una constante `currentYear` y debemos asignarle el resultado de invocar la función `getCurrentYear`
  3. Definir una constante `title` y asignarle un template string para que diga "Feriados 2018", interpolando la constante `currentYear`
  4. Al titulo de la pestaña le asignaremos la constante `title`
  5. Obtendremos el elemento `h1` y le asignaremos la constante `title`

> Solo a modo de prueba podes ejecutar y eliminarla después

```javascript
setTitles()
```

#### 2 - Creamos componentes re-utilizables

- Conceptos
  - `function` (argumentos y return)
  - `Template strings` (saltos de línea)

* Pasos a seguir
  1.  Definir una función `createCardComponent`
  2.  Debe recibir `title`, `date` y `type`
  3.  Debe devolver un template string con el siguiente contenido:

```javascript
<div class="card">
  <div class="card-header">
    <div class="card-title">${title}</div>
  </div>
  <div class="card-body">
    <div class="card-date">${date}</div>
    <div class="card-type">${type}</div>
  </div>
</div>
```

> Solo a modo de prueba podes ejecutar la siguientes lineas y eliminarla después

```javascript
const grid = document.querySelector('.grid')
grid.innerHTML = createCardComponent('hola mundo', 'DevDay', 'JS101')
```

#### 3 - Obtenemos los datos de la API

- Conceptos

  - `fetch`
  - `async/await`

* Pasos a seguir

  1. Definir una función async llamada `fetchHolidays`
  2. Dentro de la misma definir una constante `currentYear` y asignarle el resultado de `getCurrentYear()`
  3. Definir una constante `apiEndpoint` y asignarle un template string que contenga al final la variable `currentYear`, por ejemplo: `https://nolaborables.com.ar/api/v2/feriados/${currentYear}`

  4. Definir una constante `response` y asignarle el resultado de fetch anteponiendo `await`, y pasandole como parámetro `apiEndpoint`
  5. Definir una constante `holidays` y asignarle el resultado de ejecutar `response.json()` anteponiendo `await`
  6. Devolver la constante `holidays` usando `return`

> Solo a modo de prueba podes ejecutar las siguientes lineas y eliminarla después

```javascript
async function demo() {
  const holidays = await fecthHolidays()
  console.log('Los feriados son: ', holidays)
}

demo()
```

#### 4 - Definir la función principal de nuestra app

- Conceptos

  - `forEach`
  - `innerHTML`

* Pasos a seguir
  1. Definir una función async llamada `main`
  2. Ejecutar nuestra funcioón `setTitles`
  3. Definir una constante `grid` y asignarle el valor de obtener el elemento con clase `grid` usando `querySelector`
  4. Definir una constante `holidays` y asignarle el valor del resultado de llamar `fetchHolidays` anteponiendo `await`
  5. Iterar `holidays` usando el método `forEach` y pasandole como parámetro una función que recibe como argumento `holiday`
  6. Dentro de la misma definir una constante `currentYear` y asignarle el resultado de `getCurrentYear()`
  7. Definir la constante `formattedDate` y asignarle el resultado de `getFormattedDate()` pasandole como parámetros `holiday.dia`, `holiday.mes` y `currentYear`
  8. Definir la constante `holidayCard` y asignarle el resultado de `createCardComponent` pasandole como parámetros `motivo`, `formattedDate`, y `holiday.tipo`
  9. Asignarle a `grid.innerHTML` usando `+=` la constante `holidayCard`
  10. Por último ejecutar nuestra función `main()`
