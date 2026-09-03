import type { ICommand } from './ICommand'

export class CommandHistory {
  private history: ICommand[] = []
  private position = -1

  record(command: ICommand): void {
    this.history = this.history.slice(0, this.position + 1)
    this.history.push(command)
    this.position++
    command.execute()
  }

  undo(): void {
    if (this.position >= 0) {
      this.history[this.position]!.undo()
      this.position--
    }
  }

  redo(): void {
    if (this.position < this.history.length - 1) {
      this.position++
      this.history[this.position]!.execute()
    }
  }

  canUndo(): boolean {
    return this.position >= 0
  }

  canRedo(): boolean {
    return this.position < this.history.length - 1
  }

  clear(): void {
    this.history = []
    this.position = -1
  }
}
