window.MathJax = {
    loader: {load: [['[tex]/physics'],['input/asciimath']]},
    //loader: {load: ['[tex]/physics']},
    tex: {packages: {'[+]': ['physics']}}
    //loader: { load: ['input/asciimath'] },
    //asciimath: { delimiters: [['`','`'],['¨','¨']] }
  };

  (function () {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_SVG'
    //           'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
  })();
