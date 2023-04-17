# O Hardware e Software

* O hardware é a parte física de um computador, responsável por executar comandos desejados pelo usuário
* O software é a parte intangível, lógica e que pode realizar as mais diversas funções a depender da necessidade do usuário e capacidade de processamento do hardware

## Sistemas operacionais

* Um computador moderno consiste de
  * Um ou mais processos
  * Memória
  * Discos
  * Impressoras
  * Vários dispositivos de Entrada e Saída
* O gerenciamento de todos esses componentes requer uma camada de software denominada **sistema operacional**
  * o sistema operacional é importante para gerenciar recursos no qual outros softwares tem acesso
  * ele é responsável também por concluir a ligação do computador
    * por meio de um processo denominado de *boot* composto por duas fases
      * POST (Power On Self Test)
        * verifica presença de componentes
        * testa correto funcionamento destes componentes

      * Load
        * consiste em copiar do disco rígido para a memória principal (memória RAM) os arquivos do sistema operacional


## Outros tipos de software

* Há uma classe especial de software denominada de **software embarcado**
  * Softawares embarcados tem por objetivo automatizar dispositivos portáteis e, por meio da IOT, conectá-los a internet tornando-os visíveis a aplicações sofisticadas de controle e automação
* Há também uma classe de software, denominada de **software livre**, na qual não há necessidade de se pagar por seu uso e pode ser modificado por qualquer um a depender das necessidades da aplicação
  * exemplo, o linux, no qual podemos alterá-lo para utilizar-lo como um sistema embarcado

# Estrutura e funcionamento dos computadores

* A Arquitetura de Von Neumann, principal arcabouço da computação atual, possui os seguintes aspectos
  * Uma memória
  * Uma unidade de controle
  * Uma unidade aritmética e lógica
    * um acumulador
  * Dispositivos de entrada e saída
* Para que um computador venha a funcionar são necessários alguns componentes lógicos
  * Linguagem de programação
    * instruções que ao receberem dados (entrada) transformam-no em informações (saída)
  * Compiladores e interpretadores
    * a parte física de um computador não entende a linguagem de programação, pois esta é escrita utilizando regras a que chamamos de sintaxe
    * o compilador traduz a sintaxe humana em linguagem de máquina, a qual é composta por instruções de manipulação de dados objetivando atender as mais diversas funcionalidades possíveis com o hardware em questão
  * Código-fonte
    * O código fonte é aquele escrito em uma linguagem de programação
  * Código executável
    * O código executável é aquele que foi traduzido pelo compilador para linguagem de máquina
  * Algoritmo
    * Ideias e passos definidos de maneira organizada e lógica objetivando a sua transposição em linguagem de programação

# Componentes do computador

## O processador

* Responsável pela execução de programas
* Ativado assim que ligamos o computador
  * responsável por executar programas da BIOS
  * e em seguida carregar o sistema operacional
* Por ser o dispositivo mais rápido de um computador, comunica-se apenas com níveis superiores da hierarquia de memória
  * para comunicar-se com outros níveis de memória e dispositivos de interface, utiliza-se de controladoras, que são outros processadores cuja função é comunicar-se com o processador principal
  * essas controladores são também denominadas de periféricas
  * essas controladoras comunicam-se com o processador através de um sistema de interrupções
  * é muito comum a ocorrência do gargalo de Von Neumann, isto é, estado em que o processador aguarda o sistema de memórias responder a suas solicitações
  * para resolver tal problema, existem as memórias cache, memórias que estão instaladas dentro dos processadores e que, apesar da pequena capacidade, agilizam a troca de informações

## A memória

* A principal função da memória é armazenar dados ou instruções de forma definitiva, ou temporária
* É dividida em quatro níveis
  * secundária
  * principal
  * cache
  * registradores
* Esses níveis possuem diferentes atributos e essa divisão tem por objetivo prover uma relação custo benefício adequada para o computador, os atributos são
  * tempo de acesso
  * capacidade de armazenamento
  * custo por bit armazenado
  * volatitilidade
    * capacidade ou não de reter as informações sem a presença de alimentação elétrica

## A placa mãe

* Tem como principal função interligar componentes do computador
  * sejam eles on-board ou off-board
    * conecta-se dispositivos off-board por meio de slots
* Um componente importante, denominado de chipset, o qual é dividido em duas partes,
  * a ponte norte
    * tem como função principal o controle da comunicação entre o processador e a memória principal (RAM)
  * a ponte sul
    * responsável por diversos periféricos do computador, tais como o HD e as portas USB, respectivamente

# Funcionamento dos sistemas operacionais

* A principal função do sistema operacional é o gerenciamento de hardware e software

  * Porém, ele também é responsável por promover uma interface amigável para o usuário
  * Esta função tem por objetivo facilitar o trabalho e motivar as pessoas a usarem o computador

* O sistema operacional é dividido em

  * **kernel**
    * Núcleo do sistema operacional
    * Composto por uma série de rotinas que devem ser executadas com cuidado, pois afetam a segurança e a confiabilidade do sistema
    * As rotinas no kernel são executadas por meio de chamadas de sistema
      * são solicitações para que se execute tarefas críticas que envolvem recursos a que o usuário comum não tem acesso e devem ser executadas em modo kernel
  * **shell**
    * Camada de serviços acessíveis ao usuário e é a parte mais exterior do sistema operacional

* O sistema operacional executa programas por meio de processos 

  * processos são programas que estão na memória em execução ou aguardando sua vez de executar
  * a ordem de execução dos processo é definida pelo sistema operacional, ele quem decide 

  