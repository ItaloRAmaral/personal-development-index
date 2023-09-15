/*
  Para não batermos sempre no banco de dados real, vamos criar um banco de dados para cada escopo de teste que simula o banco real.

  Não entendi o motivo, porém para conseguir rodar os testes e2e, eu tive que dar a seguinte permissão:
  'sudo chmod 777 /home/italo.amaral/Área\ de\ Trabalho/personal-development-index/courses/2023/Ignite_Course/Nodejs_Module/05-nest-js/data/pg' (ambiente linux dyna)

  Acredito que seja porque o banco de dados está sendo criado dentro da pasta data, que é protegida pelo sistema operacional.

*/

import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    setupFiles: ['./test/setup-e2e.ts'],
  },
  plugins: [
    tsConfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
})
