import { User } from './models/User';

const user2 = new User({ name: 'conor', age: 20 });
user2.save();
