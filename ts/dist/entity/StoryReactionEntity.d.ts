import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { StoryReaction, StoryReactionCreateData, StoryReactionRemoveMatch } from '../ShortcutTypes';
declare class StoryReactionEntity extends ShortcutEntityBase<StoryReaction> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: StoryReactionEntity): StoryReactionEntity;
    create(this: any, reqdata?: StoryReactionCreateData, ctrl?: Control): Promise<StoryReactionEntity>;
    remove(this: any, reqmatch?: StoryReactionRemoveMatch, ctrl?: Control): Promise<StoryReactionEntity>;
}
export { StoryReactionEntity };
