declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      API_HOST: string
    }
  }
}
