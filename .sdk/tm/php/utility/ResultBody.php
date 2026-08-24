<?php
declare(strict_types=1);

// Shortcut SDK utility: result_body

class ShortcutResultBody
{
    public static function call(ShortcutContext $ctx): ?ShortcutResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
