# Shortcut SDK utility: make_context

from projectname_sdk.core.context import ShortcutContext


def make_context_util(ctxmap, basectx):
    return ShortcutContext(ctxmap, basectx)
