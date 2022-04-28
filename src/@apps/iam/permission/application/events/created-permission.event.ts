export class CreatedPermissionEvent
{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly boundedContextId: string,
        public readonly roles: string[],
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}