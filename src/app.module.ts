import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VehicleTypeModule } from './vehicle_type/vehicle_type.module';
import { CommonModule } from './common/common.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'iFPhnS7pVtY5@gR',
      database: 'tzuyu',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    AuthModule,
    UsersModule,
    VehicleTypeModule,
    CommonModule,
    TenantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
