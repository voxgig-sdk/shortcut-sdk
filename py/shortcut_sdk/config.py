# Shortcut SDK configuration


def make_config():
    return {
        "main": {
            "name": "Shortcut",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.app.shortcut.com",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "bulk": {},
                "category": {},
                "comment": {},
                "custom_field": {},
                "disable": {},
                "doc_slim": {},
                "enable": {},
                "entity_template": {},
                "epic": {},
                "epic_paginated_result": {},
                "epic_unlink_productboard": {},
                "epic_workflow": {},
                "group": {},
                "health": {},
                "history": {},
                "iteration": {},
                "key_result": {},
                "label": {},
                "linked_file": {},
                "member": {},
                "milestone": {},
                "objectif": {},
                "objective": {},
                "project": {},
                "repository": {},
                "search": {},
                "story": {},
                "story_comment": {},
                "story_link": {},
                "story_reaction": {},
                "story_slim": {},
                "task": {},
                "threaded_comment": {},
                "uploaded_file": {},
                "webhook": {},
                "workflow": {},
            },
        },
        "entity": {
      "bulk": {
        "fields": [],
        "name": "bulk",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/stories/bulk",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "bulk",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "story_ids": "`reqdata.story_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "category": {
        "fields": [
          {
            "active": True,
            "name": "archived",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "color",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "type",
            "op": {
              "create": {
                "req": False,
                "type": "`$ANY`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "category",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/categories",
                "parts": [
                  "api",
                  "v3",
                  "categories",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "color": "`reqdata.color`",
                    "external_id": "`reqdata.external_id`",
                    "name": "`reqdata.name`",
                    "type": "`reqdata.type`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/categories",
                "parts": [
                  "api",
                  "v3",
                  "categories",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "category_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/categories/{category-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "categories",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "category-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "category_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/categories/{category-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "categories",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "category-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "category_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/categories/{category-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "categories",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "category-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "archived": "`reqdata.archived`",
                    "color": "`reqdata.color`",
                    "name": "`reqdata.name`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "comment": {
        "fields": [],
        "name": "comment",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "comments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "id",
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "story",
            ],
          ],
        },
      },
      "custom_field": {
        "fields": [
          {
            "active": True,
            "name": "after_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "before_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "canonical_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "enabled",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "field_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "fixed_position",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "icon_set_identifier",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "story_types",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "values",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
        ],
        "name": "custom_field",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/custom-fields",
                "parts": [
                  "api",
                  "v3",
                  "custom-fields",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "custom_field_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/custom-fields/{custom-field-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "custom-fields",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "custom-field-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "custom_field_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/custom-fields/{custom-field-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "custom-fields",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "custom-field-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "custom_field_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/custom-fields/{custom-field-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "custom-fields",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "custom-field-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "after_id": "`reqdata.after_id`",
                    "before_id": "`reqdata.before_id`",
                    "description": "`reqdata.description`",
                    "enabled": "`reqdata.enabled`",
                    "icon_set_identifier": "`reqdata.icon_set_identifier`",
                    "name": "`reqdata.name`",
                    "values": "`reqdata.value`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                "active": True,
                "args": {},
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/entity-templates/disable",
                "parts": [
                  "api",
                  "v3",
                  "entity-templates",
                  "disable",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/iterations/disable",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
                  "disable",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "doc_slim": {
        "fields": [
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "content",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "title",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "doc_slim",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/documents",
                "parts": [
                  "api",
                  "v3",
                  "documents",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "content": "`reqdata.content`",
                    "title": "`reqdata.title`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/documents",
                "parts": [
                  "api",
                  "v3",
                  "documents",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                "active": True,
                "args": {},
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/entity-templates/enable",
                "parts": [
                  "api",
                  "v3",
                  "entity-templates",
                  "enable",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/iterations/enable",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
                  "enable",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "entity_template": {
        "fields": [
          {
            "active": True,
            "name": "author_id",
            "op": {
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "custom_fields",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "deadline",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "entity_type",
            "op": {
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "epic_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "estimate",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "external_links",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "files",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "follower_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "group_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "iteration_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "label_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "labels",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "last_used_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "linked_files",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "owner_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "project_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "story_contents",
            "op": {
              "update": {
                "req": False,
                "type": "`$OBJECT`",
              },
            },
            "req": True,
            "type": "`$OBJECT`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "story_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "sub_tasks",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "tasks",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "workflow_state_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 26,
          },
        ],
        "name": "entity_template",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/entity-templates",
                "parts": [
                  "api",
                  "v3",
                  "entity-templates",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "author_id": "`reqdata.author_id`",
                    "name": "`reqdata.name`",
                    "story_contents": "`reqdata.story_content`",
                  },
                  "res": "`body.story_contents`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/entity-templates",
                "parts": [
                  "api",
                  "v3",
                  "entity-templates",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "entity_template_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/entity-templates/{entity-template-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "entity-templates",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "entity-template-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.story_contents`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "entity_template_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/entity-templates/{entity-template-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "entity-templates",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "entity-template-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "entity_template_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/entity-templates/{entity-template-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "entity-templates",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "entity-template-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "name": "`reqdata.name`",
                    "story_contents": "`reqdata.story_content`",
                  },
                  "res": "`body.story_contents`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "epic": {
        "fields": [
          {
            "active": True,
            "name": "after_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "archived",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "associated_groups",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "before_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "comments",
            "op": {
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "completed",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "completed_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "converted_from_story_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "created_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "deadline",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "epic_state_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "follower_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "group_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "group_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "health",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "label_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "labels",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "milestone_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "objective_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "owner_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "planned_start_date",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "productboard_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "productboard_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "productboard_plugin_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "productboard_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "project_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "requested_by_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "started",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "started_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "started_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "state",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 42,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 43,
          },
          {
            "active": True,
            "name": "stories_without_projects",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 44,
          },
          {
            "active": True,
            "name": "updated_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 45,
          },
        ],
        "name": "epic",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/epics",
                "parts": [
                  "api",
                  "v3",
                  "epics",
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
                    "updated_at": "`reqdata.updated_at`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "detail",
                      "orig": "detail",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "entity_type",
                      "orig": "entity_type",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "next",
                      "orig": "next",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/search/epics",
                "parts": [
                  "api",
                  "v3",
                  "search",
                  "epics",
                ],
                "select": {
                  "exist": [
                    "detail",
                    "entity_type",
                    "next",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "includes_description",
                      "orig": "includes_description",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                ],
                "select": {
                  "exist": [
                    "includes_description",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "label_id",
                      "orig": "label_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/labels/{label-public-id}/epics",
                "parts": [
                  "api",
                  "v3",
                  "labels",
                  "{label_id}",
                  "epics",
                ],
                "rename": {
                  "param": {
                    "label-public-id": "label_id",
                  },
                },
                "select": {
                  "exist": [
                    "label_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "milestone_id",
                      "orig": "milestone_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/milestones/{milestone-public-id}/epics",
                "parts": [
                  "api",
                  "v3",
                  "milestones",
                  "{milestone_id}",
                  "epics",
                ],
                "rename": {
                  "param": {
                    "milestone-public-id": "milestone_id",
                  },
                },
                "select": {
                  "exist": [
                    "milestone_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "objectif_id",
                      "orig": "objective_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/objectives/{objective-public-id}/epics",
                "parts": [
                  "api",
                  "v3",
                  "objectives",
                  "{objectif_id}",
                  "epics",
                ],
                "rename": {
                  "param": {
                    "objective-public-id": "objectif_id",
                  },
                },
                "select": {
                  "exist": [
                    "objectif_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 4,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics/{epic-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/epics/{epic-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/epics/{epic-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
                    "state": "`reqdata.state`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "label",
            ],
            [
              "milestone",
            ],
            [
              "objectif",
            ],
          ],
        },
      },
      "epic_paginated_result": {
        "fields": [
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "archived",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "associated_groups",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "completed",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "completed_at_override",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "deadline",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "epic_state_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "external_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "follower_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "group_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "group_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "label_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "labels",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "milestone_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "objective_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "owner_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "planned_start_date",
            "req": True,
            "type": "`$STRING`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "productboard_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "productboard_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "productboard_plugin_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "productboard_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "project_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "requested_by_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "started",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "started_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "started_at_override",
            "req": True,
            "type": "`$STRING`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "state",
            "req": True,
            "type": "`$STRING`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "stories_without_projects",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 40,
          },
        ],
        "name": "epic_paginated_result",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "includes_description",
                      "orig": "includes_description",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics/paginated",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "paginated",
                ],
                "select": {
                  "exist": [
                    "includes_description",
                    "page",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "epic_unlink_productboard": {
        "fields": [],
        "name": "epic_unlink_productboard",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/epics/{epic-public-id}/unlink-productboard",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{id}",
                  "unlink-productboard",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "epic_workflow": {
        "fields": [
          {
            "active": True,
            "name": "color",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "epic_workflow",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epic-workflow",
                "parts": [
                  "api",
                  "v3",
                  "epic-workflow",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.epic_states`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group": {
        "fields": [
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "archived",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "color",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "color_key",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "default_workflow_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "display_icon",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "display_icon_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "member_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "mention_name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "num_epics_started",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "num_stories",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "num_stories_backlog",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "num_stories_started",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "workflow_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 20,
          },
        ],
        "name": "group",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/groups",
                "parts": [
                  "api",
                  "v3",
                  "groups",
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
                    "workflow_ids": "`reqdata.workflow_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/groups",
                "parts": [
                  "api",
                  "v3",
                  "groups",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "group_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/groups/{group-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "groups",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "group-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "group_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/groups/{group-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "groups",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "group-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
                    "workflow_ids": "`reqdata.workflow_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "health": {
        "fields": [
          {
            "active": True,
            "name": "author_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "epic_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "objective_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "status",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "text",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "health",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/epics/{epic-public-id}/health",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "health",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                  ],
                },
                "transform": {
                  "req": {
                    "status": "`reqdata.status`",
                    "text": "`reqdata.text`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics/{epic-public-id}/health-history",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "health-history",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics/{epic-public-id}/health",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "health",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "health_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/health/{health-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "health",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "health-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "status": "`reqdata.status`",
                    "text": "`reqdata.text`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "epic",
            ],
          ],
        },
      },
      "history": {
        "fields": [
          {
            "active": True,
            "name": "actions",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "actor_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "automation_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "changed_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "external_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "member_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "primary_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "references",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "webhook_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "history",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/stories/{story-public-id}/history",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "history",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "story_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [
            [
              "story",
            ],
          ],
        },
      },
      "iteration": {
        "fields": [
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "associated_groups",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "end_date",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "follower_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "group_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "label_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "labels",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "start_date",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 19,
          },
        ],
        "name": "iteration",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/iterations",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
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
                    "start_date": "`reqdata.start_date`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "detail",
                      "orig": "detail",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "entity_type",
                      "orig": "entity_type",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "next",
                      "orig": "next",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/search/iterations",
                "parts": [
                  "api",
                  "v3",
                  "search",
                  "iterations",
                ],
                "select": {
                  "exist": [
                    "detail",
                    "entity_type",
                    "next",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/iterations",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "iteration_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/iterations/{iteration-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "iteration-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "iteration_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/iterations/{iteration-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "iteration-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "iteration_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/iterations/{iteration-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "iteration-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "description": "`reqdata.description`",
                    "end_date": "`reqdata.end_date`",
                    "follower_ids": "`reqdata.follower_id`",
                    "group_ids": "`reqdata.group_id`",
                    "labels": "`reqdata.label`",
                    "name": "`reqdata.name`",
                    "start_date": "`reqdata.start_date`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "key_result": {
        "fields": [
          {
            "active": True,
            "name": "current_observed_value",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "current_target_value",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "initial_observed_value",
            "op": {
              "update": {
                "req": False,
                "type": "`$OBJECT`",
              },
            },
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "objective_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "observed_value",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "progress",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "target_value",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "key_result",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "key_result_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/key-results/{key-result-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "key-results",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "key-result-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "key_result_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/key-results/{key-result-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "key-results",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "key-result-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "initial_observed_value": "`reqdata.initial_observed_value`",
                    "name": "`reqdata.name`",
                    "observed_value": "`reqdata.observed_value`",
                    "target_value": "`reqdata.target_value`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "label": {
        "fields": [
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "archived",
            "op": {
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "color",
            "op": {
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "num_epics",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "num_epics_completed",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "num_epics_in_progress",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "num_epics_total",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "num_epics_unstarted",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "num_points_backlog",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "num_points_completed",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "num_points_in_progress",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "num_points_total",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "num_points_unstarted",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "num_related_documents",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "num_stories_backlog",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "num_stories_completed",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "num_stories_in_progress",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "num_stories_total",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "num_stories_unestimated",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "num_stories_unstarted",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 28,
          },
        ],
        "name": "label",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/labels",
                "parts": [
                  "api",
                  "v3",
                  "labels",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "color": "`reqdata.color`",
                    "description": "`reqdata.description`",
                    "external_id": "`reqdata.external_id`",
                    "name": "`reqdata.name`",
                  },
                  "res": "`body.stats`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "slim",
                      "orig": "slim",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/labels",
                "parts": [
                  "api",
                  "v3",
                  "labels",
                ],
                "select": {
                  "exist": [
                    "slim",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "label_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/labels/{label-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "labels",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "label-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.stats`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "label_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/labels/{label-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "labels",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "label-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "label_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/labels/{label-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "labels",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "label-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "archived": "`reqdata.archived`",
                    "color": "`reqdata.color`",
                    "description": "`reqdata.description`",
                    "name": "`reqdata.name`",
                  },
                  "res": "`body.stats`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "linked_file": {
        "fields": [
          {
            "active": True,
            "name": "content_type",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "size",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "story_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "story_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "thumbnail_url",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "type",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "uploader_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "url",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
        ],
        "name": "linked_file",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/linked-files",
                "parts": [
                  "api",
                  "v3",
                  "linked-files",
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
                    "url": "`reqdata.url`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/linked-files",
                "parts": [
                  "api",
                  "v3",
                  "linked-files",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "linked_file_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/linked-files/{linked-file-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "linked-files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "linked-file-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "linked_file_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/linked-files/{linked-file-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "linked-files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "linked-file-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "linked_file_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/linked-files/{linked-file-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "linked-files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "linked-file-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
                    "url": "`reqdata.url`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "member": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_without_invite",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "disabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "group_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "installation_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "is_owner",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "mention_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "organization2",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "profile",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "replaced_by",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "role",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "state",
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "workspace2",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 17,
          },
        ],
        "name": "member",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "disabled",
                      "orig": "disabled",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "org_public_id",
                      "orig": "org_public_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/members",
                "parts": [
                  "api",
                  "v3",
                  "members",
                ],
                "select": {
                  "exist": [
                    "disabled",
                    "org_public_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "member_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "org_public_id",
                      "orig": "org_public_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/members/{member-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "members",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "member-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "org_public_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/member",
                "parts": [
                  "api",
                  "v3",
                  "member",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "milestone": {
        "fields": [
          {
            "active": True,
            "name": "after_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "archived",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "before_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "categories",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "completed",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "completed_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "key_result_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "started",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "started_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "started_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "state",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 21,
          },
        ],
        "name": "milestone",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/milestones",
                "parts": [
                  "api",
                  "v3",
                  "milestones",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "categories": "`reqdata.category`",
                    "completed_at_override": "`reqdata.completed_at_override`",
                    "description": "`reqdata.description`",
                    "name": "`reqdata.name`",
                    "started_at_override": "`reqdata.started_at_override`",
                    "state": "`reqdata.state`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "category_id",
                      "orig": "category_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/categories/{category-public-id}/milestones",
                "parts": [
                  "api",
                  "v3",
                  "categories",
                  "{category_id}",
                  "milestones",
                ],
                "rename": {
                  "param": {
                    "category-public-id": "category_id",
                  },
                },
                "select": {
                  "exist": [
                    "category_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "category_id",
                      "orig": "category_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/categories/{category-public-id}/objectives",
                "parts": [
                  "api",
                  "v3",
                  "categories",
                  "{category_id}",
                  "objectives",
                ],
                "rename": {
                  "param": {
                    "category-public-id": "category_id",
                  },
                },
                "select": {
                  "exist": [
                    "category_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/milestones",
                "parts": [
                  "api",
                  "v3",
                  "milestones",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "milestone_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/milestones/{milestone-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "milestones",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "milestone-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "milestone_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/milestones/{milestone-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "milestones",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "milestone-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "milestone_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/milestones/{milestone-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "milestones",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "milestone-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
                    "state": "`reqdata.state`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "category",
            ],
          ],
        },
      },
      "objectif": {
        "fields": [],
        "name": "objectif",
        "op": {
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "objective_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/objectives/{objective-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "objectives",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "objective-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "objective": {
        "fields": [
          {
            "active": True,
            "name": "after_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "archived",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "before_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "categories",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "completed",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "completed_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "key_result_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "started",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "started_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "started_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "state",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 21,
          },
        ],
        "name": "objective",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/objectives",
                "parts": [
                  "api",
                  "v3",
                  "objectives",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "categories": "`reqdata.category`",
                    "completed_at_override": "`reqdata.completed_at_override`",
                    "description": "`reqdata.description`",
                    "name": "`reqdata.name`",
                    "started_at_override": "`reqdata.started_at_override`",
                    "state": "`reqdata.state`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "detail",
                      "orig": "detail",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "entity_type",
                      "orig": "entity_type",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "next",
                      "orig": "next",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/search/milestones",
                "parts": [
                  "api",
                  "v3",
                  "search",
                  "milestones",
                ],
                "select": {
                  "exist": [
                    "detail",
                    "entity_type",
                    "next",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "detail",
                      "orig": "detail",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "entity_type",
                      "orig": "entity_type",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "next",
                      "orig": "next",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/search/objectives",
                "parts": [
                  "api",
                  "v3",
                  "search",
                  "objectives",
                ],
                "select": {
                  "exist": [
                    "detail",
                    "entity_type",
                    "next",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/objectives",
                "parts": [
                  "api",
                  "v3",
                  "objectives",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "objective_public_id",
                      "orig": "objective_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/objectives/{objective-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "objectives",
                  "{objective_public_id}",
                ],
                "rename": {
                  "param": {
                    "objective-public-id": "objective_public_id",
                  },
                },
                "select": {
                  "exist": [
                    "objective_public_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "objective_public_id",
                      "orig": "objective_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/objectives/{objective-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "objectives",
                  "{objective_public_id}",
                ],
                "rename": {
                  "param": {
                    "objective-public-id": "objective_public_id",
                  },
                },
                "select": {
                  "exist": [
                    "objective_public_id",
                  ],
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
                    "state": "`reqdata.state`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "objectif",
            ],
          ],
        },
      },
      "project": {
        "fields": [
          {
            "active": True,
            "name": "abbreviation",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "archived",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "color",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "days_to_thermometer",
            "op": {
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "follower_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "iteration_length",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "show_thermometer",
            "op": {
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "start_time",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "team_id",
            "op": {
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "updated_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "workflow_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 19,
          },
        ],
        "name": "project",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/projects",
                "parts": [
                  "api",
                  "v3",
                  "projects",
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
                    "updated_at": "`reqdata.updated_at`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/projects",
                "parts": [
                  "api",
                  "v3",
                  "projects",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "project_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/projects/{project-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "projects",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "project-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "project_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/projects/{project-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "projects",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "project-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "project_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/projects/{project-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "projects",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "project-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
                    "team_id": "`reqdata.team_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "repository": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "external_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "full_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "repository",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/repositories",
                "parts": [
                  "api",
                  "v3",
                  "repositories",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "repo_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/repositories/{repo-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "repositories",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "repo-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "search": {
        "fields": [
          {
            "active": True,
            "name": "epics",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "iterations",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "milestones",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "stories",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
        ],
        "name": "search",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "detail",
                      "orig": "detail",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "entity_type",
                      "orig": "entity_type",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "next",
                      "orig": "next",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/search",
                "parts": [
                  "api",
                  "v3",
                  "search",
                ],
                "select": {
                  "exist": [
                    "detail",
                    "entity_type",
                    "next",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "story": {
        "fields": [
          {
            "active": True,
            "name": "after_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "archived",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "before_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "blocked",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "blocker",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "branch_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "branches",
            "op": {
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "comment_ids",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "req": False,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "comments",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "commit_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "commits",
            "op": {
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "completed",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "completed_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "created_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "custom_fields",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "custom_fields_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "custom_fields_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "cycle_time",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "deadline",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "list": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "epic_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "estimate",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "external_links",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "external_links_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "external_links_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "file_ids",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "req": False,
            "type": "`$ARRAY`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "file_ids_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "file_ids_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "files",
            "op": {
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "follower_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "follower_ids_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "follower_ids_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "formatted_vcs_branch_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "group_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "iteration_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "label_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 42,
          },
          {
            "active": True,
            "name": "labels",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 43,
          },
          {
            "active": True,
            "name": "labels_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 44,
          },
          {
            "active": True,
            "name": "labels_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 45,
          },
          {
            "active": True,
            "name": "lead_time",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 46,
          },
          {
            "active": True,
            "name": "linked_file_ids",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "req": False,
            "type": "`$ARRAY`",
            "index$": 47,
          },
          {
            "active": True,
            "name": "linked_file_ids_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 48,
          },
          {
            "active": True,
            "name": "linked_file_ids_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 49,
          },
          {
            "active": True,
            "name": "linked_files",
            "op": {
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 50,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 51,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 52,
          },
          {
            "active": True,
            "name": "move_to",
            "req": False,
            "type": "`$STRING`",
            "index$": 53,
          },
          {
            "active": True,
            "name": "moved_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 54,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 55,
          },
          {
            "active": True,
            "name": "num_tasks_completed",
            "op": {
              "list": {
                "req": True,
                "type": "`$INTEGER`",
              },
            },
            "req": False,
            "type": "`$INTEGER`",
            "index$": 56,
          },
          {
            "active": True,
            "name": "owner_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 57,
          },
          {
            "active": True,
            "name": "owner_ids_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 58,
          },
          {
            "active": True,
            "name": "owner_ids_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 59,
          },
          {
            "active": True,
            "name": "parent_story_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 60,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 61,
          },
          {
            "active": True,
            "name": "previous_iteration_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 62,
          },
          {
            "active": True,
            "name": "project_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 63,
          },
          {
            "active": True,
            "name": "pull_request_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 64,
          },
          {
            "active": True,
            "name": "pull_requests",
            "op": {
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 65,
          },
          {
            "active": True,
            "name": "requested_by_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 66,
          },
          {
            "active": True,
            "name": "source_task_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 67,
          },
          {
            "active": True,
            "name": "started",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 68,
          },
          {
            "active": True,
            "name": "started_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 69,
          },
          {
            "active": True,
            "name": "started_at_override",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 70,
          },
          {
            "active": True,
            "name": "stats",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 71,
          },
          {
            "active": True,
            "name": "story_links",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 72,
          },
          {
            "active": True,
            "name": "story_template_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 73,
          },
          {
            "active": True,
            "name": "story_type",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 74,
          },
          {
            "active": True,
            "name": "sub_task_story_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 75,
          },
          {
            "active": True,
            "name": "sub_tasks",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 76,
          },
          {
            "active": True,
            "name": "synced_item",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 77,
          },
          {
            "active": True,
            "name": "task_ids",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "req": False,
            "type": "`$ARRAY`",
            "index$": 78,
          },
          {
            "active": True,
            "name": "tasks",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "list": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 79,
          },
          {
            "active": True,
            "name": "updated_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 80,
          },
          {
            "active": True,
            "name": "workflow_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 81,
          },
          {
            "active": True,
            "name": "workflow_state_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 82,
          },
        ],
        "name": "story",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories",
                "parts": [
                  "api",
                  "v3",
                  "stories",
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
                    "workflow_state_id": "`reqdata.workflow_state_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories/from-template",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "from-template",
                ],
                "select": {
                  "$action": "from_template",
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
                    "workflow_state_id": "`reqdata.workflow_state_id`",
                  },
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "detail",
                      "orig": "detail",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "entity_type",
                      "orig": "entity_type",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "next",
                      "orig": "next",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "query",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/search/stories",
                "parts": [
                  "api",
                  "v3",
                  "search",
                  "stories",
                ],
                "select": {
                  "exist": [
                    "detail",
                    "entity_type",
                    "next",
                    "page_size",
                    "query",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "group_id",
                      "orig": "group_public_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/groups/{group-public-id}/stories",
                "parts": [
                  "api",
                  "v3",
                  "groups",
                  "{group_id}",
                  "stories",
                ],
                "rename": {
                  "param": {
                    "group-public-id": "group_id",
                  },
                },
                "select": {
                  "exist": [
                    "group_id",
                    "limit",
                    "offset",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "includes_description",
                      "orig": "includes_description",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics/{epic-public-id}/stories",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "stories",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                    "includes_description",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "iteration_id",
                      "orig": "iteration_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "includes_description",
                      "orig": "includes_description",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/iterations/{iteration-public-id}/stories",
                "parts": [
                  "api",
                  "v3",
                  "iterations",
                  "{iteration_id}",
                  "stories",
                ],
                "rename": {
                  "param": {
                    "iteration-public-id": "iteration_id",
                  },
                },
                "select": {
                  "exist": [
                    "includes_description",
                    "iteration_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 3,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "label_id",
                      "orig": "label_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "includes_description",
                      "orig": "includes_description",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/labels/{label-public-id}/stories",
                "parts": [
                  "api",
                  "v3",
                  "labels",
                  "{label_id}",
                  "stories",
                ],
                "rename": {
                  "param": {
                    "label-public-id": "label_id",
                  },
                },
                "select": {
                  "exist": [
                    "includes_description",
                    "label_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 4,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "project_id",
                      "orig": "project_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "includes_description",
                      "orig": "includes_description",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/projects/{project-public-id}/stories",
                "parts": [
                  "api",
                  "v3",
                  "projects",
                  "{project_id}",
                  "stories",
                ],
                "rename": {
                  "param": {
                    "project-public-id": "project_id",
                  },
                },
                "select": {
                  "exist": [
                    "includes_description",
                    "project_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 5,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "kind": "query",
                      "name": "external_link",
                      "orig": "external_link",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/external-link/stories",
                "parts": [
                  "api",
                  "v3",
                  "external-link",
                  "stories",
                ],
                "select": {
                  "exist": [
                    "external_link",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 6,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/stories/{story-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/stories/{story-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/stories/{story-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
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
                    "workflow_state_id": "`reqdata.workflow_state_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "epic",
            ],
            [
              "group",
            ],
            [
              "iteration",
            ],
            [
              "label",
            ],
            [
              "project",
            ],
          ],
        },
      },
      "story_comment": {
        "fields": [
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "author_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "blocker",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "deleted",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "linked_to_slack",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "parent_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "reactions",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "story_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "text",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "unblocks_parent",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "updated_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
        ],
        "name": "story_comment",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "comment_id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "comments",
                  "{comment_id}",
                  "unlink-from-slack",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "comment_id",
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "comment_id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories/{story-public-id}/comments",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{id}",
                  "comments",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "author_id": "`reqdata.author_id`",
                    "created_at": "`reqdata.created_at`",
                    "external_id": "`reqdata.external_id`",
                    "parent_id": "`reqdata.parent_id`",
                    "text": "`reqdata.text`",
                    "updated_at": "`reqdata.updated_at`",
                  },
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/stories/{story-public-id}/comments",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{id}",
                  "comments",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "comments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "id",
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "comments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "id",
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": {
                    "text": "`reqdata.text`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "story",
            ],
            [
              "story",
              "comment",
            ],
          ],
        },
      },
      "story_link": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "object_id",
            "op": {
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "subject_id",
            "op": {
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "subject_workflow_state_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "verb",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
        ],
        "name": "story_link",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/story-links",
                "parts": [
                  "api",
                  "v3",
                  "story-links",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "object_id": "`reqdata.object_id`",
                    "subject_id": "`reqdata.subject_id`",
                    "verb": "`reqdata.verb`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_link_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/story-links/{story-link-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "story-links",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-link-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_link_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/story-links/{story-link-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "story-links",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-link-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "story_link_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/story-links/{story-link-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "story-links",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-link-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "object_id": "`reqdata.object_id`",
                    "subject_id": "`reqdata.subject_id`",
                    "verb": "`reqdata.verb`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "story_reaction": {
        "fields": [
          {
            "active": True,
            "name": "emoji",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
        ],
        "name": "story_reaction",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "comment_id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "comments",
                  "{comment_id}",
                  "reactions",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "comment_id",
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "comment_id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": {
                    "emoji": "`reqdata.emoji`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "comment_id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "comments",
                  "{comment_id}",
                  "reactions",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "comment_id",
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "comment_id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": {
                    "emoji": "`reqdata.emoji`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [
            [
              "story",
              "comment",
            ],
          ],
        },
      },
      "story_slim": {
        "fields": [
          {
            "active": True,
            "name": "after_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "archived",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "before_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "completed_at_end",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "completed_at_start",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "created_at_end",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "created_at_start",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "custom_fields_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "custom_fields_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "deadline",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "deadline_end",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "deadline_start",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "epic_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "epic_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "estimate",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "external_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "external_links",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "follower_ids_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "follower_ids_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "group_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "group_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "includes_description",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "iteration_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "iteration_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "label_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "label_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "labels_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "labels_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "move_to",
            "req": False,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "owner_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "owner_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "owner_ids_add",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "owner_ids_remove",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "project_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "project_ids",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "requested_by_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "stories",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "story_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "story_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "updated_at_end",
            "req": False,
            "type": "`$STRING`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "updated_at_start",
            "req": False,
            "type": "`$STRING`",
            "index$": 40,
          },
          {
            "active": True,
            "name": "workflow_state_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 41,
          },
          {
            "active": True,
            "name": "workflow_state_types",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 42,
          },
        ],
        "name": "story_slim",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories/bulk",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "bulk",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "stories": "`reqdata.story`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories/search",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "search",
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
                    "workflow_state_types": "`reqdata.workflow_state_type`",
                  },
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/stories/bulk",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "bulk",
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
                    "workflow_state_id": "`reqdata.workflow_state_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "task": {
        "fields": [
          {
            "active": True,
            "name": "after_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "before_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "complete",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "global_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "owner_ids",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "position",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "story_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "updated_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
        ],
        "name": "task",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/stories/{story-public-id}/tasks",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "tasks",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "story_id",
                  },
                },
                "select": {
                  "exist": [
                    "story_id",
                  ],
                },
                "transform": {
                  "req": {
                    "complete": "`reqdata.complete`",
                    "created_at": "`reqdata.created_at`",
                    "description": "`reqdata.description`",
                    "external_id": "`reqdata.external_id`",
                    "owner_ids": "`reqdata.owner_id`",
                    "updated_at": "`reqdata.updated_at`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "task_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "tasks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "story_id",
                    "task-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "task_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "tasks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "story_id",
                    "task-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "task_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "story_id",
                      "orig": "story_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "stories",
                  "{story_id}",
                  "tasks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "story-public-id": "story_id",
                    "task-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                    "story_id",
                  ],
                },
                "transform": {
                  "req": {
                    "after_id": "`reqdata.after_id`",
                    "before_id": "`reqdata.before_id`",
                    "complete": "`reqdata.complete`",
                    "description": "`reqdata.description`",
                    "owner_ids": "`reqdata.owner_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "story",
            ],
          ],
        },
      },
      "threaded_comment": {
        "fields": [
          {
            "active": True,
            "name": "app_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "author_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "comments",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "deleted",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "text",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "updated_at",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
        ],
        "name": "threaded_comment",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "comments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "id",
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "author_id": "`reqdata.author_id`",
                    "created_at": "`reqdata.created_at`",
                    "external_id": "`reqdata.external_id`",
                    "text": "`reqdata.text`",
                    "updated_at": "`reqdata.updated_at`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/epics/{epic-public-id}/comments",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "comments",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                  ],
                },
                "transform": {
                  "req": {
                    "author_id": "`reqdata.author_id`",
                    "created_at": "`reqdata.created_at`",
                    "external_id": "`reqdata.external_id`",
                    "text": "`reqdata.text`",
                    "updated_at": "`reqdata.updated_at`",
                  },
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics/{epic-public-id}/comments",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "comments",
                ],
                "rename": {
                  "param": {
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "comments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "id",
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "comments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "id",
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "epic_id",
                      "orig": "epic_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "comment_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 1,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "epics",
                  "{epic_id}",
                  "comments",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "comment-public-id": "id",
                    "epic-public-id": "epic_id",
                  },
                },
                "select": {
                  "exist": [
                    "epic_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "text": "`reqdata.text`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "epic",
            ],
          ],
        },
      },
      "uploaded_file": {
        "fields": [
          {
            "active": True,
            "name": "content_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "external_id",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "filename",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "group_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "member_mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "mention_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "size",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "story_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "thumbnail_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "updated_at",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "uploader_id",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "url",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
        ],
        "name": "uploaded_file",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/files",
                "parts": [
                  "api",
                  "v3",
                  "files",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/files",
                "parts": [
                  "api",
                  "v3",
                  "files",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "file_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/files/{file-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "file-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "file_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/files/{file-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "file-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "file_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "PUT",
                "orig": "/api/v3/files/{file-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "files",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "file-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "created_at": "`reqdata.created_at`",
                    "description": "`reqdata.description`",
                    "external_id": "`reqdata.external_id`",
                    "name": "`reqdata.name`",
                    "updated_at": "`reqdata.updated_at`",
                    "uploader_id": "`reqdata.uploader_id`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "webhook": {
        "fields": [
          {
            "active": True,
            "name": "secret",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "webhook_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "webhook",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "POST",
                "orig": "/api/v3/integrations/webhook",
                "parts": [
                  "api",
                  "v3",
                  "integrations",
                  "webhook",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "secret": "`reqdata.secret`",
                    "webhook_url": "`reqdata.webhook_url`",
                  },
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "integration_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/integrations/webhook/{integration-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "integrations",
                  "webhook",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "integration-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "integration_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "DELETE",
                "orig": "/api/v3/integrations/webhook/{integration-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "integrations",
                  "webhook",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "integration-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "workflow": {
        "fields": [
          {
            "active": True,
            "name": "auto_assign_owner",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "default_state_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "entity_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "project_ids",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "states",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "team_id",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "workflow",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/workflows",
                "parts": [
                  "api",
                  "v3",
                  "workflows",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "kind": "param",
                      "name": "id",
                      "orig": "workflow_public_id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/v3/workflows/{workflow-public-id}",
                "parts": [
                  "api",
                  "v3",
                  "workflows",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "workflow-public-id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
