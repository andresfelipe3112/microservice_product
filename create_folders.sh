#!/bin/bash

# Este script crea la estructura de carpetas para un proyecto
# con arquitectura de capas (app, domain, infrastructure, shared).
# Se puede ejecutar en la terminal de VS Code (bash, zsh, etc.).

# Definir la carpeta base
BASE_DIR="src"

# Crear la carpeta principal 'src' y las subcarpetas de alto nivel
mkdir -p "$BASE_DIR"/{app,domain,infrastructure,shared}

# Crear las subcarpetas de 'app'
mkdir -p "$BASE_DIR"/app/{products,orders,auth,users}

# Crear las subcarpetas de 'domain'
mkdir -p "$BASE_DIR"/domain/{products,orders,auth,users}

# Crear las subcarpetas de 'infrastructure'
mkdir -p "$BASE_DIR"/infrastructure/{database,http,security}

# Crear las subcarpetas de 'database'
mkdir -p "$BASE_DIR"/infrastructure/database/{products,orders,users,shared}

# Crear las subcarpetas de 'http'
mkdir -p "$BASE_DIR"/infrastructure/http/{products,orders,auth,users}

# Crear los archivos placeholder (opcional, para que las carpetas no estén vacías)
touch "$BASE_DIR"/main.ts
touch "$BASE_DIR"/app.module.ts

echo "Estructura de carpetas creada exitosamente en la carpeta '$BASE_DIR'."
