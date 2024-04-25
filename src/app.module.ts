import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TodoService } from './todo/todo.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [TodoModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
