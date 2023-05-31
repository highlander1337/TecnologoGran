# Arquitetura do sistema operacional

## Links úteis

[(1524) 12 Conceitos de Sistemas Operacionais que todo Estudante de Tecnologia precisa conhecer - YouTube](https://www.youtube.com/watch?v=T7lCM3l7vAQ&ab_channel=BósonTreinamentos)

## O sistema operacional

O computador é uma combinação entre o mundo virtual denominado *Software* e o mundo real denominado *Hardware*. Um dos *softwares* mais importantes e que controla o mundo virtual é o Sistema Operacional. Ele é responsável por gerenciar recursos, sejam eles virtuais ou físicos (reais). Recursos de *hardware* como por exemplo dispositivos de armazenagem e de entrada e saída (I/O) só podem ser acessados virtualmente pelo usuário por meio de uma camada de software que compõe o Sistema Operacional denominada de *Shell*. 

Ao solicitar uma ação, o usuário se comunica com a camada Shell por meio de aplicações as quais, por sua vez, enviam ao *Kernel* do Sistema Operacional informações sobre o modo de acesso ao processador. O *Kernel* é o núcleo do Sistema Operacional, é ele responsável por garantir a integridade física e virtual, conferindo segurança e confiabilidade ao sistema por meio de mecanismos de proteção, um deles é o **modo de acesso**. Existem dois modos de acesso padrões, o modo usuário cujo não tem acesso direto ao *hardware* e, o modo supervisor (*Kernel*), o qual tem acesso ao *hardware* por meio de instruções privilegiadas. O modo de acesso é definido durante uma chamada de sistema (*system call*) e codificado em bits em um Registrador de Status o qual será lido pelo *hardware* durante uma Rotina de Sistema objetivando identificar a modalidade de acesso ao Kernel.

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

