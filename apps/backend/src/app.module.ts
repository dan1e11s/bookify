import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:098765@localhost:27017/bookify'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
