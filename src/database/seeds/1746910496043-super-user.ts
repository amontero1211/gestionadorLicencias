import { hash } from 'bcrypt';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../entities/user.entity';

export class SuperUser1746910496043 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const email = process.env.SUPERUSER_EMAIL || 'admin@email.com';
    const password = process.env.SUPERUSER_PASSWORD || 'password';
    const hashedPassword = await hash(password, 10);
    await queryRunner.manager.save(User, {
      name: 'Super User',
      email,
      password: hashedPassword,
      isSuperUser: true,
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const email = process.env.SUPERUSER_EMAIL || 'admin@email.com';
    await queryRunner.query(`
      DELETE FROM user WHERE email = '${email}'
    `);
  }
}
