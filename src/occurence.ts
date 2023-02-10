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
