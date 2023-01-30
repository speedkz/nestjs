import { Controller, Post } from '@nestjs/common';

@Controller('vehicle-type')
export class VehicleTypeController {
  @Post()
  createVehicleType() {}
}
