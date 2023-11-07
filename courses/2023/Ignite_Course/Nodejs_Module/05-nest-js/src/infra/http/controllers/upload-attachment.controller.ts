/*
  Para trabalhar com upload de arquivos, é necessário instalar os types do multer: npm install @types/multer -D
  O Nestjs usa o express por de baixo dos panos, caso escolhermos trabalhar com fastify, o multer não vai funcionar e terá que ser escolhida outra estratégia.
  Tem que adicionar o "multer" nos types do tsconfig.json

  Temos que utilizar o decorator @UseInterceptors(FileInterceptor('file')) para que o Nestjs entenda que é um upload de arquivo.
  'file' é o nome do campo que vai receber o arquivo.

  O decorator @UploadedFile() é utilizado para pegar os dados do arquivo que foi enviado no request.

*/

import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('/attachments')
export class UploadAttachmentController {
  // constructor() {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async handle(
    @UploadedFile(
      // Validações do arquivo
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 2, // 2mb
          }),
          new FileTypeValidator({
            fileType: '.(png|jpg|jpeg|pdf)', // formato mimetype ou extensão
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file)
  }
}
