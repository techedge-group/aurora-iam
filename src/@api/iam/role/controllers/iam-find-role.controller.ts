/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Constraint, IQueryBus, QueryStatement, Timezone } from 'aurora-ts-core';
import { RoleDto } from './../dto/role.dto';

// @apps
import { FindRoleQuery } from '../../../../@apps/iam/role/application/find/find-role.query';

@ApiTags('[iam] role')
@Controller('iam/role/find')
export class IamFindRoleController
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find role according to query' })
    @ApiOkResponse({ description: 'The record has been successfully created.', type: RoleDto })
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Constraint() constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.queryBus.ask(new FindRoleQuery(queryStatement, constraint, { timezone }));
    }
}