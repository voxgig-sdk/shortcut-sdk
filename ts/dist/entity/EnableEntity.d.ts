import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Enable, EnableUpdateData } from '../ShortcutTypes';
declare class EnableEntity extends ShortcutEntityBase<Enable> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: EnableEntity): EnableEntity;
    update(this: any, reqdata?: EnableUpdateData, ctrl?: Control): Promise<EnableEntity>;
}
export { EnableEntity };
