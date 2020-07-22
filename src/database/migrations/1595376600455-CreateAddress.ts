import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class CreateAddress1595376600455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
          { name: 'user_id', type: 'uuid', isNullable: true },
          { name: 'country', type: 'varchar' },
          { name: 'state', type: 'varchar' },
          { name: 'city', type: 'varchar' },
          { name: 'street', type: 'varchar' },
          { name: 'street_number', type: 'varchar' },
          { name: 'postcode', type: 'varchar' },
          { name: 'gps_lat', type: 'float' },
          { name: 'gps_long', type: 'float' },

          { name: 'created_at', type: 'timestamp', default: 'now()' },
          { name: 'updated_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'userAddresses',
        columnNames: ['addresses_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'addresses',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      'addresses',
      new TableForeignKey({
        name: 'addressesUser',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('addresses', 'addressesUser');
    await queryRunner.dropForeignKey('users', 'userAddresses');
    await queryRunner.dropTable('addresses');
  }
}
