import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { History, HistoryListMatch } from '../ShortcutTypes';
declare class HistoryEntity extends ShortcutEntityBase<History> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: HistoryEntity): HistoryEntity;
    list(this: any, reqmatch?: HistoryListMatch, ctrl?: Control): Promise<HistoryEntity[]>;
}
export { HistoryEntity };
