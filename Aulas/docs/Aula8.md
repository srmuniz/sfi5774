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
desnecessariamente a ``Física'' do problema. Essa estratégia é bastante
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

Um conjunto de vetores $\{\phi_n \}$ é dito linearmente independente (LI) se não há nenhuma combinação linear não-trivial que leve ao vetor nulo, isto é:  $\sum_n c_n \phi_n = 0 \rightarrow c_n = 0\, \forall\, n$. A dimensão $d$ do espaço vetorial é dada pelo número máximo de vetores LI desse espaço. Qualquer vetor do espaço pode ser escrito como uma combinação linear dos vetores da base desse espaço, formado por vetores LI do espaço.

## 5.3 Espaços de Hilbert: espaços vetoriais da MQ
Na mecânica quântica são usados espaços vetoriais com algumas propriedades e estruturas adicionais, para garantir certas propriedades físicas desejáveis da teoria. É comum, principalmente entre os físicos, chamar esses estados de estados de Hilbert. Os espaços de Hilbert podem ser finitos (com dimensão \(d\)) ou infinitos, por exemplo, quando os vetores são funções contínuas. 

Embora essa terminologia não seja muito precisa, dado que os
espaços vetoriais usados na MQ são apenas um tipo particular de espaço de Hilbert (neste contexto: os espaços cujos vetores são funções *quadrado-integráveis*, também chamados de espaços de Lebesgue do tipo \(L_2\)), nós usaremos essa "convenção", para simplificar a linguagem.

Uma das estruturas adicionais dos espaços de Hilbert é o produto interno que leva dois vetores do espaço num número complexo, segundo a definição:

$$\forall\, \phi, \psi \in \mathcal{H} \rightarrow (\phi,\psi) = \int \phi^*(x)\psi(x)\,dx$$

No caso de um espaço discreto de dimensão \(d\), o produto interno é definido como 

$$(w,v)=\sum_{i=1}^{d} w_i^* v_i$$

Note que como o produto interno resulta num escalar (número) complexo, ele não é um elemento do espaço de Hilbert. O produto interno tem as seguintes propriedades:
> $(\phi,\psi) =$ número complexo
> 
> $(\phi,\psi) = (\psi,\phi)^*$
> 
> $(\phi, c_1 \psi_1 + c_2 \psi_2 ) = c_1(\phi, \psi_1) + c_2(\phi,\psi_2 )$
> 
> $(c_1 \psi_1 + c_2 \psi_2, \phi ) = c_1^* (\psi_1, \phi) + c_2^*(\psi_2, \phi)$
> 
> $(\phi,\phi) \ge 0$, sendo nulo apenas quando $\phi=0$


Usando o produto interno, podemos definir também a norma (ou comprimento) do vetor, através do produto interno de um vetor por ele mesmo. 

$$||\phi|| = \int \phi^*(x)\phi(x)\,dx$$ 

$$||v|| = \sum_{i=1}^{d} v^*_i v_i$$ 

Observe que a norma é sempre um número real, tal que $||\phi|| \ge 0$ e $||v|| \ge 0$ 

!!! note "Normas dos vetores"

    $$||\phi|| = \int \phi^*(x)\phi(x)\,dx$$ 

    $$||v|| = \sum_{i=1}^{d} v^*_i v_i$$ 


No caso em que $\mathcal{H}$ é finito, com dimensão $d$, dado um vetor $\psi$ e uma base $\{ \phi_n \}$, temos que $\psi = \sum_n c_n \phi_n$ e onde $c_n=(\phi_n,\psi)$ e $(\phi_n,\phi_m)=\delta_{nm}$. 


