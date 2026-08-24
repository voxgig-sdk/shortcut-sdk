import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Story, StoryLoadMatch, StoryListMatch, StoryCreateData, StoryUpdateData, StoryRemoveMatch } from '../ShortcutTypes';
declare class StoryEntity extends ShortcutEntityBase<Story> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: StoryEntity): StoryEntity;
    load(this: any, reqmatch?: StoryLoadMatch, ctrl?: Control): Promise<StoryEntity>;
    list(this: any, reqmatch?: StoryListMatch, ctrl?: Control): Promise<StoryEntity[]>;
    create(this: any, reqdata?: StoryCreateData, ctrl?: Control): Promise<StoryEntity>;
    update(this: any, reqdata?: StoryUpdateData, ctrl?: Control): Promise<StoryEntity>;
    remove(this: any, reqmatch?: StoryRemoveMatch, ctrl?: Control): Promise<StoryEntity>;
}
export { StoryEntity };
