# Shortcut SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ShortcutFeatures
  def self.make_feature(name)
    case name
    when "base"
      ShortcutBaseFeature.new
    when "test"
      ShortcutTestFeature.new
    else
      ShortcutBaseFeature.new
    end
  end
end
