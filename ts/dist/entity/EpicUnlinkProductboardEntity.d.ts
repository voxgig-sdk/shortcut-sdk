import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { EpicUnlinkProductboard, EpicUnlinkProductboardCreateData } from '../ShortcutTypes';
declare class EpicUnlinkProductboardEntity extends ShortcutEntityBase<EpicUnlinkProductboard> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: EpicUnlinkProductboardEntity): EpicUnlinkProductboardEntity;
    create(this: any, reqdata?: EpicUnlinkProductboardCreateData, ctrl?: Control): Promise<EpicUnlinkProductboardEntity>;
}
export { EpicUnlinkProductboardEntity };
