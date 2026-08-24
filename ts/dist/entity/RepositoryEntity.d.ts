import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Repository, RepositoryLoadMatch, RepositoryListMatch } from '../ShortcutTypes';
declare class RepositoryEntity extends ShortcutEntityBase<Repository> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: RepositoryEntity): RepositoryEntity;
    load(this: any, reqmatch?: RepositoryLoadMatch, ctrl?: Control): Promise<RepositoryEntity>;
    list(this: any, reqmatch?: RepositoryListMatch, ctrl?: Control): Promise<RepositoryEntity[]>;
}
export { RepositoryEntity };
