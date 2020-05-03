
$\newcommand{\bra}[1]{\left\langle #1 \right|}$
$\newcommand{\ket}[1]{\left| #1 \right\rangle}$
$\newcommand{\braket}[3]{\left\langle #1 \middle| #2 \middle| #3 \right\rangle}$

# 5. Estrutura matemática da MQ (parte 2)

Nesta semana continuaremos a discutir a estrutura matemática da teoria quântica, complementando a discussão a respeito de transformações lineares e, em particular, mudanças de bases. Também iremos apresentar alguns casos importantes como os operadores projetores e o produto tensorial de espaços de Hilbert  . ... ==(NEEDS SOME WORK HERE!!)==

Para retornar aos tópicos das aulas anteriores, use o menu de navegação ou [clique aqui](../Aulas_S5-S6/).

## 5.7 Transformações lineares e mudanças de base

Na aula anterior nós discutimos como encontrar os autovetores de um operador. Surgiu, então, a questão se os autovetores do operador deveriam ser sempre ortogonais e poderiam formar uma base. Vamos, assim, iniciar aqui esta discussão com a questão, geral, se os autovetores de um operador podem sempre formam uma base do espaço vetorial.

Primeiro, vamos relembrar que condições um conjunto deve satisfazer para formar uma base. De maneira simples, para formar uma base do espaço (ou subespaço) um conjunto de autovetores devem satisfazer duas condições:

!!! info "Condições para formar uma base"
    1. Ser ortonormais.
    2. Satisfazer a relação de completeza.

Para ajudar a fixar esses conceitos, considere o seguinte exemplo.

!!! example "Exemplo"
    Considere o operador dado pela matriz

    $$
    Z = 
    \begin{pmatrix}
        1 & 0 \\
        0 & -1
    \end{pmatrix}
    $$

    Observe que seus autovalores são $\lambda_{1,2}=\pm 1$.
    
    Tendo como autovetores:

    $$
    \ket{u_1}=
    \begin{pmatrix}
        1 \\ 0
    \end{pmatrix}, \quad 
    \ket{u_2}=
    \begin{pmatrix}
        0 \\ 1
    \end{pmatrix}.    
    $$

    É fácil verificar que esse autovetores são ortonomais, portanto satisfazendo a primeira condição. 
    
    Agora, precisamos verificar se a segunda condição também é satisfeita. Ou seja, se o conjunto é completo. Para isso, fazemos:

    $$
    \ket{u_1} \bra{u_1} + \ket{u_2} \bra{u_2} =
    \begin{pmatrix}
        1 \\ 0
    \end{pmatrix}
    \begin{pmatrix}
        1 & 0
    \end{pmatrix}
    +
    \begin{pmatrix}
        0 \\ 1
    \end{pmatrix}
    \begin{pmatrix}
        0 & 1
    \end{pmatrix} \\
    =
    \begin{pmatrix}
        1 & 0 \\ 
        0 & 0
    \end{pmatrix}
    +
    \begin{pmatrix}
        0 & 0 \\ 
        0 & 1
    \end{pmatrix} = 
    \begin{pmatrix}
        1 & 0 \\ 
        0 & 1
    \end{pmatrix} = \mathbb{1}.
    $$ 
    
    Portanto, verificamos que a relação de completeza também é satisfeita. 
    
    A conclusão final é que, neste caso, os autovetores formam uma base. De faot, é fácil verificar que qualquer vetor de dimensão dois pode ser escrito numa expansão em termos do conjunto $\{ \ket{u_1},\ket{u_2} \}$.

    Seja, por exemplo, $\ket{\psi}$ um vertor arbitrário

    $$
    \ket{\psi} = 
    \begin{pmatrix}
        \alpha \\ \beta    
    \end{pmatrix} =
    \alpha
    \begin{pmatrix}
        1 \\ 0    
    \end{pmatrix} + 
    \beta
    \begin{pmatrix}
        0 \\ 1   
    \end{pmatrix} = \alpha \ket{u_1} + \beta \ket{u_2}.
    $$


### Forma diagonal

O operador $\hat{Z}$ é um exemplo de operador na forma diagonal.

!!! info "Representação diagonal"
    Um operador $\hat{A}$ está  na forma diagonal quando escrito

    $$
    \hat{A} = \sum_i \lambda_i \ket{u_i} \bra{u_i}
    $$

    onde os vetores $\ket{u_i}$ formam uma base ortonormal. Neste caso, a matriz $A$ tem a forma

    $$
    A = 
    \begin{pmatrix}
        \lambda_1 & 0         & \dots  & 0 \\
        0         & \lambda_2 & \dots  & 0 \\
        \vdots    & \vdots    & \ddots & \vdots \\
        0         & 0         & \dots  & \lambda_n
    \end{pmatrix}
    $$

    Um operador é dito _diagonalizável_ quando pode ser escrito na forma diagonal. A representação diagonal também é chamada de _decomposição ortogonal_. Nem todos os operadores de um espaço vetorial tem forma diagonal.


Na última aula, vimos também que

$$
M = 
\begin{pmatrix}
    1 & 2 \\
    1 & 0
\end{pmatrix}
$$

tem autovetores que não são ortonormais

$$
\ket{u_1} = \frac{1}{\sqrt{5}}
\begin{pmatrix}
    2 \\ 1
\end{pmatrix}, \quad
\ket{u_2} = \frac{1}{\sqrt{2}}
\begin{pmatrix}
    1 \\ -1
\end{pmatrix}  \Rightarrow \quad
\bra{u_1} u_2\rangle = \frac{1}{\sqrt{10}}.
$$

Será que é possível reescrever o operador $M$ numa forma diagonal? Aliás, qual seria o significado disso e quais propriedades tal operação deveria satisfazer, se existisse? Mais importante ainda, qual seria sua utilidade?  

Mais adiante veremos quais são as condições necessárias para um operador ser diagonalizável. Veremos também como fazer para diagonalizá-lo. Antes, vamos introduzir mais um conceito importante. O conceito de _transformações de similaridade_.


### Transformações de similaridade

Para simplificar a notação, vamos expressar os operadores por matrizes, mas o resultado discutido aqui é geral.

!!! info "Matrizes (transformações) similares"
    * Uma matriz $B$ é dita similar a uma matriz $A$ se $B = S^{-1}A\,S$ para qualquer matriz inversível $S$.
    * Se $B$ é similar a $A$, então $B$ tem os mesmo autovalores de $A$. Isso pode ser facilmente demonstrado (_verifique!_). 
    * Como consequência de ter os mesmos autovalores, as duas matrizes terão também o mesmo traço (soma dos autovalores) e determinante (produto dos autovalores). 

Uma questão interessante agora é se seria possível, em geral, encontrar uma transformação $S$ que transforme os autovetores de uma matriz $M$ de tal modo que a eles formem uma base do espaço. Em outras palavras, será que é possível encontrar uma transformação de similiaridade $S$ que coloque a matriz $M$ numa forma diagonal (i.e., que diagonalize $M$)?

Como vimos, nesta formulação da MQ usamos operadores lineares para representar grandezas físicas observáveis. Nesse contexto, vimos que os autovalores do operador estão associados aos valores das medidas daquele observável. Portanto, é muito desejável preservar os autovalores de um operador que represente grandezas físicas, se quiseremos buscar tranformação que o diagonalize. Para esse efeito, portanto, usaremos transformações de similidares. Mas como encontrar tais transformações? Como diagonalizar $M$?


## 5.8 Diagonalização de operadores

Como estamos interessados e na diagonalização de operadores observáveis, vamos coniderar aqui uma operador Hermitiano $C$, qualquer, que representa uma dada grandeza física. Estamos interessados em escrever esse operador numa forma diagonal $D$, seguindo uma transformação de similiaridade $S$:

$$
D = S^{-1}C\,S.
$$

Como fazemos para encontrar a transformação $S$?

!!! info "Procedimento para encontrar a transformação S"
    1. Encontre os autovalore e autovetores da matriz $C$
    2. Normalize os autovetores de $C$
    3. Forme a matriz $S^{-1}$ de modo que as colunas dessa matriz sejam os autovetores (colunas) normalizados de $C$
    4. A matriz $S$ é a matriz inversa de $S^{-1}$, tal que $S^{-1}S=SS^{-1}=\mathbb{1}$.

Fica como um **exercício sugerido** demonstrar que este procedimento resulta na forma diagonal

$$
D =
\begin{pmatrix}
    \lambda_1 & 0         & \dots  & 0 \\
    0         & \lambda_2 & \dots  & 0 \\
    \vdots    & \vdots    & \ddots & \vdots \\
    0         & 0         & \dots  & \lambda_n
\end{pmatrix}
= \sum_i \lambda_i \ket{u_i} \bra{u_i}
$$

onde $\lambda_i$ são os autovalores de $C$ e $D$.

