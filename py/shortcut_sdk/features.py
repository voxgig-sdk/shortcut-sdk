# Shortcut SDK feature factory

from shortcut_sdk.feature.base_feature import ShortcutBaseFeature
from shortcut_sdk.feature.debug_feature import ShortcutDebugFeature
from shortcut_sdk.feature.idempotency_feature import ShortcutIdempotencyFeature
from shortcut_sdk.feature.metrics_feature import ShortcutMetricsFeature
from shortcut_sdk.feature.paging_feature import ShortcutPagingFeature
from shortcut_sdk.feature.ratelimit_feature import ShortcutRatelimitFeature
from shortcut_sdk.feature.retry_feature import ShortcutRetryFeature
from shortcut_sdk.feature.test_feature import ShortcutTestFeature
from shortcut_sdk.feature.timeout_feature import ShortcutTimeoutFeature


_FEATURES = {
    "base": lambda: ShortcutBaseFeature(),
    "debug": lambda: ShortcutDebugFeature(),
    "idempotency": lambda: ShortcutIdempotencyFeature(),
    "metrics": lambda: ShortcutMetricsFeature(),
    "paging": lambda: ShortcutPagingFeature(),
    "ratelimit": lambda: ShortcutRatelimitFeature(),
    "retry": lambda: ShortcutRetryFeature(),
    "test": lambda: ShortcutTestFeature(),
    "timeout": lambda: ShortcutTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
