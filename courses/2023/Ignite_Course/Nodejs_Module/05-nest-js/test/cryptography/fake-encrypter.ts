/*
  Para facilitar os testes, o método encrypt retorna o payload em formato JSON e não um JWT accessToken.
  Esta classe é um mock para ser usada exclusivamente nos testes.
*/

import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'

export class FakeEncrypter implements Encrypter {
  async encrypt(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload)
  }
}
