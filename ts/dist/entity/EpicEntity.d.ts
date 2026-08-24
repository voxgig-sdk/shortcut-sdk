import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Epic, EpicLoadMatch, EpicListMatch, EpicCreateData, EpicUpdateData, EpicRemoveMatch } from '../ShortcutTypes';
declare class EpicEntity extends ShortcutEntityBase<Epic> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: EpicEntity): EpicEntity;
    load(this: any, reqmatch?: EpicLoadMatch, ctrl?: Control): Promise<EpicEntity>;
    list(this: any, reqmatch?: EpicListMatch, ctrl?: Control): Promise<EpicEntity[]>;
    create(this: any, reqdata?: EpicCreateData, ctrl?: Control): Promise<EpicEntity>;
    update(this: any, reqdata?: EpicUpdateData, ctrl?: Control): Promise<EpicEntity>;
    remove(this: any, reqmatch?: EpicRemoveMatch, ctrl?: Control): Promise<EpicEntity>;
}
export { EpicEntity };
