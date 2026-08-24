<?php
declare(strict_types=1);

// Shortcut SDK base feature

class ShortcutBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ShortcutContext $ctx, array $options): void {}
    public function PostConstruct(ShortcutContext $ctx): void {}
    public function PostConstructEntity(ShortcutContext $ctx): void {}
    public function SetData(ShortcutContext $ctx): void {}
    public function GetData(ShortcutContext $ctx): void {}
    public function GetMatch(ShortcutContext $ctx): void {}
    public function SetMatch(ShortcutContext $ctx): void {}
    public function PrePoint(ShortcutContext $ctx): void {}
    public function PreSpec(ShortcutContext $ctx): void {}
    public function PreRequest(ShortcutContext $ctx): void {}
    public function PreResponse(ShortcutContext $ctx): void {}
    public function PreResult(ShortcutContext $ctx): void {}
    public function PreDone(ShortcutContext $ctx): void {}
    public function PreUnexpected(ShortcutContext $ctx): void {}
}
