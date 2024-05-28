import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { PartsModule } from './parts/parts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Vladyslav:password@cluster0.bqbfotd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    AuthModule,
    BooksModule,
    PartsModule
  ],
})
export class AppModule {}