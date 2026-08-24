# Shortcut SDK utility: make_context
require_relative '../core/context'
module ShortcutUtilities
  MakeContext = ->(ctxmap, basectx) {
    ShortcutContext.new(ctxmap, basectx)
  }
end
