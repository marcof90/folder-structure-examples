// Datos basados en la transcripción que compartiste.
window.STRUCTURES = [
  {
    id: "tipo",
    label: "1) Por tipo",
    title: "Estructura por tipo (Type-based)",
    tag: "Sencilla / típica",
    quote:
      "“Esta es la más sencilla y típica y funciona bien en proyectos pequeños… lo malo es que puedes terminar con carpetas que tienen una lista interminable de archivos.”",
    notes: [
      "Es la forma más sencilla y típica.",
      "Funciona bien en proyectos pequeños.",
      "Lo malo: las carpetas pueden terminar con una lista interminable de archivos."
    ],
    tree: `
📂 proyecto
├── 📂 components
│   ├── Header.js
│   ├── Footer.js
│   ├── Card.js
│   └── ...
├── 📂 services
│   ├── api.js
│   ├── auth.js
│   └── ...
├── 📂 hooks
│   ├── useAuth.js
│   └── ...
├── 📂 utils
│   └── helpers.js
└── 📂 styles
    └── global.css
`.trim()
  },
  {
    id: "tipo-feature",
    label: "2) Tipo + feature",
    title: "Estructura por tipo + feature",
    tag: "Refleja el producto",
    quote:
      "“La segunda por tipo y por feature donde ya empezamos a reflejar nuestro producto dentro de las carpetas…”",
    notes: [
      "Empieza a reflejar el producto dentro de las carpetas.",
      "Dentro de cada tipo (por ejemplo, components) organizas por secciones/feature.",
      "Mejora la anterior para productos en crecimiento."
    ],
    tree: `
📂 proyecto
├── 📂 components
│   ├── 📂 auth
│   │   ├── LoginForm.js
│   │   └── RegisterForm.js
│   ├── 📂 dashboard
│   │   ├── DashboardHeader.js
│   │   └── StatsCard.js
│   └── 📂 profile
│       └── ProfileCard.js
├── 📂 services
│   ├── 📂 auth
│   │   └── authService.js
│   └── 📂 user
│       └── userService.js
`.trim()
  },
  {
    id: "screaming",
    label: "3) Screaming Architecture",
    title: "Screaming Architecture",
    tag: "Ideal proyectos grandes",
    quote:
      "“En lugar de indicar en las carpetas qué es lo que utilizamos, nos están diciendo qué es lo que hacemos…”",
    notes: [
      "Las carpetas indican qué hace el producto, no qué tecnología usa.",
      "Hace más fácil entender de qué va el producto.",
      "Perfecta para proyectos grandes y complejos."
    ],
    tree: `
📂 proyecto
├── 📂 authentication
│   ├── LoginForm.js
│   ├── RegisterForm.js
│   ├── authService.js
│   └── useAuth.js
├── 📂 dashboard
│   ├── DashboardPage.js
│   ├── StatsCard.js
│   └── dashboardService.js
├── 📂 user-profile
│   ├── ProfilePage.js
│   ├── ProfileCard.js
│   └── userService.js
`.trim()
  }
];

window.CONCLUSION =
  "“No hay ninguna bala de plata. No hay ninguna perfecta. Tú tienes que elegir la tuya.”";
