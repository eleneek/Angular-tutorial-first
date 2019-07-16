import {NewsService} from './news.service';
import { dataBase } from './newsDB';

describe('News Service Tests', () => {
  let newsService: NewsService;
  const article =  {
    id: 1267472382,
    title: 'Water and green energy produced by a single device',
    description: `The scientists adapted a solar panel that not only
      generated power, but used some of the heat energy to distil and
      purify sea water. They believe the idea could make a major
      difference in sunny climates with limited water supplies.`
  };
  beforeEach(() => {
    newsService = new NewsService();
  });
  it('articles should not be empty', () => {
    expect(newsService.articles.length).toBeGreaterThan(0);
  });
  it (' getArticles should return articles', () => {
    expect(newsService.getArticles()).toEqual(newsService.articles);
  });
  it('getArticle should return single article', () => {
    expect(newsService.getArticle(article.id)).toBe(dataBase.find((item) => item.id === article.id));
  } );
});
