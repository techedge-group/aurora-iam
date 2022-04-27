/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';
import { IamRoleDto } from '../../../iam/role/dto/iam-role.dto';
import { IamBoundedContextDto } from '../../../iam/bounded-context/dto/iam-bounded-context.dto';

export class IamPermissionDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'name [input here api field description]',
    })
    name: string;

    @ApiProperty({
        type       : String,
        description: 'boundedContextId [input here api field description]',
        example    : '7b8bc8a4-8806-4270-893c-72d9623f7392',
    })
    boundedContextId: string;

    @ApiProperty({
        type       : IamBoundedContextDto,
        description: 'boundedContextId [input here api field description]',
    })
    boundedContext: IamBoundedContextDto;

    @ApiProperty({
        type       : [IamRoleDto],
        description: 'roleIds [input here api field description]',
    })
    roles?: IamRoleDto[];

    @ApiProperty({
        type       : String,
        description: 'createdAt [input here api field description]',
    })
    createdAt?: string;

    @ApiProperty({
        type       : String,
        description: 'updatedAt [input here api field description]',
    })
    updatedAt?: string;

    @ApiProperty({
        type       : String,
        description: 'deletedAt [input here api field description]',
    })
    deletedAt?: string;

}