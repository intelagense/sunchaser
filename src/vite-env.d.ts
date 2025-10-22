/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly KENDO_UI_LICENSE?: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
