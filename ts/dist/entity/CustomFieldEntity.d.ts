import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { CustomField, CustomFieldLoadMatch, CustomFieldListMatch, CustomFieldUpdateData, CustomFieldRemoveMatch } from '../ShortcutTypes';
declare class CustomFieldEntity extends ShortcutEntityBase<CustomField> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: CustomFieldEntity): CustomFieldEntity;
    load(this: any, reqmatch?: CustomFieldLoadMatch, ctrl?: Control): Promise<CustomFieldEntity>;
    list(this: any, reqmatch?: CustomFieldListMatch, ctrl?: Control): Promise<CustomFieldEntity[]>;
    update(this: any, reqdata?: CustomFieldUpdateData, ctrl?: Control): Promise<CustomFieldEntity>;
    remove(this: any, reqmatch?: CustomFieldRemoveMatch, ctrl?: Control): Promise<CustomFieldEntity>;
}
export { CustomFieldEntity };
