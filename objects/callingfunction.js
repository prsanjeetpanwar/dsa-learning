const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter:() => 2 * Math.PI * this.radius,

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    volume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    },
    circumference() {
        return 2 * Math.PI * this.radius;
    },
    sphereSurfaceArea() {
        return 4 * Math.PI * Math.pow(this.radius, 2);
    },
    circleSectorArea(angle) {
        return (angle / 360) * Math.PI * Math.pow(this.radius, 2);
    },
    arcLength(angle) {
        return (angle / 360) * this.circumference();
    },
    chordLength(angle) {
        return 2 * this.radius * Math.sin((angle * Math.PI) / 360);
    },
    inscribedSquareSide() {
        return this.radius * Math.sqrt(2);
    },
    inscribedSquareArea() {
        return Math.pow(this.inscribedSquareSide(), 2);
    },
    circumscribedSquareSide() {
        return this.diameter();
    },
    circumscribedSquareArea() {
        return Math.pow(this.circumscribedSquareSide(), 2);
    },
    sectorPerimeter(angle) {
        return 2 * this.radius + this.arcLength(angle);
    },
    ellipsePerimeter(b) {
        return Math.PI * (this.radius + b);
    },
    cylinderVolume(height) {
        return Math.PI * Math.pow(this.radius, 2) * height;
    },
    cylinderSurfaceArea(height) {
        return 2 * Math.PI * this.radius * (this.radius + height);
    },
    coneVolume(height) {
        return (1 / 3) * Math.PI * Math.pow(this.radius, 2) * height;
    },
    coneSurfaceArea(height) {
        const slantHeight = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(height, 2));
        return Math.PI * this.radius * (this.radius + slantHeight);
    },
    torusVolume(innerRadius) {
        return (2 * Math.PI ** 2) * this.radius * Math.pow(innerRadius, 2);
    }
};

console.log("Diameter:", shape.diameter());
console.log("Perimeter:", shape.perimeter());
console.log("Area:", shape.area());
console.log("Volume:", shape.volume());
console.log("Circumference:", shape.circumference());
console.log("Sphere Surface Area:", shape.sphereSurfaceArea());
console.log("Circle Sector Area (45°):", shape.circleSectorArea(45));
console.log("Arc Length (45°):", shape.arcLength(45));
console.log("Chord Length (45°):", shape.chordLength(45));
console.log("Inscribed Square Side:", shape.inscribedSquareSide());
console.log("Inscribed Square Area:", shape.inscribedSquareArea());
console.log("Circumscribed Square Side:", shape.circumscribedSquareSide());
console.log("Circumscribed Square Area:", shape.circumscribedSquareArea());
console.log("Sector Perimeter (45°):", shape.sectorPerimeter(45));
console.log("Ellipse Perimeter (b = 5):", shape.ellipsePerimeter(5));
console.log("Cylinder Volume (h = 10):", shape.cylinderVolume(10));
console.log("Cylinder Surface Area (h = 10):", shape.cylinderSurfaceArea(10));
console.log("Cone Volume (h = 10):", shape.coneVolume(10));
console.log("Cone Surface Area (h = 10):", shape.coneSurfaceArea(10));
console.log("Torus Volume (inner radius = 5):", shape.torusVolume(5));
