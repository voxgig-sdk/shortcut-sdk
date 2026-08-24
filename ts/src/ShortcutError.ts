
import { Context } from './Context'


class ShortcutError extends Error {

  isShortcutError = true

  sdk = 'Shortcut'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ShortcutError
}

