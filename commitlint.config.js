// feat => Une nouvelle fonctionnalité
// build => Modification qui affecte le système de buildou les dépendances externes (exemple de scopes : gulp, yarn, npm)
// fix => Une correction de bug
// docs => Modification uniquement dans la documentation
// style => Modifications qui n’affectent pas la signification du code (espace blanc, formatage, point-virgule manquant, …)
// refactor => Un changement de code qui ne corrige pas un bug ou n’ajoute pas de fonctionnalité
// perf => Un changement de code qui améliore les performances
// test => Ajout de tests manquants ou correction des tests existants
// chore => Modifications apportées au processus de construction ou aux outils et librairies auxiliaires.
//          Autres changements qui ne modifient pas les fichiers src ou test.
// revert => Annule un commit précédent
// ci => Modifications apportées à nos fichiers de configuration et scripts CI (Intégrations continues)

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'build',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
      ],
    ],
  },
  helpUrl:
    'Le message du commit doit être précédé par un type sous la forme : "<type>: <message>" (Les types disponibles sont : feat / build / fix / docs / style / refactor / perf / test / chore / revert / ci)',
};