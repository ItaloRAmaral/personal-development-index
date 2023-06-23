# _[Lecture 00 - Starting with Go Language](https://www.youtube.com/watch?v=E-VNDPIVhs4)_


### _[01 - Golang](https://go.dev)_

- A linguagem Go nasceu no Google.
- A Google trabalhava bastante com C++, Phyton e Java, e internamente eles diziam que:
  -  C++ tinha uma complexidade muito grande e uma lentidão muito grande para gerar as builds
  - Phyton não tem uma das melhores performances apesar de ser uma linguagem muito tranquila para se usar
  - Java na época tinha "parado" no tempo, não estava tão em alta e a linguagem em si é bem verbosa
- A linguagem Go nasceu pra ser uma linguagem simples, muito rápida, segura e que deforma geral ela consiga ter uma performance muito maior do que as linguagens atuais (mais comuns no mercado)

### 02 - Caracteristicas: 
  1. <b>Linguagem Compilada:</b> Go é uma linguagem compilada, o que significa que o código-fonte é traduzido diretamente em código de máquina que pode ser executado pelo processador do computador. Isso faz com que os programas Go sejam executados mais rapidamente em comparação com as linguagens interpretadas, que precisam de um interpretador para executar o código.

  2. <b>Simultaneidade:</b> o Go possui suporte integrado para programação simultânea, o que permite que várias tarefas sejam executadas ao mesmo tempo. Isso é particularmente benéfico em sistemas modernos com processadores multi-core. O modelo de simultaneidade do Go, baseado em goroutines (threads leves gerenciados pelo tempo de execução Go) e canais (usados ​​para se comunicar com segurança entre goroutines), é eficiente e mais fácil de trabalhar em comparação com os modelos tradicionais de simultaneidade baseados em thread.

  3. <b>Simplicidade:</b> a sintaxe do Go é simples e limpa, o que torna o código mais fácil de ler e escrever. Isso pode levar a tempos de desenvolvimento mais rápidos. Além disso, o Go impõe boas práticas de codificação, como não permitir variáveis ​​não utilizadas, o que ajuda a manter o código limpo e eficiente.

  4. <b>Coleta de lixo:</b> Go possui um coletor de lixo que gerencia automaticamente a alocação de memória. Isso significa que libera memória que não está mais em uso, o que ajuda a melhorar o desempenho dos aplicativos Go.

  5. <b>Biblioteca padrão:</b> a biblioteca padrão do Go é abrangente e eficiente, fornecendo uma ampla gama de códigos pré-escritos para executar tarefas comuns. Isso pode levar a tempos de desenvolvimento e execução mais rápidos.

  6. <b>Tipagem estática:</b> Go é uma linguagem de tipagem estática, o que significa que a verificação de tipo é feita em tempo de compilação e não em tempo de execução. Isso pode levar a uma execução mais eficiente, pois o sistema sabe antecipadamente qual é o tipo de cada variável.

O apresentador discute o suporte do Go para paralelismo como um de seus principais recursos. O paralelismo na computação refere-se ao conceito de executar várias tarefas simultaneamente. Isso é particularmente benéfico em sistemas modernos com processadores multi-core.

No contexto do Go, o paralelismo é alcançado por meio do uso de goroutines, que são threads leves gerenciadas pelo tempo de execução do Go. Goroutines são mais baratas do que threads tradicionais em termos de uso de memória e tempo de configuração/desativação, permitindo que um programa Go lide facilmente com milhares ou até milhões de tarefas simultâneas.

O apresentador enfatiza que a abordagem de paralelismo do Go é mais simples e direta em comparação com outras linguagens. Isso se deve em grande parte aos canais do Go, que fornecem uma maneira segura de se comunicar entre as goroutines e sincronizar sua execução. Isso torna mais fácil escrever código simultâneo em Go, pois os desenvolvedores não precisam lidar com as complexidades das primitivas de sincronização de encadeamento, como bloqueios ou variáveis ​​de condição.

O apresentador sugere que essa facilidade de uso incentiva os desenvolvedores a aproveitar ao máximo o paralelismo, levando a programas Go altamente eficientes e de alto desempenho.

<b>A Goland presa muito pela retrocompatibilidade</b>

### 03 - Instalação e Plugins

 - Para realizar a instalação da Golang acesse a _[documentação](https://go.dev/dl/)_ (não funcionou pra mim)
 - Eu consegui instalar o Golang através deste _[link](https://linuxhint.com/install-go-ubuntu-2/#1)_ usando o método 2.
 - Para o vscode "achar" a Golang, no terminal use "source /etc/profile" ( é como se fosse o ambiente virtual do python o 'venv') e depois rode o passo abaixo
 - Plugin de suporte da Golang no VSCode. Digite "Go" e é o primeiro plugin que irá aparecer
    - Após instalar, use o seguinte comando "ctrl + shift + p" e digite o seguinte ">go:install/update tools e selecione todas'

### 04 - Inicialização de projeto em Go
Para iniciarmos um projeto em Go podemos usar o seguinte código na raiz do projeto

```bash
go mod init <nome-do-projeto>
```

Esse código cria um arquivo 'go.mod', esse arquivo seria o package.json no ambiente do node.js


Para rodar um arquivo em go: 
```bash
go run <nome-do-arquivo>
```

Para buildar um arquivo em go:
```bash
go build 
```

Para buildar um arquivo para outro SO:
```bash
GOOS=windows go build
```