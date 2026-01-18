# NextJS Onboarding

Frontend mobile-first desarrollado en NextJS (App Router) que consume la API NestJS (NestJS Onboarding) para autenticación con JWT, visualización de productos, flujo de onboarding de clientes y verificación del estado del sistema, como parte del reto “El Guardián del Onboarding”.

> ⚠️ **Nota: El frontend requiere que la aplicación [*nestjs-onboarding*](https://github.com/jeisonrojasm/nestjs-onboarding) esté en ejecución para poder realizar las peticiones a la API.**

## 🛠️ Tecnologías utilizadas (Frontend)

- NextJS
- React — Construcción de interfaces basadas en componentes.
- JavaScript (ES6+)
- CSS puro
- Fetch API
- Docker
- Docker Compose

## ✅ Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- ✅ [*Git*](https://git-scm.com/)
- ✅ [*Docker* y Docker Compose](https://www.docker.com/get-started) instalados y en ejecución

## 📥 Obtener el proyecto

Clona el repositorio:

```bash
#Clona el repositorio
git clone https://github.com/jeisonrojasm/nextjs-onboarding.git
cd nextjs-onboarding
```

## 🚀 Ejecutar

### 1. **Archivo `.env` requerido**

Normalmente, el archivo `.env` **no debería incluirse** en un repositorio público, ya que puede contener valores de configuración sensibles.  
Sin embargo, con fines de demostración y evaluación —y dado que este no es un proyecto de producción— el archivo `.env` está incluido en el repositorio para que cualquiera pueda ejecutar el proyecto sin configuraciones adicionales.

El archivo `.env` ya se encuentra ubicado en la raíz del proyecto.

### 2. Levantar el entorno de desarrollo con Docker

Basta con ejecutar el siguiente comando desde la raíz del proyecto para construir la imagen y levantar el contenedor del backend:

```bash
docker-compose up --build
```

Una vez finalizado el proceso, el backend quedará disponible en:

```arduino
http://localhost:3001
```

## 🔐 Autenticación (Login)

La aplicación cuenta con una pantalla de **Login** que consume el endpoint `POST /auth/login` del backend.

De acuerdo con los requerimientos del reto técnico, el proceso de autenticación utiliza **credenciales ficticias**.

### Credenciales de acceso

Para iniciar sesión correctamente en la aplicación, utiliza las siguientes credenciales:

```json
{
  "username": "admin",
  "password": "admin"
}
```

## 📱 Vistas implementadas

El frontend implementa las siguientes vistas mobile-first:

- **Login**  
  Autenticación mediante JWT (`POST /auth/login`).

- **Dashboard**  
  Vista principal con acceso a:
  - Productos
  - Onboarding
  - Estado del sistema

- **Productos**  
  Listado de productos (`GET /products`)

- **Producto**  
  Detalle de producto (`GET /products/:id`)

- **Onboarding**  
  Formulario de apertura de cuenta (`POST /onboarding`).

- **Health**  
  Verificación del estado del sistema (`GET /health`).

## 🔐 Autenticación

- El JWT se obtiene al iniciar sesión.
- El token se almacena en:
  - `localStorage` (uso en cliente)

## 👨‍💻 Autor

Desarrollado por **Jeison Rojas Mora** - *Fullstack Developer*

- [https://github.com/jeisonrojasm](https://github.com/jeisonrojasm)
- [https://www.linkedin.com/in/jeison-rojas-mora/](https://www.linkedin.com/in/jeison-rojas-mora/)
