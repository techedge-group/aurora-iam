/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Constraint, IQueryBus, QueryStatement, Timezone } from 'aurora-ts-core';
import { AccountDto } from './../dto/account.dto';

// @apps
import { GetAccountsQuery } from '../../../../@apps/iam/account/application/get/get-accounts.query';

@ApiTags('[iam] account')
@Controller('iam/accounts/get')
export class IamGetAccountsController
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get accounts according to query' })
    @ApiOkResponse({ description: 'The records has been found successfully.', type: [AccountDto] })
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Constraint() constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.queryBus.ask(new GetAccountsQuery(queryStatement, constraint, { timezone }));
    }
}