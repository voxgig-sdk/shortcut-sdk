# Shortcut SDK exists test

import pytest
from shortcut_sdk import ShortcutSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ShortcutSDK.test(None, None)
        assert testsdk is not None
