export class Occurence {
  constructor(
    public file: string,
    public line: string,
    public pattern: string,
    public type = 'text',
    public sha = process.env.GITHUB_SHA,
    public repository = process.env.GITHUB_REPOSITORY,
    public actor = process.env.GITHUB_ACTOR
  ) {
    this.file = file
    this.line = line
  }
  static from(fullLine: string, pattern: string): Occurence {
    const [file, ...lineTokens] = fullLine.split(':')
    return new Occurence(file.trim(), lineTokens.join().trim(), pattern)
  }
}

export class OccurenceSummary {
  constructor(
    public pattern: string,
    public count: number,
    public type = 'text',
    public sha = process.env.GITHUB_SHA,
    public repository = process.env.GITHUB_REPOSITORY,
    public actor = process.env.GITHUB_ACTOR,
    public timestamp = new Date().toISOString()
  ) {
    this.pattern = pattern
    this.count = count
  }

  static from(occurences: Occurence[]): OccurenceSummary {
    const pattern = occurences[0].pattern
    const count = occurences.length
    return new OccurenceSummary(pattern, count)
  }
}
