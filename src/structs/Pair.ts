export namespace Struct {
  export interface Pair<K, V> {
    first: K
    second: V
  }

  export class ImmutablePair<K, V> implements Pair<K, V> {
    private readonly _first: K
    private readonly _second: V

    public constructor(first: K, second: V) {
      this._first = first
      this._second = second
    }

    public get second() {
      return this._second
    }

    public get first() {
      return this._first
    }

    public static of<K, V>(first: K, second: V) {
      return new ImmutablePair(first, second)
    }
  }

  export class MutablePair<K, V> implements Pair<K, V> {
    private _first: K
    private _second: V

    public constructor(first: K, second: V) {
      this._first = first
      this._second = second
    }

    get first() {
      return this._first
    }

    set first(value: K) {
      this._first = value
    }

    get second() {
      return this._second
    }

    set second(value: V) {
      this._second = value
    }

    public static of<K, V>(first: K, second: V) {
      return new MutablePair(first, second)
    }
  }
}

