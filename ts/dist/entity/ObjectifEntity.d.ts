import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Objectif, ObjectifRemoveMatch } from '../ShortcutTypes';
declare class ObjectifEntity extends ShortcutEntityBase<Objectif> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: ObjectifEntity): ObjectifEntity;
    remove(this: any, reqmatch?: ObjectifRemoveMatch, ctrl?: Control): Promise<ObjectifEntity>;
}
export { ObjectifEntity };
