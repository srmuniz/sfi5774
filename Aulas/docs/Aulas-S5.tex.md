
$\newcommand{\bra}[1]{\left\langle #1 \right|}$
$\newcommand{\ket}[1]{\left| #1 \right\rangle}$
$\newcommand{\braket}[3]{\left\langle #1 \middle| #2 \middle| #3 \right\rangle}$

# 5. Estrutura matemática da Mecânica Quântica

Até este ponto, discutimos, em linhas gerais, como expressar e resolver
problemas físicos na mecânica quântica, em termos da Equação de
Schrödinger (EqS). Discutimos, de uma maneira ampla, as estratégias para
resolver a EqS no caso geral e, em particular, discutimos a resolução da equação  independente do tempo, resolvendo alguns exemplos emblemáticos 
de potencias unidimencionais simples. 
Visto sob essa perspectiva, pode-se ter a impressão que mecânica quântica se resume à solução da EqS, usando métodos matemáticos mais ou menos
familiares (solução de equações diferenciais parciais). Embora essa seja
uma estratégia válida e efetiva em alguns casos, ela é bastante limitada 
e seria um grande equívoco pensar que as estratégias da mecânica quântica 
se limitam simplesmente a soluções da Eq. de Schrödinger.

O roteiro seguido até aqui teve uma motivação didática e, deliberamente,
procurou enfatizar os aspectos físicos do problema. Apresentando apenas a
matemática necessária para formular e resolver o problema. Por essa
razão, não temos sido muito rigorosos com o formalismo. Trocando rigor
matemático por intuição física, sempre que possível, para não obscurecer
desnecessariamente a "Física" do problema. Essa estratégia é bastante
razoável para uma introdução ao assunto. Apesar disso, o domínio do
formalismo matemático também é importante e necessário para ser bem
sucedido na resolução de problemas gerais da MQ, ou mesmo para entender
muitos temas de pesquisa contemporânea. A situação ideal é aquela onde
consegue-se combinar ambas habilidades, que é um dos objetivos
secundários deste curso.

Neste capitulo, portanto, seguiremos uma estratégia diferente e
complementar àquela seguida até agora. O foco agora será ampliar a
linguagem e abstração do problema, apresentadno de modo mais formal a
estrutura matemática da mecânica quântica moderna. A prioridade ainda
permanecerá com a Física e não a Matemática. Portanto, não se almeja mero
rigor matemático, mas, sim, introduzir novos conceitos e
representações que serão muito úteis para expandir os horizontes
dentro da teoria e, como iremos explorar nos próximos capítulos, serão
fundamentais para entender a linguagem contemporânea dessa importante
disciplina científica.

## 5.1  Espaço de estados
Resumindo o que vimos até aqui, podemos, ainda de uma maneira informal,
dizer que as soluções estacionárias \(\psi_n(x)\) da EqS são funções de
ondas que representam os possíveis estados do sistema, com energia
\(E_n\). Outra forma de dizer isso, motivada pela forma da equação
\(H\psi_n(x)=E_n\psi_n(x)\), é dizer que \(\{\psi_n(x)\}\) é o conjunto
de autofunções do operador \(H\), representando os autoestados do
sistema com autovalores \(E_n\). Vimos nos exemplos discutidos, como no
caso da caixa infinita, que \(\psi_n(x)\) possui uma série de
propriedades interessantes e úteis. Entre elas:

Dentro do que vimos até aqui, podemos, ainda de uma maneira informal, dizer que as soluções estacionárias $\psi_n(x)$ da EqS são funções de ondas que representam os possíveis estados do sistema, com energia $E_n$. Outra forma de dizer isso, observando a forma da equação $H\psi_n(x)=E_n\psi_n(x)$, é dizer que $\{\psi_n(x)\}$ é o conjunto de autofunções do operador $H$, representando os autoestados do sistema com autovalores $E_n$. Vimos nos exemplos discutidos, como no caso da caixa infinita, que $\psi_n(x)$ possui uma série de propriedades interessantes e úteis. Entre elas: 
>$\int \psi^*_n(x)\psi_m(x)dx=\delta_{nm}$
>
>$\Psi(x)=\sum_n c_n \psi_n(x)$  
>
>$c_n = \int \psi^*_n(x) \Psi(x)dx$ ; onde $\sum_n |c_n|^2 = 1$
>
>$<A_{_{\Psi}}> = \int \Psi^*(x) A \Psi(x) dx$  


De fato, pode-se extender e generalizar essas ideias para expressar
esses objetos em termos mais abstratos e gerais, através do conceito de
espaço vetorial linear. Como os estados \(\psi_n(x)\) e os operadores
(que nesse contexto serão transformações lineares) nesses estados devem 
satisfazer um certas propriedades para representar um sistema físico, 
esses espaços vetoriais devem ter conjunto de estruturas e propriedades 
especiais que veremos logo mais. Por simplicidade, iremos nos referir a esses espaços como *espaços de Hilbert*.


Para deixar esse ponto mais claro, vamos relembrar/introduzir algumas definições e conceitos, para formalizar e definir melhor essa ideia.


## 5.2 Espaço vetorial linear
Partido da definição mais geral e abstrata:

**Definição 1**
> Grupo comutativo sob adição, $\mathcal{V}$, com multiplicação por escalar definida sobre um campo complexo $\mathcal{F}$, satisfazendo propriedades associativa e distributiva. Os elementos do espaço $\mathcal{V}$ são chamados de *vetores* e os elementos do campo $\mathcal{F}$ são *escalares*.

As propriedades associativa e distributiva da multiplicação por escalar implica:

Se $\mathcal{V}=\{\vec{u},\vec{v},\vec{w},...\}$ e $\mathcal{F}=\{\lambda,\mu,\kappa,...\}$, temos que: $\lambda(\mu\vec{v})=(\lambda\mu)\vec{v}$,  
$\lambda(\vec{v}+\vec{u})=\lambda\vec{v}+\lambda\vec{u}$ e  $(\lambda+\mu)\vec{u}=\lambda\vec{u}+\mu\vec{u}$. 

Vale lembrar algumas outras definições (*Grupo* e *Campo*), da Algebra:

> **Grupo:** Conjunto de elementos, que inclui inversos e identidade, com uma operação ($*$) fechada que satisfaz associatividade. Grupos não precisam ser comutativos, mas quando apresentam essa propriedade são chamados de grupos comutativos ou Abelianos.
>> 1. *Fechado*: $\forall\, x,y \in G \rightarrow x*y \in G$
>> 2. *Associativo*: $\forall\, x,y,z \in G \rightarrow (x*y)*z=x*(y*z)$
>> 3. *Identidade*: $\exists\, e\in G \rightarrow e*x=x*e=x; \,\, \forall\, x \in G$
>> 4. *Inverso*: $\forall\, x \in G, \exists\, x^{-1} \rightarrow (x^{-1})*x=x*(x^{-1})=e$
> 
> **Campo:** De maneira simples, são conjuntos de elementos onde são definidas as quatro operações aritméticas ($+$,$-$,$\times$,$\div$) de forma comutativa. Como as operações ($-$, $\div$) são, na verdade, operações inversas de ($+$,$\times$), são definidos em termos dessas duas operações. 
>> Formalmente, campos são conjuntos de elementos com operações de adição e multiplicação ($+$,$\times$) definida; sendo comutativo para ($+$) e comutativo para ($\times$) omitindo o elemento nulo (zero). Satisfaz ainda a propriedade distributiva $a\times(b+c)=a\times b + a\times c$.
> 
> Campos são, portanto, dois grupos comutativos com duas operações ($+$,$\times$). Exemplos importantes são os campos dos números reais, complexos e racionais. 

Alternativamente, uma definição um pouco mais familiar de **espaço vetorial** é:

**Definição 2:**
> Conjunto $\mathcal{V}\ne\emptyset$ (não vazio) de elementos, chamados vetores, que é fechado sob adição e multiplicação por um escalar de um campo complexo $\mathcal{F}$.

Ou seja, se $\mathcal{V}=\{\vec{u},\vec{v},\vec{w},...\}$ e $\mathcal{F}=\{\lambda,\mu,\kappa,...\}$, temos que:
$\forall\, \vec{u},\vec{w}\in \mathcal{V}$ e $\forall\, \lambda,\mu \in \mathcal{F} \rightarrow \lambda\vec{u}+\mu\vec{w} \in \mathcal{V}$ 

Se o campo $\mathcal{F}$ é complexo (real) o espaço é dito ser um espaço vetorial linear complexo (real). 

### Dimensão do espaço
Um conjunto de vetores $\{\phi_n \}$ é dito linearmente independente (LI) se não há nenhuma combinação linear não-trivial que leve ao vetor nulo, isto é:  $\sum_n c_n \phi_n = 0 \rightarrow c_n = 0\, \forall\, n$. A dimensão $d$ do espaço vetorial é dada pelo número máximo de vetores LI desse espaço. Qualquer vetor do espaço pode ser escrito como uma combinação linear dos vetores da base desse espaço, formado por vetores LI do espaço. Como veremos adiante, os espaçcos de Hilbert da MQ podem ser infinitos.

## 5.3 Espaços de Hilbert: espaços vetoriais da MQ
Na mecânica quântica são usados espaços vetoriais com algumas propriedades e estruturas adicionais, para garantir certas propriedades físicas desejáveis da teoria. É comum, principalmente entre os físicos, chamar esses estados de estados de Hilbert. Os espaços de Hilbert podem ser finitos (com dimensão \(d\)) ou infinitos, por exemplo, quando os vetores são funções contínuas. 

Embora essa terminologia não seja muito precisa, dado que os
espaços vetoriais usados na MQ são apenas um tipo particular de espaço de Hilbert (neste contexto: os espaços cujos vetores são funções *quadrado-integráveis*, também chamados de espaços de Lebesgue do tipo \(L_2\)), nós usaremos essa "convenção", para simplificar a linguagem.

### Produto interno
Uma das estruturas adicionais dos espaços de Hilbert é o produto interno que leva dois vetores do espaço num número complexo, segundo a definição:

$$\forall\, \phi, \psi \in \mathcal{H} \rightarrow (\phi,\psi) = \int \phi^*(x)\psi(x)\,dx$$

No caso de um espaço discreto de dimensão \(d\), o produto interno é definido como 

$$(w,v)=\sum_{i=1}^{d} w_i^* v_i$$

Note que o produto interno resulta num escalar complexo, que não é um elemento do espaço de Hilbert. O produto interno tem as seguintes propriedades:
> $(\phi,\psi) = \lambda \in \mathbb{C}$ (número complexo)
> 
> $(\phi,\psi) = (\psi,\phi)^*$
> 
> $(\phi, c_1 \psi_1 + c_2 \psi_2 ) = c_1(\phi, \psi_1) + c_2(\phi,\psi_2 )$
> 
> $(c_1 \psi_1 + c_2 \psi_2, \phi ) = c_1^* (\psi_1, \phi) + c_2^*(\psi_2, \phi)$
> 
> $(\phi,\phi) \ge 0$, sendo nulo apenas quando $\phi=0$

### Comprimentos e ângulos
O conceito de produto interno nos permite generalizar os conceitos de  comprimento (norma) e medidas de ângulos entre vetores em espaços de dimensões e elementos arbitrários. Embora os vetores agora não sejam mais "setas" no espaço tridimensional Euclidiano, pode-se explorar a analogia com o conceito de produto escalar (o produto interno) daquele espaço, para definir a norma do vetor, através do produto interno de um vetor por ele mesmo: 

$$(\phi,\phi) = \int \phi^*(x)\phi(x)\,dx = |\phi|^2$$ 

$$(v,v) = \sum_{i=1}^{d} v^*_i v_i = |v|^2$$ 

$$||\phi|| = \sqrt{|\phi|^2}$$ 

$$||v|| = \sqrt{|v|^2}$$ 

Observe que a norma é sempre um número real, tal que $||\phi|| \ge 0$ e $||v|| \ge 0$, conforme nos assegura a desigualdade de Schwartz:

$$ |(\psi,\phi)|^2 \le (\psi,\psi)(\phi,\phi).$$

Também é satisfeito o teorema de desigualdade triangular:

$$ ||(\psi + \phi)|| \le ||\psi|| + ||\phi|| .$$

Para ambos os casos, a desigualdade só é válida quando um dos vetores é múltiplo do outro.

Dois veltores são tido ortogonais quando seu produto interno é nulo. Da mesma forma, um conjunto de vetores $\{\phi_n\}$ é dito *ortonormal* quando o produto interno entre pares de seus elementos obedece a relação $(\phi_n,\phi_m)=\delta_{nm}$.


### Expansão de vetores
No caso em que $\mathcal{H}$ é finito, com dimensão $d$, dado um vetor arbitrário $\psi$ e uma base $\{ \phi_n \}$ de vetores linearmente independentes, podemos expressar o vetor $\psi = \sum_n c_n \phi_n$, onde $c_n=(\phi_n,\psi)$ e $(\phi_n,\phi_m)=\delta_{nm}$. Podemos pensar nos coeficientes $c_n$ como sendo as componentes do vetor no espaço de Hilbert, análogos às componentes de um vetor no espaço Euclidiano. Porém, é importante lembrar que essas componentes são expressas por números complexos. As componente do vetor de estado têm toda a informação relativa ao estado, determinando completamente o vetor (estado) do sistema.

Também de modo análogo, podemos expressar as soma de dois vetore em termos dessas componentes 

$$\Psi_a + \Psi_b = \sum_n (a_i + b_n) \psi_n.$$ 

$$\lambda \Psi_a= \sum_n \lambda a_i \psi_n.$$


!!! info "Pare, Pense & Contemple!"
    Antes de prosseguir, pare e reflita por um momento no significado e amplitude esses resultados. Lembre-se que o espaço $\mathcal{H}$ pode ter dimensõe infinitas, tanto no número de elemento (vetores), como nas dimensões (número de componentes) desses vetores. Esses resultados, nada óbvios, são extremamente poderosos e úteis, justificando plenamente o tempo investido em generalizar e abstrair a descrição dos nossos problemas usando esse formalismo.  


## 5.4 Notação de Dirac
Introduzimos agora a notação de Dirac, bastante popular na mecânica quântica, onde o vetor de estado é chamado de "*ket*" e representado pelo símbolo $|\psi\rangle$. O vetor correspondente do *espaço dual* é chamado de "*bra*" é representado por $\langle\psi|$, de tal forma que o produto interno pode ser representado por $(\psi,\psi)=\langle\psi|\psi\rangle$. 

Note que $\langle\psi|=|\psi\rangle^*$, corresponde ao complexo conjugado transposto do vetor de estado $|\psi\rangle$. Isso fica claro, quando observamos a representação matricial desse vetores. Considere, por exemplo, que o vetor de estado tenha $n$ componentes ($c_1,c_2,...,c_n$). Neste caso, o "*ket*" $|\psi\rangle$ é escrito como um vetor coluna, enquanto o seu vetor dual "*bra*" é um vetor linha, conforme indicado abaixo:

$$|\psi\rangle = 
\left[ 
\begin{array}{c} c_1\\ c_2\\ ...\\ c_n 
\end{array} 
\right] \, 
\Rightarrow \,\,\,
\langle\psi| =
\left[ 
\begin{array}{c} c_{1}^{*} & c^*_2 & ...& c^*_n 
\end{array} 
\right].$$

Nesta representação, todas as propriedades anteriores são equivalentes a operações sobre matrizes (ou vetores linha/coluna), como, por exemplo, soma (subtração), multiplicação por escalares e combinações lineares dessas operações. O produto interno (*"bracket"*), como é fácil perceber, corresponde a uma multiplicação de matrizes, resultando num escalar:

$$\langle\phi|\psi\rangle = 
\left[ \begin{array}{l} b^*_1 & b^*_2 & ... & b^*_n \end{array} \right]
\left[ \begin{array}{c} c_1 \\ c_2 \\ ... \\ c_n \end{array} \right] 
= \begin{array}{l} b^*_1\,c_1 & b^*_2\,c_2 & ...& b^*_n\,c_n \end{array}
= \sum_{k=1}^n b^*_k\,c_k.$$

### Propriedades do produto interno
Reescrevemos aqui as propriedade dos produto interno, na notação de Dirac. Para os vetores $|\psi\rangle$ e $|\phi\rangle$, pertencentes ao espaço $\mathcal{H}$, e os escalares $\alpha$ e $\beta$ do campo complexo $\mathcal{F}$, as seguintes propriedades são satisfeitas:

$$\begin{array}{ll}
1.\, &\langle\psi|\phi\rangle = \langle\phi|\psi\rangle ^* \\
2.\, &\langle\psi|(\alpha|\phi\rangle+\beta|\eta\rangle) = 
  \alpha\langle\psi|\phi\rangle + \beta\langle\psi|\eta\rangle \\
3.\, &(\alpha\langle\phi| +\beta\langle\eta|)|\psi\rangle = 
  \alpha^*\langle\phi|\psi\rangle + \beta^*\langle\eta|\psi\rangle \\
4.\, &\langle\psi|\psi\rangle \ge 0 \textrm{   sendo igual só se } 
|\psi \rangle = 0 \end{array}$$ 

Se $\langle\psi|\Phi\rangle=0$, os vetores são ortogonais. Os comprimentos (normas) dos vetores são expressos por:

**Norma do vetor**:

$$||\psi|| = \sqrt{\langle\psi|\psi\rangle}.$$

**Vetor normalizado** quando:

$$||\psi|| = \sqrt{\langle\psi|\psi\rangle}=1.$$

**Vetores ortonormais**:

$$\langle u_j | u_k \rangle = \delta_{jk}$$

$$ \delta_{jk} = \left\{ \begin{array}{c} 1 & \textrm{ se }j=k \\ 0 & \textrm{ caso contrário}\end{array}  \right. $$


## 5.5 Vetores de base
O conjunto de vetore $\{ |\phi_1\rangle, |\phi_2\rangle, \dots,|\phi_n\rangle \}$ formam uma base do espaço se eles satisfazem os seguinte critérios:

!!! note ""
    1. É possível escrever qualquer vetor do espaço como uma combinação linear única dos vetores $\{ \phi_i \}$. 
    2. O conjunto $\{ |\phi_1\rangle, |\phi_2\rangle, \dots,|\phi_n\rangle \}$ é linearmente indenpendente.
    3. Satisfaz a relação de completeza.

**Condição 1:**
Se o conjunto $\{ |\phi_1\rangle, |\phi_2\rangle, \dots,|\phi_n\rangle \}$ estende todo o espaço $\mathcal{H}$, é possível escrever um vetor $|\Psi\rangle$ arbitrário como uma combinção linear dos vetores da base

$$ |\Psi\rangle = c_1 |\phi_1\rangle + c_2 |\phi_2\rangle + \dots + c_n |\phi_n\rangle = \sum_{i=1}^n c_i |\phi_i\rangle$$

onde os coeficientes da expansão são números complexos dados por

$$ c_i = \langle \phi_i | \Psi \rangle.$$

**Condição 2:** 
A conjunto $\{ |\phi_1\rangle, |\phi_2\rangle, \dots,|\phi_n\rangle \}$ é dito linearmente independente quando a equação 

$$ a_1 |\phi_1\rangle + a_2 |\phi_2\rangle + \dots + a_n |\phi_n\rangle = 0$$

implica que todos os coeficientes são nulos, $c_1=c_2=...=c_n=0$. Em outras palavras, não há nenhuma combinação (não trivial) que produza o vetor nulo.

> **Dimensão do espaço**
> O número de vetores da base fornece a dimensão do espaço vetorial.

**Condição 3:**
Um conjunto ortonormal $\{ |\phi_1\rangle, |\phi_2\rangle, \dots,|\phi_n\rangle \}$ constitue uma base se e somente se satisfaz a **relação de completeza**

$$ \sum_{i=1}^n |\phi_i\rangle \langle \phi_i| = 1 $$

### Procedimento de Gram-Schmidt
Se tivermos um conjunto de vetores $\{ |u_i\rangle \}$ que não é ortonormal, é possível usar o procedimento de Gram-Schmidt para construir uma base ortonormal a partir desse conjunto inicial. Para simplificar o entendimento do processo, consideramos um exemplo com 3 vetores de base (num espaço de dimensção 3). 

Começamos selecionando um dos vetores do conjunto $\{ |u_i\rangle \}$ e  definindo o vetor:

$$ |w_1\rangle = |u_1\rangle  $$

A partir disso, constroi-se sucessivamente os vetores seguintes da base subtraindo deles as componentes nas direções ortonais àquelas já construídas. Neste caso, por exemplo, as direções $|w_2\rangle$ e $|w_3\rangle$ são construídas subtraindo as componente na direção de $|w_1\rangle$ e $|w_2\rangle$, conforme:

$$\begin{array}{c}
&&|w_2 \rangle =& |u_2\rangle - \frac{\langle w_1 | u_2 \rangle}{\langle w_1 | w_1 \rangle} |w_1\rangle \\ \\
&&|w_3\rangle =& |u_3\rangle - \frac{\langle w_1 | u_3 \rangle }{\langle w_1 | w_1 \rangle} |w_1\rangle - \frac{\langle w_2 | u_3 \rangle }{\langle w_2 | w_2 \rangle} |w_2\rangle \end{array}$$

Finalmente, para obter um conjunto ortonormal $\{ |v_i\rangle \}$, nós podemos normalizar cada um dos vetores $|w_i\rangle$:

$$|v_1\rangle = \frac{ |w_1 \rangle }{||\langle w_1 | w_1 \rangle||}; \,
|v_2\rangle = \frac{ |w_2 \rangle }{||\langle w_2 | w_2 \rangle}||; \,
|v_3\rangle = \frac{ |w_3 \rangle }{||\langle w_3 | w_3 \rangle||}$$

De forma geral, para um cojunto finito de vetores $\{u_k\}$, de um espaço vetorial $\mathcal{U}$ de dimensão $d$, pode-se escrever os vetores ortonormais $\{v_k\}$ através da construindo:

$$
\left|v_{k+1}\right\rangle \equiv \frac{\left|w_{k+1}\right\rangle-\sum_{i=1}^{k}\left\langle v_{i} | w_{k+1}\right\rangle\left|v_{i}\right\rangle}{\|\left|w_{k+1}\right\rangle-\sum_{i=1}^{k}\left\langle v_{i} | w_{k+1}\right\rangle\left|v_{i}\right\rangle \|}.
$$


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

### Conjugação Hermitiana

...

### Operadores Hermitianos e Unitários 

...

### Comutadores

...

## 5.7 Transformações lineares e mudanças de base




