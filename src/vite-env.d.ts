/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TELERIK_LICENSE?: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
