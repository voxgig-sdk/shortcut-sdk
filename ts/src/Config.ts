
import { BaseFeature } from './feature/base/BaseFeature'
import { DebugFeature } from './feature/debug/DebugFeature'
import { IdempotencyFeature } from './feature/idempotency/IdempotencyFeature'
import { MetricsFeature } from './feature/metrics/MetricsFeature'
import { PagingFeature } from './feature/paging/PagingFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   debug: DebugFeature,
 idempotency: IdempotencyFeature,
 metrics: MetricsFeature,
 paging: PagingFeature,
 ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Shortcut',
        slug: "shortcut",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     debug:     {
      "options": {
        "active": false,
        "max": 100,
        "redact": [
          "authorization",
          "cookie",
          "set-cookie",
          "api-key",
          "apikey",
          "x-api-key",
          "idempotency-key"
        ]
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "onEntry": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 idempotency:     {
      "options": {
        "active": false,
        "header": "Idempotency-Key",
        "methods": [
          "POST",
          "PUT",
          "PATCH",
          "DELETE"
        ],
        "ops": [
          "create",
          "update",
          "remove"
        ]
      },
      "optspec": {
        "keygen": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 metrics:     {
      "options": {
        "active": false
      },
      "optspec": {
        "now": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "none"
    },
 paging:     {
      "options": {
        "active": false,
        "afterVar": "after",
        "cursorParam": "cursor",
        "firstVar": "first",
        "limitParam": "limit",
        "pageParam": "page",
        "startPage": 1
      },
      "optspec": {
        "limit": "`$NUMBER`",
        "ops": "`$LIST`"
      },
      "strict": false,
      "transport": "none"
    },
 ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.app.shortcut.com",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      bulk: {
      },

      category: {
      },

      comment: {
      },

      custom_field: {
      },

      disable: {
      },

      doc_slim: {
      },

      enable: {
      },

      entity_template: {
      },

      epic: {
      },

      epic_paginated_result: {
      },

      epic_unlink_productboard: {
      },

      epic_workflow: {
      },

      group: {
      },

      health: {
      },

      history: {
      },

      iteration: {
      },

      key_result: {
      },

      label: {
      },

      linked_file: {
      },

      member: {
      },

      milestone: {
      },

      objectif: {
      },

      objective: {
      },

      project: {
      },

      repository: {
      },

      search: {
      },

      story: {
      },

      story_comment: {
      },

      story_link: {
      },

      story_reaction: {
      },

      story_slim: {
      },

      task: {
      },

      threaded_comment: {
      },

      uploaded_file: {
      },

      webhook: {
      },

      workflow: {
      },

    }
  }


  entity = {
    "bulk": {
      "fields": [],
      "name": "bulk",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/stories/bulk",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "lit": "bulk"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "story_ids": "`reqdata.story_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "bulk"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "category": {
      "fields": [
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A true/false boolean indicating if the Category has been archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "css-color",
          "name": "color",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The hex color to be displayed with the Category (for example, \"#ff0000\").",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date that the Category was created.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "short": "The Global ID of the Category.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Category.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Category.",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "op": {
            "create": {
              "type": "`$ANY`"
            }
          },
          "req": true,
          "short": "The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date that the Category was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "category",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/categories",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "categories"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "color": "`reqdata.color`",
                  "external_id": "`reqdata.external_id`",
                  "name": "`reqdata.name`",
                  "type": "`reqdata.type`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "categories"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/categories",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "categories"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "categories"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "category_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/categories/{category-public-id}",
              "rename": {
                "param": {
                  "category-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "categories"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "categories",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "category_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/categories/{category-public-id}",
              "rename": {
                "param": {
                  "category-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "categories"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "categories",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "category_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/categories/{category-public-id}",
              "rename": {
                "param": {
                  "category-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "categories"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "archived": "`reqdata.archived`",
                  "color": "`reqdata.color`",
                  "name": "`reqdata.name`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "categories",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "comment": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "comment",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
              "rename": {
                "param": {
                  "comment-public-id": "id",
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "story_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "comments",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "story"
          ]
        ]
      }
    },
    "custom_field": {
      "fields": [
        {
          "format": "uuid",
          "name": "after_id",
          "short": "The ID of the CustomField we want to move this CustomField after.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "before_id",
          "short": "The ID of the CustomField we want to move this CustomField before.",
          "type": "`$STRING`"
        },
        {
          "name": "canonical_name",
          "short": "The canonical name for a Shortcut-defined field.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The instant when this CustomField was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "A string description of the CustomField",
          "type": "`$STRING`"
        },
        {
          "name": "enabled",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "When true, the CustomField can be applied to entities in the Workspace.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "field_type",
          "req": true,
          "short": "The type of Custom Field, eg.",
          "type": "`$STRING`"
        },
        {
          "name": "fixed_position",
          "short": "When true, the CustomFieldEnumValues may not be reordered.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "icon_set_identifier",
          "short": "A string that represents the icon that corresponds to this custom field.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The unique public ID for the CustomField.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Custom Field.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "An integer indicating the position of this Custom Field with respect to the other CustomField",
          "type": "`$INTEGER`"
        },
        {
          "name": "story_types",
          "short": "The types of stories this CustomField is scoped to.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The instant when this CustomField was last updated.",
          "type": "`$STRING`"
        },
        {
          "name": "values",
          "short": "A collection of legal values for a CustomField.",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "custom_field",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/custom-fields",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "custom-fields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "custom-fields"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "custom_field_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/custom-fields/{custom-field-public-id}",
              "rename": {
                "param": {
                  "custom-field-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "custom-fields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "custom-fields",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "custom_field_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/custom-fields/{custom-field-public-id}",
              "rename": {
                "param": {
                  "custom-field-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "custom-fields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "custom-fields",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "custom_field_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/custom-fields/{custom-field-public-id}",
              "rename": {
                "param": {
                  "custom-field-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "custom-fields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "after_id": "`reqdata.after_id`",
                  "before_id": "`reqdata.before_id`",
                  "description": "`reqdata.description`",
                  "enabled": "`reqdata.enabled`",
                  "icon_set_identifier": "`reqdata.icon_set_identifier`",
                  "name": "`reqdata.name`",
                  "values": "`reqdata.value`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "custom-fields",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "disable": {
      "fields": [],
      "name": "disable",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/entity-templates/disable",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "entity-templates"
                },
                {
                  "lit": "disable"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "entity-templates",
                "disable"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/iterations/disable",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                },
                {
                  "lit": "disable"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations",
                "disable"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "doc_slim": {
      "fields": [
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Doc.",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "req": true,
          "short": "The content for the new document",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The public id of the Doc",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "req": true,
          "short": "The title for the new document",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "doc_slim",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/documents",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "documents"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "content": "`reqdata.content`",
                  "title": "`reqdata.title`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "documents"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/documents",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "documents"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "documents"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "enable": {
      "fields": [],
      "name": "enable",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/entity-templates/enable",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "entity-templates"
                },
                {
                  "lit": "enable"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "entity-templates",
                "enable"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/iterations/enable",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                },
                {
                  "lit": "enable"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations",
                "enable"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "entity_template": {
      "fields": [
        {
          "format": "uuid",
          "name": "author_id",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The id of the user creating this template.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date when the entity template was created.",
          "type": "`$STRING`"
        },
        {
          "name": "custom_fields",
          "short": "An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "deadline",
          "short": "The due date of the story.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "The description of the story.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "epic_id",
          "short": "The ID of the epic the story belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "estimate",
          "short": "The numeric point estimate of the story.",
          "type": "`$INTEGER`"
        },
        {
          "name": "external_links",
          "short": "An array of external links connected to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "files",
          "short": "An array of files attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "follower_ids",
          "short": "An array of UUIDs for any Members listed as Followers.",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "group_id",
          "short": "The ID of the group to which the story is assigned.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The unique identifier for the entity template.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "iteration_id",
          "short": "The ID of the iteration the story belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "name": "label_ids",
          "short": "An array of label ids attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels",
          "short": "An array of labels attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "last_used_at",
          "req": true,
          "short": "The last time that someone created an entity using this template.",
          "type": "`$STRING`"
        },
        {
          "name": "linked_files",
          "short": "An array of linked files attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            },
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the story.",
          "type": "`$STRING`"
        },
        {
          "name": "owner_ids",
          "short": "An array of UUIDs of the owners of this story.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "project_id",
          "short": "The ID of the project the story belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "name": "story_contents",
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "A map of story attributes this template populates.",
          "type": "`$OBJECT`"
        },
        {
          "name": "story_type",
          "short": "The type of story (feature, bug, chore).",
          "type": "`$STRING`"
        },
        {
          "name": "sub_tasks",
          "short": "An array of sub-tasks connected to the story",
          "type": "`$ARRAY`"
        },
        {
          "name": "tasks",
          "short": "An array of tasks connected to the story.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date when the entity template was last updated.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "workflow_state_id",
          "short": "The ID of the workflow state the story is currently in.",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "entity_template",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/entity-templates",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "entity-templates"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "author_id": "`reqdata.author_id`",
                  "name": "`reqdata.name`",
                  "story_contents": "`reqdata.story_content`"
                },
                "res": "`body.story_contents`"
              },
              "parts": [
                "api",
                "v3",
                "entity-templates"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/entity-templates",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "entity-templates"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "entity-templates"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "entity_template_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/entity-templates/{entity-template-public-id}",
              "rename": {
                "param": {
                  "entity-template-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "entity-templates"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.story_contents`"
              },
              "parts": [
                "api",
                "v3",
                "entity-templates",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "entity_template_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/entity-templates/{entity-template-public-id}",
              "rename": {
                "param": {
                  "entity-template-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "entity-templates"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "entity-templates",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "entity_template_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/entity-templates/{entity-template-public-id}",
              "rename": {
                "param": {
                  "entity-template-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "entity-templates"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "name": "`reqdata.name`",
                  "story_contents": "`reqdata.story_content`"
                },
                "res": "`body.story_contents`"
              },
              "parts": [
                "api",
                "v3",
                "entity-templates",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "epic": {
      "fields": [
        {
          "format": "int64",
          "name": "after_id",
          "short": "The ID of the Epic we want to move this Epic after.",
          "type": "`$INTEGER`"
        },
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Epic.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "True/false boolean that indicates whether the Epic is archived or not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "associated_groups",
          "req": true,
          "short": "An array containing Group IDs and Group-owned story counts for the Epic's associated groups.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "before_id",
          "short": "The ID of the Epic we want to move this Epic before.",
          "type": "`$INTEGER`"
        },
        {
          "name": "comments",
          "op": {
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "A nested array of threaded comments.",
          "type": "`$ARRAY`"
        },
        {
          "name": "completed",
          "req": true,
          "short": "A true/false boolean indicating if the Epic has been completed.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "completed_at",
          "req": true,
          "short": "The time/date the Epic was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "completed_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Epic was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "converted_from_story_id",
          "short": "The ID of the Story that was converted to an Epic.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Epic was created.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "deadline",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The Epic's deadline.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "list": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The Epic's description.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "epic_state_id",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the Epic State.",
          "type": "`$INTEGER`"
        },
        {
          "name": "external_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "follower_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs for any Members you want to add as Followers on this Epic.",
          "type": "`$ARRAY`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "group_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "`Deprecated` The ID of the group to associate with the epic.",
          "type": "`$STRING`"
        },
        {
          "name": "group_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDS for Groups to which this Epic is related.",
          "type": "`$ARRAY`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "An array of Group IDs that have been mentioned in the Epic description.",
          "type": "`$ARRAY`"
        },
        {
          "name": "health",
          "req": true,
          "short": "The current health status of the Epic.",
          "type": "`$OBJECT`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Epic.",
          "type": "`$INTEGER`"
        },
        {
          "name": "label_ids",
          "req": true,
          "short": "An array of Label ids attached to the Epic.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of Labels attached to the Epic.",
          "type": "`$ARRAY`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "An array of Member IDs that have been mentioned in the Epic description.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "milestone_id",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "`Deprecated` The ID of the Objective this Epic is related to.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Epic.",
          "type": "`$STRING`"
        },
        {
          "name": "objective_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of IDs for Objectives to which this epic is related.",
          "type": "`$ARRAY`"
        },
        {
          "name": "owner_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs for any members you want to add as Owners on this new Epic.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "planned_start_date",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The Epic's planned start date.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "The Epic's relative position in the Epic workflow state.",
          "type": "`$INTEGER`"
        },
        {
          "format": "uuid",
          "name": "productboard_id",
          "req": true,
          "short": "The ID of the associated productboard feature.",
          "type": "`$STRING`"
        },
        {
          "name": "productboard_name",
          "req": true,
          "short": "The name of the associated productboard feature.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "productboard_plugin_id",
          "req": true,
          "short": "The ID of the associated productboard integration.",
          "type": "`$STRING`"
        },
        {
          "name": "productboard_url",
          "req": true,
          "short": "The URL of the associated productboard feature.",
          "type": "`$STRING`"
        },
        {
          "name": "project_ids",
          "req": true,
          "short": "The IDs of Projects related to this Epic.",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "requested_by_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The ID of the Member that requested the epic.",
          "type": "`$STRING`"
        },
        {
          "name": "started",
          "req": true,
          "short": "A true/false boolean indicating if the Epic has been started.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "started_at",
          "req": true,
          "short": "The time/date the Epic was started.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "started_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Epic was started.",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "`Deprecated` The workflow state that the Epic is in.",
          "type": "`$STRING`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "A group of calculated values for this Epic.",
          "type": "`$OBJECT`"
        },
        {
          "format": "int64",
          "name": "stories_without_projects",
          "req": true,
          "short": "The number of stories in this epic which are not associated with a project.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Epic was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "epic",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/epics",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "converted_from_story_id": "`reqdata.converted_from_story_id`",
                  "created_at": "`reqdata.created_at`",
                  "deadline": "`reqdata.deadline`",
                  "description": "`reqdata.description`",
                  "epic_state_id": "`reqdata.epic_state_id`",
                  "external_id": "`reqdata.external_id`",
                  "follower_ids": "`reqdata.follower_id`",
                  "group_id": "`reqdata.group_id`",
                  "group_ids": "`reqdata.group_id`",
                  "labels": "`reqdata.label`",
                  "milestone_id": "`reqdata.milestone_id`",
                  "name": "`reqdata.name`",
                  "objective_ids": "`reqdata.objective_id`",
                  "owner_ids": "`reqdata.owner_id`",
                  "planned_start_date": "`reqdata.planned_start_date`",
                  "requested_by_id": "`reqdata.requested_by_id`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "state": "`reqdata.state`",
                  "updated_at": "`reqdata.updated_at`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "detail",
                    "orig": "detail",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "entity_type",
                    "orig": "entity_type",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "next",
                    "orig": "next",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/search/epics",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "search"
                },
                {
                  "lit": "epics"
                }
              ],
              "select": {
                "exist": [
                  "detail",
                  "entity_type",
                  "next",
                  "page_size",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "v3",
                "search",
                "epics"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "includes_description",
                    "orig": "includes_description",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                }
              ],
              "select": {
                "exist": [
                  "includes_description"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "label_id",
                    "orig": "label_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/labels/{label-public-id}/epics",
              "rename": {
                "param": {
                  "label-public-id": "label_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "labels"
                },
                {
                  "var": "label_id"
                },
                {
                  "lit": "epics"
                }
              ],
              "select": {
                "exist": [
                  "label_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "labels",
                "{label_id}",
                "epics"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "milestone_id",
                    "orig": "milestone_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/milestones/{milestone-public-id}/epics",
              "rename": {
                "param": {
                  "milestone-public-id": "milestone_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "milestones"
                },
                {
                  "var": "milestone_id"
                },
                {
                  "lit": "epics"
                }
              ],
              "select": {
                "exist": [
                  "milestone_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "milestones",
                "{milestone_id}",
                "epics"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "objectif_id",
                    "orig": "objective_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/objectives/{objective-public-id}/epics",
              "rename": {
                "param": {
                  "objective-public-id": "objectif_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "objectives"
                },
                {
                  "var": "objectif_id"
                },
                {
                  "lit": "epics"
                }
              ],
              "select": {
                "exist": [
                  "objectif_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "objectives",
                "{objectif_id}",
                "epics"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics/{epic-public-id}",
              "rename": {
                "param": {
                  "epic-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/epics/{epic-public-id}",
              "rename": {
                "param": {
                  "epic-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/epics/{epic-public-id}",
              "rename": {
                "param": {
                  "epic-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "after_id": "`reqdata.after_id`",
                  "archived": "`reqdata.archived`",
                  "before_id": "`reqdata.before_id`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "deadline": "`reqdata.deadline`",
                  "description": "`reqdata.description`",
                  "epic_state_id": "`reqdata.epic_state_id`",
                  "external_id": "`reqdata.external_id`",
                  "follower_ids": "`reqdata.follower_id`",
                  "group_id": "`reqdata.group_id`",
                  "group_ids": "`reqdata.group_id`",
                  "labels": "`reqdata.label`",
                  "milestone_id": "`reqdata.milestone_id`",
                  "name": "`reqdata.name`",
                  "objective_ids": "`reqdata.objective_id`",
                  "owner_ids": "`reqdata.owner_id`",
                  "planned_start_date": "`reqdata.planned_start_date`",
                  "requested_by_id": "`reqdata.requested_by_id`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "state": "`reqdata.state`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "label"
          ],
          [
            "milestone"
          ],
          [
            "objectif"
          ]
        ]
      }
    },
    "epic_paginated_result": {
      "fields": [
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Epic.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "req": true,
          "short": "True/false boolean that indicates whether the Epic is archived or not.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "associated_groups",
          "req": true,
          "short": "An array containing Group IDs and Group-owned story counts for the Epic's associated groups.",
          "type": "`$ARRAY`"
        },
        {
          "name": "completed",
          "req": true,
          "short": "A true/false boolean indicating if the Epic has been completed.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "completed_at",
          "req": true,
          "short": "The time/date the Epic was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "completed_at_override",
          "req": true,
          "short": "A manual override for the time/date the Epic was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date the Epic was created.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "deadline",
          "req": true,
          "short": "The Epic's deadline.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "The Epic's description.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "epic_state_id",
          "req": true,
          "short": "The ID of the Epic State.",
          "type": "`$INTEGER`"
        },
        {
          "name": "external_id",
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "follower_ids",
          "req": true,
          "short": "An array of UUIDs for any Members you want to add as Followers on this Epic.",
          "type": "`$ARRAY`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "group_id",
          "req": true,
          "short": "`Deprecated` The ID of the group to associate with the epic.",
          "type": "`$STRING`"
        },
        {
          "name": "group_ids",
          "req": true,
          "short": "An array of UUIDS for Groups to which this Epic is related.",
          "type": "`$ARRAY`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "An array of Group IDs that have been mentioned in the Epic description.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Epic.",
          "type": "`$INTEGER`"
        },
        {
          "name": "label_ids",
          "req": true,
          "short": "An array of Label ids attached to the Epic.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels",
          "req": true,
          "short": "An array of Labels attached to the Epic.",
          "type": "`$ARRAY`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "An array of Member IDs that have been mentioned in the Epic description.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "milestone_id",
          "req": true,
          "short": "`Deprecated` The ID of the Objective this Epic is related to.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the Epic.",
          "type": "`$STRING`"
        },
        {
          "name": "objective_ids",
          "req": true,
          "short": "An array of IDs for Objectives to which this epic is related.",
          "type": "`$ARRAY`"
        },
        {
          "name": "owner_ids",
          "req": true,
          "short": "An array of UUIDs for any members you want to add as Owners on this new Epic.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "planned_start_date",
          "req": true,
          "short": "The Epic's planned start date.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "The Epic's relative position in the Epic workflow state.",
          "type": "`$INTEGER`"
        },
        {
          "format": "uuid",
          "name": "productboard_id",
          "req": true,
          "short": "The ID of the associated productboard feature.",
          "type": "`$STRING`"
        },
        {
          "name": "productboard_name",
          "req": true,
          "short": "The name of the associated productboard feature.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "productboard_plugin_id",
          "req": true,
          "short": "The ID of the associated productboard integration.",
          "type": "`$STRING`"
        },
        {
          "name": "productboard_url",
          "req": true,
          "short": "The URL of the associated productboard feature.",
          "type": "`$STRING`"
        },
        {
          "name": "project_ids",
          "req": true,
          "short": "The IDs of Projects related to this Epic.",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "requested_by_id",
          "req": true,
          "short": "The ID of the Member that requested the epic.",
          "type": "`$STRING`"
        },
        {
          "name": "started",
          "req": true,
          "short": "A true/false boolean indicating if the Epic has been started.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "started_at",
          "req": true,
          "short": "The time/date the Epic was started.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "started_at_override",
          "req": true,
          "short": "A manual override for the time/date the Epic was started.",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "req": true,
          "short": "`Deprecated` The workflow state that the Epic is in.",
          "type": "`$STRING`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "A group of calculated values for this Epic.",
          "type": "`$OBJECT`"
        },
        {
          "format": "int64",
          "name": "stories_without_projects",
          "req": true,
          "short": "The number of stories in this epic which are not associated with a project.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date the Epic was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "epic_paginated_result",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "includes_description",
                    "orig": "includes_description",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics/paginated",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "lit": "paginated"
                }
              ],
              "select": {
                "exist": [
                  "includes_description",
                  "page",
                  "page_size"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "paginated"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "epic_unlink_productboard": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "epic_unlink_productboard",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/epics/{epic-public-id}/unlink-productboard",
              "rename": {
                "param": {
                  "epic-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "unlink-productboard"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{id}",
                "unlink-productboard"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "epic_workflow": {
      "fields": [
        {
          "format": "css-color",
          "name": "color",
          "short": "The hex color for this Epic State.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date the Epic State was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "req": true,
          "short": "The description of what sort of Epics belong in that Epic State.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Epic State.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The Epic State's name.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "The position that the Epic State is in, starting with 0 at the left.",
          "type": "`$INTEGER`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of Epic State (Unstarted, Started, or Done)",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "When the Epic State was last updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "epic_workflow",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epic-workflow",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epic-workflow"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.epic_states`"
              },
              "parts": [
                "api",
                "v3",
                "epic-workflow"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group": {
      "fields": [
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Group.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Whether or not the Group is archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "css-color",
          "name": "color",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The hex color to be displayed with the Group (for example, \"#ff0000\").",
          "type": "`$STRING`"
        },
        {
          "name": "color_key",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The color key to be displayed with the Group.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The instant when this group was created.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "default_workflow_id",
          "short": "The ID of the default workflow for stories created in this group.",
          "type": "`$INTEGER`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The description of the Group.",
          "type": "`$STRING`"
        },
        {
          "name": "display_icon",
          "req": true,
          "short": "Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application.",
          "type": "`$OBJECT`"
        },
        {
          "format": "uuid",
          "name": "display_icon_id",
          "short": "The Icon id for the avatar of this Group.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The id of the Group.",
          "type": "`$STRING`"
        },
        {
          "name": "member_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "The Member IDs contain within the Group.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The mention name of the Group.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Group.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "num_epics_started",
          "req": true,
          "short": "The number of epics assigned to the group which are in the started workflow state.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories",
          "req": true,
          "short": "The total number of stories assigned to the group.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_backlog",
          "req": true,
          "short": "The number of stories assigned to the group which are in a backlog workflow state.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_started",
          "req": true,
          "short": "The number of stories assigned to the group which are in a started workflow state.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The last instant when this group was updated.",
          "type": "`$STRING`"
        },
        {
          "name": "workflow_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "The Workflow IDs contained within the Group.",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "group",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/groups",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "groups"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "color": "`reqdata.color`",
                  "color_key": "`reqdata.color_key`",
                  "description": "`reqdata.description`",
                  "display_icon_id": "`reqdata.display_icon_id`",
                  "member_ids": "`reqdata.member_id`",
                  "mention_name": "`reqdata.mention_name`",
                  "name": "`reqdata.name`",
                  "workflow_ids": "`reqdata.workflow_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "groups"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/groups",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "groups"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "groups"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "group_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/groups/{group-public-id}",
              "rename": {
                "param": {
                  "group-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "groups"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "groups",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "group_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/groups/{group-public-id}",
              "rename": {
                "param": {
                  "group-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "groups"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "archived": "`reqdata.archived`",
                  "color": "`reqdata.color`",
                  "color_key": "`reqdata.color_key`",
                  "default_workflow_id": "`reqdata.default_workflow_id`",
                  "description": "`reqdata.description`",
                  "display_icon_id": "`reqdata.display_icon_id`",
                  "member_ids": "`reqdata.member_id`",
                  "mention_name": "`reqdata.mention_name`",
                  "name": "`reqdata.name`",
                  "workflow_ids": "`reqdata.workflow_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "groups",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "health": {
      "fields": [
        {
          "format": "uuid",
          "name": "author_id",
          "short": "The ID of the permission who created or updated the Health record.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "short": "The time that the Health record was created.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "epic_id",
          "short": "The ID of the Epic associated with this Health record.",
          "type": "`$INTEGER`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Health record.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "objective_id",
          "short": "The ID of the Objective associated with this Health record.",
          "type": "`$INTEGER`"
        },
        {
          "name": "status",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The health status of the Epic or Objective.",
          "type": "`$STRING`"
        },
        {
          "name": "text",
          "short": "The text of the Health record.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "short": "The time that the Health record was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "health",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/epics/{epic-public-id}/health",
              "rename": {
                "param": {
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "health"
                }
              ],
              "select": {
                "exist": [
                  "epic_id"
                ]
              },
              "transform": {
                "req": {
                  "status": "`reqdata.status`",
                  "text": "`reqdata.text`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "health"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics/{epic-public-id}/health-history",
              "rename": {
                "param": {
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "health-history"
                }
              ],
              "select": {
                "exist": [
                  "epic_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "health-history"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics/{epic-public-id}/health",
              "rename": {
                "param": {
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "health"
                }
              ],
              "select": {
                "exist": [
                  "epic_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "health"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "health_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/health/{health-public-id}",
              "rename": {
                "param": {
                  "health-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "health"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "status": "`reqdata.status`",
                  "text": "`reqdata.text`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "health",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "epic"
          ]
        ]
      }
    },
    "history": {
      "fields": [
        {
          "name": "actions",
          "req": true,
          "short": "An array of actions that were performed for the change.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 19,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "actor_name",
          "short": "The name of the actor that performed the action, if it can be determined.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "automation_id",
          "short": "The ID of the automation that performed the change.",
          "type": "`$STRING`"
        },
        {
          "name": "changed_at",
          "req": true,
          "short": "The date when the change occurred.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "short": "The ID of the webhook that handled the change.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The ID representing the change for the story.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "member_id",
          "short": "The ID of the member who performed the change.",
          "type": "`$STRING`"
        },
        {
          "name": "primary_id",
          "short": "The ID of the primary entity that has changed, if applicable.",
          "type": "`$STRING`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 0
          }
        },
        {
          "name": "references",
          "short": "An array of objects affected by the change.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 12,
            "count": 12,
            "depth": 5
          }
        },
        {
          "name": "version",
          "req": true,
          "short": "The version of the change format.",
          "type": "`$STRING`"
        },
        {
          "name": "webhook_id",
          "short": "The ID of the webhook that handled the change.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "history",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/stories/{story-public-id}/history",
              "rename": {
                "param": {
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "history"
                }
              ],
              "select": {
                "exist": [
                  "story_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "history"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "story"
          ]
        ]
      }
    },
    "iteration": {
      "fields": [
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Iteration.",
          "type": "`$STRING`"
        },
        {
          "name": "associated_groups",
          "req": true,
          "short": "An array containing Group IDs and Group-owned story counts for the Iteration's associated groups.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The instant when this iteration was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The description of the iteration.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "end_date",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The date this iteration ends.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource",
          "type": "`$STRING`"
        },
        {
          "name": "follower_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs for any Members listed as Followers.",
          "type": "`$ARRAY`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "group_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs for any Groups you want to add as Followers.",
          "type": "`$ARRAY`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "An array of Group IDs that have been mentioned in the Story description.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The ID of the iteration.",
          "type": "`$INTEGER`"
        },
        {
          "name": "label_ids",
          "req": true,
          "short": "An array of label ids attached to the iteration.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of labels attached to the iteration.",
          "type": "`$ARRAY`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "An array of Member IDs that have been mentioned in the Story description.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the iteration.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "start_date",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The date this iteration begins.",
          "type": "`$STRING`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "A group of calculated values for this Iteration.",
          "type": "`$OBJECT`"
        },
        {
          "name": "status",
          "req": true,
          "short": "The status of the iteration.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The instant when this iteration was last updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "iteration",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/iterations",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "description": "`reqdata.description`",
                  "end_date": "`reqdata.end_date`",
                  "follower_ids": "`reqdata.follower_id`",
                  "group_ids": "`reqdata.group_id`",
                  "labels": "`reqdata.label`",
                  "name": "`reqdata.name`",
                  "start_date": "`reqdata.start_date`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "detail",
                    "orig": "detail",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "entity_type",
                    "orig": "entity_type",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "next",
                    "orig": "next",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/search/iterations",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "search"
                },
                {
                  "lit": "iterations"
                }
              ],
              "select": {
                "exist": [
                  "detail",
                  "entity_type",
                  "next",
                  "page_size",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "v3",
                "search",
                "iterations"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/iterations",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "iteration_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/iterations/{iteration-public-id}",
              "rename": {
                "param": {
                  "iteration-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "iteration_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/iterations/{iteration-public-id}",
              "rename": {
                "param": {
                  "iteration-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "iteration_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/iterations/{iteration-public-id}",
              "rename": {
                "param": {
                  "iteration-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "description": "`reqdata.description`",
                  "end_date": "`reqdata.end_date`",
                  "follower_ids": "`reqdata.follower_id`",
                  "group_ids": "`reqdata.group_id`",
                  "labels": "`reqdata.label`",
                  "name": "`reqdata.name`",
                  "start_date": "`reqdata.start_date`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "key_result": {
      "fields": [
        {
          "name": "current_observed_value",
          "req": true,
          "short": "The starting value of the Key Result.",
          "type": "`$OBJECT`"
        },
        {
          "name": "current_target_value",
          "req": true,
          "short": "The starting value of the Key Result.",
          "type": "`$OBJECT`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The ID of the Key Result.",
          "type": "`$STRING`"
        },
        {
          "name": "initial_observed_value",
          "op": {
            "update": {
              "type": "`$OBJECT`"
            }
          },
          "req": true,
          "short": "The starting value of the Key Result.",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Key Result.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "objective_id",
          "req": true,
          "short": "The Objective to which this Key Result belongs.",
          "type": "`$INTEGER`"
        },
        {
          "name": "observed_value",
          "short": "The starting value of the Key Result.",
          "type": "`$OBJECT`"
        },
        {
          "format": "int64",
          "name": "progress",
          "req": true,
          "short": "The integer percentage of progress toward completion of the Key Result.",
          "type": "`$INTEGER`"
        },
        {
          "name": "target_value",
          "short": "The starting value of the Key Result.",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The type of the Key Result (numeric, percent, or boolean).",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "key_result",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "key_result_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/key-results/{key-result-public-id}",
              "rename": {
                "param": {
                  "key-result-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "key-results"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "key-results",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "key_result_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/key-results/{key-result-public-id}",
              "rename": {
                "param": {
                  "key-result-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "key-results"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "initial_observed_value": "`reqdata.initial_observed_value`",
                  "name": "`reqdata.name`",
                  "observed_value": "`reqdata.observed_value`",
                  "target_value": "`reqdata.target_value`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "key-results",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "label": {
      "fields": [
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Label.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "list": {
              "req": true,
              "type": "`$BOOLEAN`"
            }
          },
          "short": "A true/false boolean indicating if the Label has been archived.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "css-color",
          "name": "color",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The hex color to be displayed with the Label (for example, \"#ff0000\").",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date that the Label was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The description of the new Label.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "op": {
            "list": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Label.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the new Label.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "num_epics",
          "req": true,
          "short": "The total number of Epics with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_epics_completed",
          "req": true,
          "short": "The number of completed Epics associated with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_epics_in_progress",
          "req": true,
          "short": "The number of in progress epics associated with this label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_epics_total",
          "req": true,
          "short": "The total number of Epics associated with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_epics_unstarted",
          "req": true,
          "short": "The number of unstarted epics associated with this label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_points_backlog",
          "req": true,
          "short": "The total number of backlog points with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_points_completed",
          "req": true,
          "short": "The total number of completed points with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_points_in_progress",
          "req": true,
          "short": "The total number of in-progress points with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_points_total",
          "req": true,
          "short": "The total number of points with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_points_unstarted",
          "req": true,
          "short": "The total number of unstarted points with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_related_documents",
          "req": true,
          "short": "The total number of Documents associated this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_backlog",
          "req": true,
          "short": "The total number of stories backlog Stories with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_completed",
          "req": true,
          "short": "The total number of completed Stories with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_in_progress",
          "req": true,
          "short": "The total number of in-progress Stories with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_total",
          "req": true,
          "short": "The total number of Stories with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_unestimated",
          "req": true,
          "short": "The total number of Stories with no point estimate with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "num_stories_unstarted",
          "req": true,
          "short": "The total number of stories unstarted Stories with this Label.",
          "type": "`$INTEGER`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "A group of calculated values for this Label.",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date that the Label was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "label",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/labels",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "labels"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "color": "`reqdata.color`",
                  "description": "`reqdata.description`",
                  "external_id": "`reqdata.external_id`",
                  "name": "`reqdata.name`"
                },
                "res": "`body.stats`"
              },
              "parts": [
                "api",
                "v3",
                "labels"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "slim",
                    "orig": "slim",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/labels",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "labels"
                }
              ],
              "select": {
                "exist": [
                  "slim"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "labels"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "label_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/labels/{label-public-id}",
              "rename": {
                "param": {
                  "label-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "labels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.stats`"
              },
              "parts": [
                "api",
                "v3",
                "labels",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "label_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/labels/{label-public-id}",
              "rename": {
                "param": {
                  "label-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "labels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "labels",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "label_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/labels/{label-public-id}",
              "rename": {
                "param": {
                  "label-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "labels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "archived": "`reqdata.archived`",
                  "color": "`reqdata.color`",
                  "description": "`reqdata.description`",
                  "name": "`reqdata.name`"
                },
                "res": "`body.stats`"
              },
              "parts": [
                "api",
                "v3",
                "labels",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "linked_file": {
      "fields": [
        {
          "name": "content_type",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The content type of the image (e.g.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date the LinkedFile was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The description of the file.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "The groups that are mentioned in the description of the file.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique identifier for the file.",
          "type": "`$INTEGER`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "The members that are mentioned in the description of the file.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the linked file.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "size",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The filesize, if the integration provided it.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "story_id",
          "short": "The ID of the linked story.",
          "type": "`$INTEGER`"
        },
        {
          "name": "story_ids",
          "req": true,
          "short": "The IDs of the stories this file is attached to.",
          "type": "`$ARRAY`"
        },
        {
          "name": "thumbnail_url",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The URL of the file thumbnail, if the integration provided it.",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The integration type (e.g.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date the LinkedFile was updated.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "uploader_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The UUID of the member that uploaded the file.",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The URL of the file.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "linked_file",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/linked-files",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "linked-files"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "content_type": "`reqdata.content_type`",
                  "description": "`reqdata.description`",
                  "name": "`reqdata.name`",
                  "size": "`reqdata.size`",
                  "story_id": "`reqdata.story_id`",
                  "thumbnail_url": "`reqdata.thumbnail_url`",
                  "type": "`reqdata.type`",
                  "uploader_id": "`reqdata.uploader_id`",
                  "url": "`reqdata.url`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "linked-files"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/linked-files",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "linked-files"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "linked-files"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "linked_file_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/linked-files/{linked-file-public-id}",
              "rename": {
                "param": {
                  "linked-file-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "linked-files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "linked-files",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "linked_file_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/linked-files/{linked-file-public-id}",
              "rename": {
                "param": {
                  "linked-file-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "linked-files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "linked-files",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "linked_file_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/linked-files/{linked-file-public-id}",
              "rename": {
                "param": {
                  "linked-file-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "linked-files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "description": "`reqdata.description`",
                  "name": "`reqdata.name`",
                  "size": "`reqdata.size`",
                  "story_id": "`reqdata.story_id`",
                  "thumbnail_url": "`reqdata.thumbnail_url`",
                  "type": "`reqdata.type`",
                  "uploader_id": "`reqdata.uploader_id`",
                  "url": "`reqdata.url`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "linked-files",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "member": {
      "fields": [
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date the Member was created.",
          "type": "`$STRING`"
        },
        {
          "name": "created_without_invite",
          "req": true,
          "short": "Whether this member was created as a placeholder entity.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "disabled",
          "req": true,
          "short": "True/false boolean indicating whether the Member has been disabled within the Workspace.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "group_ids",
          "req": true,
          "short": "The Member's group ids",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "id",
          "req": true,
          "short": "The Member's ID in Shortcut.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "installation_id",
          "short": "Only set for agents.",
          "type": "`$STRING`"
        },
        {
          "name": "is_owner",
          "req": true,
          "type": "`$BOOLEAN`"
        },
        {
          "name": "mention_name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "organization2",
          "req": true,
          "type": "`$OBJECT`"
        },
        {
          "name": "profile",
          "req": true,
          "short": "A group of Member profile details.",
          "type": "`$OBJECT`"
        },
        {
          "format": "uuid",
          "name": "replaced_by",
          "short": "The id of the member that replaces this one when merged.",
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "req": true,
          "short": "The Member's role in the Workspace.",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "req": true,
          "short": "The user state, one of partial, full, disabled, or imported.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date the Member was last updated.",
          "type": "`$STRING`"
        },
        {
          "name": "workspace2",
          "req": true,
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "member",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "disabled",
                    "orig": "disabled",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "org_public_id",
                    "orig": "org_public_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/members",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "disabled",
                  "org_public_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "members"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "member_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "org_public_id",
                    "orig": "org_public_id",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/members/{member-public-id}",
              "rename": {
                "param": {
                  "member-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "org_public_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "members",
                "{id}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/member",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "member"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "member"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "milestone": {
      "fields": [
        {
          "format": "int64",
          "name": "after_id",
          "short": "The ID of the Milestone we want to move this Milestone after.",
          "type": "`$INTEGER`"
        },
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Milestone.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether the Milestone has been archived or not.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int64",
          "name": "before_id",
          "short": "The ID of the Milestone we want to move this Milestone before.",
          "type": "`$INTEGER`"
        },
        {
          "name": "categories",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of Categories attached to the Milestone.",
          "type": "`$ARRAY`"
        },
        {
          "name": "completed",
          "req": true,
          "short": "A true/false boolean indicating if the Milestone has been completed.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "completed_at",
          "req": true,
          "short": "The time/date the Milestone was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "completed_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Milestone was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date the Milestone was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The Milestone's description.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Milestone.",
          "type": "`$INTEGER`"
        },
        {
          "name": "key_result_ids",
          "req": true,
          "short": "The IDs of the Key Results associated with the Objective.",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Milestone.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "A number representing the position of the Milestone in relation to every other Milestone within the Workspace.",
          "type": "`$INTEGER`"
        },
        {
          "name": "started",
          "req": true,
          "short": "A true/false boolean indicating if the Milestone has been started.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "started_at",
          "req": true,
          "short": "The time/date the Milestone was started.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "started_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Milestone was started.",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The workflow state that the Milestone is in.",
          "type": "`$STRING`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "A group of calculated values for this Milestone.",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date the Milestone was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "milestone",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/milestones",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "milestones"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "categories": "`reqdata.category`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "description": "`reqdata.description`",
                  "name": "`reqdata.name`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "state": "`reqdata.state`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "milestones"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "category_id",
                    "orig": "category_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/categories/{category-public-id}/milestones",
              "rename": {
                "param": {
                  "category-public-id": "category_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "categories"
                },
                {
                  "var": "category_id"
                },
                {
                  "lit": "milestones"
                }
              ],
              "select": {
                "exist": [
                  "category_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "categories",
                "{category_id}",
                "milestones"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "category_id",
                    "orig": "category_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/categories/{category-public-id}/objectives",
              "rename": {
                "param": {
                  "category-public-id": "category_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "categories"
                },
                {
                  "var": "category_id"
                },
                {
                  "lit": "objectives"
                }
              ],
              "select": {
                "exist": [
                  "category_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "categories",
                "{category_id}",
                "objectives"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/milestones",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "milestones"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "milestones"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "milestone_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/milestones/{milestone-public-id}",
              "rename": {
                "param": {
                  "milestone-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "milestones"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "milestones",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "milestone_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/milestones/{milestone-public-id}",
              "rename": {
                "param": {
                  "milestone-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "milestones"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "milestones",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "milestone_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/milestones/{milestone-public-id}",
              "rename": {
                "param": {
                  "milestone-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "milestones"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "after_id": "`reqdata.after_id`",
                  "archived": "`reqdata.archived`",
                  "before_id": "`reqdata.before_id`",
                  "categories": "`reqdata.category`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "description": "`reqdata.description`",
                  "name": "`reqdata.name`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "state": "`reqdata.state`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "milestones",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "category"
          ]
        ]
      }
    },
    "objectif": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "objectif",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "objective_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/objectives/{objective-public-id}",
              "rename": {
                "param": {
                  "objective-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "objectives"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "objectives",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "objective": {
      "fields": [
        {
          "format": "int64",
          "name": "after_id",
          "short": "The ID of the Objective we want to move this Objective after.",
          "type": "`$INTEGER`"
        },
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Objective.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "A boolean indicating whether the Objective has been archived or not.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int64",
          "name": "before_id",
          "short": "The ID of the Objective we want to move this Objective before.",
          "type": "`$INTEGER`"
        },
        {
          "name": "categories",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of Categories attached to the Objective.",
          "type": "`$ARRAY`"
        },
        {
          "name": "completed",
          "req": true,
          "short": "A true/false boolean indicating if the Objectivehas been completed.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "completed_at",
          "req": true,
          "short": "The time/date the Objective was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "completed_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Objective was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date the Objective was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "list": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The Objective's description.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Objective.",
          "type": "`$INTEGER`"
        },
        {
          "name": "key_result_ids",
          "req": true,
          "short": "The IDs of the Key Results associated with the Objective.",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Objective.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "A number representing the position of the Objective in relation to every other Objective within the Workspace.",
          "type": "`$INTEGER`"
        },
        {
          "name": "started",
          "req": true,
          "short": "A true/false boolean indicating if the Objective has been started.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "started_at",
          "req": true,
          "short": "The time/date the Objective was started.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "started_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Objective was started.",
          "type": "`$STRING`"
        },
        {
          "name": "state",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The workflow state that the Objective is in.",
          "type": "`$STRING`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "A group of calculated values for this Objective.",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date the Objective was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "objective",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/objectives",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "objectives"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "categories": "`reqdata.category`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "description": "`reqdata.description`",
                  "name": "`reqdata.name`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "state": "`reqdata.state`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "objectives"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "detail",
                    "orig": "detail",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "entity_type",
                    "orig": "entity_type",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "next",
                    "orig": "next",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/search/milestones",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "search"
                },
                {
                  "lit": "milestones"
                }
              ],
              "select": {
                "exist": [
                  "detail",
                  "entity_type",
                  "next",
                  "page_size",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "v3",
                "search",
                "milestones"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "detail",
                    "orig": "detail",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "entity_type",
                    "orig": "entity_type",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "next",
                    "orig": "next",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/search/objectives",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "search"
                },
                {
                  "lit": "objectives"
                }
              ],
              "select": {
                "exist": [
                  "detail",
                  "entity_type",
                  "next",
                  "page_size",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "v3",
                "search",
                "objectives"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/objectives",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "objectives"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "objectives"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "objective_public_id",
                    "orig": "objective_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/objectives/{objective-public-id}",
              "rename": {
                "param": {
                  "objective-public-id": "objective_public_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "objectives"
                },
                {
                  "var": "objective_public_id"
                }
              ],
              "select": {
                "exist": [
                  "objective_public_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "objectives",
                "{objective_public_id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "objective_public_id",
                    "orig": "objective_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/objectives/{objective-public-id}",
              "rename": {
                "param": {
                  "objective-public-id": "objective_public_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "objectives"
                },
                {
                  "var": "objective_public_id"
                }
              ],
              "select": {
                "exist": [
                  "objective_public_id"
                ]
              },
              "transform": {
                "req": {
                  "after_id": "`reqdata.after_id`",
                  "archived": "`reqdata.archived`",
                  "before_id": "`reqdata.before_id`",
                  "categories": "`reqdata.category`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "description": "`reqdata.description`",
                  "name": "`reqdata.name`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "state": "`reqdata.state`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "objectives",
                "{objective_public_id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "objectif"
          ]
        ]
      }
    },
    "project": {
      "fields": [
        {
          "name": "abbreviation",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The Project abbreviation used in Story summaries.",
          "type": "`$STRING`"
        },
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Project.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "True/false boolean indicating whether the Project is in an Archived state.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "css-color",
          "name": "color",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The color associated with the Project in the Shortcut member interface.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date that the Project was created.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "days_to_thermometer",
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The number of days before the thermometer appears in the Story summary.",
          "type": "`$INTEGER`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The description of the Project.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "follower_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs for any Members listed as Followers.",
          "type": "`$ARRAY`"
        },
        {
          "name": "global_id",
          "req": true,
          "short": "The Global ID of the Project.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Project.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "iteration_length",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The number of weeks per iteration in this Project.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the Project",
          "type": "`$STRING`"
        },
        {
          "name": "show_thermometer",
          "op": {
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "Configuration to enable or disable thermometers in the Story summary.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "start_time",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The date at which the Project was started.",
          "type": "`$STRING`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "A group of calculated values for this Project.",
          "type": "`$OBJECT`"
        },
        {
          "format": "int64",
          "name": "team_id",
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the team the project belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date that the Project was last updated.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "workflow_id",
          "req": true,
          "short": "The ID of the workflow the project belongs to.",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "project",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/projects",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "projects"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "abbreviation": "`reqdata.abbreviation`",
                  "color": "`reqdata.color`",
                  "created_at": "`reqdata.created_at`",
                  "description": "`reqdata.description`",
                  "external_id": "`reqdata.external_id`",
                  "follower_ids": "`reqdata.follower_id`",
                  "iteration_length": "`reqdata.iteration_length`",
                  "name": "`reqdata.name`",
                  "start_time": "`reqdata.start_time`",
                  "team_id": "`reqdata.team_id`",
                  "updated_at": "`reqdata.updated_at`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "projects"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/projects",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "projects"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "projects"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "project_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/projects/{project-public-id}",
              "rename": {
                "param": {
                  "project-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "projects",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "project_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/projects/{project-public-id}",
              "rename": {
                "param": {
                  "project-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "projects",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "project_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/projects/{project-public-id}",
              "rename": {
                "param": {
                  "project-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "abbreviation": "`reqdata.abbreviation`",
                  "archived": "`reqdata.archived`",
                  "color": "`reqdata.color`",
                  "days_to_thermometer": "`reqdata.days_to_thermometer`",
                  "description": "`reqdata.description`",
                  "follower_ids": "`reqdata.follower_id`",
                  "name": "`reqdata.name`",
                  "show_thermometer": "`reqdata.show_thermometer`",
                  "team_id": "`reqdata.team_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "projects",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "repository": {
      "fields": [
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date the Repository was created.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "req": true,
          "short": "The VCS unique identifier for the Repository.",
          "type": "`$STRING`"
        },
        {
          "name": "full_name",
          "req": true,
          "short": "The full name of the VCS repository.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The ID associated to the VCS repository in Shortcut.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The shorthand name of the VCS repository.",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "req": true,
          "short": "The VCS provider for the Repository.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date the Repository was updated.",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "req": true,
          "short": "The URL of the Repository.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "repository",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/repositories",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "repositories"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "repositories"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "repo_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/repositories/{repo-public-id}",
              "rename": {
                "param": {
                  "repo-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "repositories"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "repositories",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "search": {
      "fields": [
        {
          "name": "epics",
          "req": true,
          "short": "The results of the Epic search query.",
          "type": "`$OBJECT`"
        },
        {
          "name": "iterations",
          "req": true,
          "short": "The results of the Iteration search query.",
          "type": "`$OBJECT`"
        },
        {
          "name": "milestones",
          "req": true,
          "short": "The results of the Objective search query.",
          "type": "`$OBJECT`"
        },
        {
          "name": "stories",
          "req": true,
          "short": "The results of the Story search query.",
          "type": "`$OBJECT`"
        }
      ],
      "name": "search",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "detail",
                    "orig": "detail",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "entity_type",
                    "orig": "entity_type",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "next",
                    "orig": "next",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/search",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "search"
                }
              ],
              "select": {
                "exist": [
                  "detail",
                  "entity_type",
                  "next",
                  "page_size",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "search"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "story": {
      "fields": [
        {
          "format": "int64",
          "name": "after_id",
          "short": "The ID of the story we want to move this story after.",
          "type": "`$INTEGER`"
        },
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Story.",
          "type": "`$STRING`"
        },
        {
          "name": "archived",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "True if the story has been archived or not.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int64",
          "name": "before_id",
          "short": "The ID of the story we want to move this story before.",
          "type": "`$INTEGER`"
        },
        {
          "name": "blocked",
          "req": true,
          "short": "A true/false boolean indicating if the Story is currently blocked.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "blocker",
          "req": true,
          "short": "A true/false boolean indicating if the Story is currently a blocker of another story.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "branch_ids",
          "short": "An array of IDs of Branches attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "branches",
          "op": {
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of Git branches attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "comment_ids",
          "op": {
            "list": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "An array of IDs of Comments attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "comments",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of comments attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "commit_ids",
          "short": "An array of IDs of Commits attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "commits",
          "op": {
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of commits attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "completed",
          "req": true,
          "short": "A true/false boolean indicating if the Story has been completed.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "completed_at",
          "req": true,
          "short": "The time/date the Story was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "completed_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Story was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Story was created.",
          "type": "`$STRING`"
        },
        {
          "name": "custom_fields",
          "short": "An array of CustomField value assertions for the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "custom_fields_add",
          "short": "A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
          "type": "`$ARRAY`"
        },
        {
          "name": "custom_fields_remove",
          "short": "A map specifying a CustomField ID.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "cycle_time",
          "short": "The cycle time (in seconds) of this story when complete.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "deadline",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The due date of the story.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "list": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The description of the story.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "epic_id",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the epic the story belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "estimate",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The numeric point estimate of the story.",
          "type": "`$INTEGER`"
        },
        {
          "name": "external_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "external_links",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of external links (strings) associated with a Story",
          "type": "`$ARRAY`"
        },
        {
          "name": "external_links_add",
          "short": "An array of External Links associated with this story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "external_links_remove",
          "short": "An array of External Links associated with this story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "file_ids",
          "op": {
            "list": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "An array of IDs of files attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "file_ids_add",
          "short": "An array of IDs of files attached to the story in addition to files from the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "file_ids_remove",
          "short": "An array of IDs of files removed from files from the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "files",
          "op": {
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of files attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "follower_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs for any Members listed as Followers.",
          "type": "`$ARRAY`"
        },
        {
          "name": "follower_ids_add",
          "short": "The UUIDs of the new followers to be added in addition to followers from the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "follower_ids_remove",
          "short": "The UUIDs of the new followers to be removed from followers from the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "formatted_vcs_branch_name",
          "short": "The formatted branch name for this story.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "group_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The ID of the group associated with the story.",
          "type": "`$STRING`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "An array of Group IDs that have been mentioned in the Story description.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Story.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "iteration_id",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the iteration the story belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "name": "label_ids",
          "req": true,
          "short": "An array of label ids attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of labels attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels_add",
          "short": "An array of labels attached to the story in addition to the labels provided by the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels_remove",
          "short": "An array of labels to remove from the labels provided by the template.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "lead_time",
          "short": "The lead time (in seconds) of this story when complete.",
          "type": "`$INTEGER`"
        },
        {
          "name": "linked_file_ids",
          "op": {
            "list": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "An array of IDs of linked files attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "linked_file_ids_add",
          "short": "An array of IDs of linked files attached to the story in addition to files from the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "linked_file_ids_remove",
          "short": "An array of IDs of linked files removed from files from the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "linked_files",
          "op": {
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of linked files attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "An array of Member IDs that have been mentioned in the Story description.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "name": "move_to",
          "short": "One of \"first\" or \"last\".",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "moved_at",
          "req": true,
          "short": "The time/date the Story was last changed workflow-state.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The name of the story.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "num_tasks_completed",
          "op": {
            "list": {
              "req": true,
              "type": "`$INTEGER`"
            }
          },
          "short": "The number of tasks on the story which are complete.",
          "type": "`$INTEGER`"
        },
        {
          "name": "owner_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs of the owners of this story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "owner_ids_add",
          "short": "The UUIDs of the new owners to be added in addition to owners from the template.",
          "type": "`$ARRAY`"
        },
        {
          "name": "owner_ids_remove",
          "short": "The UUIDs of the new owners to be removed from owners from the template.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "parent_story_id",
          "short": "The id of the parent story to associate with this story.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "A number representing the position of the story in relation to every other story in the current project.",
          "type": "`$INTEGER`"
        },
        {
          "name": "previous_iteration_ids",
          "req": true,
          "short": "The IDs of the iteration the story belongs to.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "project_id",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the project the story belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "name": "pull_request_ids",
          "short": "An array of IDs of Pull/Merge Requests attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "pull_requests",
          "op": {
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of Pull/Merge Requests attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "requested_by_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The ID of the Member that requested the story.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "source_task_id",
          "short": "Given this story was converted from a task in another story, this is the original task ID that was converted to this story.",
          "type": "`$INTEGER`"
        },
        {
          "name": "started",
          "req": true,
          "short": "A true/false boolean indicating if the Story has been started.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "started_at",
          "req": true,
          "short": "The time/date the Story was started.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "started_at_override",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "A manual override for the time/date the Story was started.",
          "type": "`$STRING`"
        },
        {
          "name": "stats",
          "req": true,
          "short": "The stats object for Stories",
          "type": "`$OBJECT`"
        },
        {
          "name": "story_links",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of story links attached to the Story.",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "story_template_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The ID of the story template used to create this story, or null if not created using a template.",
          "type": "`$STRING`"
        },
        {
          "name": "story_type",
          "op": {
            "create": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The type of story (feature, bug, chore).",
          "type": "`$STRING`"
        },
        {
          "name": "sub_task_story_ids",
          "type": "`$ARRAY`"
        },
        {
          "name": "sub_tasks",
          "short": "A list of either params to create a new sub-task or link an existing story as a sub-task",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 1
          }
        },
        {
          "name": "synced_item",
          "req": true,
          "short": "The synced item for the story.",
          "type": "`$OBJECT`"
        },
        {
          "name": "task_ids",
          "op": {
            "list": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "An array of IDs of Tasks attached to the story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "tasks",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "list": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of tasks connected to the story.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Story was updated.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "workflow_id",
          "req": true,
          "short": "The ID of the workflow the story belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "workflow_state_id",
          "op": {
            "create": {
              "type": "`$INTEGER`"
            },
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the workflow state the story is currently in.",
          "type": "`$INTEGER`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "story",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "archived": "`reqdata.archived`",
                  "comments": "`reqdata.comment`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "created_at": "`reqdata.created_at`",
                  "custom_fields": "`reqdata.custom_field`",
                  "deadline": "`reqdata.deadline`",
                  "description": "`reqdata.description`",
                  "epic_id": "`reqdata.epic_id`",
                  "estimate": "`reqdata.estimate`",
                  "external_id": "`reqdata.external_id`",
                  "external_links": "`reqdata.external_link`",
                  "file_ids": "`reqdata.file_id`",
                  "follower_ids": "`reqdata.follower_id`",
                  "group_id": "`reqdata.group_id`",
                  "iteration_id": "`reqdata.iteration_id`",
                  "labels": "`reqdata.label`",
                  "linked_file_ids": "`reqdata.linked_file_id`",
                  "move_to": "`reqdata.move_to`",
                  "name": "`reqdata.name`",
                  "owner_ids": "`reqdata.owner_id`",
                  "parent_story_id": "`reqdata.parent_story_id`",
                  "project_id": "`reqdata.project_id`",
                  "requested_by_id": "`reqdata.requested_by_id`",
                  "source_task_id": "`reqdata.source_task_id`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "story_links": "`reqdata.story_link`",
                  "story_template_id": "`reqdata.story_template_id`",
                  "story_type": "`reqdata.story_type`",
                  "sub_tasks": "`reqdata.sub_task`",
                  "tasks": "`reqdata.task`",
                  "updated_at": "`reqdata.updated_at`",
                  "workflow_state_id": "`reqdata.workflow_state_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories/from-template",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "lit": "from-template"
                }
              ],
              "select": {
                "$action": "from_template"
              },
              "transform": {
                "req": {
                  "archived": "`reqdata.archived`",
                  "comments": "`reqdata.comment`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "created_at": "`reqdata.created_at`",
                  "custom_fields": "`reqdata.custom_field`",
                  "custom_fields_add": "`reqdata.custom_fields_add`",
                  "custom_fields_remove": "`reqdata.custom_fields_remove`",
                  "deadline": "`reqdata.deadline`",
                  "description": "`reqdata.description`",
                  "epic_id": "`reqdata.epic_id`",
                  "estimate": "`reqdata.estimate`",
                  "external_id": "`reqdata.external_id`",
                  "external_links": "`reqdata.external_link`",
                  "external_links_add": "`reqdata.external_links_add`",
                  "external_links_remove": "`reqdata.external_links_remove`",
                  "file_ids": "`reqdata.file_id`",
                  "file_ids_add": "`reqdata.file_ids_add`",
                  "file_ids_remove": "`reqdata.file_ids_remove`",
                  "follower_ids": "`reqdata.follower_id`",
                  "follower_ids_add": "`reqdata.follower_ids_add`",
                  "follower_ids_remove": "`reqdata.follower_ids_remove`",
                  "group_id": "`reqdata.group_id`",
                  "iteration_id": "`reqdata.iteration_id`",
                  "labels": "`reqdata.label`",
                  "labels_add": "`reqdata.labels_add`",
                  "labels_remove": "`reqdata.labels_remove`",
                  "linked_file_ids": "`reqdata.linked_file_id`",
                  "linked_file_ids_add": "`reqdata.linked_file_ids_add`",
                  "linked_file_ids_remove": "`reqdata.linked_file_ids_remove`",
                  "move_to": "`reqdata.move_to`",
                  "name": "`reqdata.name`",
                  "owner_ids": "`reqdata.owner_id`",
                  "owner_ids_add": "`reqdata.owner_ids_add`",
                  "owner_ids_remove": "`reqdata.owner_ids_remove`",
                  "parent_story_id": "`reqdata.parent_story_id`",
                  "project_id": "`reqdata.project_id`",
                  "requested_by_id": "`reqdata.requested_by_id`",
                  "source_task_id": "`reqdata.source_task_id`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "story_links": "`reqdata.story_link`",
                  "story_template_id": "`reqdata.story_template_id`",
                  "story_type": "`reqdata.story_type`",
                  "sub_tasks": "`reqdata.sub_task`",
                  "tasks": "`reqdata.task`",
                  "updated_at": "`reqdata.updated_at`",
                  "workflow_state_id": "`reqdata.workflow_state_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "from-template"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "detail",
                    "orig": "detail",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "entity_type",
                    "orig": "entity_type",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "next",
                    "orig": "next",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "query",
                    "orig": "query",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/search/stories",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "search"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {
                "exist": [
                  "detail",
                  "entity_type",
                  "next",
                  "page_size",
                  "query"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "parts": [
                "api",
                "v3",
                "search",
                "stories"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "group_id",
                    "orig": "group_public_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/groups/{group-public-id}/stories",
              "rename": {
                "param": {
                  "group-public-id": "group_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "groups"
                },
                {
                  "var": "group_id"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {
                "exist": [
                  "group_id",
                  "limit",
                  "offset"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "groups",
                "{group_id}",
                "stories"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "includes_description",
                    "orig": "includes_description",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics/{epic-public-id}/stories",
              "rename": {
                "param": {
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {
                "exist": [
                  "epic_id",
                  "includes_description"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "stories"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "iteration_id",
                    "orig": "iteration_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "includes_description",
                    "orig": "includes_description",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/iterations/{iteration-public-id}/stories",
              "rename": {
                "param": {
                  "iteration-public-id": "iteration_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "iterations"
                },
                {
                  "var": "iteration_id"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {
                "exist": [
                  "includes_description",
                  "iteration_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "iterations",
                "{iteration_id}",
                "stories"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "label_id",
                    "orig": "label_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "includes_description",
                    "orig": "includes_description",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/labels/{label-public-id}/stories",
              "rename": {
                "param": {
                  "label-public-id": "label_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "labels"
                },
                {
                  "var": "label_id"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {
                "exist": [
                  "includes_description",
                  "label_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "labels",
                "{label_id}",
                "stories"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "project_id",
                    "orig": "project_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "kind": "query",
                    "name": "includes_description",
                    "orig": "includes_description",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/projects/{project-public-id}/stories",
              "rename": {
                "param": {
                  "project-public-id": "project_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "projects"
                },
                {
                  "var": "project_id"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {
                "exist": [
                  "includes_description",
                  "project_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "projects",
                "{project_id}",
                "stories"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "external_link",
                    "orig": "external_link",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/external-link/stories",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "external-link"
                },
                {
                  "lit": "stories"
                }
              ],
              "select": {
                "exist": [
                  "external_link"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "external-link",
                "stories"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/stories/{story-public-id}",
              "rename": {
                "param": {
                  "story-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/stories/{story-public-id}",
              "rename": {
                "param": {
                  "story-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/stories/{story-public-id}",
              "rename": {
                "param": {
                  "story-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "after_id": "`reqdata.after_id`",
                  "archived": "`reqdata.archived`",
                  "before_id": "`reqdata.before_id`",
                  "branch_ids": "`reqdata.branch_id`",
                  "commit_ids": "`reqdata.commit_id`",
                  "completed_at_override": "`reqdata.completed_at_override`",
                  "custom_fields": "`reqdata.custom_field`",
                  "deadline": "`reqdata.deadline`",
                  "description": "`reqdata.description`",
                  "epic_id": "`reqdata.epic_id`",
                  "estimate": "`reqdata.estimate`",
                  "external_links": "`reqdata.external_link`",
                  "file_ids": "`reqdata.file_id`",
                  "follower_ids": "`reqdata.follower_id`",
                  "group_id": "`reqdata.group_id`",
                  "iteration_id": "`reqdata.iteration_id`",
                  "labels": "`reqdata.label`",
                  "linked_file_ids": "`reqdata.linked_file_id`",
                  "move_to": "`reqdata.move_to`",
                  "name": "`reqdata.name`",
                  "owner_ids": "`reqdata.owner_id`",
                  "parent_story_id": "`reqdata.parent_story_id`",
                  "project_id": "`reqdata.project_id`",
                  "pull_request_ids": "`reqdata.pull_request_id`",
                  "requested_by_id": "`reqdata.requested_by_id`",
                  "started_at_override": "`reqdata.started_at_override`",
                  "story_type": "`reqdata.story_type`",
                  "workflow_state_id": "`reqdata.workflow_state_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "epic"
          ],
          [
            "group"
          ],
          [
            "iteration"
          ],
          [
            "label"
          ],
          [
            "project"
          ]
        ]
      }
    },
    "story_comment": {
      "fields": [
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Comment.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "author_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The unique ID of the Member who is the Comment's author.",
          "type": "`$STRING`"
        },
        {
          "name": "blocker",
          "short": "Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date when the Comment was created.",
          "type": "`$STRING`"
        },
        {
          "name": "deleted",
          "req": true,
          "short": "True/false boolean indicating whether the Comment has been deleted.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "The unique IDs of the Group who are mentioned in the Comment.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Comment.",
          "type": "`$INTEGER`"
        },
        {
          "name": "linked_to_slack",
          "req": true,
          "short": "Whether the Comment is currently the root of a thread that is linked to Slack.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "The unique IDs of the Member who are mentioned in the Comment.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "parent_id",
          "short": "The ID of the parent Comment this Comment is threaded under.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "The Comments numerical position in the list from oldest to newest.",
          "type": "`$INTEGER`"
        },
        {
          "name": "reactions",
          "req": true,
          "short": "A set of Reactions to this Comment.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "story_id",
          "req": true,
          "short": "The ID of the Story on which the Comment appears.",
          "type": "`$INTEGER`"
        },
        {
          "name": "text",
          "req": true,
          "short": "The text of the Comment.",
          "type": "`$STRING`"
        },
        {
          "name": "unblocks_parent",
          "short": "Marks the comment as an unblocker to its blocker parent.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date when the Comment was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "story_comment",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "comment_id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack",
              "rename": {
                "param": {
                  "comment-public-id": "comment_id",
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "comment_id"
                },
                {
                  "lit": "unlink-from-slack"
                }
              ],
              "select": {
                "exist": [
                  "comment_id",
                  "story_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "comments",
                "{comment_id}",
                "unlink-from-slack"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories/{story-public-id}/comments",
              "rename": {
                "param": {
                  "story-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "comments"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "author_id": "`reqdata.author_id`",
                  "created_at": "`reqdata.created_at`",
                  "external_id": "`reqdata.external_id`",
                  "parent_id": "`reqdata.parent_id`",
                  "text": "`reqdata.text`",
                  "updated_at": "`reqdata.updated_at`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{id}",
                "comments"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/stories/{story-public-id}/comments",
              "rename": {
                "param": {
                  "story-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "comments"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{id}",
                "comments"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
              "rename": {
                "param": {
                  "comment-public-id": "id",
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "story_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "comments",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
              "rename": {
                "param": {
                  "comment-public-id": "id",
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "story_id"
                ]
              },
              "transform": {
                "req": {
                  "text": "`reqdata.text`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "comments",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "story"
          ],
          [
            "story",
            "comment"
          ]
        ]
      }
    },
    "story_link": {
      "fields": [
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The time/date when the Story Link was created.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique identifier of the Story Link.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "object_id",
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the object Story.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "subject_id",
          "op": {
            "update": {
              "type": "`$INTEGER`"
            }
          },
          "req": true,
          "short": "The ID of the subject Story.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "subject_workflow_state_id",
          "req": true,
          "short": "The workflow state of the \"subject\" story.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The time/date when the Story Link was last updated.",
          "type": "`$STRING`"
        },
        {
          "name": "verb",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "How the subject Story acts on the object Story.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "story_link",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/story-links",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "story-links"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "object_id": "`reqdata.object_id`",
                  "subject_id": "`reqdata.subject_id`",
                  "verb": "`reqdata.verb`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "story-links"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_link_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/story-links/{story-link-public-id}",
              "rename": {
                "param": {
                  "story-link-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "story-links"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "story-links",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_link_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/story-links/{story-link-public-id}",
              "rename": {
                "param": {
                  "story-link-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "story-links"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "story-links",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "story_link_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/story-links/{story-link-public-id}",
              "rename": {
                "param": {
                  "story-link-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "story-links"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "object_id": "`reqdata.object_id`",
                  "subject_id": "`reqdata.subject_id`",
                  "verb": "`reqdata.verb`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "story-links",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "story_reaction": {
      "fields": [
        {
          "name": "emoji",
          "req": true,
          "short": "The emoji short-code to add / remove.",
          "type": "`$STRING`"
        }
      ],
      "name": "story_reaction",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "comment_id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
              "rename": {
                "param": {
                  "comment-public-id": "comment_id",
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "comment_id"
                },
                {
                  "lit": "reactions"
                }
              ],
              "select": {
                "exist": [
                  "comment_id",
                  "story_id"
                ]
              },
              "transform": {
                "req": {
                  "emoji": "`reqdata.emoji`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "comments",
                "{comment_id}",
                "reactions"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "comment_id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
              "rename": {
                "param": {
                  "comment-public-id": "comment_id",
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "comment_id"
                },
                {
                  "lit": "reactions"
                }
              ],
              "select": {
                "exist": [
                  "comment_id",
                  "story_id"
                ]
              },
              "transform": {
                "req": {
                  "emoji": "`reqdata.emoji`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "comments",
                "{comment_id}",
                "reactions"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "story",
            "comment"
          ]
        ]
      }
    },
    "story_slim": {
      "fields": [
        {
          "format": "int64",
          "name": "after_id",
          "short": "The ID of the story that the stories are to be moved below.",
          "type": "`$INTEGER`"
        },
        {
          "name": "archived",
          "short": "A true/false boolean indicating whether the Story is in archived state.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int64",
          "name": "before_id",
          "short": "The ID of the story that the stories are to be moved before.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "completed_at_end",
          "short": "Stories should have been completed on or before this date.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "completed_at_start",
          "short": "Stories should have been completed on or after this date.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at_end",
          "short": "Stories should have been created on or before this date.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at_start",
          "short": "Stories should have been created on or after this date.",
          "type": "`$STRING`"
        },
        {
          "name": "custom_fields_add",
          "short": "A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
          "type": "`$ARRAY`"
        },
        {
          "name": "custom_fields_remove",
          "short": "A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "deadline",
          "short": "The due date of the story.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "deadline_end",
          "short": "Stories should have a deadline on or before this date.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "deadline_start",
          "short": "Stories should have a deadline on or after this date.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "epic_id",
          "short": "The Epic IDs that may be associated with the Stories.",
          "type": "`$INTEGER`"
        },
        {
          "name": "epic_ids",
          "short": "The Epic IDs that may be associated with the Stories.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "estimate",
          "short": "The number of estimate points associate with the Stories.",
          "type": "`$INTEGER`"
        },
        {
          "name": "external_id",
          "short": "An ID or URL that references an external resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_links",
          "short": "An array of External Links associated with this story.",
          "type": "`$ARRAY`"
        },
        {
          "name": "follower_ids_add",
          "short": "The UUIDs of the new followers to be added.",
          "type": "`$ARRAY`"
        },
        {
          "name": "follower_ids_remove",
          "short": "The UUIDs of the followers to be removed.",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "group_id",
          "short": "The Group ID that is associated with the Stories",
          "type": "`$STRING`"
        },
        {
          "name": "group_ids",
          "short": "The Group IDs that are associated with the Stories",
          "type": "`$ARRAY`"
        },
        {
          "name": "includes_description",
          "short": "Whether to include the story description in the response.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "int64",
          "name": "iteration_id",
          "short": "The Iteration ID that may be associated with the Stories.",
          "type": "`$INTEGER`"
        },
        {
          "name": "iteration_ids",
          "short": "The Iteration IDs that may be associated with the Stories.",
          "type": "`$ARRAY`"
        },
        {
          "name": "label_ids",
          "short": "The Label IDs that may be associated with the Stories.",
          "type": "`$ARRAY`"
        },
        {
          "name": "label_name",
          "short": "The name of any associated Labels.",
          "type": "`$STRING`"
        },
        {
          "name": "labels_add",
          "short": "An array of labels to be added.",
          "type": "`$ARRAY`"
        },
        {
          "name": "labels_remove",
          "short": "An array of labels to be removed.",
          "type": "`$ARRAY`"
        },
        {
          "name": "move_to",
          "short": "One of \"first\" or \"last\".",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "owner_id",
          "short": "An array of UUIDs for any Users who may be Owners of the Stories.",
          "type": "`$STRING`"
        },
        {
          "name": "owner_ids",
          "short": "An array of UUIDs for any Users who may be Owners of the Stories.",
          "type": "`$ARRAY`"
        },
        {
          "name": "owner_ids_add",
          "short": "The UUIDs of the new owners to be added.",
          "type": "`$ARRAY`"
        },
        {
          "name": "owner_ids_remove",
          "short": "The UUIDs of the owners to be removed.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "project_id",
          "short": "The IDs for the Projects the Stories may be assigned to.",
          "type": "`$INTEGER`"
        },
        {
          "name": "project_ids",
          "short": "The IDs for the Projects the Stories may be assigned to.",
          "type": "`$ARRAY`"
        },
        {
          "format": "uuid",
          "name": "requested_by_id",
          "short": "The UUID of any Users who may have requested the Stories.",
          "type": "`$STRING`"
        },
        {
          "name": "stories",
          "req": true,
          "short": "An array of stories to be created.",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 4
          }
        },
        {
          "name": "story_ids",
          "req": true,
          "short": "The Ids of the Stories you wish to update.",
          "type": "`$ARRAY`"
        },
        {
          "name": "story_type",
          "short": "The type of Stories that you want returned.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at_end",
          "short": "Stories should have been updated on or before this date.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at_start",
          "short": "Stories should have been updated on or after this date.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "workflow_state_id",
          "short": "The unique IDs of the specific Workflow States that the Stories should be in.",
          "type": "`$INTEGER`"
        },
        {
          "name": "workflow_state_types",
          "short": "The type of Workflow State the Stories may be in.",
          "type": "`$ARRAY`"
        }
      ],
      "name": "story_slim",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories/bulk",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "lit": "bulk"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "stories": "`reqdata.story`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "bulk"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories/search",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "lit": "search"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "archived": "`reqdata.archived`",
                  "completed_at_end": "`reqdata.completed_at_end`",
                  "completed_at_start": "`reqdata.completed_at_start`",
                  "created_at_end": "`reqdata.created_at_end`",
                  "created_at_start": "`reqdata.created_at_start`",
                  "deadline_end": "`reqdata.deadline_end`",
                  "deadline_start": "`reqdata.deadline_start`",
                  "epic_id": "`reqdata.epic_id`",
                  "epic_ids": "`reqdata.epic_id`",
                  "estimate": "`reqdata.estimate`",
                  "external_id": "`reqdata.external_id`",
                  "group_id": "`reqdata.group_id`",
                  "group_ids": "`reqdata.group_id`",
                  "includes_description": "`reqdata.includes_description`",
                  "iteration_id": "`reqdata.iteration_id`",
                  "iteration_ids": "`reqdata.iteration_id`",
                  "label_ids": "`reqdata.label_id`",
                  "label_name": "`reqdata.label_name`",
                  "owner_id": "`reqdata.owner_id`",
                  "owner_ids": "`reqdata.owner_id`",
                  "project_id": "`reqdata.project_id`",
                  "project_ids": "`reqdata.project_id`",
                  "requested_by_id": "`reqdata.requested_by_id`",
                  "story_type": "`reqdata.story_type`",
                  "updated_at_end": "`reqdata.updated_at_end`",
                  "updated_at_start": "`reqdata.updated_at_start`",
                  "workflow_state_id": "`reqdata.workflow_state_id`",
                  "workflow_state_types": "`reqdata.workflow_state_type`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "search"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/stories/bulk",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "lit": "bulk"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "after_id": "`reqdata.after_id`",
                  "archived": "`reqdata.archived`",
                  "before_id": "`reqdata.before_id`",
                  "custom_fields_add": "`reqdata.custom_fields_add`",
                  "custom_fields_remove": "`reqdata.custom_fields_remove`",
                  "deadline": "`reqdata.deadline`",
                  "epic_id": "`reqdata.epic_id`",
                  "estimate": "`reqdata.estimate`",
                  "external_links": "`reqdata.external_link`",
                  "follower_ids_add": "`reqdata.follower_ids_add`",
                  "follower_ids_remove": "`reqdata.follower_ids_remove`",
                  "group_id": "`reqdata.group_id`",
                  "iteration_id": "`reqdata.iteration_id`",
                  "labels_add": "`reqdata.labels_add`",
                  "labels_remove": "`reqdata.labels_remove`",
                  "move_to": "`reqdata.move_to`",
                  "owner_ids_add": "`reqdata.owner_ids_add`",
                  "owner_ids_remove": "`reqdata.owner_ids_remove`",
                  "project_id": "`reqdata.project_id`",
                  "requested_by_id": "`reqdata.requested_by_id`",
                  "story_ids": "`reqdata.story_id`",
                  "story_type": "`reqdata.story_type`",
                  "workflow_state_id": "`reqdata.workflow_state_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "bulk"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "task": {
      "fields": [
        {
          "format": "int64",
          "name": "after_id",
          "short": "Move task after this task ID.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "before_id",
          "short": "Move task before this task ID.",
          "type": "`$INTEGER`"
        },
        {
          "name": "complete",
          "op": {
            "create": {
              "type": "`$BOOLEAN`"
            },
            "update": {
              "type": "`$BOOLEAN`"
            }
          },
          "req": true,
          "short": "True/false boolean indicating whether the Task has been completed.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "completed_at",
          "req": true,
          "short": "The time/date the Task was completed.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Task was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "Full text of the Task.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "global_id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "An array of UUIDs of Groups mentioned in this Task.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Task.",
          "type": "`$INTEGER`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "An array of UUIDs of Members mentioned in this Task.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "name": "owner_ids",
          "op": {
            "create": {
              "type": "`$ARRAY`"
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "req": true,
          "short": "An array of UUIDs of the Owners of this Task.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "position",
          "req": true,
          "short": "The number corresponding to the Task's position within a list of Tasks on a Story.",
          "type": "`$INTEGER`"
        },
        {
          "format": "int64",
          "name": "story_id",
          "req": true,
          "short": "The unique identifier of the parent Story.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Task was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "task",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/stories/{story-public-id}/tasks",
              "rename": {
                "param": {
                  "story-public-id": "story_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "tasks"
                }
              ],
              "select": {
                "exist": [
                  "story_id"
                ]
              },
              "transform": {
                "req": {
                  "complete": "`reqdata.complete`",
                  "created_at": "`reqdata.created_at`",
                  "description": "`reqdata.description`",
                  "external_id": "`reqdata.external_id`",
                  "owner_ids": "`reqdata.owner_id`",
                  "updated_at": "`reqdata.updated_at`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "tasks"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "task_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
              "rename": {
                "param": {
                  "story-public-id": "story_id",
                  "task-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "tasks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "story_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "tasks",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "task_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
              "rename": {
                "param": {
                  "story-public-id": "story_id",
                  "task-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "tasks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "story_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "tasks",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "task_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "story_id",
                    "orig": "story_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
              "rename": {
                "param": {
                  "story-public-id": "story_id",
                  "task-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "stories"
                },
                {
                  "var": "story_id"
                },
                {
                  "lit": "tasks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "story_id"
                ]
              },
              "transform": {
                "req": {
                  "after_id": "`reqdata.after_id`",
                  "before_id": "`reqdata.before_id`",
                  "complete": "`reqdata.complete`",
                  "description": "`reqdata.description`",
                  "owner_ids": "`reqdata.owner_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "stories",
                "{story_id}",
                "tasks",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "story"
          ]
        ]
      }
    },
    "threaded_comment": {
      "fields": [
        {
          "name": "app_url",
          "req": true,
          "short": "The Shortcut application url for the Comment.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "author_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The unique ID of the Member that authored the Comment.",
          "type": "`$STRING`"
        },
        {
          "name": "comments",
          "req": true,
          "short": "A nested array of threaded comments.",
          "type": "`$ARRAY`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Comment was created.",
          "type": "`$STRING`"
        },
        {
          "name": "deleted",
          "req": true,
          "short": "True/false boolean indicating whether the Comment is deleted.",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "An array of Group IDs that have been mentioned in this Comment.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Comment.",
          "type": "`$INTEGER`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "An array of Member IDs that have been mentioned in this Comment.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "name": "text",
          "req": true,
          "short": "The text of the Comment.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "op": {
            "create": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date the Comment was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "threaded_comment",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
              "rename": {
                "param": {
                  "comment-public-id": "id",
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "epic_id",
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "author_id": "`reqdata.author_id`",
                  "created_at": "`reqdata.created_at`",
                  "external_id": "`reqdata.external_id`",
                  "text": "`reqdata.text`",
                  "updated_at": "`reqdata.updated_at`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "comments",
                "{id}"
              ]
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/epics/{epic-public-id}/comments",
              "rename": {
                "param": {
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "comments"
                }
              ],
              "select": {
                "exist": [
                  "epic_id"
                ]
              },
              "transform": {
                "req": {
                  "author_id": "`reqdata.author_id`",
                  "created_at": "`reqdata.created_at`",
                  "external_id": "`reqdata.external_id`",
                  "text": "`reqdata.text`",
                  "updated_at": "`reqdata.updated_at`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "comments"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics/{epic-public-id}/comments",
              "rename": {
                "param": {
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "comments"
                }
              ],
              "select": {
                "exist": [
                  "epic_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "comments"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
              "rename": {
                "param": {
                  "comment-public-id": "id",
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "epic_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "comments",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
              "rename": {
                "param": {
                  "comment-public-id": "id",
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "epic_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "comments",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "epic_id",
                    "orig": "epic_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "comment_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
              "rename": {
                "param": {
                  "comment-public-id": "id",
                  "epic-public-id": "epic_id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "epics"
                },
                {
                  "var": "epic_id"
                },
                {
                  "lit": "comments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "epic_id",
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "text": "`reqdata.text`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "epics",
                "{epic_id}",
                "comments",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "epic"
          ]
        ]
      }
    },
    "uploaded_file": {
      "fields": [
        {
          "name": "content_type",
          "req": true,
          "short": "Free form string corresponding to a text or image file.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date that the file was created.",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The description of the file.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "name": "external_id",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "This field can be set to another unique ID.",
          "type": "`$STRING`"
        },
        {
          "name": "filename",
          "req": true,
          "short": "The name assigned to the file in Shortcut upon upload.",
          "type": "`$STRING`"
        },
        {
          "name": "group_mention_ids",
          "req": true,
          "short": "The unique IDs of the Groups who are mentioned in the file description.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID for the file.",
          "type": "`$INTEGER`"
        },
        {
          "name": "member_mention_ids",
          "req": true,
          "short": "The unique IDs of the Members who are mentioned in the file description.",
          "type": "`$ARRAY`"
        },
        {
          "name": "mention_ids",
          "req": true,
          "short": "`Deprecated:` use `member_mention_ids`.",
          "type": "`$ARRAY`"
        },
        {
          "name": "name",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The optional User-specified name of the file.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "size",
          "req": true,
          "short": "The size of the file.",
          "type": "`$INTEGER`"
        },
        {
          "name": "story_ids",
          "req": true,
          "short": "The unique IDs of the Stories associated with this file.",
          "type": "`$ARRAY`"
        },
        {
          "name": "thumbnail_url",
          "req": true,
          "short": "The url where the thumbnail of the file can be found in Shortcut.",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The time/date that the file was updated.",
          "type": "`$STRING`"
        },
        {
          "format": "uuid",
          "name": "uploader_id",
          "op": {
            "update": {
              "type": "`$STRING`"
            }
          },
          "req": true,
          "short": "The unique ID of the Member who uploaded the file.",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "req": true,
          "short": "The URL for the file.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "uploaded_file",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/files",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "files"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "files"
              ]
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/files",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "files"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "files"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "file_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/files/{file-public-id}",
              "rename": {
                "param": {
                  "file-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "files",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "file_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/files/{file-public-id}",
              "rename": {
                "param": {
                  "file-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "files",
                "{id}"
              ]
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "file_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/api/v3/files/{file-public-id}",
              "rename": {
                "param": {
                  "file-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "files"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": {
                  "created_at": "`reqdata.created_at`",
                  "description": "`reqdata.description`",
                  "external_id": "`reqdata.external_id`",
                  "name": "`reqdata.name`",
                  "updated_at": "`reqdata.updated_at`",
                  "uploader_id": "`reqdata.uploader_id`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "files",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webhook": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "secret",
          "type": "`$STRING`"
        },
        {
          "name": "webhook_url",
          "req": true,
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "webhook",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/v3/integrations/webhook",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "webhook"
                }
              ],
              "select": {},
              "transform": {
                "req": {
                  "secret": "`reqdata.secret`",
                  "webhook_url": "`reqdata.webhook_url`"
                },
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "integrations",
                "webhook"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "integration_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/integrations/webhook/{integration-public-id}",
              "rename": {
                "param": {
                  "integration-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "webhook"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "integrations",
                "webhook",
                "{id}"
              ]
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "integration_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/api/v3/integrations/webhook/{integration-public-id}",
              "rename": {
                "param": {
                  "integration-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "integrations"
                },
                {
                  "lit": "webhook"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "integrations",
                "webhook",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "workflow": {
      "fields": [
        {
          "name": "auto_assign_owner",
          "req": true,
          "short": "Indicates if an owner is automatically assigned when an unowned story is started.",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "date-time",
          "name": "created_at",
          "req": true,
          "short": "The date the Workflow was created.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "default_state_id",
          "req": true,
          "short": "The unique ID of the default state that new Stories are entered into.",
          "type": "`$INTEGER`"
        },
        {
          "name": "description",
          "req": true,
          "short": "A description of the workflow.",
          "type": "`$STRING`"
        },
        {
          "name": "entity_type",
          "req": true,
          "short": "A string description of this resource.",
          "type": "`$STRING`"
        },
        {
          "format": "int64",
          "name": "id",
          "req": true,
          "short": "The unique ID of the Workflow.",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The name of the workflow.",
          "type": "`$STRING`"
        },
        {
          "name": "project_ids",
          "req": true,
          "short": "An array of IDs of projects within the Workflow.",
          "type": "`$ARRAY`"
        },
        {
          "name": "states",
          "req": true,
          "short": "A map of the states in this Workflow.",
          "type": "`$ARRAY`"
        },
        {
          "format": "int64",
          "name": "team_id",
          "req": true,
          "short": "The ID of the team the workflow belongs to.",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "updated_at",
          "req": true,
          "short": "The date the Workflow was updated.",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "workflow",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/workflows",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "workflows"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "workflows"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "workflow_public_id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/v3/workflows/{workflow-public-id}",
              "rename": {
                "param": {
                  "workflow-public-id": "id"
                }
              },
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v3"
                },
                {
                  "lit": "workflows"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "v3",
                "workflows",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

