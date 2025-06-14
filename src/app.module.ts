import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoModule } from "./todo/todo.module";
import { Todo } from "./todo/todo.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "postgres",
      port: 5432,
      username: "nestjs_user",
      password: "nestjs_password",
      database: "nestjs_db",
      entities: [Todo],
      synchronize: true,
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
