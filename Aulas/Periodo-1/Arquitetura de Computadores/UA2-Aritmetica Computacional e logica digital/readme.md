# Sistema binário

* O termo bit é uma abreviação da expressão binary digit
* Dentro do sistema binário temos os bits
  * mais significativos (mais a direita)
  * menos significativos (mais a esquerda)
* Um dos padrões que codifica caracteres utilizando a base binária é o ASCII
  * O ASCII utiliza 7 bits para a representação de caracteres, o que possibilita 128 combinações possíveis
  * O Extended ASCII é a versão estendida de 256 combinações para a representação de símbolos e caracteres especiais
* Outro padrão é o Unicode, o qual permite representações com 8, 16 e 32 bits, aumentando consideravelmente as possibilidades de representação
* Há também o EBCDIC (Extended binary coded decimal interchange code) e o BCD (Binary Coded Decimal)
* Todo processador tem um vocabulário que ele consegue entender e executar denominado arquitetura do conjunto de instruções (ISA - Instruction Set Architecture)
  * define como instruções codificadas em binário

* O processo no qual converte-se instruções em linguagem humana para linguagem de máquina é denominado de compilação
* Para realizar operações matemáticas no sistema binário utiliza-se a álgebra de boole e lógica binária

# Sistemas de Numeração e Conversão de Bases

## Conversão de binário para decimal

* Considere o número $(1100110)_2$
* Primeiro passo
  * devemos contar as posições de cada bit da direita para a esquerda, começando do zero
  * $\begin{matrix}6&5&4&3&2&1&0\\1&1&0&0&1&1&0\end{matrix}$
* Segundo passo
  * multiplicar cada algarismo pela potência de 2 referente à sua posição, somando esses valores

## Conversão de decimal para binário

* Considere o número $(125)_{10}$
* Divide-se o número por 2 até que o mesmo seja menor que 2
  * Quando houver resto anota-se 1 e quando não houver anota-se 0
  * Ao fim acrescenta-se 1
  * Em seguida inverte-se a ordem do LSB para o MSB

