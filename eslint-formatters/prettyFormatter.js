// eslint-formatters/prettyFormatter.js
export default function prettyFormatter(results) {
  let output = '\n'

  for (const result of results) {
    for (const message of result.messages) {
      const { line, column, ruleId, message: msg, severity } = message

      // Dùng icon theo severity
      const icon = severity === 2 ? '❌' : '⚠️'

      output += `${icon} ${msg}\n`
      output += `   ↪  ${result.filePath}:${line}:${column} (${ruleId})\n\n`
    }
  }

  return output
}
