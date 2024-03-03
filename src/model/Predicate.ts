export abstract class Predicate<T> {
  abstract test(arg: T): boolean;

  and(other: Predicate<T>): Predicate<T> {
    return Predicate.and(this, other);
  }

  or(other: Predicate<T>): Predicate<T> {
    return Predicate.or(this, other);
  }

  not(): Predicate<T> {
    return Predicate.not(this);
  }

  static not<T>(first: Predicate<T>): Predicate<T> {
    return new (class extends Predicate<T> {
      test(arg: T): boolean {
        return !first.test(arg);
      }
    })();
  }

  static and<T>(first: Predicate<T>, second: Predicate<T>): Predicate<T> {
    return new (class extends Predicate<T> {
      test(arg: T): boolean {
        return first.test(arg) && second.test(arg);
      }
    })();
  }

  static or<T>(first: Predicate<T>, second: Predicate<T>): Predicate<T> {
    return new (class extends Predicate<T> {
      test(arg: T): boolean {
        return first.test(arg) || second.test(arg);
      }
    })();
  }

  static alwaysTrue<T>(): Predicate<T> {
    return new (class extends Predicate<T> {
      test(): boolean {
        return true;
      }
    })();
  }

  static alwaysFalse<T>(): Predicate<T> {
    return new (class extends Predicate<T> {
      test(): boolean {
        return false;
      }
    })();
  }
}
