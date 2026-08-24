import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { UploadedFile, UploadedFileLoadMatch, UploadedFileListMatch, UploadedFileCreateData, UploadedFileUpdateData, UploadedFileRemoveMatch } from '../ShortcutTypes';
declare class UploadedFileEntity extends ShortcutEntityBase<UploadedFile> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: UploadedFileEntity): UploadedFileEntity;
    load(this: any, reqmatch?: UploadedFileLoadMatch, ctrl?: Control): Promise<UploadedFileEntity>;
    list(this: any, reqmatch?: UploadedFileListMatch, ctrl?: Control): Promise<UploadedFileEntity[]>;
    create(this: any, reqdata?: UploadedFileCreateData, ctrl?: Control): Promise<UploadedFileEntity>;
    update(this: any, reqdata?: UploadedFileUpdateData, ctrl?: Control): Promise<UploadedFileEntity>;
    remove(this: any, reqmatch?: UploadedFileRemoveMatch, ctrl?: Control): Promise<UploadedFileEntity>;
}
export { UploadedFileEntity };
