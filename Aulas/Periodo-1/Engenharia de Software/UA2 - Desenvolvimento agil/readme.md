[TOC]



# Conceitos essenciais de desenvolvimento ágil

## Links úteis

[Scrum: metodologia ágil para gestão e planejamento de projetos | Scrum | DesenvolvimentoAgil.com.br](http://www.desenvolvimentoagil.com.br/scrum/)

[Extreme Programming, XP metodologia desenvolvimento ágil | XP | DesenvolvimentoAgil.com.br](http://www.desenvolvimentoagil.com.br/xp/)

## Modelos ágeis

* A primeira metodologia que deu inicio ao movimento ágil foi a Metodologia de Desenvolvimento de Sistemas Dinâmicos (DSDM) em 1997
* Em seguida, a Extreme Programming (XP) em 1999
* E, posteriormente, a Scrum em 2001
* O principal objetivo do desenvolvimento ágil é produzir mais rapidamente projetos úteis
  * no entanto, o conceito de agilidade não está diretamente associado a velocidade em se conceber um projeto, mas sim a velocidade em responder a mudanças nas regras de negócio
* As principais vantagens do desenvolvimento ágil são
  * Maior interação desenvolvedor-cliente
  * Priorização definida pelo cliente
  * Flexibilidade na mudança de requisitos
* O desenvolvimento ágil só será bem aproveitado em ambientes que encorajem esse tipo de processo, além de lideranças que apoiam essa filosofia
  * ambiente organizado
  * inspecionado constantemente
  * munido de objetos que facilitem a prática desses modelos
* Modelos ágeis normalmente utilizam como base o modelo iterativo e incremental
* Tem como características
  * Os processos de especificação, projeto e implementação são intercalados
  * A documentação do projeto é minimizada, trazendo apenas aquilo que for considerado fundamental pela equipe
  * Prefere-se a comunicação com o cliente do que a elaboração de documentação
  * São geradas diversas versões do mesmo sistema, cada uma trazendo um ou mais incrementos prontos para serem testados e usados
  * Há a participação ativa de todos os stakeholders do projeto
  * Os próprios usuários validam cada nova versão do sistema
  * Cada novo ciclo dura em média entre duas a três semanas
* Os principais tipos de modelos ágeis são
  * FDD - Desenvolvimento dirigido à funcionalidade (1997)
  * Dynamic System Development Method (DSDM, 1997)
  * Desenvolvimento de Software Adaptativo (2000)
  * Crystal (2001)
  * Desenvolvimento Dirigido a Características (2002)

## Desenvolvimento ágil

* As principais atividades do desenvolvimento ágil são
  * Planejamento
  * Design
    * Desenvolvimento
    * Testes
    * Implantação
    * Análise
  * Lançamento

## Princípios dos modelos ágeis

* Envolvimento do cliente
  * Estão intimamente envolvidos no processo de desenvolvimento
  * Fornecem e priorizam os novos requisitos do sistema e avaliam suas iterações
* Entrega incremental
  * Em cada incremento, especifica-se os requisitos para serem incluídos em cada um
* Pessoas, não processos
  * Habilidades são reconhecidas e exploradas
  * Cada membro desenvolve e aplica sua própria maneira de trabalhar, sem processos prescritivos
* Aceitar as mudanças
  * Deve-se ter em mente que os requisitos vão mudar
  * O software deve ser projetado para acomodar as mudanças
* Manter a simplicidade
  * Foco na simplicidade, tanto no software a ser desenvolvido quanto no processo de desenvolvimento
  * Trabalhar de forma proativa para eliminar a complexidade do software

## Principais aspectos na hora de aplicar modelos ágeis

* É aplicável sob as seguintes condições
  * Quando o sistema a ser desenvolvido é pequeno ou médio porte
  * Quando existe um compromisso claro do cliente em se envolver com o processo de desenvolvimento
* Os principais problemas com modelos ágeis são
  * Escalabilidade em sistemas de grande porte
  * Dificuldade em manter o interesse dos clientes no processo de desenvolvimento
  * Priorizar mudanças envolvendo diversos clientes
  * Manter simplicidade requer trabalho extra
* Ao lidar com a manutenção de software desenvolvido por modelos ágeis devemos nos perguntar
  * Como dar suporte aos softwares desenvolvidos de forma ágil, sendo que a documentação formal é mínima ?
  * Modelos ágeis podem ser usados de forma efetiva para evoluir um software em resposta a mudanças nos requisitos ?

# O manifesto ágil

## Links úteis

[Manifesto para Desenvolvimento Ágil de Software (agilemanifesto.org)](https://agilemanifesto.org/iso/ptbr/manifesto.html)

[Princípios por trás do Manifesto Ágil (agilemanifesto.org)](https://agilemanifesto.org/iso/ptbr/principles.html)

## Valores do manifesto ágil

* Indivíduos e interações
  * mais que processos e ferramentas
* Software em funcionamento
  * mais que documentação abrangente
* Colaboração com o cliente
  * mais que negociação de contratos
* Responder a mudanças
  * mais que seguir um plano

## Princípios do manifesto ágil

* Satisfazer o cliente através da entrega contínua e adiantada de software com valor agregado
* Aceitar mudanças de requisitos, mesmo ao fim do desenvolvimento
* Entregar frequentemente software funcionando, de poucas semanas a poucos meses, com preferência à menor escala de tempo
* Envolvimento maior do cliente no desenvolvimento
* Criar ambiente favorável a equipe, dando suporte e confiando neles para fazer o trabalho
* Quebrar as barreiras de comunicação
* Software funcionando é a medida primária de progresso
* Promover o desenvolvimento sustentável, partes interessadas devem ser capazes de manter um ritmo constante indefinidamente
* Contínua atenção a excelência técnica e bom design aumentam a agilidade
* Simplicidade
* Times auto-organizáveis produzem melhores arquiteturas, requisitos e designs
* A equipe, em intervalos regulares, busca se auto investigar para se tornar mais eficaz e então refinar e ajustar seu comportamento

# Extreme Programming

## Principais conceitos

* Desenvolvimento iterativo ao extremo (seguindo a risca as regras do desenvolvimento ágil)
* Requisitos são expressos como estórias de usuário, pequenos trechos que relatam a necessidade do cliente
* Código fonte é constantemente refatorado e testado, testes são desenvolvidos antes da implementação para auxiliar no refatoramento (processo no qual o desenvolvedor torna o código cada vez mais simples, pois este é o artefato principal da documentação)
* Releases do sistema entregues em curto intervalo de tempo

## Ciclo de vida do XP

* Selecionar histórias do usuário para este release
* Dividir histórias em tarefas
* Planejar release
* Desenvolver integrar/testar software
* Liberar software
* Avaliar sistema

## Valores do XP

* Comunicação
  * Conversas pessoais entre clientes e desenvolvedores
  * Devem ocorrer o tempo todo
* Coragem
  * Falar a verdade, mesmo que essa verdade signifique trazer notícias ruins, como estimativas e custos honestos
  * Lidar com as mudanças mesmo correndo o risco de algo dar errado
* Feedback
  * Troca de informações entre clientes e desenvolvedores durante a  produção do software
  * Deve ser rápido e constante. Se há algo para ser corrigido, isso  deve ser feito o mais breve possível
* Simplicidade
  * Se existe um modo mais simples de se fazer algo, por que não  seguir por esse caminho?
  * Fazer algo mais simples para modificá-lo depois
* Respeito
  * Valor que dá sustentação a todos os demais
  * Deve imperar entre todos da equipe

## Práticas do XP

* Planejamento incremental
* Pequenos releases
* Projeto simples
* Desenvolvimento test-first
* Refatoração
* Programação em pares
* Propriedade coletiva
* Integração contínua
* Ritmo sustentável
* Cliente no local

## Papéis no XP

* Cliente
  * representante do usuário final responsável por levar os requisitos de sistema para implementação
* Gerente de Projeto
* Coach
  * responsável por questões técnicas do projeto
  * detém conhecimento do processo (valores e práticas)
* Redator técnico
  * responsável por documentar o sistema
  * mantém todos informados da situação do projeto
* Analista de teste
* Desenvolvedor

# Scrum

* Metodologia que utiliza o processo de desenvolvimento iterativo e incremental como base
* Divide-se o desenvolvimento em sprints
* Direcionado por uma lista de backlog
* As equipes são pequenas, auto-organizadas e auto conduzidas

## Ciclo de vida do scrum

* Visão do produto aliado as expectativas do cliente
* Backlog de produto
* Backlog de sprint
* Sprint
  * Reunião de planejamento do sprint
  * Incremento de produto
  * Revisão do sprint
  * Retrospectiva do sprint
  * Atualização do backlog de produto
* Produto potencialmente entregável
* Capacidade da equipe

## Práticas do Scrum

* Elaboração do Product Backlog
  * Lista contendo todas as funcionalidades desejadas  (hipóteses) para um produto
    * [COMO FAZER UM PRODUCT BACKLOG PERFEITO | MÉTODOS ÁGEIS - YouTube](https://www.youtube.com/watch?v=nO8_p6T6b9k&ab_channel=RobertoBrasileiro)
    * [Product Backlog Building — PBB: Simples, rápido e enxuto - Fábio Aguiar | Agile Path - YouTube](https://www.youtube.com/watch?v=NzboG89PnvA&ab_channel=MoovenConsulting)
  * Não há necessidade de completude
  * Cresce e muda à medida que se aprende mais sobre o produto e seus usuários
* Planejamento da sprint
* Elaboração da Sprint Backlog
* Reuniões Diárias (Scrum Daily)
* Elaboração do Burndown (Release Burndown)
* Revisão da sprint (Sprint Review)
* Retrospectiva da sprint (Sprint retrospective)

## Papéis no Scrum

* Product Owner
* Scrum Master
* Scrum Team
