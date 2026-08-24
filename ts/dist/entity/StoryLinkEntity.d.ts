import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { StoryLink, StoryLinkLoadMatch, StoryLinkCreateData, StoryLinkUpdateData, StoryLinkRemoveMatch } from '../ShortcutTypes';
declare class StoryLinkEntity extends ShortcutEntityBase<StoryLink> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: StoryLinkEntity): StoryLinkEntity;
    load(this: any, reqmatch?: StoryLinkLoadMatch, ctrl?: Control): Promise<StoryLinkEntity>;
    create(this: any, reqdata?: StoryLinkCreateData, ctrl?: Control): Promise<StoryLinkEntity>;
    update(this: any, reqdata?: StoryLinkUpdateData, ctrl?: Control): Promise<StoryLinkEntity>;
    remove(this: any, reqmatch?: StoryLinkRemoveMatch, ctrl?: Control): Promise<StoryLinkEntity>;
}
export { StoryLinkEntity };
