let roomDimension = {
  width: 50,
  length: 100,
  getArea() {
    return (this.width * this.length);
  }
};
let boundGetArea = roomDimension.getArea.bind(roomDimension);
boundGetArea();
