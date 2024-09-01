// تعريف فئة Polygon
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // دالة لحساب عدد الجوانب
    get countSides() {
      return this.sides.length;
    }
  
    // دالة لحساب المحيط
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  // تعريف فئة Triangle التي ترث من Polygon
  class Triangle extends Polygon {
    // دالة للتحقق من صحة المثلث
    get isValid() {
      if (this.countSides !== 3) return false;
  
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  // تعريف فئة Square التي ترث من Polygon
  class Square extends Polygon {
    // دالة للتحقق من صحة المربع
    get isValid() {
      if (this.countSides !== 4) return false;
  
      return this.sides.every(side => side === this.sides[0]);
    }
  
    // دالة لحساب مساحة المربع
    get area() {
      return this.sides[0] ** 2;
    }
  }
  
  // اختبار الدوال
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.isValid); // true
  
  const invalidTriangle = new Triangle([1, 2, 3]);
  console.log(invalidTriangle.isValid); // false
  
  const square = new Square([5, 5, 5, 5]);
  console.log(square.isValid); // true
  console.log(square.area); // 25
  
  const invalidSquare = new Square([5, 5, 5, 6]);
  console.log(invalidSquare.isValid); // false
  