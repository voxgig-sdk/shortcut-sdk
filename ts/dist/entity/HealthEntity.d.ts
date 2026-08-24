import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Health, HealthLoadMatch, HealthListMatch, HealthCreateData, HealthUpdateData } from '../ShortcutTypes';
declare class HealthEntity extends ShortcutEntityBase<Health> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: HealthEntity): HealthEntity;
    load(this: any, reqmatch?: HealthLoadMatch, ctrl?: Control): Promise<HealthEntity>;
    list(this: any, reqmatch?: HealthListMatch, ctrl?: Control): Promise<HealthEntity[]>;
    create(this: any, reqdata?: HealthCreateData, ctrl?: Control): Promise<HealthEntity>;
    update(this: any, reqdata?: HealthUpdateData, ctrl?: Control): Promise<HealthEntity>;
}
export { HealthEntity };
