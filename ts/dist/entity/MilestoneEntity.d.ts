import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Milestone, MilestoneLoadMatch, MilestoneListMatch, MilestoneCreateData, MilestoneUpdateData, MilestoneRemoveMatch } from '../ShortcutTypes';
declare class MilestoneEntity extends ShortcutEntityBase<Milestone> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: MilestoneEntity): MilestoneEntity;
    load(this: any, reqmatch?: MilestoneLoadMatch, ctrl?: Control): Promise<MilestoneEntity>;
    list(this: any, reqmatch?: MilestoneListMatch, ctrl?: Control): Promise<MilestoneEntity[]>;
    create(this: any, reqdata?: MilestoneCreateData, ctrl?: Control): Promise<MilestoneEntity>;
    update(this: any, reqdata?: MilestoneUpdateData, ctrl?: Control): Promise<MilestoneEntity>;
    remove(this: any, reqmatch?: MilestoneRemoveMatch, ctrl?: Control): Promise<MilestoneEntity>;
}
export { MilestoneEntity };
