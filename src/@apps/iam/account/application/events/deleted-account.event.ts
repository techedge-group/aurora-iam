export class DeletedAccountEvent
{
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly email: string,
        public readonly isActive: boolean,
        public readonly clientId: string,
        public readonly dApplicationCodes: any,
        public readonly dPermissions: any,
        public readonly dTenants: any,
        public readonly data: any,
        public readonly roles: string[],
        public readonly tenants: string[],
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}