// Type definitions for Elm
// Project: https://github.com/dillonkearns/elm-typescript
// Definitions by: Dillon Kearns <https://github.com/dillonkearns>
export as namespace Elm


export interface App {
  ports: {
    hello: {
      subscribe(callback: (data: string) => void): void
    }
    reply: {
      send(data: number): void
    }
  }
}
    

export namespace Main {
  export function fullscreen(): App
  export function embed(node: HTMLElement | null): App
}