import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Workflow, WorkflowLoadMatch, WorkflowListMatch } from '../ShortcutTypes';
declare class WorkflowEntity extends ShortcutEntityBase<Workflow> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: WorkflowEntity): WorkflowEntity;
    load(this: any, reqmatch?: WorkflowLoadMatch, ctrl?: Control): Promise<WorkflowEntity>;
    list(this: any, reqmatch?: WorkflowListMatch, ctrl?: Control): Promise<WorkflowEntity[]>;
}
export { WorkflowEntity };
