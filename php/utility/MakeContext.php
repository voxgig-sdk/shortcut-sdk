<?php
declare(strict_types=1);

// Shortcut SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ShortcutMakeContext
{
    public static function call(array $ctxmap, ?ShortcutContext $basectx): ShortcutContext
    {
        return new ShortcutContext($ctxmap, $basectx);
    }
}
