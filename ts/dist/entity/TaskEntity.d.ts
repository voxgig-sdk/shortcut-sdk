import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Task, TaskLoadMatch, TaskCreateData, TaskUpdateData, TaskRemoveMatch } from '../ShortcutTypes';
declare class TaskEntity extends ShortcutEntityBase<Task> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: TaskEntity): TaskEntity;
    load(this: any, reqmatch?: TaskLoadMatch, ctrl?: Control): Promise<TaskEntity>;
    create(this: any, reqdata?: TaskCreateData, ctrl?: Control): Promise<TaskEntity>;
    update(this: any, reqdata?: TaskUpdateData, ctrl?: Control): Promise<TaskEntity>;
    remove(this: any, reqmatch?: TaskRemoveMatch, ctrl?: Control): Promise<TaskEntity>;
}
export { TaskEntity };
