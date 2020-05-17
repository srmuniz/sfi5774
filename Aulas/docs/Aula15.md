$\newcommand{\bra}[1]{\left\langle #1 \right|}$
$\newcommand{\ket}[1]{\left| #1 \right\rangle}$
$\newcommand{\braket}[3]{\left\langle #1 \middle| #2 \middle| #3 \right\rangle}$

# 6. Fundamentos da Mecânica Quântica

## 6.1 Introdução

Neste bloco conectamos todos os conceitos matemáticos estudados nas últimas semanas, na construção de uma formulação concisa da teoria quântica. Isso é feito de forma axiomática, através de postulados, motivados por razões físicas. Esses postulados conectam as observações empíricas da natureza com os objetos matemáticos usados para descrevê-la, fornecendo uma prescrição matemática de como usar a teoria para predizer e analisar os resultados de experimentos.

Na literatura da área, os postulados são apresentados de várias formas, dependendo do contexto e da área de aplicação. Podem também ser expressos em termos de **vetores de estado** ou usando o **operador densidade**. Discutiremos aqui ambas as formas, fazendo ainda referências à descrição dos vetores de estado em em termos de **funções de ondas**, para que percebam as conexões e relações entre essas diferentes representações do sistema físico.

Essas diferentes formas, em geral, são totalmente equivalentes e muitas vezes a escolha é uma questão de preferência, ou familiaridade com o formalismo. Há, porém, situações em que uma ou outra pode ser mais vantajosa e conveniente. Discutiremos, por exemplo, casos onde a descrição com o operador densidade é conveniente para tratar sistemas quânticos abertos, e introduziremos uma forma alternativa de descrever a dinâmica quântica. 

Para concentrar-se nas ideias principais, toda a discussão aqui será para sistemas isolados (sistemas fechados) de uma única partícula quântica. Estudaremos as extensões necessárias mais adiante, ao falar de sistema de partículas e fazer uma breve introdução às ideias de sistemas quânticos abertos.  

## 6.2 Postulados

Por razões didáticas, os postulados serão primeiro apresentados em termos de vetores de estado, aproveitando a linguagem introduzida nas últimas aulas.

Para focar a atenção nos pontos principais, apresento-os primeiro de forma compacta e resumida. Concentre-se na ideia e objetivo principal de _cada um deles_. 

!!! note "**Postulados resumidos da mecânica quântica**"
    - **\#1:**
    _O ^^estado de um sistema^^ físico é descrito pelo **vetor de estado** $\ket{\psi}$ do seu espaço de Hilbert._

    - **\#2:**
    _Medidas de ^^observáveis físicos^^ são representas por **operadores Hermitianos**._

    - **\#3:**
    _Os possíveis ^^resultados de uma medida^^ são **autovalores do operador** correspondente._
    
    - **\#4:** 
    _As ^^probabilidades^^ de se observar os resultados são dados pelo **regra de Born**._

    - **\#5:** 
    _O ^^estado após uma medida^^ é um vetor do **subespaço dos autovetores** correspondente ao resultado medido._

    - **\#6:** _A ^^evolução temporal^^ do vetor de estado é governada pela **equação de Schrödinger**._


Depois discutiremos com mais detalhe suas implicações, nuances e extensões (para descrições alternativas) nas seções seguintes. Veremos também vários exemplos nas aulas.

<hr>

### ^^Postulado 1^^: estados de um sistema físico

!!! note ""
    - **Vetores de estado**

        _O estado num instante de tempo $t_o$ é descrito por um vetor $\ket{\psi(t_o)}$ pertencente a um espaço de Hilbert complexo, $\mathcal{H}$._ 

        Se o conjunto $\{ |u_1\rangle, |u_2\rangle, \dots,|u_n\rangle \}$ forma uma base de um espaço finito $\mathcal{H}$, o estado $\ket{\psi}$ pode ser escrito como:

        $$ |\psi\rangle = c_1 |u_1\rangle + c_2 |u_2\rangle + \dots + c_n |u_n\rangle = \sum_{i=1}^n c_i |u_i\rangle$$

        onde os **coeficientes da expansão** são números complexos dados por

        $$ c_i = \langle u_i | \psi \rangle,$$

        sempre satisfazendo a condição de normalização $\langle \psi | \psi \rangle = 1$, para ser consistente com a inerpretação de Born. A condição de normalização exige que 

        $$
        \langle \psi | \psi \rangle = |c_1|^2 + |c_2|^2 + \dots + |c_n|^2 = \sum_i |c_i|^2  = 1.
        $$
<hr>


### ^^Postulado 2^^: observáveis físicos 

!!! note ""
    - **Observáveis são operadores Hermitianos**

        _Quantidades físicas mensuráveis, como energia e momento linear são chamados de **observáveis físicos**. Matematicamente, esses observáveis são descritos por operadores Hermitianos que atuam em vetores do espaço de Hilbert._ 
        
        Os **autovetores desses operadores formam uma base ortonormal** do espaço de estados do sistema.

        Dada uma base $\{ |u_1\rangle, |u_2\rangle, \dots,|u_n\rangle \}$, _qualquer_ operador pode ser escrito na forma de **produtos externos** dessa base, segundo:

        $$
        \hat{A} = \sum_{i,j=1}^n A_{ij} \ket{u_i} \bra{u_j},
        $$ 
        
        onde 

        $$
        A_{ij} = \bra{u_i} A \ket{u_j},
        $$ 
        
        para que o operador seja Hermitiano, devemos ter $A_{ij}=A_{ji}^*.$


#### ==Decomposição Espectral==

Um [_operador normal_](../Aulas_S5-S6/#operadores-normais) sempre pode ser escrito em termos de operadores de projeção formados pelos seus ^^próprios autovetores^^. Isso é chamado de _decomposição espectral_.

!!! info ""
    Suponha um operador $\hat{A}$ com autovalores $\lambda_i$ e autovetores $\ket{a_i}$:

    $$
    \hat{A} \ket{a_i} = \lambda_i \ket{a_i}
    $$

    A sua decomposição espectral é a representação na forma diagonal, em termos de seus autovalores e autovetores, conforme:

    $$
    \hat{A} = \sum_{i=1}^n \lambda_i \ket{a_i} \bra{a_i}.
    $$
<hr>


### ^^Postulado 3^^: resultados de medidas físicas

!!! note ""
    - **Resultados de uma medida**

        _Os possíveis resultados de uma medida de um observável físico são autovalores de seus operador correspondente._ 

        De acordo com este postulado, esses são os **únicos** valores possíveis de serem medidos.

A seguir discutimos como calcular as probabilidades de cada uma dessas medidas e como fica o estado do sistema após o processo de medida. O [processo de medida](https://en.wikipedia.org/wiki/Measurement_in_quantum_mechanics) é um dos pontos críticos na teoria quântica, havendo debates até hoje quando a sua completa interpretação.

Neste primeiro contato com o conteúdo é preferível concentrar a atenção no tipo mais comum e conhecido, denominadas de **medidas projetivas**, devido ao tratamento introduzido por [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann)[^1], e que são expressas em termos de operadores de projeção. A discussão abaixo deixará mais claro a razão do nome.

Medidas projetivas não não são as únicas formas de medidas na mecânica quântica, mas são as mais simples de entender e, para fixar as ideias, nos concentraremos nelas aqui.
<hr>


### ^^Postulado 4^^: interpretação probabilística

!!! note ""
    - **Probabilidades dos resultados**

        _A probabilidade de medir um resultado $\lambda_i$, (autovalor) associado a um autovetor $\ket{a_i}$ de observável $\hat{A}$, é dada pela regra de Born._
        
        Se o estado $|\psi\rangle$ for expandido na base dos autovetores $\ket{a_i}$ do operador $\hat{A}$

        $$
        |\psi\rangle = \alpha_1 |a_1\rangle + \alpha_2 |a_2\rangle + \dots + \alpha_n |a_n \rangle = \sum_{i=1}^n \alpha_i |a_i\rangle \\
        \text{A probabilidade de obter o resultado } \lambda_i \,: \quad 
        \mathcal{P}_{ \lambda_i } = |\bra{a_i}\psi\rangle|^2 = |\alpha_i|^2.
        $$

        Lembrando-se que o produto interno é um _número complexo_, cujo produto é comutativo, podemos reescrever

        $$
        |\bra{a_i}\psi\rangle|^2 = \bra{a_i}\psi\rangle (\bra{a_i}\psi\rangle)^* =
        \bra{a_i}\psi\rangle \bra{\psi} a_i \rangle \\
        \bra{a_i}\psi\rangle \bra{\psi} a_i \rangle = \bra{\psi} a_i \rangle \bra{a_i}\psi\rangle
        = \braket{\psi}{\hat{P}_i}{\psi}.
        $$

        onde  $\hat{P}_i$ é o operador projetor $\hat{P}_i=\ket{a_i}\bra{a_i}.$

#### ==Degenerescência==

Suponha que o operador $\hat{A}$ tem autovalores degenerados, $\lambda_m$, correspondendo ao autovetores $\{ \ket{a_m^{1}},\ket{a_m^{2}},...,\ket{a_m^{g_m}} \}$, onde

$$
\hat{A} \ket{a_m^{k}} = \lambda_m \ket{a_m^{k}}, \quad k = 1,2,\dots, g_m.
$$

O conjunto $\{ \ket{a_m^{k}} \}$ constitui um [subespaço](../Aulas_S7/#59-subespacos-e-projetores) $\mathcal{M}$ do espaço de Hilbert $\mathcal{H}$.

No caso de degenerescência, a probabilidade de obter o resultado $\lambda_m$ é encontrado somando sobre os produtos internos de todos os autovetores do subespaço $\mathcal{M}$.

$$
\mathcal{P}_m = \sum_{k=1}^{g_m} \left| \bra{a_m^{k}} \psi \rangle \right|^2.
$$

<hr>


### ^^Postulado 5^^: estado após uma medida

Considerando apenas [medidas projetivas](https://en.wikipedia.org/wiki/Projection-valued_measure), vamos dividir esta exposição em duas partes: _(i) sem_ e _(ii) com_ degenerescência.

!!! note ""
    - **Estado ^^_posterior_^^ em medidas projetivas**

        _(i) **Caso não degenerado:** se o resultado for um ^^autovalor não degenerado^^ $\lambda_i$, do operador $\hat{A}$ observável, teremos que **imediatamente** ^^após a medida^^ o estado $\ket{ \psi_i }$ do sistema é dado pelo vetor projetado no autovetor correspondente ao autovalor medido._

        Se o estado antes da medida for dado por

        $$
        |\psi\rangle = \alpha_1 |a_1\rangle + \alpha_2 |a_2\rangle + \dots + \alpha_n |a_n \rangle 
        $$

        onde $\{ \ket{a_i} \}$ é uma base ortonormal formada pelos autovetores de $\hat{A}$, tal que $\hat{A} \ket{a_i} = \lambda_i \ket{a_i}$. 
        
        Supondo que a medida resultou no valor $\lambda_i$, o estado _imediatamente_ após a medida é dado por:

        $$
        \ket{\psi} \rightarrow \quad \ket{\psi_i} = 
        \frac{1}{\sqrt{\braket{\psi}{ P_i }{\psi}}} \, \hat{P}_i \ket{\psi}
        $$

        onde  $\hat{P}_i$ é o projetor $\hat{P}_i=\ket{a_i}\bra{a_i}.$
        <hr>

        _(ii) **Caso degenerado:**_ se o resultado for um ^^autovalor degenerado^^ $\lambda_m$, do operador $\hat{A}$, teremos que **imediatamente** ^^após a medida^^ o estado $\ket{ \psi_m }$ do sistema é o estado projetado no subespaço $\mathcal{M}$ dos autovetores correspondentes ao autovalor medido.

        Se o estado $\ket{\psi}$ antes da medida for representado na base dos autovalores do observável, onde $\{ \ket{a_m^{k}} \}$ é um conjunto formado pelos autovetores correspondes ao autovalor $\lambda_m$, tal que $\hat{A} \ket{a_m^{k}} = \lambda_k \ket{a_m^{k}}$. 
        
        Supondo que a medida resultou no valor $\lambda_i$, o estado _imediatamente_ após a medida é dado por:

        $$
        \ket{\psi} \rightarrow \quad \ket{\psi_m} = 
        \frac{1}{\sqrt{\braket{\psi}{ P_m }{\psi}}} \, \hat{P}_m \ket{\psi}
        $$

        onde  $\hat{P}_m$ é o [projetor no subespaço](/Aulas_S7/#59-subespacos-e-projetores) $\mathcal{M}$
        
        $$\hat{P}_m= \sum_{k=1}^{g_m} \ket{a_m^{k}} \bra{a_m^{k}}.$$

Note que no caso degenerado, após se observar o resultado da medida $\lambda_m$, com degenerescência $g_m$, tudo que podemos dizer é que o estado posterior à medida é uma superposição (combinação linear) dos autovetores correspondentes ao autovalor $\lambda_m$.  
<hr>


### ^^Postulado 6^^: evolução dinâmica do sistema

!!! note ""
    - **Dinâmica de um sistema quântico**

        - _**^^Schrödinger Picture^^:**_
        
        _A evolução temporal de um sistema quântico **fechado** é governada pela equação de Schrödinger._

        Assim, sendo $\ket{\psi(t_o)}$ o estado inicial, no instante de tempo $t_o$, o estado do sistema num instante $t$ posterior, $\ket{\psi(t)}$, pode ser derterminado a partir da equação 

        $$
        i \hbar \frac{\partial}{\partial t} \ket{\psi(t)} = \hat{H} \ket{\psi(t_o)} 
        $$

        onde $\hat{H}$ é o operador Hamiltoniano. Para um sistema isolado com Hamiltoniano independente do tempo, podemos integrar a equação anterrior, para obter

        $$
        \ket{\psi(t)} = \exp \left( - \frac{i}{\hbar} \hat{H} (t - t_o) \right) \ket{\psi(t_o)}
        $$
        
        onde temos a [exponencial do operador Hamiltoniano](../Aulas_S7/#510-funcoes-de-operadores), como visto numa aula anterior.

        O termo exponencial pode ser entendido como um **operador de evolução temporal**, unitário, denotado $\hat{U}$ 

        $$
        \hat{U}(t,t_o) = \exp \left( - \frac{i}{\hbar} \hat{H} (t - t_o) \right)
        $$ 

        que evolui (_propaga no tempo_) o vetor de estado $\ket{\psi(t_o)} \rightarrow \ket{\psi(t)}$, tal que

        $$
        \ket{\psi(t)} = \hat{U}(t,t_o) \ket{\psi(t_o)}.
        $$

        <hr>

        - _**^^Heisenberg Picture^^:**_
        
        Na representação de Schrödinger, o operador de evolução temporal evolui o vetor de estado do sistema. Uma representação alternativa, é a representação de Heisenberg, onde os vetores de estados são transformados por operadores que evoluem no tempo. Essas duas representações são completamente equivalentes, pois as predições da mecânica quântica são determinadas por produtos internos

        $$
        \braket{\psi(t)}{\hat{A}}{\psi(t)} = \braket{\psi(t_o)}{\hat{U}^{\dagger}\hat{A}\,\hat{U}}{\psi(t_o)} 
        $$

        Pode-se descrever a evolução temporal do sistema em termos de um operador

        $$
        \hat{A}(t) = \hat{U}^{\dagger}\hat{A}(t_o)\,\hat{U}
        $$

        Neste caso, a dinâmica do sistema é dada pela [equação de Heisenberg](https://en.wikipedia.org/wiki/Heisenberg_picture)

        $$
        \frac{d}{dt} \langle \hat{A} \rangle = \frac{1}{i \hbar} [\hat{A},\hat{H}] + \left< \frac{\partial \hat{A}}{\partial t} \right>
        $$

        onde $[\hat{A},\hat{H}]$ é o comutador do observável $\hat{A}$ e o Hamiltoniano $\hat{H}$.




        
<hr>


<hr> 
<hr>

Lembrando sempre que ainda estamos falando de um sistema físico de uma partícula quântica isolada.

### Postulados & função de onda

Quando apropriado, e não houver ambiguidade, a coordenada de posição será representada por $r$ ou $\textbf{r}$ (ou ainda $\vec{r}$), ao invés da forma unidimensional simplificada, $x$, que temos usado até agora, por simplicidade. O número de dimensões, evidentemente, irá depender do sistema físico e do interesse particular num dado problema. 

!!! quote ""
    **Notação**: Sem perda de generalidade, o _diferencial_ $d\textbf{r}$, ou $dr$, será uma abreviação do **_diferencial de volume_** apropriado às dimensões do espaço considerado. Assim, $d\textbf{r}$ poderá representar igualmente: ($dx$), ou ($dx\,dy\,dz$) ou ($dr\,d\theta\,d\phi$), ou ainda ($dx_1\,dx_2\dots dx_n$), dependendo do contexto.


...


!!! note "**Postulados da mecânica quântica**"
    - **^^Postulado 1^^:** Vetores de estado

        _O estado de um sistema físico é descrito pelo **vetor de estado** $\ket{\psi}$ do seu espaço de Hilbert._ 
        <hr>

    - **^^Postulado 2^^:** Observáveis físicos
    
        _Medidas físicas são representas por **operadores Hermitianos** que atuam nos vetores de estado._
        <hr>

    - **^^Postulado 3^^:** Resultado de medidas

        _Os possíveis resultados de uma medida são **autovalores do operador** correspondente._
        <hr>  
    
    - **^^Postulado 4^^:** Probabilidades dos resultados

        _As probabilidades de se observar os resultados são dados pelo **regra de Born**._
        <hr> 

    - **^^Postulado 5^^:** Estado posterior

        _O estado de um sistema após uma medida estará no **subespaço dos autovetores** correspondentes._
        <hr>

    - **^^Postulado 6^^:** Evolução dinâmica

        _A evolução temporal do estado é governada pela **equação de Schrödinger**._

...

<hr>
[^1]:
    _Mathematical Foundations of Quantum Mechanics_, John von Neumann (1932) [[texto original em Alemão](https://gdz.sub.uni-goettingen.de/id/PPN379400774)]. 
 
    New Edition. Translated by Robert T. Beyer. Princeton University Press (2018) [[ISBN: 9781400889921](https://press.princeton.edu/books/hardcover/9780691178561/mathematical-foundations-of-quantum-mechanics)].

