# Shortcut SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ShortcutUtility.registrar = ->(u) {
  u.clean = ShortcutUtilities::Clean
  u.done = ShortcutUtilities::Done
  u.make_error = ShortcutUtilities::MakeError
  u.feature_add = ShortcutUtilities::FeatureAdd
  u.feature_hook = ShortcutUtilities::FeatureHook
  u.feature_init = ShortcutUtilities::FeatureInit
  u.fetcher = ShortcutUtilities::Fetcher
  u.make_fetch_def = ShortcutUtilities::MakeFetchDef
  u.make_context = ShortcutUtilities::MakeContext
  u.make_options = ShortcutUtilities::MakeOptions
  u.make_request = ShortcutUtilities::MakeRequest
  u.make_response = ShortcutUtilities::MakeResponse
  u.make_result = ShortcutUtilities::MakeResult
  u.make_point = ShortcutUtilities::MakePoint
  u.make_spec = ShortcutUtilities::MakeSpec
  u.make_url = ShortcutUtilities::MakeUrl
  u.param = ShortcutUtilities::Param
  u.prepare_auth = ShortcutUtilities::PrepareAuth
  u.prepare_body = ShortcutUtilities::PrepareBody
  u.prepare_headers = ShortcutUtilities::PrepareHeaders
  u.prepare_method = ShortcutUtilities::PrepareMethod
  u.prepare_params = ShortcutUtilities::PrepareParams
  u.prepare_path = ShortcutUtilities::PreparePath
  u.prepare_query = ShortcutUtilities::PrepareQuery
  u.graphql_body = ShortcutUtilities::GraphqlBody
  u.graphql_errors = ShortcutUtilities::GraphqlErrors
  u.result_basic = ShortcutUtilities::ResultBasic
  u.result_body = ShortcutUtilities::ResultBody
  u.result_headers = ShortcutUtilities::ResultHeaders
  u.transform_request = ShortcutUtilities::TransformRequest
  u.transform_response = ShortcutUtilities::TransformResponse
}
