import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/credential.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
    ) { }

  async login({ username, password }): Promise<String> {
    if (!!!username || !!!password) {
      throw 'user no found';
    }
    const user = await this.userModel.findOne({username}).exec();
    if(user.password !== password) throw 'user not found';
    const payload = {
      username,
      name: user.name
    }
    return this.jwtService.sign(payload);
  }
}