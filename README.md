# Curso de Programación Web - Primer Módulo

A continuación, el contenido del curso:

<br>

### Índice 
  - [Diseño de un sitio Web](#diseño-de-un-sitio-web)
  - [Sistema de control de versiones](#sistema-de-control-de-versiones)
  - [Maquetación de un sitio web](#maquetación-de-un-sitio-web)
  - [Empaquetado de un sitio Web](#empaquetado-de-un-sitio-web)
  - [Introducción a la Programación](#introducción-a-la-programación)
  - [Programación con JavaScript](#programación-con-javascript)

<br><br>

---

## Diseño de un sitio web

Uso de las siguientes tecnologías:

![Figma](https://img.shields.io/badge/Figma-181818?style=for-the-badge&logo=figma&logoColor=FE4D13&labelColor=181818)


Diseño en **Figma** de un prototipo funcional de página Web

<br><br>

**[⬆ Volver a índice](#índice)**

---

<br><br>


---

## Sistema de Control de Versiones

Uso de las siguientes tecnologías:

![GIT](https://img.shields.io/badge/GIT-F34F29?style=for-the-badge&logo=git&logoColor=F34F29&labelColor=fff)
![GitHub](https://img.shields.io/badge/GitHub-21262d?style=for-the-badge&logo=github&logoColor=ffffff&labelColor=101010)

Creación y manejo de repositorios locales y remotos usando **GIT**

<br><br>

**[⬆ Volver a índice](#índice)**

---

<br><br>

---

## Maquetación de un sitio web

Uso de las siguientes tecnologías:

![HTML](https://img.shields.io/badge/HTML-FF5F1F?style=for-the-badge&logo=HTML5&logoColor=FF5F1F&labelColor=101010)
![CSS](https://img.shields.io/badge/CSS-0066cc?style=for-the-badge&logo=CSS3&logoColor=0066cc&labelColor=101010)

Dar forma a un sitio web usando los principales lenguajes de la web, a saber, HMTL como lenguaje de maquetación, y CSS como lenguajes de estilos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

<br><br>

**[⬆ Volver a índice](#índice)**

---

<br><br>

---

## Empaquetado de un sitio web

Uso de las siguientes tecnologías:

![Vite](https://img.shields.io/badge/Vite-454ce1?style=for-the-badge&logo=vite&logoColor=bd34fe&labelColor=41d1ff)
![Webpack](https://img.shields.io/badge/Webpack-2F4884?style=for-the-badge&logo=webpack&logoColor=8ED6FC&labelColor=101010)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=06b6d4&labelColor=101010)

Minificación de código. Uso de herramientas y tecnologías para separar el código de desarrollo vs el código de producción.

```bash
npm create vite@latest
```

<br><br>

**[⬆ Volver a índice](#índice)**

---

<br><br>

---

## Introducción a la programación

Uso de las siguientes tecnologías:

![NodeJS](https://img.shields.io/badge/NodeJS-80bc02?style=for-the-badge&logo=node.js&logoColor=80bc02&labelColor=101010)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=3178c6&labelColor=101010)
![NodeJS](https://img.shields.io/badge/Nodemon-fff?style=for-the-badge&logo=nodemon&logoColor=80bc02&labelColor=fff)

Aprendizaje sobre los conceptos básicos universales de programación, enfocados a ser aplicables en cualquier lenguaje de programación.

```ts

class Programador {
  public nombre
  protected experiencia

  constructor(nombre: string, experiencia: number) {
    this.nombre = nombre;
    this.experiencia = experiencia
  }

  public decirNombre (): void  {
    console.log(`Mi nombre es ${this.nombre}`)
  }

  private ganarExperiencia (): void {
    this.experiencia++
  }

  public trabajar (): void {
    console.log('Trabajando...')

    setTimeout(() => {
      console.log('...Terminé de trabajar')
      ganarExperiencia();
    }, 3000)
  }
}

```

<br><br>

**[⬆ Volver a índice](#índice)**

---

<br><br>

---

## Programación con JavaScript

Uso de las siguientes tecnologías:

![JavaScript](https://img.shields.io/badge/JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=7df1e&labelColor=101010)

Aprendizaje sobre el uso correcto del lenguaje **JavaScript** en proyectos web vanillas.

Consumo de API's REST para renderización de datos recibidos mediante funciones asíncronas.

```js

const getData = (callback) => {
  fetch('https://leonardoapi.onrender.com/music')
    .then(res => res.json())
    .then(res => callback(res))
}

```

<br><br>

**[⬆ Volver a índice](#índice)**

---
