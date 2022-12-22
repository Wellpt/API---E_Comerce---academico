import { v4 } from 'uuid'
import { PrismaClient, User } from '@prisma/client'

import { UserDto } from '@domain/dtos/user'

const prisma = new PrismaClient()

// Para criar usuario no BD
export class CreateUserUseCase {
    constructor() {}

    async handle(user: Omit<UserDto, 'id'>): Promise<User> {
        const createUser = await prisma.user.create({
            data: {
                id: v4(),
                name: user.name,
                email: user.email,
                password: user.password
            }
        })
        return createUser
    }
}