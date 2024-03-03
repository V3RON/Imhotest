import { Predicate } from '@imhotest/model';

export interface AddModeStrategy<T> {
  apply(first: Predicate<T>, second: Predicate<T>): Predicate<T>;
}

class AndAddMode<T> implements AddModeStrategy<T> {
  apply(first: Predicate<T>, second: Predicate<T>): Predicate<T> {
    return first.and(second);
  }
}

class OrAddMode<T> implements AddModeStrategy<T> {
  apply(first: Predicate<T>, second: Predicate<T>): Predicate<T> {
    return first.or(second);
  }
}

export class PredicateAggregator<T> extends Predicate<T> {
  private addMode: AddModeStrategy<T>;
  private predicate: Predicate<T>;

  constructor() {
    super();

    this.addMode = new AndAddMode<T>();
    this.predicate = Predicate.alwaysTrue<T>();
  }

  get(): Predicate<T> {
    return this.predicate;
  }

  test(item: T): boolean {
    return this.predicate.test(item);
  }

  add(other: Predicate<T>): PredicateAggregator<T> {
    this.predicate = this.addMode.apply(this.predicate, other);
    return this;
  }

  thatANDs(): PredicateAggregator<T> {
    this.addMode = new AndAddMode<T>();
    return this;
  }

  thatORs(): PredicateAggregator<T> {
    this.addMode = new OrAddMode<T>();
    return this;
  }
}
