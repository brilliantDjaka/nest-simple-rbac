import { Role } from 'src/roles/role.enum';

export class User {
  id: number;
  username: string;
  password: string;
  roles: Role[];
}
