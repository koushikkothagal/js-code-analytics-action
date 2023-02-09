export class Occurence {
  constructor(public file: string, public line: string) {
    this.file = file
    this.line = line
  }
  static from(fullLine: string): Occurence {
    const [file, line] = fullLine.split(':')
    return new Occurence(file.trim(), line.trim())
  }
}
