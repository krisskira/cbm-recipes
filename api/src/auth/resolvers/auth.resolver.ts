import { Args, Query, Resolver } from "@nestjs/graphql";
import { Credential } from "../models/credential.model";
import { AuthService } from "../services/auth.service";

@Resolver('auth')
export class AuthResolver {
    constructor(private authService: AuthService) { }

    @Query(returns => String)
    async login(
        @Args('username', { type: () => String }) username: string,
        @Args('password', { type: () => String }) password: string,
    ) {
        return await this.authService.login({ username, password });
    }
}