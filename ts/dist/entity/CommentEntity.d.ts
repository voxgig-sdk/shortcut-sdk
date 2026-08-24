import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Comment, CommentRemoveMatch } from '../ShortcutTypes';
declare class CommentEntity extends ShortcutEntityBase<Comment> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: CommentEntity): CommentEntity;
    remove(this: any, reqmatch?: CommentRemoveMatch, ctrl?: Control): Promise<CommentEntity>;
}
export { CommentEntity };
