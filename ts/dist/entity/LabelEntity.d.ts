import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Label, LabelLoadMatch, LabelListMatch, LabelCreateData, LabelUpdateData, LabelRemoveMatch } from '../ShortcutTypes';
declare class LabelEntity extends ShortcutEntityBase<Label> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: LabelEntity): LabelEntity;
    load(this: any, reqmatch?: LabelLoadMatch, ctrl?: Control): Promise<LabelEntity>;
    list(this: any, reqmatch?: LabelListMatch, ctrl?: Control): Promise<LabelEntity[]>;
    create(this: any, reqdata?: LabelCreateData, ctrl?: Control): Promise<LabelEntity>;
    update(this: any, reqdata?: LabelUpdateData, ctrl?: Control): Promise<LabelEntity>;
    remove(this: any, reqmatch?: LabelRemoveMatch, ctrl?: Control): Promise<LabelEntity>;
}
export { LabelEntity };
