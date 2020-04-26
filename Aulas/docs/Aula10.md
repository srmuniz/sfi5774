$\newcommand{\bra}[1]{\left\langle #1 \right|}$
$\newcommand{\ket}[1]{\left| #1 \right\rangle}$
$\newcommand{\braket}[3]{\left\langle #1 \middle| #2 \middle| #3 \right\rangle}$

### Algebra de Dirac

Vejamos como expressar vetores inteiramente em termos do *kets* da base e manipular *bras* e *kets* de forma algébrica.

**Representando um _ket_ como _bra_**

Para obter o _bra_ correspondente a um dado _ket_, $| \phi\rangle = \alpha |\psi\rangle$, basta tomar o complexo conjugado:

$$\langle \phi|  = (\alpha |\psi\rangle)^* = \alpha \langle \psi| $$

podemos também escrever $|\alpha \psi\rangle = \alpha |\psi\rangle$. O mesmo pode ser feito para o _bra_, mas deve-se tomar um cuidado extra, neste caso: 

$$ \langle \alpha \psi| = \alpha^* \langle \psi|$$

!!! question "Exercício sugerido"
    Suponha que $\{ |u_1 \rangle, |u_2 \rangle, |u_3 \rangle \}$ seja uma base ortonormal. Nesta base temos:

    $$ | \psi \rangle = 2i |u_1 \rangle - 3|u_2 \rangle + i|u_3 \rangle $$

    $$ | \phi\rangle = 3 |u_1 \rangle - 2|u_2 \rangle + 4|u_3 \rangle $$

    - a) Ache $\langle\psi|$ e $\langle \phi|$.     
    - b) Calcule o produto interno $\langle \phi|\psi\rangle$ e mostre que igual seu conjugado.
    - c) Sendo $a = 3 + 3i$, calcule $|a\psi\rangle$. 
    - d) Ache as expressões de $|\psi+\phi\rangle$ e  $|\psi-\phi\rangle$
    - e) Calcule $\langle a \psi |$ e compare com $a^* \langle \psi|$.
    - f) Normalize o vetor  $| \psi \rangle$.

**Encontrando os coeficientes da expansão**

Da mesma forma que fazemos os vetores do espaço Euclidiano, para encontrar as componentes de um vetor no espaço de Hilber basta fazer o produto escalar (interno) do vetor com o correspondente verto da base. Em notação de Dirac, se o vetor é dado por 
$$
|\psi\rangle=c_{1}\left|u_{1}\right\rangle+c_{2}\left|u_{2}\right\rangle+\cdots+c_{n}\left|u_{n}\right\rangle=\sum_{i=1}^{n} c_{i}\left|u_{i}\right\rangle
$$  
os coeficientes são dados por
$$
c_i = \left\langle\ u_i | \psi \right\rangle
$$
que podem ser convenientemente escritos na forma

$$
| \psi \rangle \rightarrow\left( \begin{array}{c} \left\langle u_{1} | \psi\right\rangle \\ \left\langle u_{2} | \psi\right\rangle \\ \vdots \\ \left\langle u_{n} | \psi\right\rangle \end{array} \right) = 
\left(\begin{array}{c} c_{1} \\ c_{2} \\ \vdots \\ c_{n} \end{array}\right)
$$

Note, porém, que um vetor pode ser escrito em termos de diversas bases diferentes (o vetor tem existência indepentende da base) e em cada uma delas os valores das componentes serão diferentes.

!!! example "Exemplo"
    Considere o vetor abaixo, expresso em termos de uma base ortonormal:
    $$ |\psi\rangle=2 i\left|u_{1}\right\rangle-3\left|u_{2}\right\rangle+i\left|u_{3}\right\rangle$$


Neste caso, o velor coluna dos coeficientes representando $|\psi\rangle$ é dado por
    
$$
|\psi\rangle = 
\left( \begin{array}{c} \left\langle u_{1} | \psi\right\rangle \\ \left\langle u_{2} | \psi\right\rangle \\ \left\langle u_{3} |\psi\right\rangle \end{array}\right) = 
\left( \begin{array}{c} 2 i \\ -3 \\ i \end{array} \right).
$$

Da mesma forma, o vetor dual ("_bra_") correspondente ao vetor $\psi\rangle$ pode ser representado na forma de um vetor linha

$$
\left\langle\psi\left|=\left(\left\langle\psi | u_{1}\right\rangle\left\langle\psi | u_{2}\right\rangle\left\langle\psi | u_{3}\right\rangle\right)=\left(\left\langle u_{1} | \psi\right\rangle^{*}\left\langle u_{2} | \psi\right\rangle^{*}\left\langle u_{3} | \psi\right\rangle^{*}\right)\right.\right.
$$

e portanto

$$
\langle\psi|=\left((2 i)^{*}(-3)^{*}(i)^{*}\right)=(-2 i-3-i).
$$

## 5.6 Operadores lineares

Grandezas físicas observáveis, que podem ser medidas no laboratório, como posição e momento, são representandos dentro da estrutura matemática da mecânica quântica por operadores lineares num espaço vetorial de Hhilbert. Matematicamente, esses operadores são mapas que levam (transformam) um vetor em outro vetor. Isto é, são receitas ou regras de transformação de um dado vetor num novo vetor, geralmente diferente do primeiro. Frequentemente usa-se como símbolo uma letra maíscula com "chapel" (sinal circunflexo) sobre a letra para indicar um operador. Assim, na notação de Dirac, escreve-se, por exemplo:
$$
\hat{T}|\psi\rangle=|\phi \rangle.
$$

Os operadores que mais nos interessam na MQ são os operadores lineares. Um operador $\hat{T}:\mathcal{H}\rightarrow\mathcal{H}$ é linear no espaço $\mathcal{H}$ se, dados escalares $\alpha, \beta \in \mathbb{C}$ e vetores $|u\rangle, |v\rangle \in \mathcal{H}$, ele satisfaz a relação:
$$
\hat{T}(\alpha|u\rangle+\beta|v\rangle)=\alpha\, \hat{T}|u\rangle+\beta\, \hat{T}|v\rangle.
$$ 

Além disso, os operadores lineare também satisfazem as seguintes relações:

$$
(\hat{T}+\hat{S})\ket{u}=\hat{T}\ket{u} + \hat{S}\ket{u}
$$

$$ 
(\hat{T}\,\hat{S})\ket{u}=\hat{T}(\hat{S}\ket{u})
$$

Operadores atuam tanto nos vetores _kets_ como nos vetores duais _bras_, seguindo a seguinte notação (atenção para a ordem!):
$$ 
\hat{T}\ket{u} \quad \text{ ou } \quad \bra{u} \hat{T}
$$
mas nunca $(\,\ket{u} \hat{T}\,)$ ou $(\,\hat{T} \bra{u}\,)$, que são formas incorretas (inválidas)!

### Exemplos importantes

- **Operador Identidade:** o operador mais simples
$$
\mathbb{1}\ket{u}=\ket{u}
$$

- **Produto externo (definição):** o produto externo entre _kets_ e _bras_ é dado por
$$
\ket{\psi}\bra{\phi} = \hat{P}
$$
note que o produto externo resulta num operador e não num escalar! Essa construção será muito útil, como veremos adiante.

- **Operador projetor:** usando o produto externo, podemos calcular as projeções de um dado vetor numa base $\{ u_i \}$, fazendo 

$$
\begin{array}{ll}
\hat{P}_{u_i} = | u_i \rangle \langle u_i |  &\rightarrow \quad \hat{P}_{u_i} | \chi\rangle = | u_i \rangle (\langle u_i |\chi\rangle) = \beta | u_i \rangle \\
\hat{P}_{u} = \sum_i | u_i \rangle \langle u_i |  &\rightarrow \quad  {P}_{u} | \chi\rangle = \sum_i \,c_i | u_i \rangle = | \chi\rangle
\end{array}
$$

- **Relação de completeza:** usando os resultados anteriores podemos observar que

$$
|\psi\rangle=\sum_{i=1}^{n}c_i\left|u_{i}\right\rangle = \sum_{i=1}^{n}\left|u_{i}\right\rangle\left\langle u_{i} | \psi\right\rangle=\left(\sum_{i=1}^{n}\left|u_{i}\right\rangle\left\langle u_{i}\right|\right)|\psi\rangle
$$

$$
\sum_{i=1}^{n}\left|u_{i}\right\rangle\left\langle u_{i}\right| = \mathbb{1}
$$


### Representação de operadores

A operação matemática de transformar um vetor de um espaço vetorial linear num outro vetor, através da ação de um operador linear, pode ser representada de várias formas. Uma delas é a representação matricial, onde os operadores são representados por matrizes quadradas e os vetores por matrizes linhas e colunas. Neste caso, a transformação linear torna-se uma mera multiplicação dessas matrizes.

É importante lembrar que, da mesma forma que os vetores do espaço, os operadores têm existência e significado próprios no espaço vetorial e sua ação independe da representação ou da base escolhida. Por outro lado, sua representação matricial, em geral, depende da base escolhida. Devemos lembrar, porém, que a forma matricial é apenas uma das representações possíveis de um operador linear. 

**Representação matricial**

A matriz de um operador numa dada base pode ser obtida a partir da ação do operador em cada vetor da base. Assim, se $\{ u_i \}$ representa o conjunto de vetores da base, as componentes do operador $\hat{T}$ podem ser obtidas através da operação

$$
T_{i j}=\left\langle u_{i}|\hat{T}| u_{j}\right\rangle.
$$

Em um espaço vetorial de dimensão n, as componentes do operador podem ser arranjadas na forma de uma matriz quadrada $n \times n$, onde $T_{i j}$ representa o elemento na linha $i$ e coluna $j$, conforme:

$$
\begin{aligned}
\hat{T} \rightarrow\left(T_{i j}\right) &=\left(\begin{array}{cccc}
T_{11} & T_{12} & \dots & T_{1 n} \\
T_{21} & T_{22} & \dots & T_{2 n} \\
\vdots & \vdots & \ddots & \vdots \\
T_{n 1} & T_{n 2} & \dots & T_{n n}
\end{array}\right) \\
&=\left(\begin{array}{cccc}
\left\langle u_{1}|\hat{T}| u_{1}\right\rangle & \left\langle u_{1}|\hat{T}| u_{2}\right\rangle & \dots & \left\langle u_{1}|\hat{T}| u_{n}\right\rangle \\
\left\langle u_{2} \hat{T} | u_{1}\right\rangle & \left\langle u_{2}|\hat{T}| u_{2}\right\rangle & \dots & \left\langle u_{2}|\hat{T}| u_{n}\right\rangle \\
\vdots & \vdots & \ddots & \vdots \\
\left\langle u_{n}|\hat{T}| u_{1}\right\rangle & \left\langle u_{n}|\hat{T}| u_{2}\right\rangle & \dots & \left\langle u_{n}|\hat{T}| u_{n}\right\rangle
\end{array}\right)
\end{aligned}
$$

!!! question "Exercício sugerido"
    Suponha uma base ortonormal $\left\{\left|u_{1}\right\rangle,\left|u_{2}\right\rangle,\left|u_{3}\right\rangle\right\}$, um operador $\hat{A}$ cuja a ação é dada por:
    $$
    \begin{array}{l}
    \hat{A}\left|u_{1}\right\rangle=2\left|u_{1}\right\rangle; \\
    \hat{A}\left|u_{2}\right\rangle=3\left|u_{1}\right\rangle-i\left|u_{3}\right\rangle; \\
    \hat{A}\left|u_{3}\right\rangle=-\left|u_{2}\right\rangle
    \end{array}
    $$
    Escreve a matriz que representa o operador nesta base.


**_Definição_ : Traço de um operador**

O traço de um operador $\hat{T}$, denotado por $\text{Tr}(\hat{T})$, é definido como sendo a soma dos elementos na diagonal principal da matriz que o representa 

$$
\text{Tr}(\hat{T})=T_{11}+T_{22}+\ldots+T_{n n}=\sum_{i=1}^{n} T_{i i}.
$$ 

Alternativamente, o traço também pode ser escrito como:

$$
\text{Tr}(\hat{T})=\left\langle u_{1}|\hat{T}| u_{2}\right\rangle+\left\langle u_{2}|\hat{T}| u_{2}\right\rangle+\ldots+\left\langle u_{n}|\hat{T}| u_{n}\right\rangle=\sum_{i=1}^{n}\left\langle u_{i}|\hat{T}| u_{i}\right\rangle
$$

!!! question "Exercício sugerido"
    O traço de um operador obedece uma relação cíclica, como indicado
    $$
    \operatorname{Tr}(A B C)=\operatorname{Tr}(B C A)=\operatorname{Tr}(C A B)
    $$
    Prove isso para o caso de dois operadores $A$ e $B$, i.e. prove que $\operatorname{Tr}(A B)=\operatorname{Tr}(B A)$

### Valores esperados

O valore esperado de um operador com relação a um estado $\Psi$ é dado por

$$
\langle\hat{A}\rangle=\langle\Psi|\hat{A}| \Psi\rangle
$$

!!! question "Exercício sugerido"
    Considere uma partícula no estado
    $$
    |\Psi\rangle=2 i\left|u_{1}\right\rangle-\left|u_{2}\right\rangle+4 i\left|u_{3}\right\rangle
    $$
    e um operador
    $$
    \hat{A}=\left|u_{1}\right\rangle\left\langle u_{1}| -2 i| u_{1}\right\rangle\left\langle u_{2}|+| u_{3}\right\rangle\left\langle u_{3}\right|
    $$
    Considerando que $\{ |u_i\rangle \}$ é uma base ortonormal, calcule $\langle \hat{A} \rangle$ nesse estado.


### Autovalores e autovetores

Quando um operador age sobre um dado vetor e o resultado é o mesmo vetor multiplicado por um escalar, o vetor é chamado de autovetor e o escalar de autovalor. Assim, por exemplo, no caso da energia total
$$
\hat{H}|\psi_n\rangle = E_n |\psi_n \rangle
$$


No contexto da mecânica quântica, operadores de observáveis físicos têm como autovalores o conjunto de todas as possíveis medidas daquela grandeza física, num dado sistema quântico. Os autovetores de um operador são autoestados do sistema quântico.

...