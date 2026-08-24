import { ShortcutEntityBase } from '../ShortcutEntityBase';
import type { ShortcutSDK } from '../ShortcutSDK';
import type { Control } from '../types';
import type { Member, MemberLoadMatch, MemberListMatch } from '../ShortcutTypes';
declare class MemberEntity extends ShortcutEntityBase<Member> {
    constructor(client: ShortcutSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    load(this: any, reqmatch?: MemberLoadMatch, ctrl?: Control): Promise<MemberEntity>;
    list(this: any, reqmatch?: MemberListMatch, ctrl?: Control): Promise<MemberEntity[]>;
}
export { MemberEntity };
