# Shortcut SDK exists test

require "minitest/autorun"
require_relative "../Shortcut_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ShortcutSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
