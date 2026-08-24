import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { EpicWorkflow, EpicWorkflowListMatch } from '../ShortcutTypes';
declare class EpicWorkflowEntity extends ShortcutEntityBase<EpicWorkflow> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: EpicWorkflowEntity): EpicWorkflowEntity;
    list(this: any, reqmatch?: EpicWorkflowListMatch, ctrl?: Control): Promise<EpicWorkflowEntity[]>;
}
export { EpicWorkflowEntity };
