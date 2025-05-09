// physics-engine.js // 公共物理函数，可供多个实验调用

export function applyGravity(object, g = 9.8) { object.applyForce(createVector(0, g)); }

export function computeLorentzForce(velocity, magneticField, charge = 1) { // F = q(v × B) let force = p5.Vector.cross(velocity, magneticField); force.mult(charge); return force; }

export class Particle { constructor(x, y, r = 10, velocity = createVector(0, 0)) { this.position = createVector(x, y); this.velocity = velocity; this.acceleration = createVector(0, 0); this.radius = r; }

applyForce(force) { this.acceleration.add(force); }

update() { this.velocity.add(this.acceleration); this.position.add(this.velocity); this.acceleration.mult(0); }

display(color = 'red') { fill(color); noStroke(); ellipse(this.position.x, this.position.y, this.radius * 2); } }

