import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Objective, ObjectiveLoadMatch, ObjectiveListMatch, ObjectiveCreateData, ObjectiveUpdateData } from '../ShortcutTypes';
declare class ObjectiveEntity extends ShortcutEntityBase<Objective> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: ObjectiveEntity): ObjectiveEntity;
    load(this: any, reqmatch?: ObjectiveLoadMatch, ctrl?: Control): Promise<ObjectiveEntity>;
    list(this: any, reqmatch?: ObjectiveListMatch, ctrl?: Control): Promise<ObjectiveEntity[]>;
    create(this: any, reqdata?: ObjectiveCreateData, ctrl?: Control): Promise<ObjectiveEntity>;
    update(this: any, reqdata?: ObjectiveUpdateData, ctrl?: Control): Promise<ObjectiveEntity>;
}
export { ObjectiveEntity };
