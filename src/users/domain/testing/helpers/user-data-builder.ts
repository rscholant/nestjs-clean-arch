import { faker } from '@faker-js/faker';
import { UserProps } from '../../entities/user.entity';

export type Props = {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
};

export function UserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.string.alphanumeric(),
    createdAt: props.createdAt ?? new Date(),
  };
}
