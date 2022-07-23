export enum CharState {
  Default,
  Correct,
  Incorrect,
}

export class TypingChar {
  private _char: string
  private _state: CharState
  private colors: Array<string>

  constructor(char: string) {
    this._char = char
    this._state = CharState.Default
    this.colors = ['black', 'green', 'red']
  }
  public get char() {
    return this._char
  }
  public set char(char: string) {
    this._char = char
  }
  public get state() {
    return this._state
  }
  public set state(state: CharState) {
    this._state = state
  }
  public get color() {
    return this.colors[this.state]
  }
}
export class TypingText {
  finalText: string
  charList: Array<TypingChar>
  prevLength: number
  completed: boolean
  currentState: CharState
  currentText: string

  constructor(finalText: string) {
    this.finalText = finalText
    this.charList = finalText.split('').map((char) => new TypingChar(char))
    this.prevLength = 0
    this.completed = false
    this.currentState = CharState.Default
    this.currentText = ''
  }

  get text(): string {
    return this.finalText
  }
  get length(): number {
    return this.finalText.length
  }
  get lastCharState(): CharState {
    return this.charList[this.currentText.length - 1].state
  }
  eval(value: string) {
    if (this.completed || value.length > this.length) {
      return
    }
    if (value == this.finalText) {
      this.completed = true
      this.charList[this.prevLength].state = CharState.Correct
      this.prevLength = value.length
      return
    }
    if (this.prevLength > value.length) {
      for (
        let i =
          this.prevLength > this.length - 1 ? this.length - 1 : this.prevLength;
        i >= value.length;
        i--
      ) {
        this.charList[i].state = CharState.Default
      }
    } else {
      this.currentText = this.text.substring(0, value.length)
      if (value == this.currentText) {
        this.charList[this.prevLength].state = CharState.Correct
      } else {
        this.charList[this.prevLength].state = CharState.Incorrect
      }
    }
    this.prevLength = value.length
  }
}
