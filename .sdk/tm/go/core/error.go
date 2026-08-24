package core

type ShortcutError struct {
	IsShortcutError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewShortcutError(code string, msg string, ctx *Context) *ShortcutError {
	return &ShortcutError{
		IsShortcutError: true,
		Sdk:              "Shortcut",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ShortcutError) Error() string {
	return e.Msg
}
