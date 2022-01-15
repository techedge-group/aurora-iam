import { QueryStatement } from 'aurora-ts-core';
import { CQMetadata } from 'aurora-ts-core';

export class FindAccountQuery
{
    constructor(
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}