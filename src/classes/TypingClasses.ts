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
  inputText: string
  charList: Array<TypingChar>
  prevLength: number
  completed: boolean

  constructor(inputText: string) {
    this.inputText = inputText
    this.charList = inputText.split('').map((char) => new TypingChar(char))
    this.prevLength = 0
    this.completed = false
  }

  toString(): string {
    return this.inputText
  }
  get length(): number {
    return this.inputText.length
  }

  eval(value: string) {
    if (this.completed || value.length > this.length) {
      return
    }
    if (value == this.inputText) {
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
      this.prevLength = value.length
    } else {
      const subStr = this.toString().substring(0, value.length)
      if (value == subStr) {
        this.charList[this.prevLength].state = CharState.Correct
      } else {
        this.charList[this.prevLength].state = CharState.Incorrect
      }
      this.prevLength = value.length
    }
  }
}
