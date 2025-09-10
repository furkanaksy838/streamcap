using my from '../db/schema';

service CatalogService {
  entity Orders as projection on my.Orders;
}
