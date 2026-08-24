import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { ThreadedComment, ThreadedCommentLoadMatch, ThreadedCommentListMatch, ThreadedCommentCreateData, ThreadedCommentUpdateData, ThreadedCommentRemoveMatch } from '../ShortcutTypes';
declare class ThreadedCommentEntity extends ShortcutEntityBase<ThreadedComment> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: ThreadedCommentEntity): ThreadedCommentEntity;
    load(this: any, reqmatch?: ThreadedCommentLoadMatch, ctrl?: Control): Promise<ThreadedCommentEntity>;
    list(this: any, reqmatch?: ThreadedCommentListMatch, ctrl?: Control): Promise<ThreadedCommentEntity[]>;
    create(this: any, reqdata?: ThreadedCommentCreateData, ctrl?: Control): Promise<ThreadedCommentEntity>;
    update(this: any, reqdata?: ThreadedCommentUpdateData, ctrl?: Control): Promise<ThreadedCommentEntity>;
    remove(this: any, reqmatch?: ThreadedCommentRemoveMatch, ctrl?: Control): Promise<ThreadedCommentEntity>;
}
export { ThreadedCommentEntity };
