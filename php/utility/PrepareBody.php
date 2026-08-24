<?php
declare(strict_types=1);

// Shortcut SDK utility: prepare_body

class ShortcutPrepareBody
{
    public static function call(ShortcutContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
