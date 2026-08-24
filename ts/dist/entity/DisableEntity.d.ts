import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Disable, DisableUpdateData } from '../ShortcutTypes';
declare class DisableEntity extends ShortcutEntityBase<Disable> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: DisableEntity): DisableEntity;
    update(this: any, reqdata?: DisableUpdateData, ctrl?: Control): Promise<DisableEntity>;
}
export { DisableEntity };
