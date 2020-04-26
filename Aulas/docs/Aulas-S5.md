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
> $(\phi,\psi) =$ número complexo
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
\left[ \begin{array}{c} b^*_1 & b^*_2 & ... & b^*_n \end{array} \right]
\left[ \begin{array}{c} c_1 \\ c_2 \\ ... \\ c_n \end{array} \right] 
= \begin{array}{c} b^*_1\,c_1 & b^*_2\,c_2 & ...& b^*_n\,c_n \end{array}
= \sum_{k=1}^n b^*_k\,c_k.$$

### Propriedades do produto interno
Reescrevemos aqui as propriedade dos produto interno, na notação de Dirac. Para os vetores $|\psi\rangle$ e $|\phi\rangle$, pertencentes ao espaço $\mathcal{H}$, e os escalares $\alpha$ e $\beta$ do campo complexo $\mathcal{F}$, as seguintes propriedades são satisfeitas:

$$\begin{array}{c}
1.\, &&\langle\psi|\phi\rangle = \langle\phi|\psi\rangle ^* \\
2.\, &&\langle\psi|(\alpha|\phi\rangle+\beta|\eta\rangle) = 
  \alpha\langle\psi|\phi\rangle + \beta\langle\psi|\eta\rangle \\
3.\, &&(\alpha\langle\phi| +\beta\langle\eta|)|\psi\rangle = 
  \alpha^*\langle\phi|\psi\rangle + \beta^*\langle\eta|\psi\rangle \\
4.\, &&\langle\psi|\psi\rangle \ge 0 \textrm{   sendo igual só se } 
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

$$|v_1\rangle = \frac{ |w_1 \rangle }{\langle w_1 | w_1 \rangle}; \,
|v_2\rangle = \frac{ |w_2 \rangle }{\langle w_2 | w_2 \rangle}; \,
|v_3\rangle = \frac{ |w_3 \rangle }{\langle w_3 | w_3 \rangle}$$

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

!!! example "Exemplo"
    Suponha que $\{ |u_1 \rangle, |u_2 \rangle, |u_3 \rangle \}$ seja uma base ortonormal. Nesta base temos:

    $$ | \psi \rangle = 2i |u_1 \rangle - 3|u_2 \rangle + i|u_3 \rangle $$

    $$ | \phi\rangle = 3 |u_1 \rangle - 2|u_2 \rangle + 4|u_3 \rangle $$

    - a) Ache $\langle\psi|$ e $\langle \phi|$.     
    - b) Calcule o produto interno $\langle \phi|\psi\rangle$ e mostre que igual seu conjugado.
    - c) Sendo $a = 3 + 3i$, calcule $|a\psi\rangle$. 
    - d) Ache as expressões de $|\psi+\phi\rangle$ e  $|\psi-\phi\rangle$
    - e) Calcule $\langle a \psi |$ e compare com $a^* \langle \psi|$.
    - f) Normalize o vetor  $\langle a \psi |$.



