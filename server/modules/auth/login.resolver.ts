import { Arg, Field, Mutation, ObjectType, Query, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { UserService } from '../../services'

@ObjectType()
class LoginResponse {
  @Field({ nullable: true })
  accessToken: string
}

@Service()
@Resolver()
export class LoginResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => LoginResponse, { nullable: true })
  async login(@Arg('email') email: string, @Arg('password') password: string): Promise<LoginResponse | undefined> {
    return {
      accessToken: 'test',
    }
  }

  @Query(() => String)
  async me(): Promise<string> {
    return this.userService.getOne()
  }
}
