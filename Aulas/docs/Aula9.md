$\newcommand{\bra}[1]{\left\langle #1 \right|}$
$\newcommand{\ket}[1]{\left| #1 \right\rangle}$
$\newcommand{\braket}[3]{\left\langle #1 \middle| #2 \middle| #3 \right\rangle}$

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
> O número de elmentos (vetores) da base fornece a dimensão do espaço vetorial.

**Condição 3:**
Um conjunto ortonormal $\{ |\phi_1\rangle, |\phi_2\rangle, \dots,|\phi_n\rangle \}$ constitue uma base se e somente se satisfaz a **relação de completeza**

$$ \sum_{i=1}^n |\phi_i\rangle \langle \phi_i| = 1 $$

### Procedimento de Gram-Schmidt
Se tivermos um conjunto de vetores $\{ |u_i\rangle \}$ que não é ortonormal, é possível usar este procedimento para construir uma base ortonormal Para simplificar o entendimento do processo, iremos considerar um exemplo com 3 vetores de base (espaço de dimensção 3). 
Começamos selecionando um dos vetores do conjunto $\{ |u_i\rangle \}$ e  definindo o vetor:

$$ |w_1\rangle = |u_1\rangle  $$

A partir disso, constroi-se sucessivamente os vetores seguintes, subtraindo as componentes de $|w_1\rangle$ em $|u_1\rangle$, conforme:

$$\begin{array}{c}
&&|w_2 \rangle =& |u_2\rangle - \frac{\langle w_1 | u_2 \rangle}{\langle w_1 | w_1 \rangle} |w_1\rangle \\ \\
&&|w_3\rangle =& |u_3\rangle - \frac{\langle w_1 | u_3 \rangle }{\langle w_1 | w_1 \rangle} |w_1\rangle - \frac{\langle w_2 | u_3 \rangle }{\langle w_2 | w_2 \rangle} |w_2\rangle \end{array}$$

Finalmente, para obter um conjunto ortonormal $\{ |k_i\rangle \}$, nós podemos normalizar cada um dos vetores $|w_i\rangle$:

$$|k_1\rangle = \frac{ |w_1 \rangle }{\langle w_1 | w_1 \rangle}; \,
|k_2\rangle = \frac{ |w_2 \rangle }{\langle w_2 | w_2 \rangle}; \,
|k_3\rangle = \frac{ |w_3 \rangle }{\langle w_3 | w_3 \rangle}$$


### Algebra de Dirac
Vejamos como expressar vetores inteiramente em termos do *kets* da base e manipular *bras* e *kets* de forma algébrica.

**Representando um _ket_ como _bra_**
Para obter o _bra_ correspondente a um dado _ket_, $| \phi\rangle = \alpha |\psi\rangle$, basta tomar o complexo conjugado:

$$\langle \phi|  = (\alpha |\psi\rangle)^* = \alpha \langle \psi| $$

podemos também escrever $|\alpha \psi\rangle = \alpha |\psi\rangle$. O mesmo pode ser feito para o _bra_, mas deve-se tomar um cuidado extra, neste caso: 

$$ \langle \alpha \psi| = \alpha^* \langle \psi|$$

!!! example
  Suponha que $\{ |u_1 \rangle, |u_2 \rangle, |u_3 \rangle \}$ seja uma base ortonormal. Nesta base temos:

  $$ | \psi \rangle = 2i |u_1 \rangle - 3|u_2 \rangle + i|u_3 \rangle $$

  $$ | \phi\rangle = 3 |u_1 \rangle - 2|u_2 \rangle + 4|u_3 \rangle $$

  > a) Ache $\langle\psi|$ e $\langle \phi|$. 
  >
  > b) Calcule o produto interno $\langle \phi|\psi\rangle$ e mostre que igual seu conjugado.
  >
  > c) Sendo $a = 3 + 3i$, calcule $|a\psi\rangle$.
  >
  > d) Ache as expressões de $|\psi+\phi\rangle$ e  $|\psi-\phi\rangle$
  >
  > e) Calcule $\langle a \psi |$ e compare com $a^* \langle \psi|$. 

