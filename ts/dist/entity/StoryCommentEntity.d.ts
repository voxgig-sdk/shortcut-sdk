import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { StoryComment, StoryCommentLoadMatch, StoryCommentListMatch, StoryCommentCreateData, StoryCommentUpdateData } from '../ShortcutTypes';
declare class StoryCommentEntity extends ShortcutEntityBase<StoryComment> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: StoryCommentEntity): StoryCommentEntity;
    load(this: any, reqmatch?: StoryCommentLoadMatch, ctrl?: Control): Promise<StoryCommentEntity>;
    list(this: any, reqmatch?: StoryCommentListMatch, ctrl?: Control): Promise<StoryCommentEntity[]>;
    create(this: any, reqdata?: StoryCommentCreateData, ctrl?: Control): Promise<StoryCommentEntity>;
    update(this: any, reqdata?: StoryCommentUpdateData, ctrl?: Control): Promise<StoryCommentEntity>;
}
export { StoryCommentEntity };
