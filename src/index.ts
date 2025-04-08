import { version } from '../package.json'

type ReactbillingOptions = {
  debug?: boolean
  baseURL?: string
}

export class ReactBilling {
  private readonly debug: boolean
  private readonly endpoint: string

  public static readonly sdkVersion: string = version
  public static readonly namespace: string = 'v1'
  public static readonly baseURL: string = 'https://billing.teer.ai'

  public static readonly instrumentationScopeName: string = 'teer-sdk'

  private constructor(options: ReactbillingOptions) {
    this.debug = options.debug ?? false
    const baseURL = options.baseURL || ReactBilling.baseURL

    const url = new URL(`${baseURL}/${ReactBilling.namespace}/spans/bulk`)
    this.endpoint = url.toString()
  }

  private logDebug(message: string, ...args: any[]): void {
    if (!this.debug) return
    console.log(`[${new Date().toISOString()}] [Reactbilling v${ReactBilling.sdkVersion}] ${message}`, ...args)
  }
}

export type { ReactbillingOptions }
