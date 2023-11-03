import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ServeNewsService } from './serve-news.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('news')
export class ServeNewsController {
  constructor(private readonly news: ServeNewsService) { }

  //  @UseGuards(AuthenticatedGuard)
  @Get()
  getArticles() {
    return this.news.fetchDb();
  }

  @Get('/:id')
  getArticleById(@Param('id') id: number) {
    return this.news.getArticleById(id);
  }
}
