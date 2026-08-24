<?php
declare(strict_types=1);

// Shortcut SDK utility: result_headers

class ShortcutResultHeaders
{
    public static function call(ShortcutContext $ctx): ?ShortcutResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
