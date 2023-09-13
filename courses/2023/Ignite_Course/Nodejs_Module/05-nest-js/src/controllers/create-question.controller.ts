/* 
  Se gerar duvidas sobre o decorator CurrentUser, troque por @Req() req: any e de um console.log no req
  Como queríamos o usuário logado, criamos o decorator CurrentUser pois se usássemos apenas o @Req() req: any, pegaríamos o request inteiro
*/

import { Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user.sub)

    return 'ok'
  }
}
