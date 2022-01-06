class _Error extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'Error'
  }
}

export function throwError(scope: string, m: string): never {
  throw new _Error(`[${scope}] ${m}`)
}

export function debugWarn(scope: string, message: string): void {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(new _Error(`[${scope}] ${message}`))
  }
}
