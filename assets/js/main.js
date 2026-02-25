function resizeCanvas(canvas, container) {
  const rect = container.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
}

// =========================
// FUNCIONES PARA EL ROBOT
// =========================
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}

function drawRobot(ctx, ox, oy) {
  roundedRect(ctx, 12 + ox, 12 + oy, 150, 150, 15);
  roundedRect(ctx, 19 + ox, 19 + oy, 150, 150, 9);
  roundedRect(ctx, 53 + ox, 53 + oy, 49, 33, 10);
  roundedRect(ctx, 53 + ox, 119 + oy, 49, 16, 6);
  roundedRect(ctx, 135 + ox, 53 + oy, 49, 33, 10);
  roundedRect(ctx, 135 + ox, 119 + oy, 25, 49, 10);

  ctx.fillStyle = "#111827";

  ctx.beginPath();
  ctx.arc(37 + ox, 37 + oy, 13, Math.PI / 7, -Math.PI / 7);
  ctx.lineTo(31 + ox, 37 + oy);
  ctx.fill();

  for (let i = 0; i < 8; i++) ctx.fillRect(51 + ox + i * 16, 35 + oy, 4, 4);
  for (let i = 0; i < 6; i++) ctx.fillRect(115 + ox, 51 + oy + i * 16, 4, 4);
  for (let i = 0; i < 8; i++) ctx.fillRect(51 + ox + i * 16, 99 + oy, 4, 4);
}

function draw() {
  const canvas = document.getElementById("canvas");
  const container = canvas.parentElement;

  if (!canvas.getContext) return;

  resizeCanvas(canvas, container);

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // =========================
  // TU CÓDIGO ORIGINAL
  // =========================

  // CUADRO
  ctx.fillStyle = "#2dd4bf";
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.strokeRect(50, 50, 50, 50);

  // CARITA
  ctx.beginPath();
  ctx.arc(220, 180, 50, 0, Math.PI * 2);
  ctx.moveTo(255, 180);
  ctx.arc(220, 180, 35, 0, Math.PI);
  ctx.moveTo(210, 170);
  ctx.arc(205, 170, 5, 0, Math.PI * 2);
  ctx.moveTo(245, 170);
  ctx.arc(240, 170, 5, 0, Math.PI * 2);
  ctx.stroke();

  // =========================
  // 🔥 NUEVO TRIÁNGULO NEGRO (SUSTITUYE AL ROJO)
  // =========================
  ctx.beginPath();
  ctx.moveTo(420, 100);  // Punto izquierdo
  ctx.lineTo(470, 200);  // Abajo derecha
  ctx.lineTo(370, 200);  // Abajo izquierda
  ctx.closePath();
  ctx.fillStyle = "black";
  ctx.fill();

  // TRIÁNGULOS ORIGINALES
  ctx.beginPath();
  ctx.moveTo(525, 25);
  ctx.lineTo(605, 25);
  ctx.lineTo(525, 105);
  ctx.closePath();
  ctx.fillStyle = "#2dd4bf";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(625, 125);
  ctx.lineTo(625, 45);
  ctx.lineTo(545, 125);
  ctx.closePath();
  ctx.stroke();

  // ARCOS
  const arcOffsetX = 50;
  const arcOffsetY = 260;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = arcOffsetX + j * 50;
      const y = arcOffsetY + i * 50;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const anticlockwise = i % 2 !== 0;
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      if (i > 1) ctx.fill();
      else ctx.stroke();
    }
  }

  // GLOBITO
  const qx = 650;
  const qy = 20;

  ctx.beginPath();
  ctx.moveTo(75 + qx, 25 + qy);
  ctx.quadraticCurveTo(25 + qx, 25 + qy, 25 + qx, 62.5 + qy);
  ctx.quadraticCurveTo(25 + qx, 100 + qy, 50 + qx, 100 + qy);
  ctx.quadraticCurveTo(50 + qx, 120 + qy, 30 + qx, 125 + qy);
  ctx.quadraticCurveTo(60 + qx, 120 + qy, 65 + qx, 100 + qy);
  ctx.quadraticCurveTo(125 + qx, 100 + qy, 125 + qx, 62.5 + qy);
  ctx.quadraticCurveTo(125 + qx, 25 + qy, 75 + qx, 25 + qy);
  ctx.stroke();

  // CORAZÓN
  const bx = 250;
  const by = 250;

  ctx.beginPath();
  ctx.moveTo(75 + bx, 40 + by);
  ctx.bezierCurveTo(75 + bx, 37 + by, 70 + bx, 25 + by, 50 + bx, 25 + by);
  ctx.bezierCurveTo(20 + bx, 25 + by, 20 + bx, 62.5 + by, 20 + bx, 62.5 + by);
  ctx.bezierCurveTo(20 + bx, 80 + by, 40 + bx, 102 + by, 75 + bx, 120 + by);
  ctx.bezierCurveTo(110 + bx, 102 + by, 130 + bx, 80 + by, 130 + bx, 62.5 + by);
  ctx.bezierCurveTo(130 + bx, 62.5 + by, 130 + bx, 25 + by, 100 + bx, 25 + by);
  ctx.bezierCurveTo(85 + bx, 25 + by, 75 + bx, 37 + by, 75 + bx, 40 + by);
  ctx.fillStyle = "crimson";
  ctx.fill();

  // ROBOT
  drawRobot(ctx, canvas.width - 260, canvas.height - 220);
}

function initUI() {
  document.getElementById("year").textContent = new Date().getFullYear();
  const btn = document.getElementById("btnRedraw");
  btn.addEventListener("click", draw);
  window.addEventListener("resize", draw);
  draw();
}

initUI();