import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ItemsModule } from "./items/items.module";
import { StoresModule } from "./stores/stores.module";
import { EmployeesModule } from "./employees/employees.module";
import { HistoryModule } from "./histories/history.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      installSubscriptionHandlers: true,
    }),
    UsersModule,
    ItemsModule,
    StoresModule,
    EmployeesModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
