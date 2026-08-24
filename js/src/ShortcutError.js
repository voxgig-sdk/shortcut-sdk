

class ShortcutError extends Error {

  isShortcutError = true

  sdk = 'Shortcut'

  constructor(code, msg, ctx) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

module.exports = {
  ShortcutError
}

