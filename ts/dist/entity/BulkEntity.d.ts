import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Bulk, BulkRemoveMatch } from '../ShortcutTypes';
declare class BulkEntity extends ShortcutEntityBase<Bulk> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: BulkEntity): BulkEntity;
    remove(this: any, reqmatch?: BulkRemoveMatch, ctrl?: Control): Promise<BulkEntity>;
}
export { BulkEntity };
