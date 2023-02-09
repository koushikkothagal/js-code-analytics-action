export class Occurence {
  constructor(
    public file: string,
    public line: string,
    public actionName = process.env.ACTION_NAME,
    public sha = process.env.GITHUB_SHA,
    public repository = process.env.GITHUB_REPOSITORY
  ) {
    this.file = file
    this.line = line
  }
  static from(fullLine: string): Occurence {
    const [file, ...lineTokens] = fullLine.split(':')
    return new Occurence(file.trim(), lineTokens.join().trim())
  }
}
