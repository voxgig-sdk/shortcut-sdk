import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { KeyResult, KeyResultLoadMatch, KeyResultUpdateData } from '../ShortcutTypes';
declare class KeyResultEntity extends ShortcutEntityBase<KeyResult> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: KeyResultEntity): KeyResultEntity;
    load(this: any, reqmatch?: KeyResultLoadMatch, ctrl?: Control): Promise<KeyResultEntity>;
    update(this: any, reqdata?: KeyResultUpdateData, ctrl?: Control): Promise<KeyResultEntity>;
}
export { KeyResultEntity };
