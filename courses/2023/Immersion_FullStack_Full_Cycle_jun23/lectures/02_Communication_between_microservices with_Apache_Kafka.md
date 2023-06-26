# _[Lecture 02 - Communication between microservices with Apache Kafka](https://www.youtube.com/watch?v=RRo0Vdydbyk)_

### 1 - Introdução

O Apache Kafka é uma plataforma de streaming de dados em tempo real utilizada por grandes empresas como Uber, Netflix, LinkedIn e Spotify. Sua utilidade se destaca em sistemas distribuídos e transações assíncronas, garantindo que os dados não sejam perdidos, mesmo que vários micro serviços fiquem indisponíveis. Além disso, permite que cada sistema consuma essas transações no seu próprio ritmo, de acordo com suas próprias métricas de qualidade.

O Kafka vai além de ser apenas um sistema de filas, pois tem a capacidade de armazenar dados em disco, permitindo que os sistemas reprocessem as informações, se necessário. Sua resiliência e distribuição permitem que ele lide com uma grande quantidade de dados sem perder informações.

No Kafka, os tópicos são fluxos de dados que atuam como um banco de dados. Cada tópico tem várias partições, cada uma definida por um número. As mensagens são enviadas para diferentes partições, o que ajuda a garantir a resiliência do sistema.

Existem dois componentes principais no Kafka: produtores e consumidores. Os produtores são os sistemas que enviam mensagens para o Kafka, enquanto os consumidores são os sistemas que leem essas mensagens. Vários consumidores podem ler o mesmo tópico ao mesmo tempo, o que é útil para sistemas que precisam processar a mesma informação de maneiras diferentes.

### 2 - Caracteristicas

  - <b>Utilidade em Sistemas Distribuídos e Transações Assíncronas:</b> O Kafka garante que os dados não sejam perdidos, mesmo que vários micro serviços fiquem indisponíveis. Além disso, permite que cada sistema consuma essas transações no seu próprio ritmo, de acordo com suas próprias métricas de qualidade.

  - <b>Event-Driven:</b> O Kafka é uma plataforma que permite o processamento de eventos em tempo real. Isso é especialmente útil em sistemas distribuídos onde várias transações ocorrem simultaneamente.

  - <b>Armazenamento de Dados em Disco:</b> O Kafka armazena dados em disco, o que permite que os sistemas reprocessem informações quando necessário. Isso é diferente de muitos sistemas de mensagens que armazenam dados apenas na memória.

  - <b>Resiliência e Distribuição:</b> O Kafka é projetado para ser resiliente e distribuído. Isso significa que ele pode lidar com uma grande quantidade de dados sem perder informações, mesmo se alguns sistemas falharem.

  - <b>Tópicos e Partições:</b> O Kafka usa o conceito de tópicos e partições. Um tópico é um fluxo de dados, e cada tópico pode ter várias partições. As mensagens são enviadas para diferentes partições, o que ajuda a garantir a resiliência do sistema.

  - <b>Produtores e Consumidores:</b> No Kafka, os produtores são os sistemas que enviam mensagens, e os consumidores são os sistemas que lêem essas mensagens. Vários consumidores podem ler o mesmo tópico ao mesmo tempo, o que é útil para sistemas que precisam processar a mesma informação de maneiras diferentes.

  - <b>Cluster Kafka:</b> O Kafka é um cluster, um conjunto de brokers. Cada broker é uma máquina onde o Kafka está instalado e é responsável por armazenar dados de uma partição. Cada partição de um tópico está distribuída entre vários brokers, o que contribui para a resiliência e a distribuição do Kafka.

  - <b>Baixa Latência:</b> O Kafka tem uma latência muito baixa, o que significa que ele pode processar e transmitir mensagens muito rapidamente. Isso é essencial para sistemas que precisam processar grandes volumes de dados em tempo real.

  - <b>Persistência de Dados:</b> Ao contrário de alguns sistemas de mensagens, o Kafka mantém os dados mesmo depois de serem consumidos. Isso permite que os sistemas reprocessem as informações se necessário.

### 3 - Tópicos no Apache Kafka

Um tópico é um fluxo de dados que atua como um banco de dados. Cada tópico possui diversas partições, e cada partição é definida por um número.

Quando uma mensagem é enviada para um tópico no Kafka, essa mensagem é armazenada em uma das partições desse tópico. Isso é feito para garantir a resiliência do sistema, pois mesmo que uma partição falhe, as outras partições ainda estarão disponíveis para processar as mensagens.

Além disso, o Kafka permite que várias mensagens sejam enviadas para diferentes partições ao mesmo tempo. Isso é útil para sistemas que precisam processar grandes volumes de dados em tempo real, pois permite que as mensagens sejam processadas de maneira mais eficiente.

Um exemplo prático seria um e-commerce que utiliza o Kafka para processar transações de compra. Quando um cliente faz uma compra, essa transação é enviada como uma mensagem para um tópico no Kafka. A mensagem então é armazenada em uma das partições desse tópico. Se o sistema de processamento de pagamentos estiver temporariamente indisponível, a mensagem ainda estará segura no Kafka e poderá ser processada quando o sistema voltar a funcionar.

Além disso, o Kafka permite que vários sistemas consumam as mensagens do mesmo tópico ao mesmo tempo. Por exemplo, quando uma transação de compra é enviada para um tópico, tanto o sistema de processamento de pagamentos quanto o sistema de inventário podem consumir essa mensagem e processá-la de acordo com suas necessidades específicas.