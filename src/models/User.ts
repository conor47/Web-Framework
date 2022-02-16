interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private data: UserProps;
  private events: { [key: string]: Callback[] } = {};

  constructor(data: UserProps) {
    this.data = data;
  }

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    for (const handler of handlers) {
      handler();
    }
  }
}
