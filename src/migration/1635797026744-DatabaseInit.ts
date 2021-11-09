import {MigrationInterface, QueryRunner} from "typeorm";

export class DatabaseInit1635797026744 implements MigrationInterface {
    name = 'DatabaseInit1635797026744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`denial\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`truthId\` int NOT NULL, \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`truth\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`content\` varchar(255) NOT NULL, \`denied\` tinyint NOT NULL DEFAULT 0, \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`truthId\` int NOT NULL, \`content\` varchar(255) NOT NULL, \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`affirmation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`truthId\` int NOT NULL, \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`friend\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`friendId\` int NOT NULL, \`isActive\` tinyint NOT NULL, \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin', 'superadmin') NOT NULL DEFAULT 'user', \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`invitedBy\` int NOT NULL, \`dateOfBirth\` date NOT NULL, \`ethnicity\` enum ('white', 'asian', 'black', 'pacificislander', 'americanindian', 'other', 'hispanic') NOT NULL DEFAULT 'white', \`religion\` enum ('christian', 'muslim', 'atheist', 'hindu', 'buddhist', 'taoist', 'sikhism', 'judaism', 'other') NOT NULL DEFAULT 'other', \`reputation\` int NOT NULL DEFAULT '100', \`profilePictureUrl\` varchar(255) NOT NULL, \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activity\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`resourceId\` int NOT NULL, \`type\` int NOT NULL, \`createdOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedOn\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`denial\` ADD CONSTRAINT \`FK_b8d165966662a5556512673f143\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`truth\` ADD CONSTRAINT \`FK_18d724173b3655ed0e34460c6c8\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_c0354a9a009d3bb45a08655ce3b\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`affirmation\` ADD CONSTRAINT \`FK_079e2f9e952e6a6c02f19b3ae3a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`friend\` ADD CONSTRAINT \`FK_855044ea856e46f62a46acebd65\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`activity\` ADD CONSTRAINT \`FK_3571467bcbe021f66e2bdce96ea\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`activity\` DROP FOREIGN KEY \`FK_3571467bcbe021f66e2bdce96ea\``);
        await queryRunner.query(`ALTER TABLE \`friend\` DROP FOREIGN KEY \`FK_855044ea856e46f62a46acebd65\``);
        await queryRunner.query(`ALTER TABLE \`affirmation\` DROP FOREIGN KEY \`FK_079e2f9e952e6a6c02f19b3ae3a\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_c0354a9a009d3bb45a08655ce3b\``);
        await queryRunner.query(`ALTER TABLE \`truth\` DROP FOREIGN KEY \`FK_18d724173b3655ed0e34460c6c8\``);
        await queryRunner.query(`ALTER TABLE \`denial\` DROP FOREIGN KEY \`FK_b8d165966662a5556512673f143\``);
        await queryRunner.query(`DROP TABLE \`activity\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`friend\``);
        await queryRunner.query(`DROP TABLE \`affirmation\``);
        await queryRunner.query(`DROP TABLE \`comment\``);
        await queryRunner.query(`DROP TABLE \`truth\``);
        await queryRunner.query(`DROP TABLE \`denial\``);
    }

}
