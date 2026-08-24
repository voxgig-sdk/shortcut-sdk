<?php
declare(strict_types=1);

// Shortcut SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ShortcutFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ShortcutBaseFeature();
            case "test":
                return new ShortcutTestFeature();
            default:
                return new ShortcutBaseFeature();
        }
    }
}
