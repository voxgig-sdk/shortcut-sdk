package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Shortcut",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"category": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "color",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ANY`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "category",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"comment": map[string]any{
				"fields": []any{},
				"name": "comment",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
						"active": true,
						"name": "after_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "before_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "canonical_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "enabled",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "field_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "fixed_position",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "icon_set_identifier",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "story_types",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "values",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 15,
					},
				},
				"name": "custom_field",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "custom_field_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "custom_field_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "custom_field_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"doc_slim": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "content",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "title",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
				},
				"name": "doc_slim",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
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
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"entity_template": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "author_id",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "custom_fields",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "deadline",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "epic_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "estimate",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "external_links",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "files",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "iteration_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "label_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "labels",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "last_used_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "linked_files",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
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
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "project_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "story_contents",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"type": "`$OBJECT`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "story_type",
						"req": false,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "sub_tasks",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "tasks",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "workflow_state_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 26,
					},
				},
				"name": "entity_template",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "entity_template_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "entity_template_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "entity_template_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"epic": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "after_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "associated_groups",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "before_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "comments",
						"op": map[string]any{
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "completed",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "completed_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "converted_from_story_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "deadline",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "epic_state_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "group_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "health",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "label_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "labels",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "milestone_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "objective_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "planned_start_date",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "productboard_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "productboard_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "productboard_plugin_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "productboard_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "project_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "requested_by_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "started",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "started_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "state",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 42,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 43,
					},
					map[string]any{
						"active": true,
						"name": "stories_without_projects",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 44,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 45,
					},
				},
				"name": "epic",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "next",
											"orig": "next",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"reqd": false,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "label_id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "milestone_id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 3,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "objectif_id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 4,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "associated_groups",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "completed",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "completed_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "completed_at_override",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "deadline",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "epic_state_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "group_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "label_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "labels",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "milestone_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "objective_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "planned_start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "productboard_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "productboard_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "productboard_plugin_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "productboard_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "project_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "requested_by_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "started",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "started_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "started_at_override",
						"req": true,
						"type": "`$STRING`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "state",
						"req": true,
						"type": "`$STRING`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "stories_without_projects",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 40,
					},
				},
				"name": "epic_paginated_result",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"epic_unlink_productboard": map[string]any{
				"fields": []any{},
				"name": "epic_unlink_productboard",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"epic_workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "color",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "epic_workflow",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "color",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "color_key",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "default_workflow_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "display_icon",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "display_icon_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "member_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "mention_name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "num_epics_started",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "num_stories",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_backlog",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_started",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "workflow_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 20,
					},
				},
				"name": "group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "group_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "group_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"health": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "author_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "epic_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "objective_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "text",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "health",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "health_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "actions",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "actor_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "automation_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "changed_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "member_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "primary_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "references",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "version",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "webhook_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
				},
				"name": "history",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "list",
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
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "associated_groups",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "end_date",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "group_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "label_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "labels",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "start_date",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 19,
					},
				},
				"name": "iteration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "next",
											"orig": "next",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"key_result": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "current_observed_value",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "current_target_value",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "initial_observed_value",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"type": "`$OBJECT`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "objective_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "observed_value",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "progress",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "target_value",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "key_result",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "key_result_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "key_result_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"label": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$BOOLEAN`",
							},
						},
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "color",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "num_epics",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "num_epics_completed",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "num_epics_in_progress",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "num_epics_total",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "num_epics_unstarted",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "num_points_backlog",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "num_points_completed",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "num_points_in_progress",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "num_points_total",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "num_points_unstarted",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "num_related_documents",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_backlog",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_completed",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_in_progress",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_total",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_unestimated",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "num_stories_unstarted",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 28,
					},
				},
				"name": "label",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "slim",
											"orig": "slim",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"linked_file": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "content_type",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "size",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "story_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "story_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "thumbnail_url",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "uploader_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "url",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
				},
				"name": "linked_file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "linked_file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "linked_file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "linked_file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_without_invite",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "disabled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "group_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "installation_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "is_owner",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "mention_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "organization2",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "profile",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "replaced_by",
						"req": false,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "role",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "state",
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "workspace2",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 17,
					},
				},
				"name": "member",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "disabled",
											"orig": "disabled",
											"reqd": false,
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "org_public_id",
											"orig": "org_public_id",
											"reqd": false,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "member_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "org_public_id",
											"orig": "org_public_id",
											"reqd": false,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"milestone": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "after_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "before_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "categories",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "completed",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "completed_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "key_result_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "started",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "started_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "state",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 21,
					},
				},
				"name": "milestone",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "category_id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "category_id",
											"orig": "category_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
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
								"index$": 2,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "milestone_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
				"fields": []any{},
				"name": "objectif",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"objective": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "after_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "before_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "categories",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "completed",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "completed_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "key_result_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "started",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "started_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "state",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 21,
					},
				},
				"name": "objective",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "next",
											"orig": "next",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "next",
											"orig": "next",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
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
								"index$": 2,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "objective_public_id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "objective_public_id",
											"orig": "objective_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "abbreviation",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "color",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "days_to_thermometer",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "iteration_length",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "show_thermometer",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "start_time",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "team_id",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "workflow_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 19,
					},
				},
				"name": "project",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"repository": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "full_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "url",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "repository",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "repo_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "epics",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "iterations",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "milestones",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "stories",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 3,
					},
				},
				"name": "search",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "next",
											"orig": "next",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"story": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "after_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "before_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "blocked",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "blocker",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "branch_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "branches",
						"op": map[string]any{
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "comment_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"req": false,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "comments",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "commit_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "commits",
						"op": map[string]any{
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "completed",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "completed_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "completed_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "custom_fields",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "custom_fields_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "custom_fields_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "cycle_time",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "deadline",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"list": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "epic_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "estimate",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "external_links",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "external_links_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "external_links_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "file_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"req": false,
						"type": "`$ARRAY`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "file_ids_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "file_ids_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "files",
						"op": map[string]any{
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "formatted_vcs_branch_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "iteration_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "label_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 42,
					},
					map[string]any{
						"active": true,
						"name": "labels",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 43,
					},
					map[string]any{
						"active": true,
						"name": "labels_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 44,
					},
					map[string]any{
						"active": true,
						"name": "labels_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 45,
					},
					map[string]any{
						"active": true,
						"name": "lead_time",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 46,
					},
					map[string]any{
						"active": true,
						"name": "linked_file_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"req": false,
						"type": "`$ARRAY`",
						"index$": 47,
					},
					map[string]any{
						"active": true,
						"name": "linked_file_ids_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 48,
					},
					map[string]any{
						"active": true,
						"name": "linked_file_ids_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 49,
					},
					map[string]any{
						"active": true,
						"name": "linked_files",
						"op": map[string]any{
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 50,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 51,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 52,
					},
					map[string]any{
						"active": true,
						"name": "move_to",
						"req": false,
						"type": "`$STRING`",
						"index$": 53,
					},
					map[string]any{
						"active": true,
						"name": "moved_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 54,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 55,
					},
					map[string]any{
						"active": true,
						"name": "num_tasks_completed",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$INTEGER`",
							},
						},
						"req": false,
						"type": "`$INTEGER`",
						"index$": 56,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 57,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 58,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 59,
					},
					map[string]any{
						"active": true,
						"name": "parent_story_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 60,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 61,
					},
					map[string]any{
						"active": true,
						"name": "previous_iteration_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 62,
					},
					map[string]any{
						"active": true,
						"name": "project_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 63,
					},
					map[string]any{
						"active": true,
						"name": "pull_request_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 64,
					},
					map[string]any{
						"active": true,
						"name": "pull_requests",
						"op": map[string]any{
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 65,
					},
					map[string]any{
						"active": true,
						"name": "requested_by_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 66,
					},
					map[string]any{
						"active": true,
						"name": "source_task_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 67,
					},
					map[string]any{
						"active": true,
						"name": "started",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 68,
					},
					map[string]any{
						"active": true,
						"name": "started_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 69,
					},
					map[string]any{
						"active": true,
						"name": "started_at_override",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 70,
					},
					map[string]any{
						"active": true,
						"name": "stats",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 71,
					},
					map[string]any{
						"active": true,
						"name": "story_links",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 72,
					},
					map[string]any{
						"active": true,
						"name": "story_template_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 73,
					},
					map[string]any{
						"active": true,
						"name": "story_type",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 74,
					},
					map[string]any{
						"active": true,
						"name": "sub_task_story_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 75,
					},
					map[string]any{
						"active": true,
						"name": "sub_tasks",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 76,
					},
					map[string]any{
						"active": true,
						"name": "synced_item",
						"req": true,
						"type": "`$OBJECT`",
						"index$": 77,
					},
					map[string]any{
						"active": true,
						"name": "task_ids",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"req": false,
						"type": "`$ARRAY`",
						"index$": 78,
					},
					map[string]any{
						"active": true,
						"name": "tasks",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"list": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 79,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 80,
					},
					map[string]any{
						"active": true,
						"name": "workflow_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 81,
					},
					map[string]any{
						"active": true,
						"name": "workflow_state_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 82,
					},
				},
				"name": "story",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "detail",
											"orig": "detail",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "entity_type",
											"orig": "entity_type",
											"reqd": false,
											"type": "`$ARRAY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "next",
											"orig": "next",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "group_id",
											"orig": "group_public_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"reqd": false,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"reqd": false,
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "iteration_id",
											"orig": "iteration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"reqd": false,
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
								"index$": 3,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "label_id",
											"orig": "label_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"reqd": false,
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
								"index$": 4,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "project_id",
											"orig": "project_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "includes_description",
											"orig": "includes_description",
											"reqd": false,
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
								"index$": 5,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
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
								"index$": 6,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "author_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "blocker",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "deleted",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "linked_to_slack",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "parent_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "reactions",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "story_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "text",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "unblocks_parent",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 18,
					},
				},
				"name": "story_comment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object_id",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "subject_id",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$INTEGER`",
							},
						},
						"req": true,
						"type": "`$INTEGER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "subject_workflow_state_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "verb",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
				},
				"name": "story_link",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_link_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_link_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "story_link_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"story_reaction": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "emoji",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
				},
				"name": "story_reaction",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "comment_id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "remove",
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
						"active": true,
						"name": "after_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "archived",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "before_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "completed_at_end",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "completed_at_start",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "created_at_end",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "created_at_start",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "custom_fields_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "custom_fields_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "deadline",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "deadline_end",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "deadline_start",
						"req": false,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "epic_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "epic_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "estimate",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "external_links",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "follower_ids_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 19,
					},
					map[string]any{
						"active": true,
						"name": "group_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 20,
					},
					map[string]any{
						"active": true,
						"name": "includes_description",
						"req": false,
						"type": "`$BOOLEAN`",
						"index$": 21,
					},
					map[string]any{
						"active": true,
						"name": "iteration_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 22,
					},
					map[string]any{
						"active": true,
						"name": "iteration_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 23,
					},
					map[string]any{
						"active": true,
						"name": "label_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 24,
					},
					map[string]any{
						"active": true,
						"name": "label_name",
						"req": false,
						"type": "`$STRING`",
						"index$": 25,
					},
					map[string]any{
						"active": true,
						"name": "labels_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 26,
					},
					map[string]any{
						"active": true,
						"name": "labels_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 27,
					},
					map[string]any{
						"active": true,
						"name": "move_to",
						"req": false,
						"type": "`$STRING`",
						"index$": 28,
					},
					map[string]any{
						"active": true,
						"name": "owner_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 29,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 30,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids_add",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 31,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids_remove",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 32,
					},
					map[string]any{
						"active": true,
						"name": "project_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 33,
					},
					map[string]any{
						"active": true,
						"name": "project_ids",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 34,
					},
					map[string]any{
						"active": true,
						"name": "requested_by_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 35,
					},
					map[string]any{
						"active": true,
						"name": "stories",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 36,
					},
					map[string]any{
						"active": true,
						"name": "story_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 37,
					},
					map[string]any{
						"active": true,
						"name": "story_type",
						"req": false,
						"type": "`$STRING`",
						"index$": 38,
					},
					map[string]any{
						"active": true,
						"name": "updated_at_end",
						"req": false,
						"type": "`$STRING`",
						"index$": 39,
					},
					map[string]any{
						"active": true,
						"name": "updated_at_start",
						"req": false,
						"type": "`$STRING`",
						"index$": 40,
					},
					map[string]any{
						"active": true,
						"name": "workflow_state_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 41,
					},
					map[string]any{
						"active": true,
						"name": "workflow_state_types",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 42,
					},
				},
				"name": "story_slim",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"task": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "after_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "before_id",
						"req": false,
						"type": "`$INTEGER`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "complete",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "completed_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "global_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "owner_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
							"update": map[string]any{
								"req": false,
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"type": "`$ARRAY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "position",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "story_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
				},
				"name": "task",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "task_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "task_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "task_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "story_id",
											"orig": "story_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "app_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "author_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "comments",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "deleted",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "text",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"op": map[string]any{
							"create": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
				},
				"name": "threaded_comment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 1,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "epic_id",
											"orig": "epic_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "comment_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 1,
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
								"index$": 0,
							},
						},
						"key$": "update",
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
						"active": true,
						"name": "content_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "external_id",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "filename",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "group_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "member_mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "mention_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "size",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "story_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "thumbnail_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "uploader_id",
						"op": map[string]any{
							"update": map[string]any{
								"req": false,
								"type": "`$STRING`",
							},
						},
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "url",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
				},
				"name": "uploaded_file",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "file_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "update",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "secret",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "webhook_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "create",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "integration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "integration_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "remove",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workflow": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "auto_assign_owner",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "default_state_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "entity_type",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "project_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "states",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "team_id",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
				},
				"name": "workflow",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
							},
						},
						"key$": "list",
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"kind": "param",
											"name": "id",
											"orig": "workflow_public_id",
											"reqd": true,
											"type": "`$INTEGER`",
											"index$": 0,
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
								"index$": 0,
							},
						},
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
