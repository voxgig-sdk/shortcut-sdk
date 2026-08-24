import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Group, GroupLoadMatch, GroupListMatch, GroupCreateData, GroupUpdateData } from '../ShortcutTypes';
declare class GroupEntity extends ShortcutEntityBase<Group> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: GroupEntity): GroupEntity;
    load(this: any, reqmatch?: GroupLoadMatch, ctrl?: Control): Promise<GroupEntity>;
    list(this: any, reqmatch?: GroupListMatch, ctrl?: Control): Promise<GroupEntity[]>;
    create(this: any, reqdata?: GroupCreateData, ctrl?: Control): Promise<GroupEntity>;
    update(this: any, reqdata?: GroupUpdateData, ctrl?: Control): Promise<GroupEntity>;
}
export { GroupEntity };
