import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ArticleModule,
    CategoryModule,
    UploadModule,
  ],
})
export class AppModule {}
