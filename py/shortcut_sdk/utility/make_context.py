# Shortcut SDK utility: make_context

from shortcut_sdk.core.context import ShortcutContext


def make_context_util(ctxmap, basectx):
    return ShortcutContext(ctxmap, basectx)
