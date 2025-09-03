import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { CourtsModule } from './courts/courts.module';
import { ReservationsModule } from './reservations/reservations.module';
import { PaymentsModule } from './payments/payments.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule, UsersModule, CourtsModule, ReservationsModule, PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
