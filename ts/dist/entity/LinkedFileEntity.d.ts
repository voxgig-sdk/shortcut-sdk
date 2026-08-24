import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { LinkedFile, LinkedFileLoadMatch, LinkedFileListMatch, LinkedFileCreateData, LinkedFileUpdateData, LinkedFileRemoveMatch } from '../ShortcutTypes';
declare class LinkedFileEntity extends ShortcutEntityBase<LinkedFile> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: LinkedFileEntity): LinkedFileEntity;
    load(this: any, reqmatch?: LinkedFileLoadMatch, ctrl?: Control): Promise<LinkedFileEntity>;
    list(this: any, reqmatch?: LinkedFileListMatch, ctrl?: Control): Promise<LinkedFileEntity[]>;
    create(this: any, reqdata?: LinkedFileCreateData, ctrl?: Control): Promise<LinkedFileEntity>;
    update(this: any, reqdata?: LinkedFileUpdateData, ctrl?: Control): Promise<LinkedFileEntity>;
    remove(this: any, reqmatch?: LinkedFileRemoveMatch, ctrl?: Control): Promise<LinkedFileEntity>;
}
export { LinkedFileEntity };
