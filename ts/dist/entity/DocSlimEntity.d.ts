import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { DocSlim, DocSlimListMatch, DocSlimCreateData } from '../ShortcutTypes';
declare class DocSlimEntity extends ShortcutEntityBase<DocSlim> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: DocSlimEntity): DocSlimEntity;
    list(this: any, reqmatch?: DocSlimListMatch, ctrl?: Control): Promise<DocSlimEntity[]>;
    create(this: any, reqdata?: DocSlimCreateData, ctrl?: Control): Promise<DocSlimEntity>;
}
export { DocSlimEntity };
