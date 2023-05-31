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

## Conversão de octal para decimal

* Considere o número $(2073)_8$
  * Conte as posições de cada bit da direita para a esquerda, começando por zero
  * $\begin{matrix}3&2&1&0\\2&7&0&3\end{matrix}$
  * Multiplique cada algarismo pela potência de 8 referente à sua posição, somando esses valores
  * Sendo assim,  $(2073)_8=(1475)_{10}$

## Conversão de hexadecimal para decimal

* Considere o número $(B3F)_{16}$
  * Conte as posições de cada bit da direita para a esquerda, começando por zero
  * $\begin{matrix}2&1&0\\B&3&F\end{matrix}$
  * Multiplique cada algarismo pela potência de 16 referente à sua posição, somando esses valores
    * sendo que A(10), B(11), C(12), D(13), E(14), F(15)
  * Sendo assim, $(B3F)_{16}=(2879){10}$

# Operações matemáticas

## Soma

### Binário

* 0+0 = 0
* 0+1 = 1
* 1+0 = 1
* 1+1 = 10(=2 em binário - "vai 1")
* Sejam os números em binário $(1101)_2$ e $(1011)_2$
  * $\begin{matrix}1&1&0&1\\1&0&1&1\\&&&0\end{matrix}$ vai 1
  * $\begin{matrix}&&1&\\1&1&0&1\\1&0&1&1\\&&0&0\end{matrix}$ vai 1
  * $\begin{matrix}&1&1&\\1&1&0&1\\1&0&1&1\\&0&0&0\end{matrix}$ vai 1
  * $\begin{matrix}1&1&1&\\1&1&0&1\\1&0&1&1\\1&0&0&0\end{matrix}$ vai 1
  * $\begin{matrix}1&1&1&1&\\&1&1&0&1\\&1&0&1&1\\1&1&0&0&0\end{matrix}$

### Octal

* Como não utilizamos os algarismos 8 e 9, sempre que o resultado da soma igualar ou passar 8, teremos o vai 1
  * caso a soma esteja entre 0 e 7, simplesmente escrevemos o resultado da soma sem precisar o vai 1
  * caso o resultado da soma iguale o ultrapasse 8, então executaremos os seguintes passos
    * somamos 1 à próxima coluna (vai 1)
    * na coluna atual colocamos o quanto ultrapassou a base 8, ex 9 - 8 = 1
* Sejam os números em octal $(1563+1275)_8$
  * $\begin{matrix}&&1&\\1&5&6&3\\1&2&7&5\\&&&0\end{matrix}$ vai 1
  * $\begin{matrix}&1&1&\\1&5&6&3\\1&2&7&5\\&&6&0\end{matrix}$ vai 1
  * $\begin{matrix}1&1&&\\1&5&6&3\\1&2&7&5\\3&0&6&0\end{matrix}$

### Hexadecimal

* Segue o mesmo raciocínio da base 8, porém o valor de limite é 16

## Subtração

### Binário

* 1-1 = 0
* 0-0 = 0
* 1-0 = 1
* 0-1 = 10(=2 em binário - "vai 1")
* Sejam a subtração dos números $(1001 - 1111)_2$
  * $\begin{matrix}&1&0&0&1\\&&1&&\\&1&1&1&1\\&&&1&0\end{matrix}$ vai 1
  * $\begin{matrix}&1&0&0&1\\&1&1&&\\&1&1&1&1\\&&0&1&0\end{matrix}$ vai 1
  * $\begin{matrix}&1&0&0&1\\1&1&1&&\\&1&1&1&1\\&1&0&1&0\end{matrix}$ vai 1
  * $\begin{matrix}&1&0&0&1\\1&1&1&&\\&1&1&1&1\\1&1&0&1&0\end{matrix}$  

### Octal

* Soma-se 8 para cada algarismo menor que o debaixo e em seguida subtrai o novo algarismo pelo debaixo, tomando 1 do seguinte para validar o empréstimo
* Sejam os números $(7214 - 1636)_8$
  * $\begin{matrix}7&2&1&4\\1&6&3&6\\&&&\end{matrix}$ 
  * $\begin{matrix}&&&12\\7&2&0&4\\1&6&3&6\\&&&6\end{matrix}$
  * $\begin{matrix}&&8&\\7&1&0&4\\1&6&3&6\\&&5&6\end{matrix}$ 
  * $\begin{matrix}&9&&\\6&1&0&4\\1&6&3&6\\5&3&5&6\end{matrix}$ 

### Hexadecimal

* Soma-se 16 para cada algarismo menor que o debaixo e em seguida subtrai o novo algarismo pelo debaixo, tomando 1 do seguinte para validar o empréstimo

* Sejam os números $(A741 - 8BED)_{16}$
  * $\begin{matrix}&&&\\A&7&4&1\\8&B&E&D\end{matrix}$
  
    
  
  * $\begin{matrix}&&&17\\A&7&3&1\\8&B&E&D\\&&&4\end{matrix}$ 
  
    
  
    
  
  * $\begin{matrix}&&19&\\A&6&3&1\\8&B&E&D\\&&5&4\end{matrix}$
  
    
  
  * $\begin{matrix}&22&&\\9&6&3&1\\8&B&E&D\\&B&5&4\end{matrix}$
  
  * $\begin{matrix}&&&\\9&6&3&1\\8&B&E&D\\1&B&5&4\end{matrix}$

## Multiplicação

### Binário

* O primeiro passo é multiplicar cada algarismo do número de baixo pelo número de cima

* O segundo passo é somar as parcelas

* Sendo $(1101\times101)_2$
  * $\begin{matrix}1&1&0&1\\&1&0&1\end{matrix}$ 
  
    
  
  * $\begin{matrix}&&1&1&0&1\\&&&1&0&1\\&&1&1&0&1\end{matrix}$ 
  
    
  
  * $\begin{matrix}&&1&1&0&1\\&&&1&0&1\\&&1&1&0&1\\&0&0&0&0&\end{matrix}$ 
  
    
  
  * $\begin{matrix}&&1&1&0&1\\&&&1&0&1\\&&1&1&0&1\\&0&0&0&0&\\1&1&0&1&\end{matrix}$ 
  
    
  
  * $\begin{matrix}&&1&1&0&1\\&&&1&0&1\\&&1&1&0&1\\&0&0&0&0&0\\1&1&0&1&0&0\end{matrix}$ 
  
    
  
  * $\begin{matrix}&&&1&1&0&1\\&&&&1&0&1\\&&&1&1&0&1\\&&0&0&0&0&0\\&1&1&0&1&0&0\\1&0&0&0&0&0&1\end{matrix}$ 



