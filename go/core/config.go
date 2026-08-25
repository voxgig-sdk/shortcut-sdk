package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Shortcut",
			"slug": "shortcut",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.app.shortcut.com",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"bulk": map[string]any{},
				"category": map[string]any{},
				"comment": map[string]any{},
				"custom_field": map[string]any{},
				"disable": map[string]any{},
				"doc_slim": map[string]any{},
				"enable": map[string]any{},
				"entity_template": map[string]any{},
				"epic": map[string]any{},
				"epic_paginated_result": map[string]any{},
				"epic_unlink_productboard": map[string]any{},
				"epic_workflow": map[string]any{},
				"group": map[string]any{},
				"health": map[string]any{},
				"history": map[string]any{},
				"iteration": map[string]any{},
				"key_result": map[string]any{},
				"label": map[string]any{},
				"linked_file": map[string]any{},
				"member": map[string]any{},
				"milestone": map[string]any{},
				"objectif": map[string]any{},
				"objective": map[string]any{},
				"project": map[string]any{},
				"repository": map[string]any{},
				"search": map[string]any{},
				"story": map[string]any{},
				"story_comment": map[string]any{},
				"story_link": map[string]any{},
				"story_reaction": map[string]any{},
				"story_slim": map[string]any{},
				"task": map[string]any{},
				"threaded_comment": map[string]any{},
				"uploaded_file": map[string]any{},
				"webhook": map[string]any{},
				"workflow": map[string]any{},
			},
		},
		"entity": map[string]any{
			"bulk": map[string]any{
				"fields": []any{},
				"name": "bulk",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/stories/bulk",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"bulk",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"story_ids": "`reqdata.story_id`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"category": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A true/false boolean indicating if the Category has been archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "color",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The hex color to be displayed with the Category (for example, \"#ff0000\").",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date that the Category was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"short": "The Global ID of the Category.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Category.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Category.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ANY`",
							},
						},
						"req": true,
						"short": "The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date that the Category was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "category",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/categories",
								"parts": []any{
									"api",
									"v3",
									"categories",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"color": "`reqdata.color`",
										"external_id": "`reqdata.external_id`",
										"name": "`reqdata.name`",
										"type": "`reqdata.type`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/categories",
								"parts": []any{
									"api",
									"v3",
									"categories",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/categories/{category-public-id}",
								"parts": []any{
									"api",
									"v3",
									"categories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/categories/{category-public-id}",
								"parts": []any{
									"api",
									"v3",
									"categories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/categories/{category-public-id}",
								"parts": []any{
									"api",
									"v3",
									"categories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"archived": "`reqdata.archived`",
										"color": "`reqdata.color`",
										"name": "`reqdata.name`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"comment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "comment",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"comments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "id",
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"story",
						},
					},
				},
			},
			"custom_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "after_id",
						"short": "The ID of the CustomField we want to move this CustomField after.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "before_id",
						"short": "The ID of the CustomField we want to move this CustomField before.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "canonical_name",
						"short": "The canonical name for a Shortcut-defined field.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The instant when this CustomField was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A string description of the CustomField",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enabled",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "When true, the CustomField can be applied to entities in the Workspace.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "field_type",
						"req": true,
						"short": "The type of Custom Field, eg.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fixed_position",
						"short": "When true, the CustomFieldEnumValues may not be reordered.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon_set_identifier",
						"short": "A string that represents the icon that corresponds to this custom field.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique public ID for the CustomField.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Custom Field.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "An integer indicating the position of this Custom Field with respect to the other CustomField",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "story_types",
						"short": "The types of stories this CustomField is scoped to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The instant when this CustomField was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "values",
						"short": "A collection of legal values for a CustomField.",
						"type": "`$ARRAY`",
					},
				},
				"name": "custom_field",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/custom-fields",
								"parts": []any{
									"api",
									"v3",
									"custom-fields",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "custom_field_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/custom-fields/{custom-field-public-id}",
								"parts": []any{
									"api",
									"v3",
									"custom-fields",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"custom-field-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "custom_field_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/custom-fields/{custom-field-public-id}",
								"parts": []any{
									"api",
									"v3",
									"custom-fields",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"custom-field-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "custom_field_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/custom-fields/{custom-field-public-id}",
								"parts": []any{
									"api",
									"v3",
									"custom-fields",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"custom-field-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"disable": map[string]any{
				"fields": []any{},
				"name": "disable",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/entity-templates/disable",
								"parts": []any{
									"api",
									"v3",
									"entity-templates",
									"disable",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/iterations/disable",
								"parts": []any{
									"api",
									"v3",
									"iterations",
									"disable",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"doc_slim": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Doc.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"req": true,
						"short": "The content for the new document",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The public id of the Doc",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "The title for the new document",
						"type": "`$STRING`",
					},
				},
				"name": "doc_slim",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/documents",
								"parts": []any{
									"api",
									"v3",
									"documents",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"content": "`reqdata.content`",
										"title": "`reqdata.title`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/documents",
								"parts": []any{
									"api",
									"v3",
									"documents",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enable": map[string]any{
				"fields": []any{},
				"name": "enable",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/entity-templates/enable",
								"parts": []any{
									"api",
									"v3",
									"entity-templates",
									"enable",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/iterations/enable",
								"parts": []any{
									"api",
									"v3",
									"iterations",
									"enable",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"entity_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author_id",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The id of the user creating this template.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date when the entity template was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_fields",
						"short": "An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "deadline",
						"short": "The due date of the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "The description of the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "epic_id",
						"short": "The ID of the epic the story belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "estimate",
						"short": "The numeric point estimate of the story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "external_links",
						"short": "An array of external links connected to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "files",
						"short": "An array of files attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "follower_ids",
						"short": "An array of UUIDs for any Members listed as Followers.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_id",
						"short": "The ID of the group to which the story is assigned.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the entity template.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "iteration_id",
						"short": "The ID of the iteration the story belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "label_ids",
						"short": "An array of label ids attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels",
						"short": "An array of labels attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "last_used_at",
						"req": true,
						"short": "The last time that someone created an entity using this template.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "linked_files",
						"short": "An array of linked files attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_ids",
						"short": "An array of UUIDs of the owners of this story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "project_id",
						"short": "The ID of the project the story belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "story_contents",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "A map of story attributes this template populates.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "story_type",
						"short": "The type of story (feature, bug, chore).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sub_tasks",
						"short": "An array of sub-tasks connected to the story",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tasks",
						"short": "An array of tasks connected to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date when the entity template was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workflow_state_id",
						"short": "The ID of the workflow state the story is currently in.",
						"type": "`$INTEGER`",
					},
				},
				"name": "entity_template",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/entity-templates",
								"parts": []any{
									"api",
									"v3",
									"entity-templates",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"author_id": "`reqdata.author_id`",
										"name": "`reqdata.name`",
										"story_contents": "`reqdata.story_content`",
									},
									"res": "`body.story_contents`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/entity-templates",
								"parts": []any{
									"api",
									"v3",
									"entity-templates",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "entity_template_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/entity-templates/{entity-template-public-id}",
								"parts": []any{
									"api",
									"v3",
									"entity-templates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entity-template-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.story_contents`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "entity_template_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/entity-templates/{entity-template-public-id}",
								"parts": []any{
									"api",
									"v3",
									"entity-templates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entity-template-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "entity_template_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/entity-templates/{entity-template-public-id}",
								"parts": []any{
									"api",
									"v3",
									"entity-templates",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"entity-template-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"name": "`reqdata.name`",
										"story_contents": "`reqdata.story_content`",
									},
									"res": "`body.story_contents`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"epic": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "after_id",
						"short": "The ID of the Epic we want to move this Epic after.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "True/false boolean that indicates whether the Epic is archived or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "associated_groups",
						"req": true,
						"short": "An array containing Group IDs and Group-owned story counts for the Epic's associated groups.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "before_id",
						"short": "The ID of the Epic we want to move this Epic before.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "comments",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "A nested array of threaded comments.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "completed",
						"req": true,
						"short": "A true/false boolean indicating if the Epic has been completed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "completed_at",
						"req": true,
						"short": "The time/date the Epic was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Epic was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "converted_from_story_id",
						"short": "The ID of the Story that was converted to an Epic.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Epic was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deadline",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Epic's deadline.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Epic's description.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "epic_state_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the Epic State.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs for any Members you want to add as Followers on this Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "`Deprecated` The ID of the group to associate with the epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDS for Groups to which this Epic is related.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "An array of Group IDs that have been mentioned in the Epic description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "health",
						"req": true,
						"short": "The current health status of the Epic.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Epic.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "label_ids",
						"req": true,
						"short": "An array of Label ids attached to the Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of Labels attached to the Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "An array of Member IDs that have been mentioned in the Epic description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "milestone_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "`Deprecated` The ID of the Objective this Epic is related to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objective_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of IDs for Objectives to which this epic is related.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "owner_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs for any members you want to add as Owners on this new Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "planned_start_date",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Epic's planned start date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "The Epic's relative position in the Epic workflow state.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "productboard_id",
						"req": true,
						"short": "The ID of the associated productboard feature.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productboard_name",
						"req": true,
						"short": "The name of the associated productboard feature.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productboard_plugin_id",
						"req": true,
						"short": "The ID of the associated productboard integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productboard_url",
						"req": true,
						"short": "The URL of the associated productboard feature.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "project_ids",
						"req": true,
						"short": "The IDs of Projects related to this Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "requested_by_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The ID of the Member that requested the epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started",
						"req": true,
						"short": "A true/false boolean indicating if the Epic has been started.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "started_at",
						"req": true,
						"short": "The time/date the Epic was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Epic was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "`Deprecated` The workflow state that the Epic is in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "A group of calculated values for this Epic.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stories_without_projects",
						"req": true,
						"short": "The number of stories in this epic which are not associated with a project.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Epic was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "epic",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/epics",
								"parts": []any{
									"api",
									"v3",
									"epics",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "next",
											"orig": "next",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/search/epics",
								"parts": []any{
									"api",
									"v3",
									"search",
									"epics",
								},
								"select": map[string]any{
									"exist": []any{
										"detail",
										"entity_type",
										"next",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics",
								"parts": []any{
									"api",
									"v3",
									"epics",
								},
								"select": map[string]any{
									"exist": []any{
										"includes_description",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "label_id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/labels/{label-public-id}/epics",
								"parts": []any{
									"api",
									"v3",
									"labels",
									"{label_id}",
									"epics",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"label-public-id": "label_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"label_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "milestone_id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/milestones/{milestone-public-id}/epics",
								"parts": []any{
									"api",
									"v3",
									"milestones",
									"{milestone_id}",
									"epics",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"milestone-public-id": "milestone_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"milestone_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "objectif_id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/objectives/{objective-public-id}/epics",
								"parts": []any{
									"api",
									"v3",
									"objectives",
									"{objectif_id}",
									"epics",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"objective-public-id": "objectif_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"objectif_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics/{epic-public-id}",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/epics/{epic-public-id}",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/epics/{epic-public-id}",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"label",
						},
						[]any{
							"milestone",
						},
						[]any{
							"objectif",
						},
					},
				},
			},
			"epic_paginated_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"req": true,
						"short": "True/false boolean that indicates whether the Epic is archived or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "associated_groups",
						"req": true,
						"short": "An array containing Group IDs and Group-owned story counts for the Epic's associated groups.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "completed",
						"req": true,
						"short": "A true/false boolean indicating if the Epic has been completed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "completed_at",
						"req": true,
						"short": "The time/date the Epic was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completed_at_override",
						"req": true,
						"short": "A manual override for the time/date the Epic was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date the Epic was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deadline",
						"req": true,
						"short": "The Epic's deadline.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "The Epic's description.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "epic_state_id",
						"req": true,
						"short": "The ID of the Epic State.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "external_id",
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "follower_ids",
						"req": true,
						"short": "An array of UUIDs for any Members you want to add as Followers on this Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "`Deprecated` The ID of the group to associate with the epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_ids",
						"req": true,
						"short": "An array of UUIDS for Groups to which this Epic is related.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "An array of Group IDs that have been mentioned in the Epic description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Epic.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "label_ids",
						"req": true,
						"short": "An array of Label ids attached to the Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels",
						"req": true,
						"short": "An array of Labels attached to the Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "An array of Member IDs that have been mentioned in the Epic description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "milestone_id",
						"req": true,
						"short": "`Deprecated` The ID of the Objective this Epic is related to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the Epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objective_ids",
						"req": true,
						"short": "An array of IDs for Objectives to which this epic is related.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "owner_ids",
						"req": true,
						"short": "An array of UUIDs for any members you want to add as Owners on this new Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "planned_start_date",
						"req": true,
						"short": "The Epic's planned start date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "The Epic's relative position in the Epic workflow state.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "productboard_id",
						"req": true,
						"short": "The ID of the associated productboard feature.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productboard_name",
						"req": true,
						"short": "The name of the associated productboard feature.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productboard_plugin_id",
						"req": true,
						"short": "The ID of the associated productboard integration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "productboard_url",
						"req": true,
						"short": "The URL of the associated productboard feature.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "project_ids",
						"req": true,
						"short": "The IDs of Projects related to this Epic.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "requested_by_id",
						"req": true,
						"short": "The ID of the Member that requested the epic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started",
						"req": true,
						"short": "A true/false boolean indicating if the Epic has been started.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "started_at",
						"req": true,
						"short": "The time/date the Epic was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started_at_override",
						"req": true,
						"short": "A manual override for the time/date the Epic was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"req": true,
						"short": "`Deprecated` The workflow state that the Epic is in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "A group of calculated values for this Epic.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stories_without_projects",
						"req": true,
						"short": "The number of stories in this epic which are not associated with a project.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date the Epic was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "epic_paginated_result",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics/paginated",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"paginated",
								},
								"select": map[string]any{
									"exist": []any{
										"includes_description",
										"page",
										"page_size",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"epic_unlink_productboard": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "epic_unlink_productboard",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/epics/{epic-public-id}/unlink-productboard",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{id}",
									"unlink-productboard",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"epic_workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "color",
						"short": "The hex color for this Epic State.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date the Epic State was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"short": "The description of what sort of Epics belong in that Epic State.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Epic State.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The Epic State's name.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "The position that the Epic State is in, starting with 0 at the left.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of Epic State (Unstarted, Started, or Done)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "When the Epic State was last updated.",
						"type": "`$STRING`",
					},
				},
				"name": "epic_workflow",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epic-workflow",
								"parts": []any{
									"api",
									"v3",
									"epic-workflow",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.epic_states`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Whether or not the Group is archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "color",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The hex color to be displayed with the Group (for example, \"#ff0000\").",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "color_key",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The color key to be displayed with the Group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The instant when this group was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default_workflow_id",
						"short": "The ID of the default workflow for stories created in this group.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The description of the Group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "display_icon",
						"req": true,
						"short": "Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the Shortcut web application.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "display_icon_id",
						"short": "The Icon id for the avatar of this Group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The id of the Group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "member_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "The Member IDs contain within the Group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The mention name of the Group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_epics_started",
						"req": true,
						"short": "The number of epics assigned to the group which are in the started workflow state.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories",
						"req": true,
						"short": "The total number of stories assigned to the group.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_backlog",
						"req": true,
						"short": "The number of stories assigned to the group which are in a backlog workflow state.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_started",
						"req": true,
						"short": "The number of stories assigned to the group which are in a started workflow state.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The last instant when this group was updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workflow_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "The Workflow IDs contained within the Group.",
						"type": "`$ARRAY`",
					},
				},
				"name": "group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/groups",
								"parts": []any{
									"api",
									"v3",
									"groups",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/groups",
								"parts": []any{
									"api",
									"v3",
									"groups",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "group_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/groups/{group-public-id}",
								"parts": []any{
									"api",
									"v3",
									"groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "group_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/groups/{group-public-id}",
								"parts": []any{
									"api",
									"v3",
									"groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"health": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author_id",
						"short": "The ID of the permission who created or updated the Health record.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"short": "The time that the Health record was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "epic_id",
						"short": "The ID of the Epic associated with this Health record.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Health record.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objective_id",
						"short": "The ID of the Objective associated with this Health record.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The health status of the Epic or Objective.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "text",
						"short": "The text of the Health record.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"short": "The time that the Health record was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "health",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/epics/{epic-public-id}/health",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"health",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"status": "`reqdata.status`",
										"text": "`reqdata.text`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics/{epic-public-id}/health-history",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"health-history",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics/{epic-public-id}/health",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"health",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "health_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/health/{health-public-id}",
								"parts": []any{
									"api",
									"v3",
									"health",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"health-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"status": "`reqdata.status`",
										"text": "`reqdata.text`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"epic",
						},
					},
				},
			},
			"history": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actions",
						"req": true,
						"short": "An array of actions that were performed for the change.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 19,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "actor_name",
						"short": "The name of the actor that performed the action, if it can be determined.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "automation_id",
						"short": "The ID of the automation that performed the change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "changed_at",
						"req": true,
						"short": "The date when the change occurred.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"short": "The ID of the webhook that handled the change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID representing the change for the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "member_id",
						"short": "The ID of the member who performed the change.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "primary_id",
						"short": "The ID of the primary entity that has changed, if applicable.",
						"type": "`$STRING`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "references",
						"short": "An array of objects affected by the change.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 12,
							"count": 12,
							"depth": 5,
						},
					},
					map[string]any{
						"name": "version",
						"req": true,
						"short": "The version of the change format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "webhook_id",
						"short": "The ID of the webhook that handled the change.",
						"type": "`$STRING`",
					},
				},
				"name": "history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/stories/{story-public-id}/history",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"history",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"story",
						},
					},
				},
			},
			"iteration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Iteration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "associated_groups",
						"req": true,
						"short": "An array containing Group IDs and Group-owned story counts for the Iteration's associated groups.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The instant when this iteration was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The description of the iteration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The date this iteration ends.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs for any Members listed as Followers.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs for any Groups you want to add as Followers.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "An array of Group IDs that have been mentioned in the Story description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the iteration.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "label_ids",
						"req": true,
						"short": "An array of label ids attached to the iteration.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of labels attached to the iteration.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "An array of Member IDs that have been mentioned in the Story description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the iteration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "start_date",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The date this iteration begins.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "A group of calculated values for this Iteration.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The status of the iteration.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The instant when this iteration was last updated.",
						"type": "`$STRING`",
					},
				},
				"name": "iteration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/iterations",
								"parts": []any{
									"api",
									"v3",
									"iterations",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "next",
											"orig": "next",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/search/iterations",
								"parts": []any{
									"api",
									"v3",
									"search",
									"iterations",
								},
								"select": map[string]any{
									"exist": []any{
										"detail",
										"entity_type",
										"next",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/iterations",
								"parts": []any{
									"api",
									"v3",
									"iterations",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/iterations/{iteration-public-id}",
								"parts": []any{
									"api",
									"v3",
									"iterations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"iteration-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/iterations/{iteration-public-id}",
								"parts": []any{
									"api",
									"v3",
									"iterations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"iteration-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/iterations/{iteration-public-id}",
								"parts": []any{
									"api",
									"v3",
									"iterations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"iteration-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"key_result": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "current_observed_value",
						"req": true,
						"short": "The starting value of the Key Result.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "current_target_value",
						"req": true,
						"short": "The starting value of the Key Result.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID of the Key Result.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "initial_observed_value",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "The starting value of the Key Result.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Key Result.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objective_id",
						"req": true,
						"short": "The Objective to which this Key Result belongs.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "observed_value",
						"short": "The starting value of the Key Result.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "progress",
						"req": true,
						"short": "The integer percentage of progress toward completion of the Key Result.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "target_value",
						"short": "The starting value of the Key Result.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The type of the Key Result (numeric, percent, or boolean).",
						"type": "`$STRING`",
					},
				},
				"name": "key_result",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "key_result_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/key-results/{key-result-public-id}",
								"parts": []any{
									"api",
									"v3",
									"key-results",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"key-result-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "key_result_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/key-results/{key-result-public-id}",
								"parts": []any{
									"api",
									"v3",
									"key-results",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"key-result-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"initial_observed_value": "`reqdata.initial_observed_value`",
										"name": "`reqdata.name`",
										"observed_value": "`reqdata.observed_value`",
										"target_value": "`reqdata.target_value`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"label": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Label.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"short": "A true/false boolean indicating if the Label has been archived.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "color",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The hex color to be displayed with the Label (for example, \"#ff0000\").",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date that the Label was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The description of the new Label.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the new Label.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_epics",
						"req": true,
						"short": "The total number of Epics with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_epics_completed",
						"req": true,
						"short": "The number of completed Epics associated with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_epics_in_progress",
						"req": true,
						"short": "The number of in progress epics associated with this label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_epics_total",
						"req": true,
						"short": "The total number of Epics associated with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_epics_unstarted",
						"req": true,
						"short": "The number of unstarted epics associated with this label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_points_backlog",
						"req": true,
						"short": "The total number of backlog points with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_points_completed",
						"req": true,
						"short": "The total number of completed points with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_points_in_progress",
						"req": true,
						"short": "The total number of in-progress points with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_points_total",
						"req": true,
						"short": "The total number of points with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_points_unstarted",
						"req": true,
						"short": "The total number of unstarted points with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_related_documents",
						"req": true,
						"short": "The total number of Documents associated this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_backlog",
						"req": true,
						"short": "The total number of stories backlog Stories with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_completed",
						"req": true,
						"short": "The total number of completed Stories with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_in_progress",
						"req": true,
						"short": "The total number of in-progress Stories with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_total",
						"req": true,
						"short": "The total number of Stories with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_unestimated",
						"req": true,
						"short": "The total number of Stories with no point estimate with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "num_stories_unstarted",
						"req": true,
						"short": "The total number of stories unstarted Stories with this Label.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "A group of calculated values for this Label.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date that the Label was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "label",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/labels",
								"parts": []any{
									"api",
									"v3",
									"labels",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"color": "`reqdata.color`",
										"description": "`reqdata.description`",
										"external_id": "`reqdata.external_id`",
										"name": "`reqdata.name`",
									},
									"res": "`body.stats`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "slim",
											"orig": "slim",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/labels",
								"parts": []any{
									"api",
									"v3",
									"labels",
								},
								"select": map[string]any{
									"exist": []any{
										"slim",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/labels/{label-public-id}",
								"parts": []any{
									"api",
									"v3",
									"labels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"label-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.stats`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/labels/{label-public-id}",
								"parts": []any{
									"api",
									"v3",
									"labels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"label-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/labels/{label-public-id}",
								"parts": []any{
									"api",
									"v3",
									"labels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"label-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"archived": "`reqdata.archived`",
										"color": "`reqdata.color`",
										"description": "`reqdata.description`",
										"name": "`reqdata.name`",
									},
									"res": "`body.stats`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"linked_file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content_type",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The content type of the image (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date the LinkedFile was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The description of the file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "The groups that are mentioned in the description of the file.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the file.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "The members that are mentioned in the description of the file.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the linked file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The filesize, if the integration provided it.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "story_id",
						"short": "The ID of the linked story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "story_ids",
						"req": true,
						"short": "The IDs of the stories this file is attached to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "thumbnail_url",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The URL of the file thumbnail, if the integration provided it.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The integration type (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date the LinkedFile was updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploader_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The UUID of the member that uploaded the file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The URL of the file.",
						"type": "`$STRING`",
					},
				},
				"name": "linked_file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/linked-files",
								"parts": []any{
									"api",
									"v3",
									"linked-files",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/linked-files",
								"parts": []any{
									"api",
									"v3",
									"linked-files",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "linked_file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/linked-files/{linked-file-public-id}",
								"parts": []any{
									"api",
									"v3",
									"linked-files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"linked-file-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "linked_file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/linked-files/{linked-file-public-id}",
								"parts": []any{
									"api",
									"v3",
									"linked-files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"linked-file-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "linked_file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/linked-files/{linked-file-public-id}",
								"parts": []any{
									"api",
									"v3",
									"linked-files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"linked-file-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date the Member was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_without_invite",
						"req": true,
						"short": "Whether this member was created as a placeholder entity.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "disabled",
						"req": true,
						"short": "True/false boolean indicating whether the Member has been disabled within the Workspace.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_ids",
						"req": true,
						"short": "The Member's group ids",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The Member's ID in Shortcut.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "installation_id",
						"short": "Only set for agents.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_owner",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mention_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "organization2",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "profile",
						"req": true,
						"short": "A group of Member profile details.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "replaced_by",
						"short": "The id of the member that replaces this one when merged.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"req": true,
						"short": "The Member's role in the Workspace.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"req": true,
						"short": "The user state, one of partial, full, disabled, or imported.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date the Member was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workspace2",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "disabled",
											"orig": "disabled",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "org_public_id",
											"orig": "org_public_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/members",
								"parts": []any{
									"api",
									"v3",
									"members",
								},
								"select": map[string]any{
									"exist": []any{
										"disabled",
										"org_public_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "member_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "org_public_id",
											"orig": "org_public_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/members/{member-public-id}",
								"parts": []any{
									"api",
									"v3",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"member-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"org_public_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/member",
								"parts": []any{
									"api",
									"v3",
									"member",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"milestone": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "after_id",
						"short": "The ID of the Milestone we want to move this Milestone after.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Milestone.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the Milestone has been archived or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "before_id",
						"short": "The ID of the Milestone we want to move this Milestone before.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "categories",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of Categories attached to the Milestone.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "completed",
						"req": true,
						"short": "A true/false boolean indicating if the Milestone has been completed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "completed_at",
						"req": true,
						"short": "The time/date the Milestone was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Milestone was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date the Milestone was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Milestone's description.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Milestone.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "key_result_ids",
						"req": true,
						"short": "The IDs of the Key Results associated with the Objective.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Milestone.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "A number representing the position of the Milestone in relation to every other Milestone within the Workspace.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "started",
						"req": true,
						"short": "A true/false boolean indicating if the Milestone has been started.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "started_at",
						"req": true,
						"short": "The time/date the Milestone was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Milestone was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The workflow state that the Milestone is in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "A group of calculated values for this Milestone.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date the Milestone was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "milestone",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/milestones",
								"parts": []any{
									"api",
									"v3",
									"milestones",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"categories": "`reqdata.category`",
										"completed_at_override": "`reqdata.completed_at_override`",
										"description": "`reqdata.description`",
										"name": "`reqdata.name`",
										"started_at_override": "`reqdata.started_at_override`",
										"state": "`reqdata.state`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "category_id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/categories/{category-public-id}/milestones",
								"parts": []any{
									"api",
									"v3",
									"categories",
									"{category_id}",
									"milestones",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category-public-id": "category_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "category_id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/categories/{category-public-id}/objectives",
								"parts": []any{
									"api",
									"v3",
									"categories",
									"{category_id}",
									"objectives",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"category-public-id": "category_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/milestones",
								"parts": []any{
									"api",
									"v3",
									"milestones",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/milestones/{milestone-public-id}",
								"parts": []any{
									"api",
									"v3",
									"milestones",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"milestone-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/milestones/{milestone-public-id}",
								"parts": []any{
									"api",
									"v3",
									"milestones",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"milestone-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/milestones/{milestone-public-id}",
								"parts": []any{
									"api",
									"v3",
									"milestones",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"milestone-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"category",
						},
					},
				},
			},
			"objectif": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"name": "objectif",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/objectives/{objective-public-id}",
								"parts": []any{
									"api",
									"v3",
									"objectives",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"objective-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"objective": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "after_id",
						"short": "The ID of the Objective we want to move this Objective after.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Objective.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the Objective has been archived or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "before_id",
						"short": "The ID of the Objective we want to move this Objective before.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "categories",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of Categories attached to the Objective.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "completed",
						"req": true,
						"short": "A true/false boolean indicating if the Objectivehas been completed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "completed_at",
						"req": true,
						"short": "The time/date the Objective was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Objective was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date the Objective was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Objective's description.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Objective.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "key_result_ids",
						"req": true,
						"short": "The IDs of the Key Results associated with the Objective.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Objective.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "A number representing the position of the Objective in relation to every other Objective within the Workspace.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "started",
						"req": true,
						"short": "A true/false boolean indicating if the Objective has been started.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "started_at",
						"req": true,
						"short": "The time/date the Objective was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Objective was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The workflow state that the Objective is in.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "A group of calculated values for this Objective.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date the Objective was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "objective",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/objectives",
								"parts": []any{
									"api",
									"v3",
									"objectives",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"categories": "`reqdata.category`",
										"completed_at_override": "`reqdata.completed_at_override`",
										"description": "`reqdata.description`",
										"name": "`reqdata.name`",
										"started_at_override": "`reqdata.started_at_override`",
										"state": "`reqdata.state`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "next",
											"orig": "next",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/search/milestones",
								"parts": []any{
									"api",
									"v3",
									"search",
									"milestones",
								},
								"select": map[string]any{
									"exist": []any{
										"detail",
										"entity_type",
										"next",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "next",
											"orig": "next",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/search/objectives",
								"parts": []any{
									"api",
									"v3",
									"search",
									"objectives",
								},
								"select": map[string]any{
									"exist": []any{
										"detail",
										"entity_type",
										"next",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/objectives",
								"parts": []any{
									"api",
									"v3",
									"objectives",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "objective_public_id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/objectives/{objective-public-id}",
								"parts": []any{
									"api",
									"v3",
									"objectives",
									"{objective_public_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"objective-public-id": "objective_public_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"objective_public_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "objective_public_id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/objectives/{objective-public-id}",
								"parts": []any{
									"api",
									"v3",
									"objectives",
									"{objective_public_id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"objective-public-id": "objective_public_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"objective_public_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"objectif",
						},
					},
				},
			},
			"project": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abbreviation",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The Project abbreviation used in Story summaries.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "True/false boolean indicating whether the Project is in an Archived state.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "color",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The color associated with the Project in the Shortcut member interface.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date that the Project was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "days_to_thermometer",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The number of days before the thermometer appears in the Story summary.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The description of the Project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs for any Members listed as Followers.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"short": "The Global ID of the Project.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Project.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "iteration_length",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The number of weeks per iteration in this Project.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the Project",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "show_thermometer",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "Configuration to enable or disable thermometers in the Story summary.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "start_time",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The date at which the Project was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "A group of calculated values for this Project.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "team_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the team the project belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date that the Project was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workflow_id",
						"req": true,
						"short": "The ID of the workflow the project belongs to.",
						"type": "`$INTEGER`",
					},
				},
				"name": "project",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/projects",
								"parts": []any{
									"api",
									"v3",
									"projects",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/projects",
								"parts": []any{
									"api",
									"v3",
									"projects",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/projects/{project-public-id}",
								"parts": []any{
									"api",
									"v3",
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/projects/{project-public-id}",
								"parts": []any{
									"api",
									"v3",
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/projects/{project-public-id}",
								"parts": []any{
									"api",
									"v3",
									"projects",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"repository": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date the Repository was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"req": true,
						"short": "The VCS unique identifier for the Repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "full_name",
						"req": true,
						"short": "The full name of the VCS repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The ID associated to the VCS repository in Shortcut.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The shorthand name of the VCS repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The VCS provider for the Repository.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date the Repository was updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "The URL of the Repository.",
						"type": "`$STRING`",
					},
				},
				"name": "repository",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/repositories",
								"parts": []any{
									"api",
									"v3",
									"repositories",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "repo_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/repositories/{repo-public-id}",
								"parts": []any{
									"api",
									"v3",
									"repositories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"repo-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "epics",
						"req": true,
						"short": "The results of the Epic search query.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "iterations",
						"req": true,
						"short": "The results of the Iteration search query.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "milestones",
						"req": true,
						"short": "The results of the Objective search query.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "stories",
						"req": true,
						"short": "The results of the Story search query.",
						"type": "`$OBJECT`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "next",
											"orig": "next",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/search",
								"parts": []any{
									"api",
									"v3",
									"search",
								},
								"select": map[string]any{
									"exist": []any{
										"detail",
										"entity_type",
										"next",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"story": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "after_id",
						"short": "The ID of the story we want to move this story after.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "archived",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "True if the story has been archived or not.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "before_id",
						"short": "The ID of the story we want to move this story before.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "blocked",
						"req": true,
						"short": "A true/false boolean indicating if the Story is currently blocked.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "blocker",
						"req": true,
						"short": "A true/false boolean indicating if the Story is currently a blocker of another story.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "branch_ids",
						"short": "An array of IDs of Branches attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "branches",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of Git branches attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "comment_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of IDs of Comments attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "comments",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of comments attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "commit_ids",
						"short": "An array of IDs of Commits attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "commits",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of commits attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "completed",
						"req": true,
						"short": "A true/false boolean indicating if the Story has been completed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "completed_at",
						"req": true,
						"short": "The time/date the Story was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Story was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Story was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_fields",
						"short": "An array of CustomField value assertions for the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "custom_fields_add",
						"short": "A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "custom_fields_remove",
						"short": "A map specifying a CustomField ID.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cycle_time",
						"short": "The cycle time (in seconds) of this story when complete.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deadline",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The due date of the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The description of the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "epic_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the epic the story belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "estimate",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The numeric point estimate of the story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_links",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of external links (strings) associated with a Story",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "external_links_add",
						"short": "An array of External Links associated with this story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "external_links_remove",
						"short": "An array of External Links associated with this story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "file_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of IDs of files attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "file_ids_add",
						"short": "An array of IDs of files attached to the story in addition to files from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "file_ids_remove",
						"short": "An array of IDs of files removed from files from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "files",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of files attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs for any Members listed as Followers.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "follower_ids_add",
						"short": "The UUIDs of the new followers to be added in addition to followers from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "follower_ids_remove",
						"short": "The UUIDs of the new followers to be removed from followers from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "formatted_vcs_branch_name",
						"short": "The formatted branch name for this story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The ID of the group associated with the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "An array of Group IDs that have been mentioned in the Story description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "iteration_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the iteration the story belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "label_ids",
						"req": true,
						"short": "An array of label ids attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of labels attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels_add",
						"short": "An array of labels attached to the story in addition to the labels provided by the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels_remove",
						"short": "An array of labels to remove from the labels provided by the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "lead_time",
						"short": "The lead time (in seconds) of this story when complete.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "linked_file_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of IDs of linked files attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "linked_file_ids_add",
						"short": "An array of IDs of linked files attached to the story in addition to files from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "linked_file_ids_remove",
						"short": "An array of IDs of linked files removed from files from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "linked_files",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of linked files attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "An array of Member IDs that have been mentioned in the Story description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "move_to",
						"short": "One of \"first\" or \"last\".",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "moved_at",
						"req": true,
						"short": "The time/date the Story was last changed workflow-state.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The name of the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "num_tasks_completed",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"short": "The number of tasks on the story which are complete.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "owner_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs of the owners of this story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "owner_ids_add",
						"short": "The UUIDs of the new owners to be added in addition to owners from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "owner_ids_remove",
						"short": "The UUIDs of the new owners to be removed from owners from the template.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parent_story_id",
						"short": "The id of the parent story to associate with this story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "A number representing the position of the story in relation to every other story in the current project.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "previous_iteration_ids",
						"req": true,
						"short": "The IDs of the iteration the story belongs to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "project_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the project the story belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pull_request_ids",
						"short": "An array of IDs of Pull/Merge Requests attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pull_requests",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of Pull/Merge Requests attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "requested_by_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The ID of the Member that requested the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source_task_id",
						"short": "Given this story was converted from a task in another story, this is the original task ID that was converted to this story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "started",
						"req": true,
						"short": "A true/false boolean indicating if the Story has been started.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "started_at",
						"req": true,
						"short": "The time/date the Story was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "A manual override for the time/date the Story was started.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stats",
						"req": true,
						"short": "The stats object for Stories",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "story_links",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of story links attached to the Story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "story_template_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The ID of the story template used to create this story, or null if not created using a template.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "story_type",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The type of story (feature, bug, chore).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sub_task_story_ids",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "sub_tasks",
						"short": "A list of either params to create a new sub-task or link an existing story as a sub-task",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "synced_item",
						"req": true,
						"short": "The synced item for the story.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "task_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "An array of IDs of Tasks attached to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "tasks",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of tasks connected to the story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Story was updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workflow_id",
						"req": true,
						"short": "The ID of the workflow the story belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "workflow_state_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the workflow state the story is currently in.",
						"type": "`$INTEGER`",
					},
				},
				"name": "story",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories",
								"parts": []any{
									"api",
									"v3",
									"stories",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories/from-template",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"from-template",
								},
								"select": map[string]any{
									"$action": "from_template",
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "next",
											"orig": "next",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/search/stories",
								"parts": []any{
									"api",
									"v3",
									"search",
									"stories",
								},
								"select": map[string]any{
									"exist": []any{
										"detail",
										"entity_type",
										"next",
										"page_size",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "group_id",
											"orig": "group_public_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/groups/{group-public-id}/stories",
								"parts": []any{
									"api",
									"v3",
									"groups",
									"{group_id}",
									"stories",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group-public-id": "group_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"group_id",
										"limit",
										"offset",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics/{epic-public-id}/stories",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"stories",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
										"includes_description",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "iteration_id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/iterations/{iteration-public-id}/stories",
								"parts": []any{
									"api",
									"v3",
									"iterations",
									"{iteration_id}",
									"stories",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"iteration-public-id": "iteration_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"includes_description",
										"iteration_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "label_id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/labels/{label-public-id}/stories",
								"parts": []any{
									"api",
									"v3",
									"labels",
									"{label_id}",
									"stories",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"label-public-id": "label_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"includes_description",
										"label_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "project_id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/projects/{project-public-id}/stories",
								"parts": []any{
									"api",
									"v3",
									"projects",
									"{project_id}",
									"stories",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"project-public-id": "project_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"includes_description",
										"project_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "external_link",
											"orig": "external_link",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/external-link/stories",
								"parts": []any{
									"api",
									"v3",
									"external-link",
									"stories",
								},
								"select": map[string]any{
									"exist": []any{
										"external_link",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/stories/{story-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/stories/{story-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/stories/{story-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"epic",
						},
						[]any{
							"group",
						},
						[]any{
							"iteration",
						},
						[]any{
							"label",
						},
						[]any{
							"project",
						},
					},
				},
			},
			"story_comment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Comment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The unique ID of the Member who is the Comment's author.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "blocker",
						"short": "Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date when the Comment was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deleted",
						"req": true,
						"short": "True/false boolean indicating whether the Comment has been deleted.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "The unique IDs of the Group who are mentioned in the Comment.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Comment.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "linked_to_slack",
						"req": true,
						"short": "Whether the Comment is currently the root of a thread that is linked to Slack.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "The unique IDs of the Member who are mentioned in the Comment.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "parent_id",
						"short": "The ID of the parent Comment this Comment is threaded under.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "The Comments numerical position in the list from oldest to newest.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reactions",
						"req": true,
						"short": "A set of Reactions to this Comment.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "story_id",
						"req": true,
						"short": "The ID of the Story on which the Comment appears.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"short": "The text of the Comment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unblocks_parent",
						"short": "Marks the comment as an unblocker to its blocker parent.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date when the Comment was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "story_comment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"comments",
									"{comment_id}",
									"unlink-from-slack",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "comment_id",
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"comment_id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories/{story-public-id}/comments",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{id}",
									"comments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"author_id": "`reqdata.author_id`",
										"created_at": "`reqdata.created_at`",
										"external_id": "`reqdata.external_id`",
										"parent_id": "`reqdata.parent_id`",
										"text": "`reqdata.text`",
										"updated_at": "`reqdata.updated_at`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/stories/{story-public-id}/comments",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{id}",
									"comments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"comments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "id",
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"comments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "id",
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"text": "`reqdata.text`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"story",
						},
						[]any{
							"story",
							"comment",
						},
					},
				},
			},
			"story_link": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The time/date when the Story Link was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier of the Story Link.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "object_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the object Story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "subject_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"short": "The ID of the subject Story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "subject_workflow_state_id",
						"req": true,
						"short": "The workflow state of the \"subject\" story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The time/date when the Story Link was last updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "verb",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "How the subject Story acts on the object Story.",
						"type": "`$STRING`",
					},
				},
				"name": "story_link",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/story-links",
								"parts": []any{
									"api",
									"v3",
									"story-links",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"object_id": "`reqdata.object_id`",
										"subject_id": "`reqdata.subject_id`",
										"verb": "`reqdata.verb`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_link_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/story-links/{story-link-public-id}",
								"parts": []any{
									"api",
									"v3",
									"story-links",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-link-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_link_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/story-links/{story-link-public-id}",
								"parts": []any{
									"api",
									"v3",
									"story-links",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-link-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "story_link_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/story-links/{story-link-public-id}",
								"parts": []any{
									"api",
									"v3",
									"story-links",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-link-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"object_id": "`reqdata.object_id`",
										"subject_id": "`reqdata.subject_id`",
										"verb": "`reqdata.verb`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"story_reaction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "emoji",
						"req": true,
						"short": "The emoji short-code to add / remove.",
						"type": "`$STRING`",
					},
				},
				"name": "story_reaction",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"comments",
									"{comment_id}",
									"reactions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "comment_id",
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"comment_id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"emoji": "`reqdata.emoji`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"comments",
									"{comment_id}",
									"reactions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "comment_id",
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"comment_id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"emoji": "`reqdata.emoji`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"story",
							"comment",
						},
					},
				},
			},
			"story_slim": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "after_id",
						"short": "The ID of the story that the stories are to be moved below.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "archived",
						"short": "A true/false boolean indicating whether the Story is in archived state.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "before_id",
						"short": "The ID of the story that the stories are to be moved before.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "completed_at_end",
						"short": "Stories should have been completed on or before this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "completed_at_start",
						"short": "Stories should have been completed on or after this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at_end",
						"short": "Stories should have been created on or before this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at_start",
						"short": "Stories should have been created on or after this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_fields_add",
						"short": "A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "custom_fields_remove",
						"short": "A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "deadline",
						"short": "The due date of the story.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deadline_end",
						"short": "Stories should have a deadline on or before this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deadline_start",
						"short": "Stories should have a deadline on or after this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "epic_id",
						"short": "The Epic IDs that may be associated with the Stories.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "epic_ids",
						"short": "The Epic IDs that may be associated with the Stories.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "estimate",
						"short": "The number of estimate points associate with the Stories.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "external_id",
						"short": "An ID or URL that references an external resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_links",
						"short": "An array of External Links associated with this story.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "follower_ids_add",
						"short": "The UUIDs of the new followers to be added.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "follower_ids_remove",
						"short": "The UUIDs of the followers to be removed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_id",
						"short": "The Group ID that is associated with the Stories",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_ids",
						"short": "The Group IDs that are associated with the Stories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "includes_description",
						"short": "Whether to include the story description in the response.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "iteration_id",
						"short": "The Iteration ID that may be associated with the Stories.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "iteration_ids",
						"short": "The Iteration IDs that may be associated with the Stories.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "label_ids",
						"short": "The Label IDs that may be associated with the Stories.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "label_name",
						"short": "The name of any associated Labels.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "labels_add",
						"short": "An array of labels to be added.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels_remove",
						"short": "An array of labels to be removed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "move_to",
						"short": "One of \"first\" or \"last\".",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_id",
						"short": "An array of UUIDs for any Users who may be Owners of the Stories.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "owner_ids",
						"short": "An array of UUIDs for any Users who may be Owners of the Stories.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "owner_ids_add",
						"short": "The UUIDs of the new owners to be added.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "owner_ids_remove",
						"short": "The UUIDs of the owners to be removed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "project_id",
						"short": "The IDs for the Projects the Stories may be assigned to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "project_ids",
						"short": "The IDs for the Projects the Stories may be assigned to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "requested_by_id",
						"short": "The UUID of any Users who may have requested the Stories.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stories",
						"req": true,
						"short": "An array of stories to be created.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 4,
						},
					},
					map[string]any{
						"name": "story_ids",
						"req": true,
						"short": "The Ids of the Stories you wish to update.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "story_type",
						"short": "The type of Stories that you want returned.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at_end",
						"short": "Stories should have been updated on or before this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at_start",
						"short": "Stories should have been updated on or after this date.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "workflow_state_id",
						"short": "The unique IDs of the specific Workflow States that the Stories should be in.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "workflow_state_types",
						"short": "The type of Workflow State the Stories may be in.",
						"type": "`$ARRAY`",
					},
				},
				"name": "story_slim",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories/bulk",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"bulk",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"stories": "`reqdata.story`",
									},
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories/search",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"search",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/stories/bulk",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"bulk",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"task": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "after_id",
						"short": "Move task after this task ID.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "before_id",
						"short": "Move task before this task ID.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "complete",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "True/false boolean indicating whether the Task has been completed.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "completed_at",
						"req": true,
						"short": "The time/date the Task was completed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Task was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Full text of the Task.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "An array of UUIDs of Groups mentioned in this Task.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Task.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "An array of UUIDs of Members mentioned in this Task.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "owner_ids",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of UUIDs of the Owners of this Task.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "position",
						"req": true,
						"short": "The number corresponding to the Task's position within a list of Tasks on a Story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "story_id",
						"req": true,
						"short": "The unique identifier of the parent Story.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Task was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "task",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/stories/{story-public-id}/tasks",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"tasks",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "story_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"complete": "`reqdata.complete`",
										"created_at": "`reqdata.created_at`",
										"description": "`reqdata.description`",
										"external_id": "`reqdata.external_id`",
										"owner_ids": "`reqdata.owner_id`",
										"updated_at": "`reqdata.updated_at`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "task_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"tasks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "story_id",
										"task-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "task_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"tasks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "story_id",
										"task-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "task_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/stories/{story-public-id}/tasks/{task-public-id}",
								"parts": []any{
									"api",
									"v3",
									"stories",
									"{story_id}",
									"tasks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"story-public-id": "story_id",
										"task-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"story_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"after_id": "`reqdata.after_id`",
										"before_id": "`reqdata.before_id`",
										"complete": "`reqdata.complete`",
										"description": "`reqdata.description`",
										"owner_ids": "`reqdata.owner_id`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"story",
						},
					},
				},
			},
			"threaded_comment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "app_url",
						"req": true,
						"short": "The Shortcut application url for the Comment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "author_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The unique ID of the Member that authored the Comment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "comments",
						"req": true,
						"short": "A nested array of threaded comments.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Comment was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "deleted",
						"req": true,
						"short": "True/false boolean indicating whether the Comment is deleted.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "An array of Group IDs that have been mentioned in this Comment.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Comment.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "An array of Member IDs that have been mentioned in this Comment.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "text",
						"req": true,
						"short": "The text of the Comment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date the Comment was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "threaded_comment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"comments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "id",
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"author_id": "`reqdata.author_id`",
										"created_at": "`reqdata.created_at`",
										"external_id": "`reqdata.external_id`",
										"text": "`reqdata.text`",
										"updated_at": "`reqdata.updated_at`",
									},
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/epics/{epic-public-id}/comments",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"comments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"author_id": "`reqdata.author_id`",
										"created_at": "`reqdata.created_at`",
										"external_id": "`reqdata.external_id`",
										"text": "`reqdata.text`",
										"updated_at": "`reqdata.updated_at`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics/{epic-public-id}/comments",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"comments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"comments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "id",
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"comments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "id",
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}",
								"parts": []any{
									"api",
									"v3",
									"epics",
									"{epic_id}",
									"comments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"comment-public-id": "id",
										"epic-public-id": "epic_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"epic_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"text": "`reqdata.text`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"epic",
						},
					},
				},
			},
			"uploaded_file": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content_type",
						"req": true,
						"short": "Free form string corresponding to a text or image file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date that the file was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The description of the file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "This field can be set to another unique ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "filename",
						"req": true,
						"short": "The name assigned to the file in Shortcut upon upload.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_mention_ids",
						"req": true,
						"short": "The unique IDs of the Groups who are mentioned in the file description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID for the file.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "member_mention_ids",
						"req": true,
						"short": "The unique IDs of the Members who are mentioned in the file description.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "mention_ids",
						"req": true,
						"short": "`Deprecated:` use `member_mention_ids`.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The optional User-specified name of the file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"req": true,
						"short": "The size of the file.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "story_ids",
						"req": true,
						"short": "The unique IDs of the Stories associated with this file.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "thumbnail_url",
						"req": true,
						"short": "The url where the thumbnail of the file can be found in Shortcut.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updated_at",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The time/date that the file was updated.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploader_id",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The unique ID of the Member who uploaded the file.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "The URL for the file.",
						"type": "`$STRING`",
					},
				},
				"name": "uploaded_file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/files",
								"parts": []any{
									"api",
									"v3",
									"files",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/files",
								"parts": []any{
									"api",
									"v3",
									"files",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/files/{file-public-id}",
								"parts": []any{
									"api",
									"v3",
									"files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/files/{file-public-id}",
								"parts": []any{
									"api",
									"v3",
									"files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/api/v3/files/{file-public-id}",
								"parts": []any{
									"api",
									"v3",
									"files",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"file-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": map[string]any{
										"created_at": "`reqdata.created_at`",
										"description": "`reqdata.description`",
										"external_id": "`reqdata.external_id`",
										"name": "`reqdata.name`",
										"updated_at": "`reqdata.updated_at`",
										"uploader_id": "`reqdata.uploader_id`",
									},
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "secret",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "webhook_url",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/api/v3/integrations/webhook",
								"parts": []any{
									"api",
									"v3",
									"integrations",
									"webhook",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"secret": "`reqdata.secret`",
										"webhook_url": "`reqdata.webhook_url`",
									},
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "integration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/integrations/webhook/{integration-public-id}",
								"parts": []any{
									"api",
									"v3",
									"integrations",
									"webhook",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integration-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "integration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/api/v3/integrations/webhook/{integration-public-id}",
								"parts": []any{
									"api",
									"v3",
									"integrations",
									"webhook",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"integration-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "auto_assign_owner",
						"req": true,
						"short": "Indicates if an owner is automatically assigned when an unowned story is started.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The date the Workflow was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "default_state_id",
						"req": true,
						"short": "The unique ID of the default state that new Stories are entered into.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"req": true,
						"short": "A description of the workflow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "entity_type",
						"req": true,
						"short": "A string description of this resource.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique ID of the Workflow.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the workflow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "project_ids",
						"req": true,
						"short": "An array of IDs of projects within the Workflow.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "states",
						"req": true,
						"short": "A map of the states in this Workflow.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "team_id",
						"req": true,
						"short": "The ID of the team the workflow belongs to.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "updated_at",
						"req": true,
						"short": "The date the Workflow was updated.",
						"type": "`$STRING`",
					},
				},
				"name": "workflow",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/workflows",
								"parts": []any{
									"api",
									"v3",
									"workflows",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "workflow_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/v3/workflows/{workflow-public-id}",
								"parts": []any{
									"api",
									"v3",
									"workflows",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"workflow-public-id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
