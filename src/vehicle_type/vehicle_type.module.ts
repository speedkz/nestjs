import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleType } from './vehicle_type.entity';
import { VehicleTypeController } from './vehicle_type.controller';
import { VehicleTypeService } from './vehicle_type.service';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleType])],
  controllers: [VehicleTypeController],
  providers: [VehicleTypeService],
})
export class VehicleTypeModule {}
