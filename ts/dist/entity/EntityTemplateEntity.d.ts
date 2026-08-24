import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { EntityTemplate, EntityTemplateLoadMatch, EntityTemplateListMatch, EntityTemplateCreateData, EntityTemplateUpdateData, EntityTemplateRemoveMatch } from '../ShortcutTypes';
declare class EntityTemplateEntity extends ShortcutEntityBase<EntityTemplate> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: EntityTemplateEntity): EntityTemplateEntity;
    load(this: any, reqmatch?: EntityTemplateLoadMatch, ctrl?: Control): Promise<EntityTemplateEntity>;
    list(this: any, reqmatch?: EntityTemplateListMatch, ctrl?: Control): Promise<EntityTemplateEntity[]>;
    create(this: any, reqdata?: EntityTemplateCreateData, ctrl?: Control): Promise<EntityTemplateEntity>;
    update(this: any, reqdata?: EntityTemplateUpdateData, ctrl?: Control): Promise<EntityTemplateEntity>;
    remove(this: any, reqmatch?: EntityTemplateRemoveMatch, ctrl?: Control): Promise<EntityTemplateEntity>;
}
export { EntityTemplateEntity };
