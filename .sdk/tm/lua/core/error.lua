-- Shortcut SDK error

local ShortcutError = {}
ShortcutError.__index = ShortcutError


function ShortcutError.new(code, msg, ctx)
  local self = setmetatable({}, ShortcutError)
  self.is_sdk_error = true
  self.sdk = "Shortcut"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ShortcutError:error()
  return self.msg
end


function ShortcutError:__tostring()
  return self.msg
end


return ShortcutError
