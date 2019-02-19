//https://mrzhang123.github.io/2017/10/18/git-commint-norm/
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      "feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"
    ]],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'scope-empty': [2, 'never']
  }
}

