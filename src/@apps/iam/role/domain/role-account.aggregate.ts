import { AggregateRoot } from '@nestjs/cqrs';
import { ObjectLiteral } from 'aurora-ts-core';
import {
    RoleRoleId,
    RoleAccountId,
} from './value-objects';

export class IamRoleAccount extends AggregateRoot
{
    roleId: RoleRoleId;
    accountId: RoleAccountId;

    constructor(roleId?: RoleRoleId, accountId?: RoleAccountId)
    {
        super();

        this.roleId = roleId;
        this.accountId = accountId;
    }

    static register (roleId: RoleRoleId, accountId: RoleAccountId): IamRoleAccount
    {
        return new IamRoleAccount(roleId, accountId);
    }

    toDTO(): ObjectLiteral
    {
        return {
            roleId   : this.roleId.value,
            accountId: this.accountId.value,
        };
    }
}