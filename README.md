# Portfolio Tur

Portfolio profesional de Oscar Gonzalez Tur construido con React, TypeScript, Vite y Material UI.

## Requisitos

- Node.js 20 o superior
- npm

## Instalacion

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: servidor de desarrollo con Vite.
- `npm run build`: comprobacion TypeScript y build de produccion.
- `npm run lint`: analisis con ESLint.
- `npm run preview`: vista previa del build.

## Variables De Entorno

El formulario de contacto usa EmailJS. Crea un archivo `.env` local con:

```env
VITE_REACT_APP_PUBLIC_KEY=tu_public_key
VITE_REACT_APP_SERVICE_ID=tu_service_id
VITE_REACT_APP_TEMPLATE_ID=tu_template_id
```

El archivo `.env` esta ignorado por git.

## Estructura

- `src/App.tsx`: composicion principal de la landing.
- `src/components/`: secciones y componentes reutilizables.
- `src/i18n.ts`: traducciones en espanol, ingles y aleman.
- `src/theme/theme.ts`: tema global de Material UI.
- `public/icons` y `public/images`: assets estaticos.
