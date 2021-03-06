import { Injectable } from '@nestjs/common';
import { QueryStatement } from 'aurora-ts-core';
import { Pagination } from 'aurora-ts-core';
import { CQMetadata } from 'aurora-ts-core';
import { IPermissionRepository } from './../../domain/permission.repository';
import { IamPermission } from './../../domain/permission.aggregate';

@Injectable()
export class PaginatePermissionsService
{
    constructor(
        private readonly repository: IPermissionRepository,
    ) {}

    public async main(queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<Pagination<IamPermission>>
    {
        return await this.repository.paginate({ queryStatement, constraint, cQMetadata });
    }
}