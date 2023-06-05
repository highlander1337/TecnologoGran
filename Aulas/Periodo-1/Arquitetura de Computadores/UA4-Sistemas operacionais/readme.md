# Arquitetura do sistema operacional

## Links úteis

[12 Conceitos de Sistemas Operacionais que todo Estudante de Tecnologia precisa conhecer - YouTube](https://www.youtube.com/watch?v=T7lCM3l7vAQ&ab_channel=BósonTreinamentos)

## O sistema operacional

O computador é uma combinação entre o mundo virtual denominado *Software* e o mundo real denominado *Hardware*. Um dos *softwares* mais importantes e que controla o mundo virtual é o Sistema Operacional. Ele é responsável por gerenciar recursos, sejam eles virtuais ou físicos (reais). Recursos de *hardware*, como por exemplo, dispositivos de armazenamento e de entrada e saída (I/O) só podem ser acessados pelo usuário por meio de uma **linguagem de comandos** denominada *Shell* do Sistema Operacional. 

Ao solicitar uma ação, o usuário se comunica com a camada *Shell* por meio de aplicações as quais, por sua vez, enviam ao *Kernel* do Sistema Operacional informações sobre o modo de acesso ao processador. O ***Kernel*** é o núcleo do Sistema Operacional, ele é responsável por garantir a integridade física e virtual, conferindo segurança e confiabilidade ao sistema por meio de mecanismos de proteção, um deles é o **modo de acesso**. Tal modo de acesso é codificado em bits em um Registrador de Status, o qual será lido pelo *hardware* durante uma chamada de sistema.

Existem dois modos de acesso padrões ao processador, o modo usuário cujo não tem acesso ao *hardware* e o modo supervisor (*Kernel*), o qual tem acesso ao *hardware* por meio de **instruções privilegiadas**. Sistemas operacionais definem toda operação de acesso ao hardware como uma **chamada de sistema** (*system call*) cujo objetivo é mostrar ao processador que ele irá entrar em modo de execução de Rotinas de Sistema, liberando o usuário para uso de instruções privilegiadas de acesso e controle do hardware. Ao finalizar uma Rotina de Sistema, o sistema operacional altera o modo do processador para usuário e altera o registrador de status, dando fim a chamada de sistema.

Um sistema operacional pode ser classificado quanto

* Capacidade de execução de tarefas
  * mono tarefa
  * multitarefa
* Quantidade de usuários
  * mono usuário
  * multiusuário
* Arquitetura do sistema operacional
  * monolítico
  * micro kernel

