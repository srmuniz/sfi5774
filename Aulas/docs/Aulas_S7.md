
$\newcommand{\bra}[1]{\left\langle #1 \right|}$
$\newcommand{\ket}[1]{\left| #1 \right\rangle}$
$\newcommand{\braket}[3]{\left\langle #1 \middle| #2 \middle| #3 \right\rangle}$

# 5. Estrutura matemática da MQ (parte 2)

Nesta semana continuaremos a discutir a estrutura matemática da teoria quântica, complementando a discussão a respeito de transformações lineares e, em particular, mudanças de bases. Também iremos apresentar alguns casos importantes como os operadores projetores e o produto tensorial de espaços de Hilbert. 

Para retornar aos tópicos das aulas anteriores, use o menu de navegação ou [clique aqui](../Aulas_S5-S6/).

## 5.7 Transformações lineares e mudanças de base

Na aula anterior nós discutimos como encontrar os autovetores de um operador. Surgiu a questão se esses autovetores deveriam ser sempre ortogonais e poderiam formar uma base. Assim, vamos iniciar essa discussão aqui, com a questão, geral, se os autovetores de uma matriz formam uma base.

Primeiro, vamos relembrar que condições um conjunto deve satisfazer para formar uma base. De maneira simples, os autovetores devem satisfazer duas condições:

!!! info "Condições para formar uma base"
    1. Ser ortonormais.
    2. Satisfazer a relação de completeza.

Para ajudar a fixar as ideias, considere o seguinte exemplo.

!!! example "Exemplo"
    Considere o operador dado pela matriz

    $$
    \sigma_z = 
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

O operador $\sigma_z$ é um exemplo de operador na forma diagonal.

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

Mais adiante veremos que condições um operador deve obedecer para que possa ser diagonalizável. 

Por outro lado, vimos na última aula que o operador

$$
M = 
\begin{pmatrix}
    1 & 2 \\
    1 & 0
\end{pmatrix}.
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


