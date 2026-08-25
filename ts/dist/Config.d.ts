import { BaseFeature } from './feature/base/BaseFeature';
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    hasFeature(this: any, fn: string): boolean;
    main: {
        name: string;
        slug: string;
        version: string;
        target: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
            transport: string;
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            bulk: {};
            category: {};
            comment: {};
            custom_field: {};
            disable: {};
            doc_slim: {};
            enable: {};
            entity_template: {};
            epic: {};
            epic_paginated_result: {};
            epic_unlink_productboard: {};
            epic_workflow: {};
            group: {};
            health: {};
            history: {};
            iteration: {};
            key_result: {};
            label: {};
            linked_file: {};
            member: {};
            milestone: {};
            objectif: {};
            objective: {};
            project: {};
            repository: {};
            search: {};
            story: {};
            story_comment: {};
            story_link: {};
            story_reaction: {};
            story_slim: {};
            task: {};
            threaded_comment: {};
            uploaded_file: {};
            webhook: {};
            workflow: {};
        };
    };
    entity: {
        bulk: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                story_ids: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        category: {
            fields: ({
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                color: string;
                                external_id: string;
                                name: string;
                                type: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "category-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "category-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "category-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                archived: string;
                                color: string;
                                name: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        comment: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        custom_field: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "custom-field-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "custom-field-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "custom-field-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                after_id: string;
                                before_id: string;
                                description: string;
                                enabled: string;
                                icon_set_identifier: string;
                                name: string;
                                values: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        disable: {
            fields: never[];
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        doc_slim: {
            fields: {
                name: string;
                req: boolean;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                content: string;
                                title: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        enable: {
            fields: never[];
            name: string;
            op: {
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        entity_template: {
            fields: ({
                name: string;
                op: {
                    list: {
                        req: boolean;
                        type: string;
                    };
                    create?: undefined;
                    update?: undefined;
                };
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                op?: undefined;
                req?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        req: boolean;
                        type: string;
                    };
                    list: {
                        req: boolean;
                        type: string;
                    };
                    update?: undefined;
                };
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    list?: undefined;
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                author_id: string;
                                name: string;
                                story_contents: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "entity-template-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "entity-template-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "entity-template-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                name: string;
                                story_contents: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        epic: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    list?: undefined;
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    list: {
                        type: string;
                    };
                    update?: undefined;
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                    list?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update?: undefined;
                    list?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    list: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                completed_at_override: string;
                                converted_from_story_id: string;
                                created_at: string;
                                deadline: string;
                                description: string;
                                epic_state_id: string;
                                external_id: string;
                                follower_ids: string;
                                group_id: string;
                                group_ids: string;
                                labels: string;
                                milestone_id: string;
                                name: string;
                                objective_ids: string;
                                owner_ids: string;
                                planned_start_date: string;
                                requested_by_id: string;
                                started_at_override: string;
                                state: string;
                                updated_at: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            query: ({
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                reqd?: undefined;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            })[];
                            params?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        rename?: undefined;
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "label-public-id": string;
                                "milestone-public-id"?: undefined;
                                "objective-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "milestone-public-id": string;
                                "label-public-id"?: undefined;
                                "objective-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "objective-public-id": string;
                                "label-public-id"?: undefined;
                                "milestone-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                after_id: string;
                                archived: string;
                                before_id: string;
                                completed_at_override: string;
                                deadline: string;
                                description: string;
                                epic_state_id: string;
                                external_id: string;
                                follower_ids: string;
                                group_id: string;
                                group_ids: string;
                                labels: string;
                                milestone_id: string;
                                name: string;
                                objective_ids: string;
                                owner_ids: string;
                                planned_start_date: string;
                                requested_by_id: string;
                                started_at_override: string;
                                state: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        epic_paginated_result: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        epic_unlink_productboard: {
            fields: never[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        epic_workflow: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        group: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                color: string;
                                color_key: string;
                                description: string;
                                display_icon_id: string;
                                member_ids: string;
                                mention_name: string;
                                name: string;
                                workflow_ids: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "group-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "group-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                archived: string;
                                color: string;
                                color_key: string;
                                default_workflow_id: string;
                                description: string;
                                display_icon_id: string;
                                member_ids: string;
                                mention_name: string;
                                name: string;
                                workflow_ids: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        health: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                status: string;
                                text: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "health-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                status: string;
                                text: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        history: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
                union?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
                req?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        iteration: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                description: string;
                                end_date: string;
                                follower_ids: string;
                                group_ids: string;
                                labels: string;
                                name: string;
                                start_date: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            query: ({
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                reqd?: undefined;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "iteration-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "iteration-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "iteration-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                description: string;
                                end_date: string;
                                follower_ids: string;
                                group_ids: string;
                                labels: string;
                                name: string;
                                start_date: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        key_result: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "key-result-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "key-result-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                initial_observed_value: string;
                                name: string;
                                observed_value: string;
                                target_value: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        label: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    list: {
                        req: boolean;
                        type: string;
                    };
                    update?: undefined;
                };
                short: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    list?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                color: string;
                                description: string;
                                external_id: string;
                                name: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "label-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "label-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "label-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                archived: string;
                                color: string;
                                description: string;
                                name: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        linked_file: {
            fields: ({
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                short: string;
                type: string;
                op?: undefined;
                req?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                content_type: string;
                                description: string;
                                name: string;
                                size: string;
                                story_id: string;
                                thumbnail_url: string;
                                type: string;
                                uploader_id: string;
                                url: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "linked-file-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "linked-file-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "linked-file-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                description: string;
                                name: string;
                                size: string;
                                story_id: string;
                                thumbnail_url: string;
                                type: string;
                                uploader_id: string;
                                url: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        member: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
            })[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "member-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params?: undefined;
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        rename?: undefined;
                    })[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        milestone: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                categories: string;
                                completed_at_override: string;
                                description: string;
                                name: string;
                                started_at_override: string;
                                state: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "category-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        rename?: undefined;
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "milestone-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "milestone-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "milestone-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                after_id: string;
                                archived: string;
                                before_id: string;
                                categories: string;
                                completed_at_override: string;
                                description: string;
                                name: string;
                                started_at_override: string;
                                state: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        objectif: {
            fields: never[];
            name: string;
            op: {
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "objective-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        objective: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                    list?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                    list?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    list: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                categories: string;
                                completed_at_override: string;
                                description: string;
                                name: string;
                                started_at_override: string;
                                state: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            query: ({
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                reqd?: undefined;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            query?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist?: undefined;
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "objective-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "objective-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                after_id: string;
                                archived: string;
                                before_id: string;
                                categories: string;
                                completed_at_override: string;
                                description: string;
                                name: string;
                                started_at_override: string;
                                state: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        project: {
            fields: ({
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                abbreviation: string;
                                color: string;
                                created_at: string;
                                description: string;
                                external_id: string;
                                follower_ids: string;
                                iteration_length: string;
                                name: string;
                                start_time: string;
                                team_id: string;
                                updated_at: string;
                            };
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "project-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "project-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "project-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                abbreviation: string;
                                archived: string;
                                color: string;
                                days_to_thermometer: string;
                                description: string;
                                follower_ids: string;
                                name: string;
                                show_thermometer: string;
                                team_id: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        repository: {
            fields: {
                name: string;
                req: boolean;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "repo-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        search: {
            fields: {
                name: string;
                req: boolean;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: ({
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                reqd?: undefined;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        story: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
                union?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
                union?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                    list?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                op: {
                    list: {
                        type: string;
                        req?: undefined;
                    };
                    create?: undefined;
                    update?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                op: {
                    list: {
                        req: boolean;
                        type: string;
                    };
                    create?: undefined;
                    update?: undefined;
                };
                short: string;
                type: string;
                req?: undefined;
                union?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    list: {
                        type: string;
                        req?: undefined;
                    };
                    update?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update?: undefined;
                    list?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    list: {
                        type: string;
                        req?: undefined;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
                union?: undefined;
            } | {
                name: string;
                type: string;
                short?: undefined;
                req?: undefined;
                op?: undefined;
                union?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
                req?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            $action?: undefined;
                        };
                        transform: {
                            req: {
                                archived: string;
                                comments: string;
                                completed_at_override: string;
                                created_at: string;
                                custom_fields: string;
                                deadline: string;
                                description: string;
                                epic_id: string;
                                estimate: string;
                                external_id: string;
                                external_links: string;
                                file_ids: string;
                                follower_ids: string;
                                group_id: string;
                                iteration_id: string;
                                labels: string;
                                linked_file_ids: string;
                                move_to: string;
                                name: string;
                                owner_ids: string;
                                parent_story_id: string;
                                project_id: string;
                                requested_by_id: string;
                                source_task_id: string;
                                started_at_override: string;
                                story_links: string;
                                story_template_id: string;
                                story_type: string;
                                sub_tasks: string;
                                tasks: string;
                                updated_at: string;
                                workflow_state_id: string;
                                custom_fields_add?: undefined;
                                custom_fields_remove?: undefined;
                                external_links_add?: undefined;
                                external_links_remove?: undefined;
                                file_ids_add?: undefined;
                                file_ids_remove?: undefined;
                                follower_ids_add?: undefined;
                                follower_ids_remove?: undefined;
                                labels_add?: undefined;
                                labels_remove?: undefined;
                                linked_file_ids_add?: undefined;
                                linked_file_ids_remove?: undefined;
                                owner_ids_add?: undefined;
                                owner_ids_remove?: undefined;
                            };
                            res: string;
                        };
                    } | {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            $action: string;
                        };
                        transform: {
                            req: {
                                archived: string;
                                comments: string;
                                completed_at_override: string;
                                created_at: string;
                                custom_fields: string;
                                custom_fields_add: string;
                                custom_fields_remove: string;
                                deadline: string;
                                description: string;
                                epic_id: string;
                                estimate: string;
                                external_id: string;
                                external_links: string;
                                external_links_add: string;
                                external_links_remove: string;
                                file_ids: string;
                                file_ids_add: string;
                                file_ids_remove: string;
                                follower_ids: string;
                                follower_ids_add: string;
                                follower_ids_remove: string;
                                group_id: string;
                                iteration_id: string;
                                labels: string;
                                labels_add: string;
                                labels_remove: string;
                                linked_file_ids: string;
                                linked_file_ids_add: string;
                                linked_file_ids_remove: string;
                                move_to: string;
                                name: string;
                                owner_ids: string;
                                owner_ids_add: string;
                                owner_ids_remove: string;
                                parent_story_id: string;
                                project_id: string;
                                requested_by_id: string;
                                source_task_id: string;
                                started_at_override: string;
                                story_links: string;
                                story_template_id: string;
                                story_type: string;
                                sub_tasks: string;
                                tasks: string;
                                updated_at: string;
                                workflow_state_id: string;
                            };
                            res: string;
                        };
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            query: ({
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                reqd?: undefined;
                            } | {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            })[];
                            params?: undefined;
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                        rename?: undefined;
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "group-public-id": string;
                                "epic-public-id"?: undefined;
                                "iteration-public-id"?: undefined;
                                "label-public-id"?: undefined;
                                "project-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                                "group-public-id"?: undefined;
                                "iteration-public-id"?: undefined;
                                "label-public-id"?: undefined;
                                "project-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "iteration-public-id": string;
                                "group-public-id"?: undefined;
                                "epic-public-id"?: undefined;
                                "label-public-id"?: undefined;
                                "project-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "label-public-id": string;
                                "group-public-id"?: undefined;
                                "epic-public-id"?: undefined;
                                "iteration-public-id"?: undefined;
                                "project-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "project-public-id": string;
                                "group-public-id"?: undefined;
                                "epic-public-id"?: undefined;
                                "iteration-public-id"?: undefined;
                                "label-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    })[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                after_id: string;
                                archived: string;
                                before_id: string;
                                branch_ids: string;
                                commit_ids: string;
                                completed_at_override: string;
                                custom_fields: string;
                                deadline: string;
                                description: string;
                                epic_id: string;
                                estimate: string;
                                external_links: string;
                                file_ids: string;
                                follower_ids: string;
                                group_id: string;
                                iteration_id: string;
                                labels: string;
                                linked_file_ids: string;
                                move_to: string;
                                name: string;
                                owner_ids: string;
                                parent_story_id: string;
                                project_id: string;
                                pull_request_ids: string;
                                requested_by_id: string;
                                started_at_override: string;
                                story_type: string;
                                workflow_state_id: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        story_comment: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                short: string;
                type: string;
                req?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                                "comment-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                author_id: string;
                                created_at: string;
                                external_id: string;
                                parent_id: string;
                                text: string;
                                updated_at: string;
                            };
                            res: string;
                        };
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                text: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        story_link: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                object_id: string;
                                subject_id: string;
                                verb: string;
                            };
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-link-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-link-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-link-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                object_id: string;
                                subject_id: string;
                                verb: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        story_reaction: {
            fields: {
                name: string;
                req: boolean;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                emoji: string;
                            };
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                emoji: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        story_slim: {
            fields: ({
                name: string;
                short: string;
                type: string;
                req?: undefined;
                union?: undefined;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                union: {
                    branches: number;
                    count: number;
                    depth: number;
                };
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                union?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                stories: string;
                                archived?: undefined;
                                completed_at_end?: undefined;
                                completed_at_start?: undefined;
                                created_at_end?: undefined;
                                created_at_start?: undefined;
                                deadline_end?: undefined;
                                deadline_start?: undefined;
                                epic_id?: undefined;
                                epic_ids?: undefined;
                                estimate?: undefined;
                                external_id?: undefined;
                                group_id?: undefined;
                                group_ids?: undefined;
                                includes_description?: undefined;
                                iteration_id?: undefined;
                                iteration_ids?: undefined;
                                label_ids?: undefined;
                                label_name?: undefined;
                                owner_id?: undefined;
                                owner_ids?: undefined;
                                project_id?: undefined;
                                project_ids?: undefined;
                                requested_by_id?: undefined;
                                story_type?: undefined;
                                updated_at_end?: undefined;
                                updated_at_start?: undefined;
                                workflow_state_id?: undefined;
                                workflow_state_types?: undefined;
                            };
                            res: string;
                        };
                    } | {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                archived: string;
                                completed_at_end: string;
                                completed_at_start: string;
                                created_at_end: string;
                                created_at_start: string;
                                deadline_end: string;
                                deadline_start: string;
                                epic_id: string;
                                epic_ids: string;
                                estimate: string;
                                external_id: string;
                                group_id: string;
                                group_ids: string;
                                includes_description: string;
                                iteration_id: string;
                                iteration_ids: string;
                                label_ids: string;
                                label_name: string;
                                owner_id: string;
                                owner_ids: string;
                                project_id: string;
                                project_ids: string;
                                requested_by_id: string;
                                story_type: string;
                                updated_at_end: string;
                                updated_at_start: string;
                                workflow_state_id: string;
                                workflow_state_types: string;
                                stories?: undefined;
                            };
                            res: string;
                        };
                    })[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                after_id: string;
                                archived: string;
                                before_id: string;
                                custom_fields_add: string;
                                custom_fields_remove: string;
                                deadline: string;
                                epic_id: string;
                                estimate: string;
                                external_links: string;
                                follower_ids_add: string;
                                follower_ids_remove: string;
                                group_id: string;
                                iteration_id: string;
                                labels_add: string;
                                labels_remove: string;
                                move_to: string;
                                owner_ids_add: string;
                                owner_ids_remove: string;
                                project_id: string;
                                requested_by_id: string;
                                story_ids: string;
                                story_type: string;
                                workflow_state_id: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        task: {
            fields: ({
                name: string;
                short: string;
                type: string;
                op?: undefined;
                req?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                    update?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                    create?: undefined;
                };
                req: boolean;
                short: string;
                type: string;
            } | {
                name: string;
                req: boolean;
                type: string;
                short?: undefined;
                op?: undefined;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                complete: string;
                                created_at: string;
                                description: string;
                                external_id: string;
                                owner_ids: string;
                                updated_at: string;
                            };
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                                "task-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                                "task-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "story-public-id": string;
                                "task-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                after_id: string;
                                before_id: string;
                                complete: string;
                                description: string;
                                owner_ids: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        threaded_comment: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    create: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: ({
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                author_id: string;
                                created_at: string;
                                external_id: string;
                                text: string;
                                updated_at: string;
                            };
                            res: string;
                        };
                    } | {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                                "comment-public-id"?: undefined;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                author_id: string;
                                created_at: string;
                                external_id: string;
                                text: string;
                                updated_at: string;
                            };
                            res: string;
                        };
                    })[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "comment-public-id": string;
                                "epic-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                text: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: string[][];
            };
        };
        uploaded_file: {
            fields: ({
                name: string;
                req: boolean;
                short: string;
                type: string;
                op?: undefined;
            } | {
                name: string;
                op: {
                    update: {
                        type: string;
                    };
                };
                req: boolean;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "file-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "file-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "file-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: {
                                created_at: string;
                                description: string;
                                external_id: string;
                                name: string;
                                updated_at: string;
                                uploader_id: string;
                            };
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        webhook: {
            fields: ({
                name: string;
                type: string;
                req?: undefined;
            } | {
                name: string;
                req: boolean;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: {
                                secret: string;
                                webhook_url: string;
                            };
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "integration-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "integration-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        workflow: {
            fields: {
                name: string;
                req: boolean;
                short: string;
                type: string;
            }[];
            name: string;
            op: {
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {};
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {};
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        rename: {
                            param: {
                                "workflow-public-id": string;
                            };
                        };
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config };
