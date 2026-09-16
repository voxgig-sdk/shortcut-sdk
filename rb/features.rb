# Shortcut SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ShortcutFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShortcutBaseFeature.new
    when "debug"
      ShortcutDebugFeature.new
    when "idempotency"
      ShortcutIdempotencyFeature.new
    when "metrics"
      ShortcutMetricsFeature.new
    when "paging"
      ShortcutPagingFeature.new
    when "ratelimit"
      ShortcutRatelimitFeature.new
    when "retry"
      ShortcutRetryFeature.new
    when "test"
      ShortcutTestFeature.new
    when "timeout"
      ShortcutTimeoutFeature.new
    else
      ShortcutBaseFeature.new
    end
  end
end
