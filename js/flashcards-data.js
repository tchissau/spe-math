/* ================================================
   FICHES ANKI — Spé Maths Terminale
   8 à 10 fiches par chapitre, format {q, a}
   ================================================ */

const FLASHCARDS = {

  1: {
    title: "Récurrence, Suites",
    emoji: "🔁",
    color: "#1565C0",
    cards: [
      {
        q: "Quel est le principe du raisonnement par récurrence ?",
        a: "<strong>Initialisation :</strong> vérifier la propriété au rang initial (souvent n=0 ou n=1).<br><strong>Hérédité :</strong> supposer la propriété vraie au rang n, puis la démontrer au rang n+1.<br><strong>Conclusion :</strong> la propriété est vraie pour tout entier ≥ rang initial."
      },
      {
        q: "Comment montrer qu'une suite est croissante (4 méthodes) ?",
        a: "<strong>M1 :</strong> u<sub>n+1</sub> − u<sub>n</sub> ≥ 0<br><strong>M2 :</strong> u<sub>n+1</sub>/u<sub>n</sub> ≥ 1 (termes positifs)<br><strong>M3 :</strong> f croissante avec u<sub>n+1</sub> = f(u<sub>n</sub>)<br><strong>M4 :</strong> u<sub>n</sub> = f(n) avec f croissante"
      },
      {
        q: "Qu'est-ce qu'une suite majorée ? minorée ? bornée ?",
        a: "<strong>Majorée :</strong> ∃ M ∈ ℝ, ∀ n, u<sub>n</sub> ≤ M<br><strong>Minorée :</strong> ∃ m ∈ ℝ, ∀ n, u<sub>n</sub> ≥ m<br><strong>Bornée :</strong> majorée ET minorée"
      },
      {
        q: "Une suite croissante et majorée est-elle convergente ?",
        a: "Oui — c'est le <strong>théorème de la limite monotone</strong> : toute suite croissante et majorée (ou décroissante et minorée) converge."
      },
      {
        q: "Comment initialiser une récurrence sur u<sub>n</sub> ≥ 0 pour tout n ≥ 1 ?",
        a: "On vérifie d'abord que <strong>u<sub>1</sub> ≥ 0</strong> (rang initial n=1). Si la récurrence commence à n=0, on vérifie u<sub>0</sub> ≥ 0."
      },
      {
        q: "Qu'est-ce qu'une suite arithmétique ? Donnez son terme général.",
        a: "Suite telle que u<sub>n+1</sub> = u<sub>n</sub> + r (r = raison).<br>Terme général : <strong>u<sub>n</sub> = u<sub>0</sub> + n·r</strong><br>Somme : S = n × (u<sub>0</sub> + u<sub>n-1</sub>)/2"
      },
      {
        q: "Qu'est-ce qu'une suite géométrique ? Donnez son terme général.",
        a: "Suite telle que u<sub>n+1</sub> = q·u<sub>n</sub> (q = raison).<br>Terme général : <strong>u<sub>n</sub> = u<sub>0</sub> · q<sup>n</sup></strong><br>Somme : S = u<sub>0</sub> · (1 − q<sup>n</sup>)/(1 − q) si q ≠ 1"
      },
      {
        q: "Dans une récurrence, qu'est-ce que l'hypothèse de récurrence ?",
        a: "C'est la supposition (non prouvée à ce stade) que la propriété <strong>P(n) est vraie</strong>. On l'utilise pour démontrer P(n+1). On la note souvent <em>« supposons P(n) vraie pour un certain n ≥ n₀ »</em>."
      }
    ]
  },

  2: {
    title: "Limites de suites",
    emoji: "∞",
    color: "#00695C",
    cards: [
      {
        q: "Définition : suite qui converge vers ℓ.",
        a: "∀ ε > 0, ∃ N ∈ ℕ, ∀ n ≥ N, |u<sub>n</sub> − ℓ| < ε.<br>On note : <strong>lim u<sub>n</sub> = ℓ</strong>."
      },
      {
        q: "Quelles sont les formes indéterminées pour les suites ?",
        a: "∞ − ∞ &nbsp;·&nbsp; 0 × ∞ &nbsp;·&nbsp; ∞/∞ &nbsp;·&nbsp; 0/0 &nbsp;·&nbsp; 1<sup>∞</sup><br><em>Pour lever une FI : factoriser par le terme dominant.</em>"
      },
      {
        q: "Théorème des gendarmes (suites) : énoncé.",
        a: "Si a<sub>n</sub> ≤ u<sub>n</sub> ≤ b<sub>n</sub> et lim a<sub>n</sub> = lim b<sub>n</sub> = ℓ, alors <strong>lim u<sub>n</sub> = ℓ</strong>."
      },
      {
        q: "Limites de référence : que vaut lim n<sup>α</sup> / q<sup>n</sup> quand q > 1 ?",
        a: "<strong>0</strong> — les suites géométriques de raison q > 1 l'emportent sur toute puissance de n.<br>Hiérarchie : ln(n) ≪ n<sup>α</sup> ≪ q<sup>n</sup> ≪ n!"
      },
      {
        q: "Règle des opérations sur les limites : ∞ + ℓ = ?",
        a: "<strong>+∞</strong> (pour tout réel ℓ fini).<br>Attention : ∞ − ∞ est une <em>forme indéterminée</em>."
      },
      {
        q: "Comment calculer lim (n² + 3n) / (2n² − 1) ?",
        a: "On factorise par n² :<br>(n²(1 + 3/n)) / (n²(2 − 1/n²)) = (1 + 3/n)/(2 − 1/n²) → <strong>1/2</strong>"
      },
      {
        q: "Si (u<sub>n</sub>) est croissante et non majorée, que vaut sa limite ?",
        a: "<strong>+∞</strong> — d'après le théorème de la limite monotone."
      },
      {
        q: "Qu'est-ce qu'un algorithme de seuil ?",
        a: "On cherche le plus petit entier N tel que |u<sub>n</sub> − ℓ| < ε pour tout n ≥ N.<br>En Python : boucle <code>while</code> qui incrémente n jusqu'à satisfaire la condition."
      }
    ]
  },

  3: {
    title: "Vecteurs, droites et plans",
    emoji: "📐",
    color: "#6A1B9A",
    cards: [
      {
        q: "Quand deux droites de l'espace sont-elles coplanaires ?",
        a: "Deux droites sont coplanaires si elles sont <strong>sécantes</strong> ou <strong>parallèles</strong>. Sinon, elles sont <em>gauches</em>."
      },
      {
        q: "Représentation paramétrique d'une droite passant par A avec vecteur directeur u⃗.",
        a: "M ∈ d ⟺ AM⃗ = t·u⃗, t ∈ ℝ<br>En coordonnées : x = x<sub>A</sub>+ta, y = y<sub>A</sub>+tb, z = z<sub>A</sub>+tc<br>où u⃗ = (a, b, c)."
      },
      {
        q: "Quand un plan contient-il une droite ?",
        a: "Un plan P contient la droite d si et seulement si :<br>• il contient <strong>deux points</strong> de d, ou<br>• il contient <strong>un point</strong> de d et son vecteur directeur est dans P."
      },
      {
        q: "Positions relatives de deux plans dans l'espace.",
        a: "• <strong>Parallèles</strong> (confondus ou strictement) — vecteurs normaux colinéaires.<br>• <strong>Sécants</strong> — leur intersection est une droite."
      },
      {
        q: "Qu'est-ce qu'une base de l'espace ?",
        a: "Un triplet (u⃗, v⃗, w⃗) de vecteurs <strong>non coplanaires</strong> (ni colinéaires deux à deux).<br>Tout vecteur de l'espace s'écrit de façon unique : a·u⃗ + b·v⃗ + c·w⃗."
      },
      {
        q: "Comment déterminer si trois points A, B, C sont alignés ?",
        a: "A, B, C sont alignés ⟺ AB⃗ et AC⃗ sont <strong>colinéaires</strong> ⟺ AB⃗ = k·AC⃗ pour un réel k."
      },
      {
        q: "Comment montrer que quatre points sont coplanaires ?",
        a: "A, B, C, D coplanaires ⟺ AD⃗ est combinaison linéaire de AB⃗ et AC⃗ :<br>AD⃗ = s·AB⃗ + t·AC⃗ pour certains réels s, t."
      },
      {
        q: "Position relative d'une droite et d'un plan.",
        a: "• <strong>d ∥ P</strong> : vecteur directeur ⊥ normale au plan, et un point de d n'est pas dans P.<br>• <strong>d ⊂ P</strong> : vecteur directeur ⊥ normale et un point de d est dans P.<br>• <strong>d ∩ P = {M}</strong> : d non parallèle à P."
      }
    ]
  },

  4: {
    title: "Limites de fonctions",
    emoji: "→",
    color: "#BF360C",
    cards: [
      {
        q: "Définition : lim f(x) = +∞ quand x → +∞.",
        a: "∀ A > 0, ∃ X > 0, ∀ x > X, f(x) > A.<br><em>Intuition : f dépasse tout seuil, aussi grand soit-il.</em>"
      },
      {
        q: "Qu'est-ce qu'une asymptote verticale en x = a ?",
        a: "La droite x = a est AV ⟺ lim f(x) = ±∞ quand x → a (par la droite ou la gauche)."
      },
      {
        q: "Qu'est-ce qu'une asymptote horizontale en y = ℓ ?",
        a: "La droite y = ℓ est AH ⟺ lim f(x) = ℓ quand x → ±∞."
      },
      {
        q: "Qu'est-ce qu'une asymptote oblique y = ax + b ?",
        a: "lim [f(x) − (ax+b)] = 0 quand x → ±∞.<br>On trouve a = lim f(x)/x, puis b = lim [f(x) − ax]."
      },
      {
        q: "Théorème des gendarmes pour les fonctions.",
        a: "Si g(x) ≤ f(x) ≤ h(x) au voisinage de a, et lim g = lim h = ℓ, alors <strong>lim f = ℓ</strong>."
      },
      {
        q: "Règle : lim sin(x)/x quand x → 0.",
        a: "<strong>1</strong> (limite classique à connaître).<br>De même : lim (1 − cos x)/x = 0 et lim (1 − cos x)/x² = 1/2."
      },
      {
        q: "Comment lever la FI ∞/∞ pour une fraction rationnelle ?",
        a: "Factoriser le numérateur et le dénominateur par la <strong>plus haute puissance de x</strong> qui apparaît (souvent x<sup>n</sup>), puis simplifier."
      },
      {
        q: "Composition de limites : lim f(g(x)) ?",
        a: "Si lim g(x) = ℓ (x→a) et lim f(t) = L (t→ℓ), alors <strong>lim f(g(x)) = L</strong> (sous réserve de continuité)."
      }
    ]
  },

  5: {
    title: "Dérivation et convexité",
    emoji: "f′",
    color: "#01579B",
    cards: [
      {
        q: "Formule de dérivation d'une fonction composée f(u(x)).",
        a: "(f∘u)′(x) = <strong>u′(x) · f′(u(x))</strong><br>Exemples : (e<sup>u</sup>)′ = u′e<sup>u</sup>, (ln u)′ = u′/u, (u<sup>n</sup>)′ = nu′u<sup>n-1</sup>"
      },
      {
        q: "Définition : dérivée seconde f″.",
        a: "f″ = (f′)′ — la dérivée de la dérivée.<br>Elle mesure la <strong>variation de la pente</strong> de la courbe."
      },
      {
        q: "Définition : fonction convexe.",
        a: "f est convexe sur I ⟺ la courbe est <strong>au-dessus</strong> de chacune de ses tangentes, ou encore : f″(x) ≥ 0 sur I."
      },
      {
        q: "Définition : fonction concave.",
        a: "f est concave sur I ⟺ la courbe est <strong>au-dessous</strong> de chacune de ses tangentes, ou encore : f″(x) ≤ 0 sur I."
      },
      {
        q: "Définition et condition : point d'inflexion.",
        a: "Point où la courbe <strong>traverse</strong> sa tangente, c'est-à-dire où f″ change de signe.<br>Condition nécessaire : f″(a) = 0."
      },
      {
        q: "Inégalité de convexité.",
        a: "f convexe ⟹ pour tous a, b ∈ I et t ∈ [0;1] :<br>f(ta + (1−t)b) ≤ t·f(a) + (1−t)·f(b)<br><em>(la corde est au-dessus de la courbe)</em>"
      },
      {
        q: "Dérivée de (u/v).",
        a: "(u/v)′ = <strong>(u′v − uv′) / v²</strong>"
      },
      {
        q: "Si f′ > 0 sur I et f″ > 0 sur I, que peut-on dire de f ?",
        a: "f est <strong>croissante</strong> (f′ > 0) et sa pente augmente → la croissance <strong>s'accélère</strong>. La courbe est convexe."
      }
    ]
  },

  6: {
    title: "Continuité",
    emoji: "〰️",
    color: "#33691E",
    cards: [
      {
        q: "Définition : f continue en a.",
        a: "f est continue en a ⟺ <strong>lim f(x) = f(a)</strong> quand x → a.<br>Intuition : on peut tracer la courbe sans lever le crayon."
      },
      {
        q: "Théorème des valeurs intermédiaires (TVI) — énoncé.",
        a: "Si f est <strong>continue</strong> sur [a;b] et k est compris entre f(a) et f(b), alors il existe c ∈ [a;b] tel que <strong>f(c) = k</strong>."
      },
      {
        q: "Corollaire du TVI pour les fonctions strictement monotones.",
        a: "Si f est continue et <strong>strictement monotone</strong> sur [a;b], alors f(c) = k a une solution <strong>unique</strong> dans [a;b]."
      },
      {
        q: "Toute fonction dérivable est-elle continue ?",
        a: "<strong>Oui</strong> — dérivabilité implique continuité.<br>La réciproque est fausse : f(x) = |x| est continue en 0 mais pas dérivable."
      },
      {
        q: "Fonctions continues usuelles (liste).",
        a: "Polynômes, fractions rationnelles (sur leur domaine), exp, ln, sin, cos, racine carrée — toutes <strong>continues sur leur domaine de définition</strong>."
      },
      {
        q: "Suites définies par u<sub>n+1</sub> = f(u<sub>n</sub>) : lien avec les points fixes.",
        a: "Si (u<sub>n</sub>) converge vers ℓ et f est continue, alors f(ℓ) = ℓ.<br>ℓ est un <strong>point fixe</strong> de f : graphiquement, intersection de y=f(x) et y=x."
      },
      {
        q: "Comment appliquer le TVI pour montrer qu'une équation a une solution ?",
        a: "1. Montrer f continue sur [a;b].<br>2. Calculer f(a) et f(b) de signes opposés.<br>3. Conclure : ∃ c ∈ ]a;b[ tel que f(c) = 0."
      },
      {
        q: "Qu'est-ce que la méthode de dichotomie ?",
        a: "On encadre une racine dans [a;b] puis on coupe l'intervalle en deux à chaque étape en testant le signe de f au milieu m=(a+b)/2, jusqu'à obtenir la précision souhaitée."
      }
    ]
  },

  7: {
    title: "Orthogonalité dans l'espace",
    emoji: "⊥",
    color: "#E65100",
    cards: [
      {
        q: "Formule du produit scalaire en coordonnées.",
        a: "u⃗·v⃗ = <strong>x<sub>u</sub>x<sub>v</sub> + y<sub>u</sub>y<sub>v</sub> + z<sub>u</sub>z<sub>v</sub></strong><br>Aussi : u⃗·v⃗ = ‖u⃗‖·‖v⃗‖·cos θ"
      },
      {
        q: "Condition d'orthogonalité de deux vecteurs.",
        a: "u⃗ ⊥ v⃗ ⟺ <strong>u⃗·v⃗ = 0</strong>"
      },
      {
        q: "Définition : vecteur normal à un plan.",
        a: "n⃗ est normal au plan P ⟺ n⃗ est <strong>orthogonal à tout vecteur de P</strong>."
      },
      {
        q: "Équation cartésienne d'un plan de normale n⃗=(a,b,c) passant par A(x₀,y₀,z₀).",
        a: "<strong>a(x−x₀) + b(y−y₀) + c(z−z₀) = 0</strong><br>ou sous forme développée : ax + by + cz + d = 0"
      },
      {
        q: "Comment montrer qu'une droite est perpendiculaire à un plan ?",
        a: "La droite d de vecteur directeur u⃗ est ⊥ au plan P ⟺ <strong>u⃗ est normal à P</strong> ⟺ u⃗ ⊥ à tout vecteur directeur de P."
      },
      {
        q: "Distance d'un point M(x₀,y₀,z₀) au plan ax+by+cz+d=0.",
        a: "d = <strong>|ax₀+by₀+cz₀+d| / √(a²+b²+c²)</strong>"
      },
      {
        q: "Comment trouver la projection orthogonale H de M sur un plan P ?",
        a: "1. Écrire la droite MH de vecteur directeur n⃗ (normale à P).<br>2. Trouver l'intersection de cette droite avec P.<br>H est ce point d'intersection."
      },
      {
        q: "Produit scalaire : formule avec la norme.",
        a: "u⃗·v⃗ = ½(‖u⃗+v⃗‖² − ‖u⃗‖² − ‖v⃗‖²)<br>Aussi : <strong>‖u⃗‖² = u⃗·u⃗</strong>"
      }
    ]
  },

  8: {
    title: "Loi binomiale",
    emoji: "🎲",
    color: "#880E4F",
    cards: [
      {
        q: "Définition : épreuve de Bernoulli de paramètre p.",
        a: "Expérience à deux issues : <strong>succès (prob. p)</strong> et <strong>échec (prob. 1−p)</strong>.<br>X suit une loi de Bernoulli B(p) : X=1 (succès), X=0 (échec)."
      },
      {
        q: "Définition : loi binomiale B(n, p).",
        a: "X = nombre de succès dans n épreuves de Bernoulli <strong>indépendantes</strong> de paramètre p.<br>X suit B(n, p)."
      },
      {
        q: "Formule : P(X = k) pour X ∼ B(n, p).",
        a: "<strong>P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ</strong><br>pour k = 0, 1, …, n."
      },
      {
        q: "Espérance de X ∼ B(n, p).",
        a: "<strong>E(X) = np</strong>"
      },
      {
        q: "Variance et écart-type de X ∼ B(n, p).",
        a: "<strong>V(X) = np(1−p)</strong><br>σ(X) = √(np(1−p))"
      },
      {
        q: "Principe multiplicatif : combien d'issues pour une succession de k expériences ayant n₁, n₂, …, nₖ issues ?",
        a: "<strong>n₁ × n₂ × … × nₖ</strong>"
      },
      {
        q: "Formule des arrangements : nombre de k-uplets ordonnés parmi n éléments distincts.",
        a: "<strong>Aₙᵏ = n! / (n−k)!</strong> = n(n−1)…(n−k+1)"
      },
      {
        q: "Dans quelles conditions peut-on modéliser par B(n, p) ?",
        a: "• n épreuves <strong>identiques et indépendantes</strong>.<br>• Chaque épreuve a exactement 2 issues.<br>• p constant à chaque épreuve.<br>• X compte les succès."
      }
    ]
  },

  9: {
    title: "Fonction logarithme",
    emoji: "ln",
    color: "#006064",
    cards: [
      {
        q: "Propriétés algébriques du logarithme (à connaître).",
        a: "• ln(ab) = ln a + ln b<br>• ln(a/b) = ln a − ln b<br>• ln(aⁿ) = n·ln a<br>• ln(1) = 0 &nbsp; ln(e) = 1"
      },
      {
        q: "Dérivée de ln(x) et de ln(u(x)).",
        a: "(ln x)′ = <strong>1/x</strong><br>(ln u)′ = <strong>u′/u</strong>"
      },
      {
        q: "Limites classiques de ln.",
        a: "lim ln(x) = −∞ (x→0⁺)<br>lim ln(x) = +∞ (x→+∞)<br>lim x·ln(x) = 0 (x→0⁺) ← <em>croissances comparées</em><br>lim ln(x)/x = 0 (x→+∞)"
      },
      {
        q: "Résoudre ln(X) = a.",
        a: "X = <strong>eᵃ</strong><br>(ln et exp sont fonctions réciproques l'une de l'autre)"
      },
      {
        q: "Résoudre eˣ = a (a > 0).",
        a: "x = <strong>ln(a)</strong>"
      },
      {
        q: "ln est-il croissant ou décroissant ? Sur quel domaine ?",
        a: "<strong>Strictement croissant</strong> sur ]0 ; +∞[.<br>(ln x)′ = 1/x > 0 pour x > 0."
      },
      {
        q: "Croissances comparées : ln x et xᵅ (α > 0) quand x → +∞.",
        a: "lim ln(x) / xᵅ = <strong>0</strong><br>Les puissances l'emportent toujours sur le logarithme."
      },
      {
        q: "Primitive de 1/x et de u′/u.",
        a: "∫ 1/x dx = <strong>ln|x| + C</strong><br>∫ u′/u dx = <strong>ln|u| + C</strong>"
      }
    ]
  },

  10: {
    title: "Primitives et équations différentielles",
    emoji: "∫",
    color: "#263238",
    cards: [
      {
        q: "Primitive de xⁿ (n ≠ −1), de eˣ, de cos x, de sin x.",
        a: "xⁿ → <strong>xⁿ⁺¹/(n+1)</strong><br>eˣ → <strong>eˣ</strong><br>cos x → <strong>sin x</strong><br>sin x → <strong>−cos x</strong>"
      },
      {
        q: "Primitive de u′·uⁿ (n ≠ −1) et de u′·eᵘ.",
        a: "u′·uⁿ → <strong>uⁿ⁺¹/(n+1)</strong><br>u′·eᵘ → <strong>eᵘ</strong>"
      },
      {
        q: "Solutions de l'équation différentielle y′ = ay (a ∈ ℝ).",
        a: "<strong>y = C·eᵃˣ</strong>, C ∈ ℝ.<br>Avec condition initiale y(x₀) = y₀ : C = y₀·e^(−ax₀)."
      },
      {
        q: "Solutions de l'équation différentielle y′ = ay + b.",
        a: "Solution particulière : <strong>y* = −b/a</strong> (constante).<br>Solution générale : <strong>y = C·eᵃˣ − b/a</strong>."
      },
      {
        q: "Comment résoudre y′ = ay + f(x) ?",
        a: "1. Trouver une solution particulière y* (par inspection ou variation de la constante).<br>2. Solution générale : <strong>y = C·eᵃˣ + y*</strong>."
      },
      {
        q: "Primitive de 1/(ax+b) et de eᵃˣ.",
        a: "1/(ax+b) → <strong>ln|ax+b|/a</strong><br>eᵃˣ → <strong>eᵃˣ/a</strong>"
      },
      {
        q: "Qu'est-ce qu'une condition initiale dans une équation différentielle ?",
        a: "Une condition du type y(x₀) = y₀ qui permet de déterminer la constante C dans la solution générale, et d'obtenir une <strong>solution unique</strong>."
      },
      {
        q: "Primitive de sin(ax) et de cos(ax).",
        a: "sin(ax) → <strong>−cos(ax)/a</strong><br>cos(ax) → <strong>sin(ax)/a</strong>"
      }
    ]
  },

  11: {
    title: "Combinatoire et dénombrement",
    emoji: "🔢",
    color: "#311B92",
    cards: [
      {
        q: "Formule des combinaisons C(n, k).",
        a: "<strong>C(n,k) = n! / (k!(n−k)!)</strong><br>Se lit « k parmi n » ou « n choose k »."
      },
      {
        q: "Propriété de symétrie des coefficients binomiaux.",
        a: "<strong>C(n,k) = C(n, n−k)</strong><br>Choisir k éléments revient à choisir les n−k qu'on exclut."
      },
      {
        q: "Relation de Pascal.",
        a: "<strong>C(n,k) + C(n,k+1) = C(n+1, k+1)</strong><br>Permet de construire le triangle de Pascal."
      },
      {
        q: "Somme de tous les coefficients binomiaux d'ordre n.",
        a: "<strong>Σ C(n,k) = 2ⁿ</strong> pour k=0 à n.<br>Preuve : (1+1)ⁿ = 2ⁿ par le binôme de Newton."
      },
      {
        q: "Différence entre arrangement et combinaison.",
        a: "<strong>Arrangement</strong> : l'ordre compte → Aₙᵏ = n!/(n−k)!<br><strong>Combinaison</strong> : l'ordre ne compte pas → C(n,k) = Aₙᵏ/k!"
      },
      {
        q: "Nombre de permutations de n éléments.",
        a: "<strong>n!</strong><br>Exemple : 5 lettres distinctes → 5! = 120 anagrammes."
      },
      {
        q: "Principe additif : |A ∪ B| si A et B disjoints.",
        a: "|A ∪ B| = |A| + |B|<br>(pour des ensembles <strong>sans élément commun</strong>)"
      },
      {
        q: "Cas simples : C(n,0), C(n,1), C(n,2).",
        a: "C(n,0) = <strong>1</strong><br>C(n,1) = <strong>n</strong><br>C(n,2) = <strong>n(n−1)/2</strong>"
      }
    ]
  },

  12: {
    title: "Fonctions cosinus et sinus",
    emoji: "〽️",
    color: "#1A237E",
    cards: [
      {
        q: "Parité de cos et sin.",
        a: "<strong>cos est paire</strong> : cos(−x) = cos(x)<br><strong>sin est impaire</strong> : sin(−x) = −sin(x)"
      },
      {
        q: "Dérivées de cos et sin.",
        a: "(cos x)′ = <strong>−sin x</strong><br>(sin x)′ = <strong>cos x</strong>"
      },
      {
        q: "Dérivées de cos(u) et sin(u).",
        a: "(cos u)′ = <strong>−u′ sin u</strong><br>(sin u)′ = <strong>u′ cos u</strong>"
      },
      {
        q: "Identité pythagoricienne.",
        a: "<strong>cos²x + sin²x = 1</strong><br>pour tout x ∈ ℝ."
      },
      {
        q: "Formules de l'angle double.",
        a: "cos(2x) = cos²x − sin²x = <strong>2cos²x − 1</strong> = 1 − 2sin²x<br>sin(2x) = <strong>2 sin x cos x</strong>"
      },
      {
        q: "Formules de linéarisation.",
        a: "cos²x = <strong>(1+cos 2x)/2</strong><br>sin²x = <strong>(1−cos 2x)/2</strong>"
      },
      {
        q: "Résoudre cos(x) = cos(a).",
        a: "<strong>x = a + 2kπ ou x = −a + 2kπ</strong>, k ∈ ℤ"
      },
      {
        q: "Résoudre sin(x) = sin(a).",
        a: "<strong>x = a + 2kπ ou x = π−a + 2kπ</strong>, k ∈ ℤ"
      },
      {
        q: "Primitives de cos et sin.",
        a: "∫ cos x dx = <strong>sin x + C</strong><br>∫ sin x dx = <strong>−cos x + C</strong>"
      }
    ]
  },

  13: {
    title: "Calcul intégral",
    emoji: "∫",
    color: "#1A237E",
    cards: [
      {
        q: "Théorème fondamental du calcul intégral.",
        a: "Si F est une primitive de f sur [a;b], alors :<br><strong>∫ₐᵇ f(x) dx = F(b) − F(a) = [F(x)]ₐᵇ</strong>"
      },
      {
        q: "Linéarité de l'intégrale.",
        a: "∫ₐᵇ (αf + βg) = α∫ₐᵇ f + β∫ₐᵇ g<br>∫ₐᵇ f = −∫ᵦₐ f<br>∫ₐᵇ f = ∫ₐᶜ f + ∫ᶜᵦ f (relation de Chasles)"
      },
      {
        q: "Signe de l'intégrale : si f ≥ 0 sur [a;b].",
        a: "<strong>∫ₐᵇ f(x) dx ≥ 0</strong><br>Conséquence : si f ≤ g sur [a;b] alors ∫f ≤ ∫g."
      },
      {
        q: "Aire entre deux courbes f et g (f ≥ g) sur [a;b].",
        a: "<strong>A = ∫ₐᵇ [f(x) − g(x)] dx</strong><br>Si f et g se croisent, découper en sous-intervalles."
      },
      {
        q: "Valeur moyenne d'une fonction sur [a;b].",
        a: "<strong>m = 1/(b−a) · ∫ₐᵇ f(x) dx</strong>"
      },
      {
        q: "Formule d'intégration par parties (IPP).",
        a: "∫ₐᵇ u·v′ dx = <strong>[uv]ₐᵇ − ∫ₐᵇ u′·v dx</strong><br>Mémo : ∫uv′ = [uv] − ∫u′v"
      },
      {
        q: "Comment choisir u et v′ dans une IPP ?",
        a: "Choisir v′ facile à intégrer, u facile à dériver.<br>Ordre conseillé de u : <em>Logarithme, Inverse, Puissance, Exponentielle, Trig</em> (LIPET)"
      },
      {
        q: "∫ₐᵇ f(x) dx représente quoi géométriquement si f ≥ 0 ?",
        a: "L'<strong>aire</strong> (en unités d'aire) du domaine délimité par la courbe de f, l'axe des abscisses et les droites x=a et x=b."
      }
    ]
  },

  14: {
    title: "Loi des grands nombres",
    emoji: "📊",
    color: "#263238",
    cards: [
      {
        q: "Inégalité de Markov : énoncé.",
        a: "Si X ≥ 0 et E(X) existe, alors pour tout a > 0 :<br><strong>P(X ≥ a) ≤ E(X)/a</strong>"
      },
      {
        q: "Inégalité de Bienaymé-Tchebychev : énoncé.",
        a: "Pour tout ε > 0 :<br><strong>P(|X − E(X)| ≥ ε) ≤ V(X)/ε²</strong>"
      },
      {
        q: "Inégalité de concentration pour la moyenne empirique X̄ₙ.",
        a: "P(|X̄ₙ − μ| ≥ ε) ≤ <strong>V(X)/(nε²)</strong><br>La moyenne empirique se concentre autour de μ quand n→∞."
      },
      {
        q: "Loi des grands nombres : énoncé qualitatif.",
        a: "Quand n → ∞, la fréquence relative d'un événement <strong>converge en probabilité</strong> vers la probabilité théorique p de cet événement."
      },
      {
        q: "Pour X ∼ B(n, p), que vaut E(X) et V(X) ?",
        a: "E(X) = <strong>np</strong><br>V(X) = <strong>np(1−p)</strong>"
      },
      {
        q: "Qu'est-ce que la variance d'une variable aléatoire ?",
        a: "V(X) = E((X − E(X))²) = <strong>E(X²) − (E(X))²</strong><br>Mesure la dispersion autour de la moyenne."
      },
      {
        q: "Comment l'inégalité de Bienaymé-Tchebychev donne-t-elle un intervalle de fluctuation ?",
        a: "P(|X̄ₙ − p| ≥ ε) ≤ p(1−p)/(nε²) ≤ 1/(4nε²).<br>Pour avoir P ≤ α, prendre ε = 1/(2√(nα))."
      },
      {
        q: "Majoration de p(1−p) pour p ∈ [0;1].",
        a: "p(1−p) ≤ <strong>1/4</strong> (maximum atteint en p = 1/2).<br>Utile pour obtenir des bornes universelles."
      }
    ]
  },

  15: {
    title: "Python — Programmer",
    emoji: "🐍",
    color: "#1B5E20",
    cards: [
      {
        q: "Syntaxe Python : boucle for de 1 à n inclus.",
        a: "<code>for i in range(1, n+1):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>...</code><br><em>range(a, b) génère a, a+1, …, b−1</em>"
      },
      {
        q: "Syntaxe Python : boucle while.",
        a: "<code>while condition:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>...</code><br>La boucle s'arrête quand la condition devient False."
      },
      {
        q: "Syntaxe Python : définir une fonction.",
        a: "<code>def ma_fonction(x, y):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>...</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>return résultat</code>"
      },
      {
        q: "Comment créer une liste par compréhension en Python ?",
        a: "<code>[f(x) for x in range(n)]</code><br><code>[x for x in lst if condition]</code>"
      },
      {
        q: "Opérateurs Python : division entière, modulo, puissance.",
        a: "Division entière : <code>//</code><br>Modulo (reste) : <code>%</code><br>Puissance : <code>**</code><br>Ex : 17//5 = 3, 17%5 = 2, 2**10 = 1024"
      },
      {
        q: "Comment importer les fonctions mathématiques en Python ?",
        a: "<code>import math</code><br>Puis : <code>math.sqrt(x)</code>, <code>math.pi</code>, <code>math.sin(x)</code>, <code>math.log(x)</code>…"
      },
      {
        q: "Algorithme de seuil en Python : trouver n tel que u_n < 0.01.",
        a: "<code>u, n = 1, 0</code><br><code>while u >= 0.01:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>u = u * 0.9  # ou autre formule</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>n += 1</code><br><code>print(n)</code>"
      },
      {
        q: "Comment calculer la moyenne d'une liste en Python ?",
        a: "<code>lst = [12, 15, 8, 17, 11]</code><br><code>moyenne = sum(lst) / len(lst)</code>"
      },
      {
        q: "Méthode de dichotomie : principe en Python.",
        a: "<code>while (b - a) > epsilon:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>m = (a + b) / 2</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>if f(a)*f(m) <= 0: b = m</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>else: a = m</code>"
      },
      {
        q: "Condition if / elif / else en Python.",
        a: "<code>if x > 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>print('positif')</code><br><code>elif x == 0:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>print('nul')</code><br><code>else:</code><br>&nbsp;&nbsp;&nbsp;&nbsp;<code>print('négatif')</code>"
      }
    ]
  }

};
