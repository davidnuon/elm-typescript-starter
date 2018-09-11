// WARNING: Do not manually modify this file. It was generated using:
// https://github.com/dillonkearns/elm-typescript-interop
// Type definitions for Elm ports

export namespace Elm {
  namespace Main {
    interface App {
      ports: {
        hello: {
          subscribe(callback: (data: string) => void): void;
        };
        reply: {
          send(data: number): void;
        };
      };
    }

    export function init(options: {
      node?: HTMLElement | null;
      flags: null;
    }): Elm.Main.App;
  }
}
