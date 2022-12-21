import { User } from './user.entity';

export const UserProviders = [
  {
    provide: 'USER',
    useValue: User,
  },
];
