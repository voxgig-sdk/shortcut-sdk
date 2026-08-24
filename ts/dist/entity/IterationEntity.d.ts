import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Iteration, IterationLoadMatch, IterationListMatch, IterationCreateData, IterationUpdateData, IterationRemoveMatch } from '../ShortcutTypes';
declare class IterationEntity extends ShortcutEntityBase<Iteration> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: IterationEntity): IterationEntity;
    load(this: any, reqmatch?: IterationLoadMatch, ctrl?: Control): Promise<IterationEntity>;
    list(this: any, reqmatch?: IterationListMatch, ctrl?: Control): Promise<IterationEntity[]>;
    create(this: any, reqdata?: IterationCreateData, ctrl?: Control): Promise<IterationEntity>;
    update(this: any, reqdata?: IterationUpdateData, ctrl?: Control): Promise<IterationEntity>;
    remove(this: any, reqmatch?: IterationRemoveMatch, ctrl?: Control): Promise<IterationEntity>;
}
export { IterationEntity };
