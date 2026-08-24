# Shortcut SDK feature factory

from shortcut_sdk.feature.base_feature import ShortcutBaseFeature
from shortcut_sdk.feature.test_feature import ShortcutTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ShortcutBaseFeature(),
        "test": lambda: ShortcutTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
