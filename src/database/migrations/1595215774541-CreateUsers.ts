import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1595215774541 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },

          { name: 'name', type: 'varchar' },
          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'status', type: 'boolean', isNullable: true, default: false },
          { name: 'password', type: 'varchar' },
          { name: 'auth', type: 'integer', isNullable: true, default: 0 },
          { name: 'addresses_id', type: 'uuid', isNullable: true },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
