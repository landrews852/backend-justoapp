import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/items/entities/item.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { Employee, EmployeeSchema } from './entities/employee.entity';
import { ItemsService } from 'src/items/items.service';
import { UsersService } from 'src/users/users.service';
import { StoresService } from 'src/stores/stores.service';
import { HistoryService } from 'src/histories/history.service';
import { History, HistorySchema } from 'src/histories/entities/history.entity';
import { Store, StoreSchema } from 'src/stores/entities/store.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Item.name, schema: ItemSchema },
      { name: User.name, schema: UserSchema },
      { name: Employee.name, schema: EmployeeSchema },
      { name: Store.name, schema: StoreSchema },
      { name: History.name, schema: HistorySchema },
    ]),
  ],
  providers: [
    EmployeesResolver,
    EmployeesService,
    ItemsService,
    UsersService,
    StoresService,
    HistoryService,
  ],
})
export class EmployeesModule {}
