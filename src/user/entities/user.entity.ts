import * as bcrypt from 'bcrypt';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { UserEthnicity, UserReligion, UserRole } from '../../enums/user.enum';
import { Denial } from '../../denial/entities/denial.entity';
import { Truth } from '../../truth/entities/truth.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Affirmation } from '../../affirmation/entities/affirmation.entity';
import { Activity } from '../../activity/entities/activity.entity';
import { Friend } from '../../friend/entities/friend.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  invitedBy: number | null;

  @Column({
    type: 'date',
  })
  dateOfBirth: Date;

  @Column({
    type: 'enum',
    enum: UserEthnicity,
    default: UserEthnicity.WHITE,
  })
  ethnicity: string;

  @Column({
    type: 'enum',
    enum: UserReligion,
    default: UserReligion.OTHER,
  })
  religion: string;

  @Column({
    default: 100,
  })
  reputation: number;

  @Column()
  profilePictureUrl: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  updatedOn: Date;

  @OneToMany(() => Truth, (truth) => truth.user)
  truths: Truth[];

  @OneToMany(() => Denial, (denial) => denial.user)
  denials: Denial[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Affirmation, (affirmation) => affirmation.user)
  affirmations: Affirmation[];

  @OneToMany(() => Activity, (activity) => activity.user)
  activities: Activity[];

  @OneToMany(() => Friend, (friend) => friend.user)
  friends: Friend[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(
      this.password,
      Number(process.env.SALT_ROUNDS),
    );
  }
}

export interface UserDto {
  username: string;
  password: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  invitedBy: number;
  dateOfBirth: Date;
  ethnicity: string;
  religion: string;
  reputation: number;
  profilePictureUrl: string;
}
