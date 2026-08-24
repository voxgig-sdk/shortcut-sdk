<?php
declare(strict_types=1);

// Shortcut SDK configuration

class ShortcutConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Shortcut",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.app.shortcut.com",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "bulk" => [],
                    "category" => [],
                    "comment" => [],
                    "custom_field" => [],
                    "disable" => [],
                    "doc_slim" => [],
                    "enable" => [],
                    "entity_template" => [],
                    "epic" => [],
                    "epic_paginated_result" => [],
                    "epic_unlink_productboard" => [],
                    "epic_workflow" => [],
                    "group" => [],
                    "health" => [],
                    "history" => [],
                    "iteration" => [],
                    "key_result" => [],
                    "label" => [],
                    "linked_file" => [],
                    "member" => [],
                    "milestone" => [],
                    "objectif" => [],
                    "objective" => [],
                    "project" => [],
                    "repository" => [],
                    "search" => [],
                    "story" => [],
                    "story_comment" => [],
                    "story_link" => [],
                    "story_reaction" => [],
                    "story_slim" => [],
                    "task" => [],
                    "threaded_comment" => [],
                    "uploaded_file" => [],
                    "webhook" => [],
                    "workflow" => [],
                ],
            ],
            "entity" => [
        'bulk' => [
          'fields' => [],
          'name' => 'bulk',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/stories/bulk',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    'bulk',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'story_ids' => '`reqdata.story_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'category' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'color',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'type',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ANY`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
          ],
          'name' => 'category',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/categories',
                  'parts' => [
                    'api',
                    'v3',
                    'categories',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'color' => '`reqdata.color`',
                      'external_id' => '`reqdata.external_id`',
                      'name' => '`reqdata.name`',
                      'type' => '`reqdata.type`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/categories',
                  'parts' => [
                    'api',
                    'v3',
                    'categories',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/categories/{category-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'categories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/categories/{category-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'categories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'category_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/categories/{category-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'categories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'category-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'archived' => '`reqdata.archived`',
                      'color' => '`reqdata.color`',
                      'name' => '`reqdata.name`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'comment' => [
          'fields' => [],
          'name' => 'comment',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/stories/{story-public-id}/comments/{comment-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'comments',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'id',
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'story',
              ],
            ],
          ],
        ],
        'custom_field' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'after_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'before_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'canonical_name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'enabled',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'field_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'fixed_position',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'icon_set_identifier',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'story_types',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'values',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 15,
            ],
          ],
          'name' => 'custom_field',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/custom-fields',
                  'parts' => [
                    'api',
                    'v3',
                    'custom-fields',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'custom_field_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/custom-fields/{custom-field-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'custom-fields',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'custom-field-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'custom_field_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/custom-fields/{custom-field-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'custom-fields',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'custom-field-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'custom_field_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/custom-fields/{custom-field-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'custom-fields',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'custom-field-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'after_id' => '`reqdata.after_id`',
                      'before_id' => '`reqdata.before_id`',
                      'description' => '`reqdata.description`',
                      'enabled' => '`reqdata.enabled`',
                      'icon_set_identifier' => '`reqdata.icon_set_identifier`',
                      'name' => '`reqdata.name`',
                      'values' => '`reqdata.value`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'disable' => [
          'fields' => [],
          'name' => 'disable',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/entity-templates/disable',
                  'parts' => [
                    'api',
                    'v3',
                    'entity-templates',
                    'disable',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/iterations/disable',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                    'disable',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'doc_slim' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'content',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'doc_slim',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/documents',
                  'parts' => [
                    'api',
                    'v3',
                    'documents',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'content' => '`reqdata.content`',
                      'title' => '`reqdata.title`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/documents',
                  'parts' => [
                    'api',
                    'v3',
                    'documents',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'enable' => [
          'fields' => [],
          'name' => 'enable',
          'op' => [
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/entity-templates/enable',
                  'parts' => [
                    'api',
                    'v3',
                    'entity-templates',
                    'enable',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/iterations/enable',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                    'enable',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'entity_template' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'author_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'custom_fields',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'deadline',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'epic_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'estimate',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'external_links',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'files',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'follower_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'group_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'iteration_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'label_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'labels',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'last_used_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'linked_files',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'owner_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'project_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'story_contents',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$OBJECT`',
                ],
              ],
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'story_type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'sub_tasks',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'tasks',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'workflow_state_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 26,
            ],
          ],
          'name' => 'entity_template',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/entity-templates',
                  'parts' => [
                    'api',
                    'v3',
                    'entity-templates',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'author_id' => '`reqdata.author_id`',
                      'name' => '`reqdata.name`',
                      'story_contents' => '`reqdata.story_content`',
                    ],
                    'res' => '`body.story_contents`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/entity-templates',
                  'parts' => [
                    'api',
                    'v3',
                    'entity-templates',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'entity_template_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/entity-templates/{entity-template-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'entity-templates',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entity-template-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.story_contents`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'entity_template_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/entity-templates/{entity-template-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'entity-templates',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entity-template-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'entity_template_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/entity-templates/{entity-template-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'entity-templates',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'entity-template-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'name' => '`reqdata.name`',
                      'story_contents' => '`reqdata.story_content`',
                    ],
                    'res' => '`body.story_contents`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'epic' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'after_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'associated_groups',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'before_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'comments',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'completed',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'completed_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'converted_from_story_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'deadline',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'list' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'epic_state_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'follower_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'group_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'group_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'health',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'label_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'labels',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'milestone_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'objective_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'owner_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'planned_start_date',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'productboard_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'productboard_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'productboard_plugin_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'productboard_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'project_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'requested_by_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 38,
            ],
            [
              'active' => true,
              'name' => 'started',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 39,
            ],
            [
              'active' => true,
              'name' => 'started_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 40,
            ],
            [
              'active' => true,
              'name' => 'started_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 41,
            ],
            [
              'active' => true,
              'name' => 'state',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 42,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 43,
            ],
            [
              'active' => true,
              'name' => 'stories_without_projects',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 44,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 45,
            ],
          ],
          'name' => 'epic',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/epics',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'converted_from_story_id' => '`reqdata.converted_from_story_id`',
                      'created_at' => '`reqdata.created_at`',
                      'deadline' => '`reqdata.deadline`',
                      'description' => '`reqdata.description`',
                      'epic_state_id' => '`reqdata.epic_state_id`',
                      'external_id' => '`reqdata.external_id`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'group_id' => '`reqdata.group_id`',
                      'group_ids' => '`reqdata.group_id`',
                      'labels' => '`reqdata.label`',
                      'milestone_id' => '`reqdata.milestone_id`',
                      'name' => '`reqdata.name`',
                      'objective_ids' => '`reqdata.objective_id`',
                      'owner_ids' => '`reqdata.owner_id`',
                      'planned_start_date' => '`reqdata.planned_start_date`',
                      'requested_by_id' => '`reqdata.requested_by_id`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'state' => '`reqdata.state`',
                      'updated_at' => '`reqdata.updated_at`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'detail',
                        'orig' => 'detail',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'entity_type',
                        'orig' => 'entity_type',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'next',
                        'orig' => 'next',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/search/epics',
                  'parts' => [
                    'api',
                    'v3',
                    'search',
                    'epics',
                  ],
                  'select' => [
                    'exist' => [
                      'detail',
                      'entity_type',
                      'next',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'includes_description',
                        'orig' => 'includes_description',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                  ],
                  'select' => [
                    'exist' => [
                      'includes_description',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'label_id',
                        'orig' => 'label_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/labels/{label-public-id}/epics',
                  'parts' => [
                    'api',
                    'v3',
                    'labels',
                    '{label_id}',
                    'epics',
                  ],
                  'rename' => [
                    'param' => [
                      'label-public-id' => 'label_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'label_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'milestone_id',
                        'orig' => 'milestone_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/milestones/{milestone-public-id}/epics',
                  'parts' => [
                    'api',
                    'v3',
                    'milestones',
                    '{milestone_id}',
                    'epics',
                  ],
                  'rename' => [
                    'param' => [
                      'milestone-public-id' => 'milestone_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'milestone_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 3,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'objectif_id',
                        'orig' => 'objective_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/objectives/{objective-public-id}/epics',
                  'parts' => [
                    'api',
                    'v3',
                    'objectives',
                    '{objectif_id}',
                    'epics',
                  ],
                  'rename' => [
                    'param' => [
                      'objective-public-id' => 'objectif_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'objectif_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 4,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics/{epic-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/epics/{epic-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/epics/{epic-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'after_id' => '`reqdata.after_id`',
                      'archived' => '`reqdata.archived`',
                      'before_id' => '`reqdata.before_id`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'deadline' => '`reqdata.deadline`',
                      'description' => '`reqdata.description`',
                      'epic_state_id' => '`reqdata.epic_state_id`',
                      'external_id' => '`reqdata.external_id`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'group_id' => '`reqdata.group_id`',
                      'group_ids' => '`reqdata.group_id`',
                      'labels' => '`reqdata.label`',
                      'milestone_id' => '`reqdata.milestone_id`',
                      'name' => '`reqdata.name`',
                      'objective_ids' => '`reqdata.objective_id`',
                      'owner_ids' => '`reqdata.owner_id`',
                      'planned_start_date' => '`reqdata.planned_start_date`',
                      'requested_by_id' => '`reqdata.requested_by_id`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'state' => '`reqdata.state`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'label',
              ],
              [
                'milestone',
              ],
              [
                'objectif',
              ],
            ],
          ],
        ],
        'epic_paginated_result' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'associated_groups',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'completed',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'completed_at_override',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'deadline',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'epic_state_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'follower_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'group_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'group_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'label_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'labels',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'milestone_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'objective_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'owner_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'planned_start_date',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'productboard_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'productboard_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'productboard_plugin_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'productboard_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'project_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'requested_by_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'started',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'started_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'started_at_override',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'state',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 38,
            ],
            [
              'active' => true,
              'name' => 'stories_without_projects',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 39,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 40,
            ],
          ],
          'name' => 'epic_paginated_result',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'includes_description',
                        'orig' => 'includes_description',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics/paginated',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    'paginated',
                  ],
                  'select' => [
                    'exist' => [
                      'includes_description',
                      'page',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'epic_unlink_productboard' => [
          'fields' => [],
          'name' => 'epic_unlink_productboard',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/epics/{epic-public-id}/unlink-productboard',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{id}',
                    'unlink-productboard',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'epic_workflow' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'color',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
          ],
          'name' => 'epic_workflow',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epic-workflow',
                  'parts' => [
                    'api',
                    'v3',
                    'epic-workflow',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.epic_states`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'color',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'color_key',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'default_workflow_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'display_icon',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'display_icon_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'member_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'mention_name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'num_epics_started',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'num_stories',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'num_stories_backlog',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'num_stories_started',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'workflow_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 20,
            ],
          ],
          'name' => 'group',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/groups',
                  'parts' => [
                    'api',
                    'v3',
                    'groups',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'color' => '`reqdata.color`',
                      'color_key' => '`reqdata.color_key`',
                      'description' => '`reqdata.description`',
                      'display_icon_id' => '`reqdata.display_icon_id`',
                      'member_ids' => '`reqdata.member_id`',
                      'mention_name' => '`reqdata.mention_name`',
                      'name' => '`reqdata.name`',
                      'workflow_ids' => '`reqdata.workflow_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/groups',
                  'parts' => [
                    'api',
                    'v3',
                    'groups',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/groups/{group-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'groups',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'group-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/groups/{group-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'groups',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'group-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'archived' => '`reqdata.archived`',
                      'color' => '`reqdata.color`',
                      'color_key' => '`reqdata.color_key`',
                      'default_workflow_id' => '`reqdata.default_workflow_id`',
                      'description' => '`reqdata.description`',
                      'display_icon_id' => '`reqdata.display_icon_id`',
                      'member_ids' => '`reqdata.member_id`',
                      'mention_name' => '`reqdata.mention_name`',
                      'name' => '`reqdata.name`',
                      'workflow_ids' => '`reqdata.workflow_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'health' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'author_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'epic_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'objective_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'status',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'text',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
          ],
          'name' => 'health',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/epics/{epic-public-id}/health',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'health',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'status' => '`reqdata.status`',
                      'text' => '`reqdata.text`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics/{epic-public-id}/health-history',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'health-history',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics/{epic-public-id}/health',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'health',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'health_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/health/{health-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'health',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'health-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'status' => '`reqdata.status`',
                      'text' => '`reqdata.text`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'epic',
              ],
            ],
          ],
        ],
        'history' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'actions',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'actor_name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'automation_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'changed_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'member_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'primary_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'references',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'version',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'webhook_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
          ],
          'name' => 'history',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/stories/{story-public-id}/history',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'history',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'story',
              ],
            ],
          ],
        ],
        'iteration' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'associated_groups',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'end_date',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'follower_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'group_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'label_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'labels',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'start_date',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
          ],
          'name' => 'iteration',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/iterations',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'description' => '`reqdata.description`',
                      'end_date' => '`reqdata.end_date`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'group_ids' => '`reqdata.group_id`',
                      'labels' => '`reqdata.label`',
                      'name' => '`reqdata.name`',
                      'start_date' => '`reqdata.start_date`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'detail',
                        'orig' => 'detail',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'entity_type',
                        'orig' => 'entity_type',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'next',
                        'orig' => 'next',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/search/iterations',
                  'parts' => [
                    'api',
                    'v3',
                    'search',
                    'iterations',
                  ],
                  'select' => [
                    'exist' => [
                      'detail',
                      'entity_type',
                      'next',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/iterations',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'iteration_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/iterations/{iteration-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'iteration-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'iteration_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/iterations/{iteration-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'iteration-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'iteration_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/iterations/{iteration-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'iteration-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'description' => '`reqdata.description`',
                      'end_date' => '`reqdata.end_date`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'group_ids' => '`reqdata.group_id`',
                      'labels' => '`reqdata.label`',
                      'name' => '`reqdata.name`',
                      'start_date' => '`reqdata.start_date`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'key_result' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'current_observed_value',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'current_target_value',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'initial_observed_value',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$OBJECT`',
                ],
              ],
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'objective_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'observed_value',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'progress',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'target_value',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
          ],
          'name' => 'key_result',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'key_result_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/key-results/{key-result-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'key-results',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'key-result-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'key_result_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/key-results/{key-result-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'key-results',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'key-result-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'initial_observed_value' => '`reqdata.initial_observed_value`',
                      'name' => '`reqdata.name`',
                      'observed_value' => '`reqdata.observed_value`',
                      'target_value' => '`reqdata.target_value`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'label' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'color',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'num_epics',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'num_epics_completed',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'num_epics_in_progress',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'num_epics_total',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'num_epics_unstarted',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'num_points_backlog',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'num_points_completed',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'num_points_in_progress',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'num_points_total',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'num_points_unstarted',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'num_related_documents',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'num_stories_backlog',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'num_stories_completed',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'num_stories_in_progress',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'num_stories_total',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'num_stories_unestimated',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'num_stories_unstarted',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 28,
            ],
          ],
          'name' => 'label',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/labels',
                  'parts' => [
                    'api',
                    'v3',
                    'labels',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'color' => '`reqdata.color`',
                      'description' => '`reqdata.description`',
                      'external_id' => '`reqdata.external_id`',
                      'name' => '`reqdata.name`',
                    ],
                    'res' => '`body.stats`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'slim',
                        'orig' => 'slim',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/labels',
                  'parts' => [
                    'api',
                    'v3',
                    'labels',
                  ],
                  'select' => [
                    'exist' => [
                      'slim',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'label_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/labels/{label-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'labels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'label-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.stats`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'label_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/labels/{label-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'labels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'label-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'label_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/labels/{label-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'labels',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'label-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'archived' => '`reqdata.archived`',
                      'color' => '`reqdata.color`',
                      'description' => '`reqdata.description`',
                      'name' => '`reqdata.name`',
                    ],
                    'res' => '`body.stats`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'linked_file' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'content_type',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'size',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'story_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'story_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'thumbnail_url',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'type',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'uploader_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'url',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
          ],
          'name' => 'linked_file',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/linked-files',
                  'parts' => [
                    'api',
                    'v3',
                    'linked-files',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'content_type' => '`reqdata.content_type`',
                      'description' => '`reqdata.description`',
                      'name' => '`reqdata.name`',
                      'size' => '`reqdata.size`',
                      'story_id' => '`reqdata.story_id`',
                      'thumbnail_url' => '`reqdata.thumbnail_url`',
                      'type' => '`reqdata.type`',
                      'uploader_id' => '`reqdata.uploader_id`',
                      'url' => '`reqdata.url`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/linked-files',
                  'parts' => [
                    'api',
                    'v3',
                    'linked-files',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'linked_file_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/linked-files/{linked-file-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'linked-files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'linked-file-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'linked_file_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/linked-files/{linked-file-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'linked-files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'linked-file-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'linked_file_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/linked-files/{linked-file-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'linked-files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'linked-file-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'description' => '`reqdata.description`',
                      'name' => '`reqdata.name`',
                      'size' => '`reqdata.size`',
                      'story_id' => '`reqdata.story_id`',
                      'thumbnail_url' => '`reqdata.thumbnail_url`',
                      'type' => '`reqdata.type`',
                      'uploader_id' => '`reqdata.uploader_id`',
                      'url' => '`reqdata.url`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'member' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_without_invite',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'disabled',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'group_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'installation_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'is_owner',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'mention_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'organization2',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'profile',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'replaced_by',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'role',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'state',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'workspace2',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 17,
            ],
          ],
          'name' => 'member',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'disabled',
                        'orig' => 'disabled',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'org_public_id',
                        'orig' => 'org_public_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/members',
                  'parts' => [
                    'api',
                    'v3',
                    'members',
                  ],
                  'select' => [
                    'exist' => [
                      'disabled',
                      'org_public_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'member_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'org_public_id',
                        'orig' => 'org_public_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/members/{member-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'members',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'member-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'org_public_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/member',
                  'parts' => [
                    'api',
                    'v3',
                    'member',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'milestone' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'after_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'before_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'categories',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'completed',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'completed_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'key_result_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'started',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'started_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'started_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'state',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
          ],
          'name' => 'milestone',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/milestones',
                  'parts' => [
                    'api',
                    'v3',
                    'milestones',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'categories' => '`reqdata.category`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'description' => '`reqdata.description`',
                      'name' => '`reqdata.name`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'state' => '`reqdata.state`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'category_id',
                        'orig' => 'category_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/categories/{category-public-id}/milestones',
                  'parts' => [
                    'api',
                    'v3',
                    'categories',
                    '{category_id}',
                    'milestones',
                  ],
                  'rename' => [
                    'param' => [
                      'category-public-id' => 'category_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'category_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'category_id',
                        'orig' => 'category_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/categories/{category-public-id}/objectives',
                  'parts' => [
                    'api',
                    'v3',
                    'categories',
                    '{category_id}',
                    'objectives',
                  ],
                  'rename' => [
                    'param' => [
                      'category-public-id' => 'category_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'category_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/milestones',
                  'parts' => [
                    'api',
                    'v3',
                    'milestones',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'milestone_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/milestones/{milestone-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'milestones',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'milestone-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'milestone_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/milestones/{milestone-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'milestones',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'milestone-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'milestone_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/milestones/{milestone-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'milestones',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'milestone-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'after_id' => '`reqdata.after_id`',
                      'archived' => '`reqdata.archived`',
                      'before_id' => '`reqdata.before_id`',
                      'categories' => '`reqdata.category`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'description' => '`reqdata.description`',
                      'name' => '`reqdata.name`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'state' => '`reqdata.state`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'category',
              ],
            ],
          ],
        ],
        'objectif' => [
          'fields' => [],
          'name' => 'objectif',
          'op' => [
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'objective_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/objectives/{objective-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'objectives',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'objective-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'objective' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'after_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'before_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'categories',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'completed',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'completed_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'list' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'key_result_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'started',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'started_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'started_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'state',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
          ],
          'name' => 'objective',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/objectives',
                  'parts' => [
                    'api',
                    'v3',
                    'objectives',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'categories' => '`reqdata.category`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'description' => '`reqdata.description`',
                      'name' => '`reqdata.name`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'state' => '`reqdata.state`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'detail',
                        'orig' => 'detail',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'entity_type',
                        'orig' => 'entity_type',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'next',
                        'orig' => 'next',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/search/milestones',
                  'parts' => [
                    'api',
                    'v3',
                    'search',
                    'milestones',
                  ],
                  'select' => [
                    'exist' => [
                      'detail',
                      'entity_type',
                      'next',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'detail',
                        'orig' => 'detail',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'entity_type',
                        'orig' => 'entity_type',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'next',
                        'orig' => 'next',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/search/objectives',
                  'parts' => [
                    'api',
                    'v3',
                    'search',
                    'objectives',
                  ],
                  'select' => [
                    'exist' => [
                      'detail',
                      'entity_type',
                      'next',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/objectives',
                  'parts' => [
                    'api',
                    'v3',
                    'objectives',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'objective_public_id',
                        'orig' => 'objective_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/objectives/{objective-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'objectives',
                    '{objective_public_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'objective-public-id' => 'objective_public_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'objective_public_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'objective_public_id',
                        'orig' => 'objective_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/objectives/{objective-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'objectives',
                    '{objective_public_id}',
                  ],
                  'rename' => [
                    'param' => [
                      'objective-public-id' => 'objective_public_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'objective_public_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'after_id' => '`reqdata.after_id`',
                      'archived' => '`reqdata.archived`',
                      'before_id' => '`reqdata.before_id`',
                      'categories' => '`reqdata.category`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'description' => '`reqdata.description`',
                      'name' => '`reqdata.name`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'state' => '`reqdata.state`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'objectif',
              ],
            ],
          ],
        ],
        'project' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'abbreviation',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'color',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'days_to_thermometer',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'follower_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'iteration_length',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'show_thermometer',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'start_time',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'team_id',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'workflow_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 19,
            ],
          ],
          'name' => 'project',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/projects',
                  'parts' => [
                    'api',
                    'v3',
                    'projects',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'abbreviation' => '`reqdata.abbreviation`',
                      'color' => '`reqdata.color`',
                      'created_at' => '`reqdata.created_at`',
                      'description' => '`reqdata.description`',
                      'external_id' => '`reqdata.external_id`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'iteration_length' => '`reqdata.iteration_length`',
                      'name' => '`reqdata.name`',
                      'start_time' => '`reqdata.start_time`',
                      'team_id' => '`reqdata.team_id`',
                      'updated_at' => '`reqdata.updated_at`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/projects',
                  'parts' => [
                    'api',
                    'v3',
                    'projects',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'project_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/projects/{project-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'projects',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'project-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'project_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/projects/{project-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'projects',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'project-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'project_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/projects/{project-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'projects',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'project-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'abbreviation' => '`reqdata.abbreviation`',
                      'archived' => '`reqdata.archived`',
                      'color' => '`reqdata.color`',
                      'days_to_thermometer' => '`reqdata.days_to_thermometer`',
                      'description' => '`reqdata.description`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'name' => '`reqdata.name`',
                      'show_thermometer' => '`reqdata.show_thermometer`',
                      'team_id' => '`reqdata.team_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'repository' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'full_name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
          ],
          'name' => 'repository',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/repositories',
                  'parts' => [
                    'api',
                    'v3',
                    'repositories',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'repo_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/repositories/{repo-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'repositories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'repo-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'epics',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'iterations',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'milestones',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'stories',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
          ],
          'name' => 'search',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'detail',
                        'orig' => 'detail',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'entity_type',
                        'orig' => 'entity_type',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'next',
                        'orig' => 'next',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/search',
                  'parts' => [
                    'api',
                    'v3',
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'detail',
                      'entity_type',
                      'next',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'story' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'after_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'before_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'blocked',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'blocker',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'branch_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'branches',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'comment_ids',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'comments',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'commit_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'commits',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'completed',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'completed_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'custom_fields',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'custom_fields_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'custom_fields_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'cycle_time',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'deadline',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'list' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'epic_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'estimate',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'external_links',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'external_links_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'external_links_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'file_ids',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'file_ids_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'file_ids_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'files',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'follower_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'follower_ids_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'follower_ids_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'formatted_vcs_branch_name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'group_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 38,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 39,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 40,
            ],
            [
              'active' => true,
              'name' => 'iteration_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 41,
            ],
            [
              'active' => true,
              'name' => 'label_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 42,
            ],
            [
              'active' => true,
              'name' => 'labels',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 43,
            ],
            [
              'active' => true,
              'name' => 'labels_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 44,
            ],
            [
              'active' => true,
              'name' => 'labels_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 45,
            ],
            [
              'active' => true,
              'name' => 'lead_time',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 46,
            ],
            [
              'active' => true,
              'name' => 'linked_file_ids',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 47,
            ],
            [
              'active' => true,
              'name' => 'linked_file_ids_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 48,
            ],
            [
              'active' => true,
              'name' => 'linked_file_ids_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 49,
            ],
            [
              'active' => true,
              'name' => 'linked_files',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 50,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 51,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 52,
            ],
            [
              'active' => true,
              'name' => 'move_to',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 53,
            ],
            [
              'active' => true,
              'name' => 'moved_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 54,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 55,
            ],
            [
              'active' => true,
              'name' => 'num_tasks_completed',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 56,
            ],
            [
              'active' => true,
              'name' => 'owner_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 57,
            ],
            [
              'active' => true,
              'name' => 'owner_ids_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 58,
            ],
            [
              'active' => true,
              'name' => 'owner_ids_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 59,
            ],
            [
              'active' => true,
              'name' => 'parent_story_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 60,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 61,
            ],
            [
              'active' => true,
              'name' => 'previous_iteration_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 62,
            ],
            [
              'active' => true,
              'name' => 'project_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 63,
            ],
            [
              'active' => true,
              'name' => 'pull_request_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 64,
            ],
            [
              'active' => true,
              'name' => 'pull_requests',
              'op' => [
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 65,
            ],
            [
              'active' => true,
              'name' => 'requested_by_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 66,
            ],
            [
              'active' => true,
              'name' => 'source_task_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 67,
            ],
            [
              'active' => true,
              'name' => 'started',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 68,
            ],
            [
              'active' => true,
              'name' => 'started_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 69,
            ],
            [
              'active' => true,
              'name' => 'started_at_override',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 70,
            ],
            [
              'active' => true,
              'name' => 'stats',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 71,
            ],
            [
              'active' => true,
              'name' => 'story_links',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 72,
            ],
            [
              'active' => true,
              'name' => 'story_template_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 73,
            ],
            [
              'active' => true,
              'name' => 'story_type',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 74,
            ],
            [
              'active' => true,
              'name' => 'sub_task_story_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 75,
            ],
            [
              'active' => true,
              'name' => 'sub_tasks',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 76,
            ],
            [
              'active' => true,
              'name' => 'synced_item',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 77,
            ],
            [
              'active' => true,
              'name' => 'task_ids',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 78,
            ],
            [
              'active' => true,
              'name' => 'tasks',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'list' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 79,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 80,
            ],
            [
              'active' => true,
              'name' => 'workflow_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 81,
            ],
            [
              'active' => true,
              'name' => 'workflow_state_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 82,
            ],
          ],
          'name' => 'story',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'archived' => '`reqdata.archived`',
                      'comments' => '`reqdata.comment`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'created_at' => '`reqdata.created_at`',
                      'custom_fields' => '`reqdata.custom_field`',
                      'deadline' => '`reqdata.deadline`',
                      'description' => '`reqdata.description`',
                      'epic_id' => '`reqdata.epic_id`',
                      'estimate' => '`reqdata.estimate`',
                      'external_id' => '`reqdata.external_id`',
                      'external_links' => '`reqdata.external_link`',
                      'file_ids' => '`reqdata.file_id`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'group_id' => '`reqdata.group_id`',
                      'iteration_id' => '`reqdata.iteration_id`',
                      'labels' => '`reqdata.label`',
                      'linked_file_ids' => '`reqdata.linked_file_id`',
                      'move_to' => '`reqdata.move_to`',
                      'name' => '`reqdata.name`',
                      'owner_ids' => '`reqdata.owner_id`',
                      'parent_story_id' => '`reqdata.parent_story_id`',
                      'project_id' => '`reqdata.project_id`',
                      'requested_by_id' => '`reqdata.requested_by_id`',
                      'source_task_id' => '`reqdata.source_task_id`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'story_links' => '`reqdata.story_link`',
                      'story_template_id' => '`reqdata.story_template_id`',
                      'story_type' => '`reqdata.story_type`',
                      'sub_tasks' => '`reqdata.sub_task`',
                      'tasks' => '`reqdata.task`',
                      'updated_at' => '`reqdata.updated_at`',
                      'workflow_state_id' => '`reqdata.workflow_state_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories/from-template',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    'from-template',
                  ],
                  'select' => [
                    '$action' => 'from_template',
                  ],
                  'transform' => [
                    'req' => [
                      'archived' => '`reqdata.archived`',
                      'comments' => '`reqdata.comment`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'created_at' => '`reqdata.created_at`',
                      'custom_fields' => '`reqdata.custom_field`',
                      'custom_fields_add' => '`reqdata.custom_fields_add`',
                      'custom_fields_remove' => '`reqdata.custom_fields_remove`',
                      'deadline' => '`reqdata.deadline`',
                      'description' => '`reqdata.description`',
                      'epic_id' => '`reqdata.epic_id`',
                      'estimate' => '`reqdata.estimate`',
                      'external_id' => '`reqdata.external_id`',
                      'external_links' => '`reqdata.external_link`',
                      'external_links_add' => '`reqdata.external_links_add`',
                      'external_links_remove' => '`reqdata.external_links_remove`',
                      'file_ids' => '`reqdata.file_id`',
                      'file_ids_add' => '`reqdata.file_ids_add`',
                      'file_ids_remove' => '`reqdata.file_ids_remove`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'follower_ids_add' => '`reqdata.follower_ids_add`',
                      'follower_ids_remove' => '`reqdata.follower_ids_remove`',
                      'group_id' => '`reqdata.group_id`',
                      'iteration_id' => '`reqdata.iteration_id`',
                      'labels' => '`reqdata.label`',
                      'labels_add' => '`reqdata.labels_add`',
                      'labels_remove' => '`reqdata.labels_remove`',
                      'linked_file_ids' => '`reqdata.linked_file_id`',
                      'linked_file_ids_add' => '`reqdata.linked_file_ids_add`',
                      'linked_file_ids_remove' => '`reqdata.linked_file_ids_remove`',
                      'move_to' => '`reqdata.move_to`',
                      'name' => '`reqdata.name`',
                      'owner_ids' => '`reqdata.owner_id`',
                      'owner_ids_add' => '`reqdata.owner_ids_add`',
                      'owner_ids_remove' => '`reqdata.owner_ids_remove`',
                      'parent_story_id' => '`reqdata.parent_story_id`',
                      'project_id' => '`reqdata.project_id`',
                      'requested_by_id' => '`reqdata.requested_by_id`',
                      'source_task_id' => '`reqdata.source_task_id`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'story_links' => '`reqdata.story_link`',
                      'story_template_id' => '`reqdata.story_template_id`',
                      'story_type' => '`reqdata.story_type`',
                      'sub_tasks' => '`reqdata.sub_task`',
                      'tasks' => '`reqdata.task`',
                      'updated_at' => '`reqdata.updated_at`',
                      'workflow_state_id' => '`reqdata.workflow_state_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'detail',
                        'orig' => 'detail',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'entity_type',
                        'orig' => 'entity_type',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'next',
                        'orig' => 'next',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'query',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/search/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'search',
                    'stories',
                  ],
                  'select' => [
                    'exist' => [
                      'detail',
                      'entity_type',
                      'next',
                      'page_size',
                      'query',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'group_id',
                        'orig' => 'group_public_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/groups/{group-public-id}/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'groups',
                    '{group_id}',
                    'stories',
                  ],
                  'rename' => [
                    'param' => [
                      'group-public-id' => 'group_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'group_id',
                      'limit',
                      'offset',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'includes_description',
                        'orig' => 'includes_description',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics/{epic-public-id}/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'stories',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                      'includes_description',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 2,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'iteration_id',
                        'orig' => 'iteration_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'includes_description',
                        'orig' => 'includes_description',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/iterations/{iteration-public-id}/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'iterations',
                    '{iteration_id}',
                    'stories',
                  ],
                  'rename' => [
                    'param' => [
                      'iteration-public-id' => 'iteration_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'includes_description',
                      'iteration_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 3,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'label_id',
                        'orig' => 'label_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'includes_description',
                        'orig' => 'includes_description',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/labels/{label-public-id}/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'labels',
                    '{label_id}',
                    'stories',
                  ],
                  'rename' => [
                    'param' => [
                      'label-public-id' => 'label_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'includes_description',
                      'label_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 4,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'project_id',
                        'orig' => 'project_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'includes_description',
                        'orig' => 'includes_description',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/projects/{project-public-id}/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'projects',
                    '{project_id}',
                    'stories',
                  ],
                  'rename' => [
                    'param' => [
                      'project-public-id' => 'project_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'includes_description',
                      'project_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 5,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'external_link',
                        'orig' => 'external_link',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/external-link/stories',
                  'parts' => [
                    'api',
                    'v3',
                    'external-link',
                    'stories',
                  ],
                  'select' => [
                    'exist' => [
                      'external_link',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 6,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/stories/{story-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/stories/{story-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/stories/{story-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'after_id' => '`reqdata.after_id`',
                      'archived' => '`reqdata.archived`',
                      'before_id' => '`reqdata.before_id`',
                      'branch_ids' => '`reqdata.branch_id`',
                      'commit_ids' => '`reqdata.commit_id`',
                      'completed_at_override' => '`reqdata.completed_at_override`',
                      'custom_fields' => '`reqdata.custom_field`',
                      'deadline' => '`reqdata.deadline`',
                      'description' => '`reqdata.description`',
                      'epic_id' => '`reqdata.epic_id`',
                      'estimate' => '`reqdata.estimate`',
                      'external_links' => '`reqdata.external_link`',
                      'file_ids' => '`reqdata.file_id`',
                      'follower_ids' => '`reqdata.follower_id`',
                      'group_id' => '`reqdata.group_id`',
                      'iteration_id' => '`reqdata.iteration_id`',
                      'labels' => '`reqdata.label`',
                      'linked_file_ids' => '`reqdata.linked_file_id`',
                      'move_to' => '`reqdata.move_to`',
                      'name' => '`reqdata.name`',
                      'owner_ids' => '`reqdata.owner_id`',
                      'parent_story_id' => '`reqdata.parent_story_id`',
                      'project_id' => '`reqdata.project_id`',
                      'pull_request_ids' => '`reqdata.pull_request_id`',
                      'requested_by_id' => '`reqdata.requested_by_id`',
                      'started_at_override' => '`reqdata.started_at_override`',
                      'story_type' => '`reqdata.story_type`',
                      'workflow_state_id' => '`reqdata.workflow_state_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'epic',
              ],
              [
                'group',
              ],
              [
                'iteration',
              ],
              [
                'label',
              ],
              [
                'project',
              ],
            ],
          ],
        ],
        'story_comment' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'author_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'blocker',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'deleted',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'linked_to_slack',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'parent_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'reactions',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'story_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'text',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'unblocks_parent',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
          ],
          'name' => 'story_comment',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'comment_id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'comments',
                    '{comment_id}',
                    'unlink-from-slack',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'comment_id',
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'comment_id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories/{story-public-id}/comments',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{id}',
                    'comments',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'author_id' => '`reqdata.author_id`',
                      'created_at' => '`reqdata.created_at`',
                      'external_id' => '`reqdata.external_id`',
                      'parent_id' => '`reqdata.parent_id`',
                      'text' => '`reqdata.text`',
                      'updated_at' => '`reqdata.updated_at`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/stories/{story-public-id}/comments',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{id}',
                    'comments',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/stories/{story-public-id}/comments/{comment-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'comments',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'id',
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/stories/{story-public-id}/comments/{comment-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'comments',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'id',
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'text' => '`reqdata.text`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'story',
              ],
              [
                'story',
                'comment',
              ],
            ],
          ],
        ],
        'story_link' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'object_id',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'subject_id',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'subject_workflow_state_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'verb',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
          ],
          'name' => 'story_link',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/story-links',
                  'parts' => [
                    'api',
                    'v3',
                    'story-links',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'object_id' => '`reqdata.object_id`',
                      'subject_id' => '`reqdata.subject_id`',
                      'verb' => '`reqdata.verb`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_link_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/story-links/{story-link-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'story-links',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-link-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_link_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/story-links/{story-link-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'story-links',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-link-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'story_link_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/story-links/{story-link-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'story-links',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-link-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'object_id' => '`reqdata.object_id`',
                      'subject_id' => '`reqdata.subject_id`',
                      'verb' => '`reqdata.verb`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'story_reaction' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'emoji',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
          ],
          'name' => 'story_reaction',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'comment_id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'comments',
                    '{comment_id}',
                    'reactions',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'comment_id',
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'comment_id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'emoji' => '`reqdata.emoji`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'comment_id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'comments',
                    '{comment_id}',
                    'reactions',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'comment_id',
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'comment_id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'emoji' => '`reqdata.emoji`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'story',
                'comment',
              ],
            ],
          ],
        ],
        'story_slim' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'after_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'archived',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'before_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'completed_at_end',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'completed_at_start',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'created_at_end',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'created_at_start',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'custom_fields_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'custom_fields_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'deadline',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'deadline_end',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'deadline_start',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'epic_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'epic_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'estimate',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'external_links',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'follower_ids_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'follower_ids_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'group_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'group_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'includes_description',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'iteration_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'iteration_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'label_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'label_name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'labels_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'labels_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'move_to',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'owner_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'owner_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'owner_ids_add',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'owner_ids_remove',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'project_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'project_ids',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 34,
            ],
            [
              'active' => true,
              'name' => 'requested_by_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 35,
            ],
            [
              'active' => true,
              'name' => 'stories',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 36,
            ],
            [
              'active' => true,
              'name' => 'story_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 37,
            ],
            [
              'active' => true,
              'name' => 'story_type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 38,
            ],
            [
              'active' => true,
              'name' => 'updated_at_end',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 39,
            ],
            [
              'active' => true,
              'name' => 'updated_at_start',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 40,
            ],
            [
              'active' => true,
              'name' => 'workflow_state_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 41,
            ],
            [
              'active' => true,
              'name' => 'workflow_state_types',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 42,
            ],
          ],
          'name' => 'story_slim',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories/bulk',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    'bulk',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'stories' => '`reqdata.story`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories/search',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    'search',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'archived' => '`reqdata.archived`',
                      'completed_at_end' => '`reqdata.completed_at_end`',
                      'completed_at_start' => '`reqdata.completed_at_start`',
                      'created_at_end' => '`reqdata.created_at_end`',
                      'created_at_start' => '`reqdata.created_at_start`',
                      'deadline_end' => '`reqdata.deadline_end`',
                      'deadline_start' => '`reqdata.deadline_start`',
                      'epic_id' => '`reqdata.epic_id`',
                      'epic_ids' => '`reqdata.epic_id`',
                      'estimate' => '`reqdata.estimate`',
                      'external_id' => '`reqdata.external_id`',
                      'group_id' => '`reqdata.group_id`',
                      'group_ids' => '`reqdata.group_id`',
                      'includes_description' => '`reqdata.includes_description`',
                      'iteration_id' => '`reqdata.iteration_id`',
                      'iteration_ids' => '`reqdata.iteration_id`',
                      'label_ids' => '`reqdata.label_id`',
                      'label_name' => '`reqdata.label_name`',
                      'owner_id' => '`reqdata.owner_id`',
                      'owner_ids' => '`reqdata.owner_id`',
                      'project_id' => '`reqdata.project_id`',
                      'project_ids' => '`reqdata.project_id`',
                      'requested_by_id' => '`reqdata.requested_by_id`',
                      'story_type' => '`reqdata.story_type`',
                      'updated_at_end' => '`reqdata.updated_at_end`',
                      'updated_at_start' => '`reqdata.updated_at_start`',
                      'workflow_state_id' => '`reqdata.workflow_state_id`',
                      'workflow_state_types' => '`reqdata.workflow_state_type`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/stories/bulk',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    'bulk',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'after_id' => '`reqdata.after_id`',
                      'archived' => '`reqdata.archived`',
                      'before_id' => '`reqdata.before_id`',
                      'custom_fields_add' => '`reqdata.custom_fields_add`',
                      'custom_fields_remove' => '`reqdata.custom_fields_remove`',
                      'deadline' => '`reqdata.deadline`',
                      'epic_id' => '`reqdata.epic_id`',
                      'estimate' => '`reqdata.estimate`',
                      'external_links' => '`reqdata.external_link`',
                      'follower_ids_add' => '`reqdata.follower_ids_add`',
                      'follower_ids_remove' => '`reqdata.follower_ids_remove`',
                      'group_id' => '`reqdata.group_id`',
                      'iteration_id' => '`reqdata.iteration_id`',
                      'labels_add' => '`reqdata.labels_add`',
                      'labels_remove' => '`reqdata.labels_remove`',
                      'move_to' => '`reqdata.move_to`',
                      'owner_ids_add' => '`reqdata.owner_ids_add`',
                      'owner_ids_remove' => '`reqdata.owner_ids_remove`',
                      'project_id' => '`reqdata.project_id`',
                      'requested_by_id' => '`reqdata.requested_by_id`',
                      'story_ids' => '`reqdata.story_id`',
                      'story_type' => '`reqdata.story_type`',
                      'workflow_state_id' => '`reqdata.workflow_state_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'task' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'after_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'before_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'complete',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'global_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'owner_ids',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'position',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'story_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
          ],
          'name' => 'task',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/stories/{story-public-id}/tasks',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'tasks',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'story_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'complete' => '`reqdata.complete`',
                      'created_at' => '`reqdata.created_at`',
                      'description' => '`reqdata.description`',
                      'external_id' => '`reqdata.external_id`',
                      'owner_ids' => '`reqdata.owner_id`',
                      'updated_at' => '`reqdata.updated_at`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'task_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/stories/{story-public-id}/tasks/{task-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'tasks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'story_id',
                      'task-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'task_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/stories/{story-public-id}/tasks/{task-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'tasks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'story_id',
                      'task-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'task_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'story_id',
                        'orig' => 'story_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/stories/{story-public-id}/tasks/{task-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'stories',
                    '{story_id}',
                    'tasks',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'story-public-id' => 'story_id',
                      'task-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'story_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'after_id' => '`reqdata.after_id`',
                      'before_id' => '`reqdata.before_id`',
                      'complete' => '`reqdata.complete`',
                      'description' => '`reqdata.description`',
                      'owner_ids' => '`reqdata.owner_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'story',
              ],
            ],
          ],
        ],
        'threaded_comment' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'app_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'author_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'comments',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'deleted',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'text',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
          ],
          'name' => 'threaded_comment',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/epics/{epic-public-id}/comments/{comment-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'comments',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'id',
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'author_id' => '`reqdata.author_id`',
                      'created_at' => '`reqdata.created_at`',
                      'external_id' => '`reqdata.external_id`',
                      'text' => '`reqdata.text`',
                      'updated_at' => '`reqdata.updated_at`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/epics/{epic-public-id}/comments',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'comments',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'author_id' => '`reqdata.author_id`',
                      'created_at' => '`reqdata.created_at`',
                      'external_id' => '`reqdata.external_id`',
                      'text' => '`reqdata.text`',
                      'updated_at' => '`reqdata.updated_at`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 1,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics/{epic-public-id}/comments',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'comments',
                  ],
                  'rename' => [
                    'param' => [
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/epics/{epic-public-id}/comments/{comment-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'comments',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'id',
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/epics/{epic-public-id}/comments/{comment-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'comments',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'id',
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'epic_id',
                        'orig' => 'epic_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'comment_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 1,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/epics/{epic-public-id}/comments/{comment-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'epics',
                    '{epic_id}',
                    'comments',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'comment-public-id' => 'id',
                      'epic-public-id' => 'epic_id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'epic_id',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'text' => '`reqdata.text`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'epic',
              ],
            ],
          ],
        ],
        'uploaded_file' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'content_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'description',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'external_id',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'filename',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'group_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'member_mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'mention_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'size',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'story_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'thumbnail_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'uploader_id',
              'op' => [
                'update' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
          ],
          'name' => 'uploaded_file',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/files',
                  'parts' => [
                    'api',
                    'v3',
                    'files',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/files',
                  'parts' => [
                    'api',
                    'v3',
                    'files',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'file_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/files/{file-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'file-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'file_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/files/{file-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'file-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'file_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/api/v3/files/{file-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'files',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'file-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => [
                      'created_at' => '`reqdata.created_at`',
                      'description' => '`reqdata.description`',
                      'external_id' => '`reqdata.external_id`',
                      'name' => '`reqdata.name`',
                      'updated_at' => '`reqdata.updated_at`',
                      'uploader_id' => '`reqdata.uploader_id`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'webhook' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'secret',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'webhook_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'webhook',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/api/v3/integrations/webhook',
                  'parts' => [
                    'api',
                    'v3',
                    'integrations',
                    'webhook',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => [
                      'secret' => '`reqdata.secret`',
                      'webhook_url' => '`reqdata.webhook_url`',
                    ],
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'integration_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/integrations/webhook/{integration-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'integrations',
                    'webhook',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'integration-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'integration_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/api/v3/integrations/webhook/{integration-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'integrations',
                    'webhook',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'integration-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'workflow' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'auto_assign_owner',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'default_state_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'entity_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'project_ids',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'states',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'team_id',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
          ],
          'name' => 'workflow',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/workflows',
                  'parts' => [
                    'api',
                    'v3',
                    'workflows',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'workflow_public_id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/v3/workflows/{workflow-public-id}',
                  'parts' => [
                    'api',
                    'v3',
                    'workflows',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'workflow-public-id' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ShortcutFeatures::make_feature($name);
    }
}
