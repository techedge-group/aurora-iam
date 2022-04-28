import { CQMetadata } from 'aurora-ts-core';

export class CreateTenantCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name: string;
            code?: string;
            logo?: string;
            isActive: boolean;
            data?: any;
            accounts?: string[];
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}