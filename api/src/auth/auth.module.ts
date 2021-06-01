import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from './services/auth.service';
import { User, UserSchema } from './models/credential.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: '1234567890',
      signOptions: { expiresIn: '300s' },
    }),
  ],
  exports: [JwtModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule { }
