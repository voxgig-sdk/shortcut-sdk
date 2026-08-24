import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { EpicPaginatedResult, EpicPaginatedResultListMatch } from '../ShortcutTypes';
declare class EpicPaginatedResultEntity extends ShortcutEntityBase<EpicPaginatedResult> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: EpicPaginatedResultEntity): EpicPaginatedResultEntity;
    list(this: any, reqmatch?: EpicPaginatedResultListMatch, ctrl?: Control): Promise<EpicPaginatedResultEntity[]>;
}
export { EpicPaginatedResultEntity };
