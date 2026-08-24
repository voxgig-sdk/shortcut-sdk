import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { StorySlim, StorySlimCreateData, StorySlimUpdateData } from '../ShortcutTypes';
declare class StorySlimEntity extends ShortcutEntityBase<StorySlim> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: StorySlimEntity): StorySlimEntity;
    create(this: any, reqdata?: StorySlimCreateData, ctrl?: Control): Promise<StorySlimEntity>;
    update(this: any, reqdata?: StorySlimUpdateData, ctrl?: Control): Promise<StorySlimEntity>;
}
export { StorySlimEntity };
