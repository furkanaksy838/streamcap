
namespace my;

entity Orders {
  key ID      : Integer;
  customer    : String(100);
  amount      : Decimal(9,2);
  status      : String(20);
}
