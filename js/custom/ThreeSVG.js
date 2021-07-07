// ThreeSVG.js r40 - http://github.com/mrdoob/three.js
var THREE = THREE || {};
if (!window.Int32Array) {
  window.Int32Array = Array;
  window.Float32Array = Array;
}
THREE.Color = function (a) {
  this.setHex(a);
};
THREE.Color.prototype = {
  copy: function (a) {
    this.r = a.r;
    this.g = a.g;
    this.b = a.b;
    this.hex = a.hex;
  },
  setHex: function (a) {
    this.hex = ~~a & 16777215;
    this.updateRGB();
  },
  setRGB: function (a, b, c) {
    this.r = a;
    this.g = b;
    this.b = c;
    this.updateHex();
  },
  setHSV: function (a, b, c) {
    var d, e, g, f, j, h;
    if (c == 0) d = e = g = 0;
    else {
      f = Math.floor(a * 6);
      j = a * 6 - f;
      a = c * (1 - b);
      h = c * (1 - b * j);
      b = c * (1 - b * (1 - j));
      switch (f) {
        case 1:
          d = h;
          e = c;
          g = a;
          break;
        case 2:
          d = a;
          e = c;
          g = b;
          break;
        case 3:
          d = a;
          e = h;
          g = c;
          break;
        case 4:
          d = b;
          e = a;
          g = c;
          break;
        case 5:
          d = c;
          e = a;
          g = h;
          break;
        case 6:
        case 0:
          d = c;
          e = b;
          g = a;
      }
    }
    this.setRGB(d, e, g);
  },
  updateHex: function () {
    this.hex =
      (~~(this.r * 255) << 16) ^ (~~(this.g * 255) << 8) ^ ~~(this.b * 255);
  },
  updateRGB: function () {
    this.r = ((this.hex >> 16) & 255) / 255;
    this.g = ((this.hex >> 8) & 255) / 255;
    this.b = (this.hex & 255) / 255;
  },
  clone: function () {
    return new THREE.Color(this.hex);
  },
};
THREE.Vector2 = function (a, b) {
  this.set(a || 0, b || 0);
};
THREE.Vector2.prototype = {
  set: function (a, b) {
    this.x = a;
    this.y = b;
    return this;
  },
  copy: function (a) {
    this.set(a.x, a.y);
    return this;
  },
  addSelf: function (a) {
    this.set(this.x + a.x, this.y + a.y);
    return this;
  },
  add: function (a, b) {
    this.set(a.x + b.x, a.y + b.y);
    return this;
  },
  subSelf: function (a) {
    this.set(this.x - a.x, this.y - a.y);
    return this;
  },
  sub: function (a, b) {
    this.set(a.x - b.x, a.y - b.y);
    return this;
  },
  multiplyScalar: function (a) {
    this.set(this.x * a, this.y * a);
    return this;
  },
  negate: function () {
    this.set(-this.x, -this.y);
    return this;
  },
  unit: function () {
    this.multiplyScalar(1 / this.length());
    return this;
  },
  length: function () {
    return Math.sqrt(this.lengthSq());
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y;
  },
  clone: function () {
    return new THREE.Vector2(this.x, this.y);
  },
};
THREE.Vector3 = function (a, b, c) {
  this.set(a || 0, b || 0, c || 0);
};
THREE.Vector3.prototype = {
  set: function (a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c;
    return this;
  },
  copy: function (a) {
    this.set(a.x, a.y, a.z);
    return this;
  },
  add: function (a, b) {
    this.set(a.x + b.x, a.y + b.y, a.z + b.z);
    return this;
  },
  addSelf: function (a) {
    this.set(this.x + a.x, this.y + a.y, this.z + a.z);
    return this;
  },
  addScalar: function (a) {
    this.set(this.x + a, this.y + a, this.z + a);
    return this;
  },
  sub: function (a, b) {
    this.set(a.x - b.x, a.y - b.y, a.z - b.z);
    return this;
  },
  subSelf: function (a) {
    this.set(this.x - a.x, this.y - a.y, this.z - a.z);
    return this;
  },
  cross: function (a, b) {
    this.set(
      a.y * b.z - a.z * b.y,
      a.z * b.x - a.x * b.z,
      a.x * b.y - a.y * b.x
    );
    return this;
  },
  crossSelf: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z;
    this.set(c * a.z - d * a.y, d * a.x - b * a.z, b * a.y - c * a.x);
    return this;
  },
  multiply: function (a, b) {
    this.set(a.x * b.x, a.y * b.y, a.z * b.z);
    return this;
  },
  multiplySelf: function (a) {
    this.set(this.x * a.x, this.y * a.y, this.z * a.z);
    return this;
  },
  multiplyScalar: function (a) {
    this.set(this.x * a, this.y * a, this.z * a);
    return this;
  },
  divideSelf: function (a) {
    this.set(this.x / a.x, this.y / a.y, this.z / a.z);
    return this;
  },
  divideScalar: function (a) {
    this.set(this.x / a, this.y / a, this.z / a);
    return this;
  },
  negate: function () {
    this.set(-this.x, -this.y, -this.z);
    return this;
  },
  dot: function (a) {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  },
  distanceTo: function (a) {
    return Math.sqrt(this.distanceToSquared(a));
  },
  distanceToSquared: function (a) {
    var b = this.x - a.x,
      c = this.y - a.y;
    a = this.z - a.z;
    return b * b + c * c + a * a;
  },
  length: function () {
    return Math.sqrt(this.lengthSq());
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  lengthManhattan: function () {
    return this.x + this.y + this.z;
  },
  normalize: function () {
    var a = this.length();
    a > 0 ? this.multiplyScalar(1 / a) : this.set(0, 0, 0);
    return this;
  },
  setPositionFromMatrix: function (a) {
    this.x = a.n14;
    this.y = a.n24;
    this.z = a.n34;
  },
  setRotationFromMatrix: function (a) {
    var b = Math.cos(this.y);
    this.y = Math.asin(a.n13);
    if (Math.abs(b) > 1.0e-5) {
      this.x = Math.atan2(-a.n23 / b, a.n33 / b);
      this.z = Math.atan2(-a.n12 / b, a.n11 / b);
    } else {
      this.x = 0;
      this.z = Math.atan2(a.n21, a.n22);
    }
  },
  setLength: function (a) {
    return this.normalize().multiplyScalar(a);
  },
  isZero: function () {
    return (
      Math.abs(this.x) < 1.0e-4 &&
      Math.abs(this.y) < 1.0e-4 &&
      Math.abs(this.z) < 1.0e-4
    );
  },
  clone: function () {
    return new THREE.Vector3(this.x, this.y, this.z);
  },
};
THREE.Vector4 = function (a, b, c, d) {
  this.set(a || 0, b || 0, c || 0, d || 1);
};
THREE.Vector4.prototype = {
  set: function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this;
  },
  copy: function (a) {
    this.set(a.x, a.y, a.z, a.w || 1);
    return this;
  },
  add: function (a, b) {
    this.set(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);
    return this;
  },
  addSelf: function (a) {
    this.set(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
    return this;
  },
  sub: function (a, b) {
    this.set(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);
    return this;
  },
  subSelf: function (a) {
    this.set(this.x - a.x, this.y - a.y, this.z - a.z, this.w - a.w);
    return this;
  },
  multiplyScalar: function (a) {
    this.set(this.x * a, this.y * a, this.z * a, this.w * a);
    return this;
  },
  divideScalar: function (a) {
    this.set(this.x / a, this.y / a, this.z / a, this.w / a);
    return this;
  },
  lerpSelf: function (a, b) {
    this.set(
      this.x + (a.x - this.x) * b,
      this.y + (a.y - this.y) * b,
      this.z + (a.z - this.z) * b,
      this.w + (a.w - this.w) * b
    );
  },
  clone: function () {
    return new THREE.Vector4(this.x, this.y, this.z, this.w);
  },
};
THREE.Ray = function (a, b) {
  this.origin = a || new THREE.Vector3();
  this.direction = b || new THREE.Vector3();
};
THREE.Ray.prototype = {
  intersectScene: function (a) {
    return this.intersectObjects(a.objects);
  },
  intersectObjects: function (a) {
    var b,
      c,
      d,
      e = [];
    b = 0;
    for (c = a.length; b < c; b++) {
      d = a[b];
      d instanceof THREE.Mesh && (e = e.concat(this.intersectObject(d)));
    }
    e.sort(function (g, f) {
      return g.distance - f.distance;
    });
    return e;
  },
  intersectObject: function (a) {
    function b(v, w, I, D) {
      D = D.clone().subSelf(w);
      I = I.clone().subSelf(w);
      var N = v.clone().subSelf(w);
      v = D.dot(D);
      w = D.dot(I);
      D = D.dot(N);
      var x = I.dot(I);
      I = I.dot(N);
      N = 1 / (v * x - w * w);
      x = (x * D - w * I) * N;
      v = (v * I - w * D) * N;
      return x > 0 && v > 0 && x + v < 1;
    }
    var c,
      d,
      e,
      g,
      f,
      j,
      h,
      i,
      k,
      n,
      m,
      o = a.geometry,
      q = o.vertices,
      r = [];
    c = 0;
    for (d = o.faces.length; c < d; c++) {
      e = o.faces[c];
      n = this.origin.clone();
      m = this.direction.clone();
      h = a.matrixWorld;
      g = h.multiplyVector3(q[e.a].position.clone());
      f = h.multiplyVector3(q[e.b].position.clone());
      j = h.multiplyVector3(q[e.c].position.clone());
      h =
        e instanceof THREE.Face4
          ? h.multiplyVector3(q[e.d].position.clone())
          : null;
      i = a.matrixRotationWorld.multiplyVector3(e.normal.clone());
      k = m.dot(i);
      if (a.doubleSided || (a.flipSided ? k > 0 : k < 0)) {
        i = i.dot(new THREE.Vector3().sub(g, n)) / k;
        n = n.addSelf(m.multiplyScalar(i));
        if (e instanceof THREE.Face3) {
          if (b(n, g, f, j)) {
            e = {
              distance: this.origin.distanceTo(n),
              point: n,
              face: e,
              object: a,
            };
            r.push(e);
          }
        } else if (
          e instanceof THREE.Face4 &&
          (b(n, g, f, h) || b(n, f, j, h))
        ) {
          e = {
            distance: this.origin.distanceTo(n),
            point: n,
            face: e,
            object: a,
          };
          r.push(e);
        }
      }
    }
    return r;
  },
};
THREE.Rectangle = function () {
  function a() {
    g = d - b;
    f = e - c;
  }
  var b,
    c,
    d,
    e,
    g,
    f,
    j = !0;
  this.getX = function () {
    return b;
  };
  this.getY = function () {
    return c;
  };
  this.getWidth = function () {
    return g;
  };
  this.getHeight = function () {
    return f;
  };
  this.getLeft = function () {
    return b;
  };
  this.getTop = function () {
    return c;
  };
  this.getRight = function () {
    return d;
  };
  this.getBottom = function () {
    return e;
  };
  this.set = function (h, i, k, n) {
    j = !1;
    b = h;
    c = i;
    d = k;
    e = n;
    a();
  };
  this.addPoint = function (h, i) {
    if (j) {
      j = !1;
      b = h;
      c = i;
      d = h;
      e = i;
    } else {
      b = b < h ? b : h;
      c = c < i ? c : i;
      d = d > h ? d : h;
      e = e > i ? e : i;
    }
    a();
  };
  this.add3Points = function (h, i, k, n, m, o) {
    if (j) {
      j = !1;
      b = h < k ? (h < m ? h : m) : k < m ? k : m;
      c = i < n ? (i < o ? i : o) : n < o ? n : o;
      d = h > k ? (h > m ? h : m) : k > m ? k : m;
      e = i > n ? (i > o ? i : o) : n > o ? n : o;
    } else {
      b =
        h < k
          ? h < m
            ? h < b
              ? h
              : b
            : m < b
            ? m
            : b
          : k < m
          ? k < b
            ? k
            : b
          : m < b
          ? m
          : b;
      c =
        i < n
          ? i < o
            ? i < c
              ? i
              : c
            : o < c
            ? o
            : c
          : n < o
          ? n < c
            ? n
            : c
          : o < c
          ? o
          : c;
      d =
        h > k
          ? h > m
            ? h > d
              ? h
              : d
            : m > d
            ? m
            : d
          : k > m
          ? k > d
            ? k
            : d
          : m > d
          ? m
          : d;
      e =
        i > n
          ? i > o
            ? i > e
              ? i
              : e
            : o > e
            ? o
            : e
          : n > o
          ? n > e
            ? n
            : e
          : o > e
          ? o
          : e;
    }
    a();
  };
  this.addRectangle = function (h) {
    if (j) {
      j = !1;
      b = h.getLeft();
      c = h.getTop();
      d = h.getRight();
      e = h.getBottom();
    } else {
      b = b < h.getLeft() ? b : h.getLeft();
      c = c < h.getTop() ? c : h.getTop();
      d = d > h.getRight() ? d : h.getRight();
      e = e > h.getBottom() ? e : h.getBottom();
    }
    a();
  };
  this.inflate = function (h) {
    b -= h;
    c -= h;
    d += h;
    e += h;
    a();
  };
  this.minSelf = function (h) {
    b = b > h.getLeft() ? b : h.getLeft();
    c = c > h.getTop() ? c : h.getTop();
    d = d < h.getRight() ? d : h.getRight();
    e = e < h.getBottom() ? e : h.getBottom();
    a();
  };
  this.instersects = function (h) {
    return (
      Math.min(d, h.getRight()) - Math.max(b, h.getLeft()) >= 0 &&
      Math.min(e, h.getBottom()) - Math.max(c, h.getTop()) >= 0
    );
  };
  this.empty = function () {
    j = !0;
    e = d = c = b = 0;
    a();
  };
  this.isEmpty = function () {
    return j;
  };
};
THREE.Matrix3 = function () {
  this.m = [];
};
THREE.Matrix3.prototype = {
  transpose: function () {
    var a,
      b = this.m;
    a = b[1];
    b[1] = b[3];
    b[3] = a;
    a = b[2];
    b[2] = b[6];
    b[6] = a;
    a = b[5];
    b[5] = b[7];
    b[7] = a;
    return this;
  },
  transposeIntoArray: function (a) {
    var b = this.m;
    a[0] = b[0];
    a[1] = b[3];
    a[2] = b[6];
    a[3] = b[1];
    a[4] = b[4];
    a[5] = b[7];
    a[6] = b[2];
    a[7] = b[5];
    a[8] = b[8];
    return this;
  },
};
THREE.Matrix4 = function (a, b, c, d, e, g, f, j, h, i, k, n, m, o, q, r) {
  this.set(
    a || 1,
    b || 0,
    c || 0,
    d || 0,
    e || 0,
    g || 1,
    f || 0,
    j || 0,
    h || 0,
    i || 0,
    k || 1,
    n || 0,
    m || 0,
    o || 0,
    q || 0,
    r || 1
  );
  this.flat = Array(16);
  this.m33 = new THREE.Matrix3();
};
THREE.Matrix4.prototype = {
  set: function (a, b, c, d, e, g, f, j, h, i, k, n, m, o, q, r) {
    this.n11 = a;
    this.n12 = b;
    this.n13 = c;
    this.n14 = d;
    this.n21 = e;
    this.n22 = g;
    this.n23 = f;
    this.n24 = j;
    this.n31 = h;
    this.n32 = i;
    this.n33 = k;
    this.n34 = n;
    this.n41 = m;
    this.n42 = o;
    this.n43 = q;
    this.n44 = r;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  copy: function (a) {
    this.set(
      a.n11,
      a.n12,
      a.n13,
      a.n14,
      a.n21,
      a.n22,
      a.n23,
      a.n24,
      a.n31,
      a.n32,
      a.n33,
      a.n34,
      a.n41,
      a.n42,
      a.n43,
      a.n44
    );
    return this;
  },
  lookAt: function (a, b, c) {
    var d = THREE.Matrix4.__v1,
      e = THREE.Matrix4.__v2,
      g = THREE.Matrix4.__v3;
    g.sub(a, b).normalize();
    if (g.length() === 0) g.z = 1;
    d.cross(c, g).normalize();
    if (d.length() === 0) {
      g.x += 1.0e-4;
      d.cross(c, g).normalize();
    }
    e.cross(g, d).normalize();
    this.n11 = d.x;
    this.n12 = e.x;
    this.n13 = g.x;
    this.n21 = d.y;
    this.n22 = e.y;
    this.n23 = g.y;
    this.n31 = d.z;
    this.n32 = e.z;
    this.n33 = g.z;
    return this;
  },
  multiplyVector3: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z,
      e = 1 / (this.n41 * b + this.n42 * c + this.n43 * d + this.n44);
    a.x = (this.n11 * b + this.n12 * c + this.n13 * d + this.n14) * e;
    a.y = (this.n21 * b + this.n22 * c + this.n23 * d + this.n24) * e;
    a.z = (this.n31 * b + this.n32 * c + this.n33 * d + this.n34) * e;
    return a;
  },
  multiplyVector4: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z,
      e = a.w;
    a.x = this.n11 * b + this.n12 * c + this.n13 * d + this.n14 * e;
    a.y = this.n21 * b + this.n22 * c + this.n23 * d + this.n24 * e;
    a.z = this.n31 * b + this.n32 * c + this.n33 * d + this.n34 * e;
    a.w = this.n41 * b + this.n42 * c + this.n43 * d + this.n44 * e;
    return a;
  },
  rotateAxis: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z;
    a.x = b * this.n11 + c * this.n12 + d * this.n13;
    a.y = b * this.n21 + c * this.n22 + d * this.n23;
    a.z = b * this.n31 + c * this.n32 + d * this.n33;
    a.normalize();
    return a;
  },
  crossVector: function (a) {
    var b = new THREE.Vector4();
    b.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
    b.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
    b.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;
    b.w = a.w
      ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w
      : 1;
    return b;
  },
  multiply: function (a, b) {
    var c = a.n11,
      d = a.n12,
      e = a.n13,
      g = a.n14,
      f = a.n21,
      j = a.n22,
      h = a.n23,
      i = a.n24,
      k = a.n31,
      n = a.n32,
      m = a.n33,
      o = a.n34,
      q = a.n41,
      r = a.n42,
      v = a.n43,
      w = a.n44,
      I = b.n11,
      D = b.n12,
      N = b.n13,
      x = b.n14,
      l = b.n21,
      J = b.n22,
      K = b.n23,
      P = b.n24,
      L = b.n31,
      B = b.n32,
      z = b.n33,
      M = b.n34;
    this.n11 = c * I + d * l + e * L;
    this.n12 = c * D + d * J + e * B;
    this.n13 = c * N + d * K + e * z;
    this.n14 = c * x + d * P + e * M + g;
    this.n21 = f * I + j * l + h * L;
    this.n22 = f * D + j * J + h * B;
    this.n23 = f * N + j * K + h * z;
    this.n24 = f * x + j * P + h * M + i;
    this.n31 = k * I + n * l + m * L;
    this.n32 = k * D + n * J + m * B;
    this.n33 = k * N + n * K + m * z;
    this.n34 = k * x + n * P + m * M + o;
    this.n41 = q * I + r * l + v * L;
    this.n42 = q * D + r * J + v * B;
    this.n43 = q * N + r * K + v * z;
    this.n44 = q * x + r * P + v * M + w;
    return this;
  },
  multiplyToArray: function (a, b, c) {
    this.multiply(a, b);
    c[0] = this.n11;
    c[1] = this.n21;
    c[2] = this.n31;
    c[3] = this.n41;
    c[4] = this.n12;
    c[5] = this.n22;
    c[6] = this.n32;
    c[7] = this.n42;
    c[8] = this.n13;
    c[9] = this.n23;
    c[10] = this.n33;
    c[11] = this.n43;
    c[12] = this.n14;
    c[13] = this.n24;
    c[14] = this.n34;
    c[15] = this.n44;
    return this;
  },
  multiplySelf: function (a) {
    this.multiply(this, a);
    return this;
  },
  multiplyScalar: function (a) {
    this.n11 *= a;
    this.n12 *= a;
    this.n13 *= a;
    this.n14 *= a;
    this.n21 *= a;
    this.n22 *= a;
    this.n23 *= a;
    this.n24 *= a;
    this.n31 *= a;
    this.n32 *= a;
    this.n33 *= a;
    this.n34 *= a;
    this.n41 *= a;
    this.n42 *= a;
    this.n43 *= a;
    this.n44 *= a;
    return this;
  },
  determinant: function () {
    var a = this.n11,
      b = this.n12,
      c = this.n13,
      d = this.n14,
      e = this.n21,
      g = this.n22,
      f = this.n23,
      j = this.n24,
      h = this.n31,
      i = this.n32,
      k = this.n33,
      n = this.n34,
      m = this.n41,
      o = this.n42,
      q = this.n43,
      r = this.n44;
    return (
      d * f * i * m -
      c * j * i * m -
      d * g * k * m +
      b * j * k * m +
      c * g * n * m -
      b * f * n * m -
      d * f * h * o +
      c * j * h * o +
      d * e * k * o -
      a * j * k * o -
      c * e * n * o +
      a * f * n * o +
      d * g * h * q -
      b * j * h * q -
      d * e * i * q +
      a * j * i * q +
      b * e * n * q -
      a * g * n * q -
      c * g * h * r +
      b * f * h * r +
      c * e * i * r -
      a * f * i * r -
      b * e * k * r +
      a * g * k * r
    );
  },
  transpose: function () {
    var a;
    a = this.n21;
    this.n21 = this.n12;
    this.n12 = a;
    a = this.n31;
    this.n31 = this.n13;
    this.n13 = a;
    a = this.n32;
    this.n32 = this.n23;
    this.n23 = a;
    a = this.n41;
    this.n41 = this.n14;
    this.n14 = a;
    a = this.n42;
    this.n42 = this.n24;
    this.n24 = a;
    a = this.n43;
    this.n43 = this.n34;
    this.n43 = a;
    return this;
  },
  clone: function () {
    var a = new THREE.Matrix4();
    a.n11 = this.n11;
    a.n12 = this.n12;
    a.n13 = this.n13;
    a.n14 = this.n14;
    a.n21 = this.n21;
    a.n22 = this.n22;
    a.n23 = this.n23;
    a.n24 = this.n24;
    a.n31 = this.n31;
    a.n32 = this.n32;
    a.n33 = this.n33;
    a.n34 = this.n34;
    a.n41 = this.n41;
    a.n42 = this.n42;
    a.n43 = this.n43;
    a.n44 = this.n44;
    return a;
  },
  flatten: function () {
    this.flat[0] = this.n11;
    this.flat[1] = this.n21;
    this.flat[2] = this.n31;
    this.flat[3] = this.n41;
    this.flat[4] = this.n12;
    this.flat[5] = this.n22;
    this.flat[6] = this.n32;
    this.flat[7] = this.n42;
    this.flat[8] = this.n13;
    this.flat[9] = this.n23;
    this.flat[10] = this.n33;
    this.flat[11] = this.n43;
    this.flat[12] = this.n14;
    this.flat[13] = this.n24;
    this.flat[14] = this.n34;
    this.flat[15] = this.n44;
    return this.flat;
  },
  flattenToArray: function (a) {
    a[0] = this.n11;
    a[1] = this.n21;
    a[2] = this.n31;
    a[3] = this.n41;
    a[4] = this.n12;
    a[5] = this.n22;
    a[6] = this.n32;
    a[7] = this.n42;
    a[8] = this.n13;
    a[9] = this.n23;
    a[10] = this.n33;
    a[11] = this.n43;
    a[12] = this.n14;
    a[13] = this.n24;
    a[14] = this.n34;
    a[15] = this.n44;
    return a;
  },
  flattenToArrayOffset: function (a, b) {
    a[b] = this.n11;
    a[b + 1] = this.n21;
    a[b + 2] = this.n31;
    a[b + 3] = this.n41;
    a[b + 4] = this.n12;
    a[b + 5] = this.n22;
    a[b + 6] = this.n32;
    a[b + 7] = this.n42;
    a[b + 8] = this.n13;
    a[b + 9] = this.n23;
    a[b + 10] = this.n33;
    a[b + 11] = this.n43;
    a[b + 12] = this.n14;
    a[b + 13] = this.n24;
    a[b + 14] = this.n34;
    a[b + 15] = this.n44;
    return a;
  },
  setTranslation: function (a, b, c) {
    this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
    return this;
  },
  setScale: function (a, b, c) {
    this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationX: function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationY: function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationZ: function (a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  setRotationAxis: function (a, b) {
    var c = Math.cos(b),
      d = Math.sin(b),
      e = 1 - c,
      g = a.x,
      f = a.y,
      j = a.z,
      h = e * g,
      i = e * f;
    this.set(
      h * g + c,
      h * f - d * j,
      h * j + d * f,
      0,
      h * f + d * j,
      i * f + c,
      i * j - d * g,
      0,
      h * j - d * f,
      i * j + d * g,
      e * j * j + c,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  },
  setPosition: function (a) {
    this.n14 = a.x;
    this.n24 = a.y;
    this.n34 = a.z;
    return this;
  },
  getPosition: function () {
    if (!this.position) this.position = new THREE.Vector3();
    this.position.set(this.n14, this.n24, this.n34);
    return this.position;
  },
  getColumnX: function () {
    if (!this.columnX) this.columnX = new THREE.Vector3();
    this.columnX.set(this.n11, this.n21, this.n31);
    return this.columnX;
  },
  getColumnY: function () {
    if (!this.columnY) this.columnY = new THREE.Vector3();
    this.columnY.set(this.n12, this.n22, this.n32);
    return this.columnY;
  },
  getColumnZ: function () {
    if (!this.columnZ) this.columnZ = new THREE.Vector3();
    this.columnZ.set(this.n13, this.n23, this.n33);
    return this.columnZ;
  },
  setRotationFromEuler: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z;
    a = Math.cos(b);
    b = Math.sin(b);
    var e = Math.cos(c);
    c = Math.sin(c);
    var g = Math.cos(d);
    d = Math.sin(d);
    var f = a * c,
      j = b * c;
    this.n11 = e * g;
    this.n12 = -e * d;
    this.n13 = c;
    this.n21 = j * g + a * d;
    this.n22 = -j * d + a * g;
    this.n23 = -b * e;
    this.n31 = -f * g + b * d;
    this.n32 = f * d + b * g;
    this.n33 = a * e;
    return this;
  },
  setRotationFromQuaternion: function (a) {
    var b = a.x,
      c = a.y,
      d = a.z,
      e = a.w,
      g = b + b,
      f = c + c,
      j = d + d;
    a = b * g;
    var h = b * f;
    b *= j;
    var i = c * f;
    c *= j;
    d *= j;
    g *= e;
    f *= e;
    e *= j;
    this.n11 = 1 - (i + d);
    this.n12 = h - e;
    this.n13 = b + f;
    this.n21 = h + e;
    this.n22 = 1 - (a + d);
    this.n23 = c - g;
    this.n31 = b - f;
    this.n32 = c + g;
    this.n33 = 1 - (a + i);
    return this;
  },
  scale: function (a) {
    var b = a.x,
      c = a.y;
    a = a.z;
    this.n11 *= b;
    this.n12 *= c;
    this.n13 *= a;
    this.n21 *= b;
    this.n22 *= c;
    this.n23 *= a;
    this.n31 *= b;
    this.n32 *= c;
    this.n33 *= a;
    this.n41 *= b;
    this.n42 *= c;
    this.n43 *= a;
    return this;
  },
  extractPosition: function (a) {
    this.n14 = a.n14;
    this.n24 = a.n24;
    this.n34 = a.n34;
  },
  extractRotation: function (a, b) {
    var c = 1 / b.x,
      d = 1 / b.y,
      e = 1 / b.z;
    this.n11 = a.n11 * c;
    this.n21 = a.n21 * c;
    this.n31 = a.n31 * c;
    this.n12 = a.n12 * d;
    this.n22 = a.n22 * d;
    this.n32 = a.n32 * d;
    this.n13 = a.n13 * e;
    this.n23 = a.n23 * e;
    this.n33 = a.n33 * e;
  },
};
THREE.Matrix4.makeInvert = function (a, b) {
  var c = a.n11,
    d = a.n12,
    e = a.n13,
    g = a.n14,
    f = a.n21,
    j = a.n22,
    h = a.n23,
    i = a.n24,
    k = a.n31,
    n = a.n32,
    m = a.n33,
    o = a.n34,
    q = a.n41,
    r = a.n42,
    v = a.n43,
    w = a.n44;
  b === undefined && (b = new THREE.Matrix4());
  b.n11 = h * o * r - i * m * r + i * n * v - j * o * v - h * n * w + j * m * w;
  b.n12 = g * m * r - e * o * r - g * n * v + d * o * v + e * n * w - d * m * w;
  b.n13 = e * i * r - g * h * r + g * j * v - d * i * v - e * j * w + d * h * w;
  b.n14 = g * h * n - e * i * n - g * j * m + d * i * m + e * j * o - d * h * o;
  b.n21 = i * m * q - h * o * q - i * k * v + f * o * v + h * k * w - f * m * w;
  b.n22 = e * o * q - g * m * q + g * k * v - c * o * v - e * k * w + c * m * w;
  b.n23 = g * h * q - e * i * q - g * f * v + c * i * v + e * f * w - c * h * w;
  b.n24 = e * i * k - g * h * k + g * f * m - c * i * m - e * f * o + c * h * o;
  b.n31 = j * o * q - i * n * q + i * k * r - f * o * r - j * k * w + f * n * w;
  b.n32 = g * n * q - d * o * q - g * k * r + c * o * r + d * k * w - c * n * w;
  b.n33 = e * i * q - g * j * q + g * f * r - c * i * r - d * f * w + c * j * w;
  b.n34 = g * j * k - d * i * k - g * f * n + c * i * n + d * f * o - c * j * o;
  b.n41 = h * n * q - j * m * q - h * k * r + f * m * r + j * k * v - f * n * v;
  b.n42 = d * m * q - e * n * q + e * k * r - c * m * r - d * k * v + c * n * v;
  b.n43 = e * j * q - d * h * q - e * f * r + c * h * r + d * f * v - c * j * v;
  b.n44 = d * h * k - e * j * k + e * f * n - c * h * n - d * f * m + c * j * m;
  b.multiplyScalar(1 / a.determinant());
  return b;
};
THREE.Matrix4.makeInvert3x3 = function (a) {
  var b = a.m33,
    c = b.m,
    d = a.n33 * a.n22 - a.n32 * a.n23,
    e = -a.n33 * a.n21 + a.n31 * a.n23,
    g = a.n32 * a.n21 - a.n31 * a.n22,
    f = -a.n33 * a.n12 + a.n32 * a.n13,
    j = a.n33 * a.n11 - a.n31 * a.n13,
    h = -a.n32 * a.n11 + a.n31 * a.n12,
    i = a.n23 * a.n12 - a.n22 * a.n13,
    k = -a.n23 * a.n11 + a.n21 * a.n13,
    n = a.n22 * a.n11 - a.n21 * a.n12;
  a = a.n11 * d + a.n21 * f + a.n31 * i;
  if (a == 0) throw "matrix not invertible";
  a = 1 / a;
  c[0] = a * d;
  c[1] = a * e;
  c[2] = a * g;
  c[3] = a * f;
  c[4] = a * j;
  c[5] = a * h;
  c[6] = a * i;
  c[7] = a * k;
  c[8] = a * n;
  return b;
};
THREE.Matrix4.makeFrustum = function (a, b, c, d, e, g) {
  var f;
  f = new THREE.Matrix4();
  f.n11 = (2 * e) / (b - a);
  f.n12 = 0;
  f.n13 = (b + a) / (b - a);
  f.n14 = 0;
  f.n21 = 0;
  f.n22 = (2 * e) / (d - c);
  f.n23 = (d + c) / (d - c);
  f.n24 = 0;
  f.n31 = 0;
  f.n32 = 0;
  f.n33 = -(g + e) / (g - e);
  f.n34 = (-2 * g * e) / (g - e);
  f.n41 = 0;
  f.n42 = 0;
  f.n43 = -1;
  f.n44 = 0;
  return f;
};
THREE.Matrix4.makePerspective = function (a, b, c, d) {
  var e;
  a = c * Math.tan((a * Math.PI) / 360);
  e = -a;
  return THREE.Matrix4.makeFrustum(e * b, a * b, e, a, c, d);
};
THREE.Matrix4.makeOrtho = function (a, b, c, d, e, g) {
  var f, j, h, i;
  f = new THREE.Matrix4();
  j = b - a;
  h = c - d;
  i = g - e;
  f.n11 = 2 / j;
  f.n12 = 0;
  f.n13 = 0;
  f.n14 = -((b + a) / j);
  f.n21 = 0;
  f.n22 = 2 / h;
  f.n23 = 0;
  f.n24 = -((c + d) / h);
  f.n31 = 0;
  f.n32 = 0;
  f.n33 = -2 / i;
  f.n34 = -((g + e) / i);
  f.n41 = 0;
  f.n42 = 0;
  f.n43 = 0;
  f.n44 = 1;
  return f;
};
THREE.Matrix4.__v1 = new THREE.Vector3();
THREE.Matrix4.__v2 = new THREE.Vector3();
THREE.Matrix4.__v3 = new THREE.Vector3();
THREE.Object3D = function () {
  this.parent = undefined;
  this.children = [];
  this.up = new THREE.Vector3(0, 1, 0);
  this.position = new THREE.Vector3();
  this.rotation = new THREE.Vector3();
  this.scale = new THREE.Vector3(1, 1, 1);
  this.dynamic = !1;
  this.rotationAutoUpdate = !0;
  this.matrix = new THREE.Matrix4();
  this.matrixWorld = new THREE.Matrix4();
  this.matrixRotationWorld = new THREE.Matrix4();
  this.matrixAutoUpdate = !0;
  this.matrixWorldNeedsUpdate = !0;
  this.quaternion = new THREE.Quaternion();
  this.useQuaternion = !1;
  this.boundRadius = 0;
  this.boundRadiusScale = 1;
  this.visible = !0;
  this._vector = new THREE.Vector3();
  this.name = "";
};
THREE.Object3D.prototype = {
  translate: function (a, b) {
    this.matrix.rotateAxis(b);
    this.position.addSelf(b.multiplyScalar(a));
  },
  translateX: function (a) {
    this.translate(a, this._vector.set(1, 0, 0));
  },
  translateY: function (a) {
    this.translate(a, this._vector.set(0, 1, 0));
  },
  translateZ: function (a) {
    this.translate(a, this._vector.set(0, 0, 1));
  },
  lookAt: function (a) {
    this.matrix.lookAt(a, this.position, this.up);
    this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix);
  },
  addChild: function (a) {
    if (this.children.indexOf(a) === -1) {
      a.parent !== undefined && a.parent.removeChild(a);
      a.parent = this;
      this.children.push(a);
      for (var b = this; b.parent !== undefined; ) b = b.parent;
      b !== undefined && b instanceof THREE.Scene && b.addChildRecurse(a);
    }
  },
  removeChild: function (a) {
    var b = this.children.indexOf(a);
    if (b !== -1) {
      a.parent = undefined;
      this.children.splice(b, 1);
    }
  },
  getChildByName: function (a, b) {
    var c, d, e;
    c = 0;
    for (d = this.children.length; c < d; c++) {
      e = this.children[c];
      if (e.name === a) return e;
      if (b) {
        e = e.getChildByName(a, b);
        if (e !== undefined) return e;
      }
    }
  },
  updateMatrix: function () {
    this.matrix.setPosition(this.position);
    this.useQuaternion
      ? this.matrix.setRotationFromQuaternion(this.quaternion)
      : this.matrix.setRotationFromEuler(this.rotation);
    if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) {
      this.matrix.scale(this.scale);
      this.boundRadiusScale = Math.max(
        this.scale.x,
        Math.max(this.scale.y, this.scale.z)
      );
    }
    this.matrixWorldNeedsUpdate = !0;
  },
  update: function (a, b, c) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || b) {
      a
        ? this.matrixWorld.multiply(a, this.matrix)
        : this.matrixWorld.copy(this.matrix);
      this.matrixRotationWorld.extractRotation(this.matrixWorld, this.scale);
      this.matrixWorldNeedsUpdate = !1;
      b = !0;
    }
    a = 0;
    for (var d = this.children.length; a < d; a++)
      this.children[a].update(this.matrixWorld, b, c);
  },
};
THREE.Quaternion = function (a, b, c, d) {
  this.set(a || 0, b || 0, c || 0, d !== undefined ? d : 1);
};
THREE.Quaternion.prototype = {
  set: function (a, b, c, d) {
    this.x = a;
    this.y = b;
    this.z = c;
    this.w = d;
    return this;
  },
  copy: function (a) {
    this.x = a.x;
    this.y = a.y;
    this.z = a.z;
    this.w = a.w;
    return this;
  },
  setFromEuler: function (a) {
    var b = (0.5 * Math.PI) / 360,
      c = a.x * b,
      d = a.y * b,
      e = a.z * b;
    a = Math.cos(d);
    d = Math.sin(d);
    b = Math.cos(-e);
    e = Math.sin(-e);
    var g = Math.cos(c);
    c = Math.sin(c);
    var f = a * b,
      j = d * e;
    this.w = f * g - j * c;
    this.x = f * c + j * g;
    this.y = d * b * g + a * e * c;
    this.z = a * e * g - d * b * c;
    return this;
  },
  setFromAxisAngle: function (a, b) {
    var c = b / 2,
      d = Math.sin(c);
    this.x = a.x * d;
    this.y = a.y * d;
    this.z = a.z * d;
    this.w = Math.cos(c);
    return this;
  },
  calculateW: function () {
    this.w = -Math.sqrt(
      Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z)
    );
    return this;
  },
  inverse: function () {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  },
  length: function () {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  },
  normalize: function () {
    var a = Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
    if (a == 0) this.w = this.z = this.y = this.x = 0;
    else {
      a = 1 / a;
      this.x *= a;
      this.y *= a;
      this.z *= a;
      this.w *= a;
    }
    return this;
  },
  multiplySelf: function (a) {
    var b = this.x,
      c = this.y,
      d = this.z,
      e = this.w,
      g = a.x,
      f = a.y,
      j = a.z;
    a = a.w;
    this.x = b * a + e * g + c * j - d * f;
    this.y = c * a + e * f + d * g - b * j;
    this.z = d * a + e * j + b * f - c * g;
    this.w = e * a - b * g - c * f - d * j;
    return this;
  },
  multiply: function (a, b) {
    this.x = a.x * b.w + a.y * b.z - a.z * b.y + a.w * b.x;
    this.y = -a.x * b.z + a.y * b.w + a.z * b.x + a.w * b.y;
    this.z = a.x * b.y - a.y * b.x + a.z * b.w + a.w * b.z;
    this.w = -a.x * b.x - a.y * b.y - a.z * b.z + a.w * b.w;
    return this;
  },
  multiplyVector3: function (a, b) {
    b || (b = a);
    var c = a.x,
      d = a.y,
      e = a.z,
      g = this.x,
      f = this.y,
      j = this.z,
      h = this.w,
      i = h * c + f * e - j * d,
      k = h * d + j * c - g * e,
      n = h * e + g * d - f * c;
    c = -g * c - f * d - j * e;
    b.x = i * h + c * -g + k * -j - n * -f;
    b.y = k * h + c * -f + n * -g - i * -j;
    b.z = n * h + c * -j + i * -f - k * -g;
    return b;
  },
};
THREE.Quaternion.slerp = function (a, b, c, d) {
  var e = a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z;
  if (Math.abs(e) >= 1) {
    c.w = a.w;
    c.x = a.x;
    c.y = a.y;
    c.z = a.z;
    return c;
  }
  var g = Math.acos(e),
    f = Math.sqrt(1 - e * e);
  if (Math.abs(f) < 0.001) {
    c.w = 0.5 * (a.w + b.w);
    c.x = 0.5 * (a.x + b.x);
    c.y = 0.5 * (a.y + b.y);
    c.z = 0.5 * (a.z + b.z);
    return c;
  }
  e = Math.sin((1 - d) * g) / f;
  d = Math.sin(d * g) / f;
  c.w = a.w * e + b.w * d;
  c.x = a.x * e + b.x * d;
  c.y = a.y * e + b.y * d;
  c.z = a.z * e + b.z * d;
  return c;
};
THREE.Vertex = function (a) {
  this.position = a || new THREE.Vector3();
};
THREE.Face3 = function (a, b, c, d, e, g) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3();
  this.vertexNormals = d instanceof Array ? d : [];
  this.color = e instanceof THREE.Color ? e : new THREE.Color();
  this.vertexColors = e instanceof Array ? e : [];
  this.vertexTangents = [];
  this.materials = g instanceof Array ? g : [g];
  this.centroid = new THREE.Vector3();
};
THREE.Face4 = function (a, b, c, d, e, g, f) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.normal = e instanceof THREE.Vector3 ? e : new THREE.Vector3();
  this.vertexNormals = e instanceof Array ? e : [];
  this.color = g instanceof THREE.Color ? g : new THREE.Color();
  this.vertexColors = g instanceof Array ? g : [];
  this.vertexTangents = [];
  this.materials = f instanceof Array ? f : [f];
  this.centroid = new THREE.Vector3();
};
THREE.UV = function (a, b) {
  this.set(a || 0, b || 0);
};
THREE.UV.prototype = {
  set: function (a, b) {
    this.u = a;
    this.v = b;
    return this;
  },
  copy: function (a) {
    this.set(a.u, a.v);
    return this;
  },
};
THREE.Geometry = function () {
  this.id = "Geometry" + THREE.GeometryIdCounter++;
  this.vertices = [];
  this.colors = [];
  this.faces = [];
  this.edges = [];
  this.faceUvs = [[]];
  this.faceVertexUvs = [[]];
  this.morphTargets = [];
  this.morphColors = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.boundingSphere = this.boundingBox = null;
  this.hasTangents = !1;
};
THREE.Geometry.prototype = {
  computeCentroids: function () {
    var a, b, c;
    a = 0;
    for (b = this.faces.length; a < b; a++) {
      c = this.faces[a];
      c.centroid.set(0, 0, 0);
      if (c instanceof THREE.Face3) {
        c.centroid.addSelf(this.vertices[c.a].position);
        c.centroid.addSelf(this.vertices[c.b].position);
        c.centroid.addSelf(this.vertices[c.c].position);
        c.centroid.divideScalar(3);
      } else if (c instanceof THREE.Face4) {
        c.centroid.addSelf(this.vertices[c.a].position);
        c.centroid.addSelf(this.vertices[c.b].position);
        c.centroid.addSelf(this.vertices[c.c].position);
        c.centroid.addSelf(this.vertices[c.d].position);
        c.centroid.divideScalar(4);
      }
    }
  },
  computeFaceNormals: function (a) {
    var b,
      c,
      d,
      e,
      g,
      f,
      j = new THREE.Vector3(),
      h = new THREE.Vector3();
    d = 0;
    for (e = this.faces.length; d < e; d++) {
      g = this.faces[d];
      if (a && g.vertexNormals.length) {
        j.set(0, 0, 0);
        b = 0;
        for (c = g.vertexNormals.length; b < c; b++)
          j.addSelf(g.vertexNormals[b]);
        j.divideScalar(3);
      } else {
        b = this.vertices[g.a];
        c = this.vertices[g.b];
        f = this.vertices[g.c];
        j.sub(f.position, c.position);
        h.sub(b.position, c.position);
        j.crossSelf(h);
      }
      j.isZero() || j.normalize();
      g.normal.copy(j);
    }
  },
  computeVertexNormals: function () {
    var a, b, c, d;
    if (this.__tmpVertices == undefined) {
      d = this.__tmpVertices = Array(this.vertices.length);
      a = 0;
      for (b = this.vertices.length; a < b; a++) d[a] = new THREE.Vector3();
      a = 0;
      for (b = this.faces.length; a < b; a++) {
        c = this.faces[a];
        if (c instanceof THREE.Face3)
          c.vertexNormals = [
            new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
          ];
        else if (c instanceof THREE.Face4)
          c.vertexNormals = [
            new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
          ];
      }
    } else {
      d = this.__tmpVertices;
      a = 0;
      for (b = this.vertices.length; a < b; a++) d[a].set(0, 0, 0);
    }
    a = 0;
    for (b = this.faces.length; a < b; a++) {
      c = this.faces[a];
      if (c instanceof THREE.Face3) {
        d[c.a].addSelf(c.normal);
        d[c.b].addSelf(c.normal);
        d[c.c].addSelf(c.normal);
      } else if (c instanceof THREE.Face4) {
        d[c.a].addSelf(c.normal);
        d[c.b].addSelf(c.normal);
        d[c.c].addSelf(c.normal);
        d[c.d].addSelf(c.normal);
      }
    }
    a = 0;
    for (b = this.vertices.length; a < b; a++) d[a].normalize();
    a = 0;
    for (b = this.faces.length; a < b; a++) {
      c = this.faces[a];
      if (c instanceof THREE.Face3) {
        c.vertexNormals[0].copy(d[c.a]);
        c.vertexNormals[1].copy(d[c.b]);
        c.vertexNormals[2].copy(d[c.c]);
      } else if (c instanceof THREE.Face4) {
        c.vertexNormals[0].copy(d[c.a]);
        c.vertexNormals[1].copy(d[c.b]);
        c.vertexNormals[2].copy(d[c.c]);
        c.vertexNormals[3].copy(d[c.d]);
      }
    }
  },
  computeTangents: function () {
    function a(F, t, C, A, y, s, p) {
      j = F.vertices[t].position;
      h = F.vertices[C].position;
      i = F.vertices[A].position;
      k = f[y];
      n = f[s];
      m = f[p];
      o = h.x - j.x;
      q = i.x - j.x;
      r = h.y - j.y;
      v = i.y - j.y;
      w = h.z - j.z;
      I = i.z - j.z;
      D = n.u - k.u;
      N = m.u - k.u;
      x = n.v - k.v;
      l = m.v - k.v;
      J = 1 / (D * l - N * x);
      B.set((l * o - x * q) * J, (l * r - x * v) * J, (l * w - x * I) * J);
      z.set((D * q - N * o) * J, (D * v - N * r) * J, (D * I - N * w) * J);
      P[t].addSelf(B);
      P[C].addSelf(B);
      P[A].addSelf(B);
      L[t].addSelf(z);
      L[C].addSelf(z);
      L[A].addSelf(z);
    }
    var b,
      c,
      d,
      e,
      g,
      f,
      j,
      h,
      i,
      k,
      n,
      m,
      o,
      q,
      r,
      v,
      w,
      I,
      D,
      N,
      x,
      l,
      J,
      K,
      P = [],
      L = [],
      B = new THREE.Vector3(),
      z = new THREE.Vector3(),
      M = new THREE.Vector3(),
      G = new THREE.Vector3(),
      Q = new THREE.Vector3();
    b = 0;
    for (c = this.vertices.length; b < c; b++) {
      P[b] = new THREE.Vector3();
      L[b] = new THREE.Vector3();
    }
    b = 0;
    for (c = this.faces.length; b < c; b++) {
      g = this.faces[b];
      f = this.faceVertexUvs[0][b];
      if (g instanceof THREE.Face3) a(this, g.a, g.b, g.c, 0, 1, 2);
      else if (g instanceof THREE.Face4) {
        a(this, g.a, g.b, g.c, 0, 1, 2);
        a(this, g.a, g.b, g.d, 0, 1, 3);
      }
    }
    var O = ["a", "b", "c", "d"];
    b = 0;
    for (c = this.faces.length; b < c; b++) {
      g = this.faces[b];
      for (d = 0; d < g.vertexNormals.length; d++) {
        Q.copy(g.vertexNormals[d]);
        e = g[O[d]];
        K = P[e];
        M.copy(K);
        M.subSelf(Q.multiplyScalar(Q.dot(K))).normalize();
        G.cross(g.vertexNormals[d], K);
        e = G.dot(L[e]);
        e = e < 0 ? -1 : 1;
        g.vertexTangents[d] = new THREE.Vector4(M.x, M.y, M.z, e);
      }
    }
    this.hasTangents = !0;
  },
  computeBoundingBox: function () {
    var a;
    if (this.vertices.length > 0) {
      this.boundingBox = {
        x: [this.vertices[0].position.x, this.vertices[0].position.x],
        y: [this.vertices[0].position.y, this.vertices[0].position.y],
        z: [this.vertices[0].position.z, this.vertices[0].position.z],
      };
      for (var b = 1, c = this.vertices.length; b < c; b++) {
        a = this.vertices[b];
        if (a.position.x < this.boundingBox.x[0])
          this.boundingBox.x[0] = a.position.x;
        else if (a.position.x > this.boundingBox.x[1])
          this.boundingBox.x[1] = a.position.x;
        if (a.position.y < this.boundingBox.y[0])
          this.boundingBox.y[0] = a.position.y;
        else if (a.position.y > this.boundingBox.y[1])
          this.boundingBox.y[1] = a.position.y;
        if (a.position.z < this.boundingBox.z[0])
          this.boundingBox.z[0] = a.position.z;
        else if (a.position.z > this.boundingBox.z[1])
          this.boundingBox.z[1] = a.position.z;
      }
    }
  },
  computeBoundingSphere: function () {
    for (
      var a = this.boundingSphere === null ? 0 : this.boundingSphere.radius,
        b = 0,
        c = this.vertices.length;
      b < c;
      b++
    )
      a = Math.max(a, this.vertices[b].position.length());
    this.boundingSphere = { radius: a };
  },
  computeEdgeFaces: function () {
    function a(h, i) {
      return Math.min(h, i) + "_" + Math.max(h, i);
    }
    function b(h, i, k) {
      if (h[i] === undefined) {
        h[i] = { set: {}, array: [] };
        h[i].set[k] = 1;
        h[i].array.push(k);
      } else if (h[i].set[k] === undefined) {
        h[i].set[k] = 1;
        h[i].array.push(k);
      }
    }
    var c,
      d,
      e,
      g,
      f,
      j = {};
    c = 0;
    for (d = this.faces.length; c < d; c++) {
      f = this.faces[c];
      if (f instanceof THREE.Face3) {
        e = a(f.a, f.b);
        b(j, e, c);
        e = a(f.b, f.c);
        b(j, e, c);
        e = a(f.a, f.c);
        b(j, e, c);
      } else if (f instanceof THREE.Face4) {
        e = a(f.b, f.d);
        b(j, e, c);
        e = a(f.a, f.b);
        b(j, e, c);
        e = a(f.a, f.d);
        b(j, e, c);
        e = a(f.b, f.c);
        b(j, e, c);
        e = a(f.c, f.d);
        b(j, e, c);
      }
    }
    c = 0;
    for (d = this.edges.length; c < d; c++) {
      f = this.edges[c];
      e = f.vertexIndices[0];
      g = f.vertexIndices[1];
      f.faceIndices = j[a(e, g)].array;
      for (e = 0; e < f.faceIndices.length; e++) {
        g = f.faceIndices[e];
        f.faces.push(this.faces[g]);
      }
    }
  },
};
THREE.GeometryIdCounter = 0;
THREE.Camera = function (a, b, c, d, e) {
  THREE.Object3D.call(this);
  this.fov = a || 50;
  this.aspect = b || 1;
  this.near = c || 0.1;
  this.far = d || 2e3;
  this.target = e || new THREE.Object3D();
  this.useTarget = !0;
  this.matrixWorldInverse = new THREE.Matrix4();
  this.projectionMatrix = null;
  this.updateProjectionMatrix();
};
THREE.Camera.prototype = new THREE.Object3D();
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.supr = THREE.Object3D.prototype;
THREE.Camera.prototype.translate = function (a, b) {
  this.matrix.rotateAxis(b);
  this.position.addSelf(b.multiplyScalar(a));
  this.target.position.addSelf(b.multiplyScalar(a));
};
THREE.Camera.prototype.updateProjectionMatrix = function () {
  this.projectionMatrix = THREE.Matrix4.makePerspective(
    this.fov,
    this.aspect,
    this.near,
    this.far
  );
};
THREE.Camera.prototype.update = function (a, b, c) {
  if (this.useTarget) {
    this.matrix.lookAt(this.position, this.target.position, this.up);
    this.matrix.setPosition(this.position);
    a
      ? this.matrixWorld.multiply(a, this.matrix)
      : this.matrixWorld.copy(this.matrix);
    THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse);
    b = !0;
  } else {
    this.matrixAutoUpdate && this.updateMatrix();
    if (b || this.matrixWorldNeedsUpdate) {
      a
        ? this.matrixWorld.multiply(a, this.matrix)
        : this.matrixWorld.copy(this.matrix);
      this.matrixWorldNeedsUpdate = !1;
      b = !0;
      THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse);
    }
  }
  for (a = 0; a < this.children.length; a++)
    this.children[a].update(this.matrixWorld, b, c);
};
THREE.Light = function (a) {
  THREE.Object3D.call(this);
  this.color = new THREE.Color(a);
};
THREE.Light.prototype = new THREE.Object3D();
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function (a) {
  THREE.Light.call(this, a);
};
THREE.AmbientLight.prototype = new THREE.Light();
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function (a, b, c, d) {
  THREE.Light.call(this, a);
  this.position = new THREE.Vector3(0, 1, 0);
  this.intensity = b || 1;
  this.distance = c || 0;
  this.castShadow = d !== undefined ? d : !1;
};
THREE.DirectionalLight.prototype = new THREE.Light();
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function (a, b, c) {
  THREE.Light.call(this, a);
  this.position = new THREE.Vector3();
  this.intensity = b || 1;
  this.distance = c || 0;
};
THREE.PointLight.prototype = new THREE.Light();
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.Material = function (a) {
  this.id = THREE.MaterialCounter.value++;
  a = a || {};
  this.opacity = a.opacity !== undefined ? a.opacity : 1;
  this.transparent = a.transparent !== undefined ? a.transparent : !1;
  this.blending = a.blending !== undefined ? a.blending : THREE.NormalBlending;
  this.depthTest = a.depthTest !== undefined ? a.depthTest : !0;
};
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.MaterialCounter = { value: 0 };
THREE.LineBasicMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== undefined
      ? new THREE.Color(a.color)
      : new THREE.Color(16777215);
  this.linewidth = a.linewidth !== undefined ? a.linewidth : 1;
  this.linecap = a.linecap !== undefined ? a.linecap : "round";
  this.linejoin = a.linejoin !== undefined ? a.linejoin : "round";
  this.vertexColors = a.vertexColors ? a.vertexColors : !1;
};
THREE.LineBasicMaterial.prototype = new THREE.Material();
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== undefined
      ? new THREE.Color(a.color)
      : new THREE.Color(16777215);
  this.map = a.map !== undefined ? a.map : null;
  this.lightMap = a.lightMap !== undefined ? a.lightMap : null;
  this.envMap = a.envMap !== undefined ? a.envMap : null;
  this.combine = a.combine !== undefined ? a.combine : THREE.MultiplyOperation;
  this.reflectivity = a.reflectivity !== undefined ? a.reflectivity : 1;
  this.refractionRatio =
    a.refractionRatio !== undefined ? a.refractionRatio : 0.98;
  this.shading = a.shading !== undefined ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== undefined ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== undefined ? a.wireframeLinewidth : 1;
  this.wireframeLinecap =
    a.wireframeLinecap !== undefined ? a.wireframeLinecap : "round";
  this.wireframeLinejoin =
    a.wireframeLinejoin !== undefined ? a.wireframeLinejoin : "round";
  this.vertexColors = a.vertexColors !== undefined ? a.vertexColors : !1;
  this.skinning = a.skinning !== undefined ? a.skinning : !1;
  this.morphTargets = a.morphTargets !== undefined ? a.morphTargets : !1;
};
THREE.MeshBasicMaterial.prototype = new THREE.Material();
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== undefined
      ? new THREE.Color(a.color)
      : new THREE.Color(16777215);
  this.map = a.map !== undefined ? a.map : null;
  this.lightMap = a.lightMap !== undefined ? a.lightMap : null;
  this.envMap = a.envMap !== undefined ? a.envMap : null;
  this.combine = a.combine !== undefined ? a.combine : THREE.MultiplyOperation;
  this.reflectivity = a.reflectivity !== undefined ? a.reflectivity : 1;
  this.refractionRatio =
    a.refractionRatio !== undefined ? a.refractionRatio : 0.98;
  this.shading = a.shading !== undefined ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== undefined ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== undefined ? a.wireframeLinewidth : 1;
  this.wireframeLinecap =
    a.wireframeLinecap !== undefined ? a.wireframeLinecap : "round";
  this.wireframeLinejoin =
    a.wireframeLinejoin !== undefined ? a.wireframeLinejoin : "round";
  this.vertexColors = a.vertexColors !== undefined ? a.vertexColors : !1;
  this.skinning = a.skinning !== undefined ? a.skinning : !1;
  this.morphTargets = a.morphTargets !== undefined ? a.morphTargets : !1;
};
THREE.MeshLambertMaterial.prototype = new THREE.Material();
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== undefined
      ? new THREE.Color(a.color)
      : new THREE.Color(16777215);
  this.ambient =
    a.ambient !== undefined
      ? new THREE.Color(a.ambient)
      : new THREE.Color(328965);
  this.specular =
    a.specular !== undefined
      ? new THREE.Color(a.specular)
      : new THREE.Color(1118481);
  this.shininess = a.shininess !== undefined ? a.shininess : 30;
  this.map = a.map !== undefined ? a.map : null;
  this.lightMap = a.lightMap !== undefined ? a.lightMap : null;
  this.envMap = a.envMap !== undefined ? a.envMap : null;
  this.combine = a.combine !== undefined ? a.combine : THREE.MultiplyOperation;
  this.reflectivity = a.reflectivity !== undefined ? a.reflectivity : 1;
  this.refractionRatio =
    a.refractionRatio !== undefined ? a.refractionRatio : 0.98;
  this.shading = a.shading !== undefined ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== undefined ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== undefined ? a.wireframeLinewidth : 1;
  this.wireframeLinecap =
    a.wireframeLinecap !== undefined ? a.wireframeLinecap : "round";
  this.wireframeLinejoin =
    a.wireframeLinejoin !== undefined ? a.wireframeLinejoin : "round";
  this.vertexColors = a.vertexColors !== undefined ? a.vertexColors : !1;
  this.skinning = a.skinning !== undefined ? a.skinning : !1;
  this.morphTargets = a.morphTargets !== undefined ? a.morphTargets : !1;
};
THREE.MeshPhongMaterial.prototype = new THREE.Material();
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.shading = a.shading !== undefined ? a.shading : THREE.SmoothShading;
  this.wireframe = a.wireframe !== undefined ? a.wireframe : !1;
  this.wireframeLinewidth =
    a.wireframeLinewidth !== undefined ? a.wireframeLinewidth : 1;
};
THREE.MeshDepthMaterial.prototype = new THREE.Material();
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.shading = a.shading ? a.shading : THREE.FlatShading;
  this.wireframe = a.wireframe ? a.wireframe : !1;
  this.wireframeLinewidth = a.wireframeLinewidth ? a.wireframeLinewidth : 1;
};
THREE.MeshNormalMaterial.prototype = new THREE.Material();
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function () {};
THREE.ParticleBasicMaterial = function (a) {
  THREE.Material.call(this, a);
  a = a || {};
  this.color =
    a.color !== undefined
      ? new THREE.Color(a.color)
      : new THREE.Color(16777215);
  this.map = a.map !== undefined ? a.map : null;
  this.size = a.size !== undefined ? a.size : 1;
  this.sizeAttenuation =
    a.sizeAttenuation !== undefined ? a.sizeAttenuation : !0;
  this.vertexColors = a.vertexColors !== undefined ? a.vertexColors : !1;
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material();
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.Particle = function (a) {
  THREE.Object3D.call(this);
  this.materials = a instanceof Array ? a : [a];
};
THREE.Particle.prototype = new THREE.Object3D();
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.Line = function (a, b, c) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.materials = b instanceof Array ? b : [b];
  this.type = c != undefined ? c : THREE.LineStrip;
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D();
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function (a, b) {
  THREE.Object3D.call(this);
  this.geometry = a;
  this.materials = b && b.length ? b : [b];
  this.flipSided = !1;
  this.doubleSided = !1;
  this.overdraw = !1;
  if (this.geometry) {
    this.geometry.boundingSphere || this.geometry.computeBoundingSphere();
    this.boundRadius = a.boundingSphere.radius;
    if (this.geometry.morphTargets.length) {
      this.morphTargetBase = -1;
      this.morphTargetForcedOrder = [];
      this.morphTargetInfluences = [];
      this.morphTargetDictionary = {};
      for (var c = 0; c < this.geometry.morphTargets.length; c++) {
        this.morphTargetInfluences.push(0);
        this.morphTargetDictionary[this.geometry.morphTargets[c].name] = c;
      }
    }
  }
};
THREE.Mesh.prototype = new THREE.Object3D();
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function (a) {
  if (this.morphTargetDictionary[a] !== undefined)
    return this.morphTargetDictionary[a];
  console.log(
    "THREE.Mesh.getMorphTargetIndexByName: morph target " +
      a +
      " does not exist. Returning 0."
  );
  return 0;
};
THREE.Bone = function (a) {
  THREE.Object3D.call(this);
  this.skin = a;
  this.skinMatrix = new THREE.Matrix4();
  this.hasNoneBoneChildren = !1;
};
THREE.Bone.prototype = new THREE.Object3D();
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function (a, b, c) {
  this.matrixAutoUpdate && (b |= this.updateMatrix());
  if (b || this.matrixWorldNeedsUpdate) {
    a
      ? this.skinMatrix.multiply(a, this.matrix)
      : this.skinMatrix.copy(this.matrix);
    this.matrixWorldNeedsUpdate = !1;
    b = !0;
  }
  var d,
    e = this.children.length;
  if (this.hasNoneBoneChildren) {
    this.matrixWorld.multiply(this.skin.matrixWorld, this.skinMatrix);
    for (d = 0; d < e; d++) {
      a = this.children[d];
      a instanceof THREE.Bone
        ? a.update(this.skinMatrix, b, c)
        : a.update(this.matrixWorld, !0, c);
    }
  } else for (d = 0; d < e; d++) this.children[d].update(this.skinMatrix, b, c);
};
THREE.Bone.prototype.addChild = function (a) {
  if (this.children.indexOf(a) === -1) {
    a.parent !== undefined && a.parent.removeChild(a);
    a.parent = this;
    this.children.push(a);
    if (!(a instanceof THREE.Bone)) this.hasNoneBoneChildren = !0;
  }
};
THREE.Sound = function (a, b, c, d) {
  THREE.Object3D.call(this);
  this.isLoaded = !1;
  this.isAddedToDOM = !1;
  this.isPlaying = !1;
  this.duration = -1;
  this.radius = b !== undefined ? Math.abs(b) : 100;
  this.volume = Math.min(1, Math.max(0, c !== undefined ? c : 1));
  this.domElement = document.createElement("audio");
  this.domElement.volume = 0;
  this.domElement.pan = 0;
  this.domElement.loop = d !== undefined ? d : !0;
  this.sources = a instanceof Array ? a : [a];
  var e;
  c = this.sources.length;
  for (a = 0; a < c; a++) {
    b = this.sources[a];
    b.toLowerCase();
    if (b.indexOf(".mp3") !== -1) e = "audio/mpeg";
    else if (b.indexOf(".ogg") !== -1) e = "audio/ogg";
    else b.indexOf(".wav") !== -1 && (e = "audio/wav");
    if (this.domElement.canPlayType(e)) {
      e = document.createElement("source");
      e.src = this.sources[a];
      this.domElement.THREESound = this;
      this.domElement.appendChild(e);
      this.domElement.addEventListener("canplay", this.onLoad, !0);
      this.domElement.load();
      break;
    }
  }
};
THREE.Sound.prototype = new THREE.Object3D();
THREE.Sound.prototype.constructor = THREE.Sound;
THREE.Sound.prototype.supr = THREE.Object3D.prototype;
THREE.Sound.prototype.onLoad = function () {
  var a = this.THREESound;
  if (!a.isLoaded) {
    this.removeEventListener("canplay", this.onLoad, !0);
    a.isLoaded = !0;
    a.duration = this.duration;
    a.isPlaying && a.play();
  }
};
THREE.Sound.prototype.addToDOM = function (a) {
  this.isAddedToDOM = !0;
  a.appendChild(this.domElement);
};
THREE.Sound.prototype.play = function (a) {
  this.isPlaying = !0;
  if (this.isLoaded) {
    this.domElement.play();
    if (a) this.domElement.currentTime = a % this.duration;
  }
};
THREE.Sound.prototype.pause = function () {
  this.isPlaying = !1;
  this.domElement.pause();
};
THREE.Sound.prototype.stop = function () {
  this.isPlaying = !1;
  this.domElement.pause();
  this.domElement.currentTime = 0;
};
THREE.Sound.prototype.calculateVolumeAndPan = function (a) {
  a = a.length();
  this.domElement.volume =
    a <= this.radius ? this.volume * (1 - a / this.radius) : 0;
};
THREE.Sound.prototype.update = function (a, b, c) {
  if (this.matrixAutoUpdate) {
    this.matrix.setPosition(this.position);
    b = !0;
  }
  if (b || this.matrixWorldNeedsUpdate) {
    a
      ? this.matrixWorld.multiply(a, this.matrix)
      : this.matrixWorld.copy(this.matrix);
    this.matrixWorldNeedsUpdate = !1;
    b = !0;
  }
  var d = this.children.length;
  for (a = 0; a < d; a++) this.children[a].update(this.matrixWorld, b, c);
};
THREE.Scene = function () {
  THREE.Object3D.call(this);
  this.matrixAutoUpdate = !1;
  this.collisions = this.fog = null;
  this.objects = [];
  this.lights = [];
  this.sounds = [];
  this.__objectsAdded = [];
  this.__objectsRemoved = [];
};
THREE.Scene.prototype = new THREE.Object3D();
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.supr = THREE.Object3D.prototype;
THREE.Scene.prototype.addChild = function (a) {
  this.supr.addChild.call(this, a);
  this.addChildRecurse(a);
};
THREE.Scene.prototype.addChildRecurse = function (a) {
  if (a instanceof THREE.Light)
    this.lights.indexOf(a) === -1 && this.lights.push(a);
  else if (a instanceof THREE.Sound)
    this.sounds.indexOf(a) === -1 && this.sounds.push(a);
  else if (
    !(a instanceof THREE.Camera || a instanceof THREE.Bone) &&
    this.objects.indexOf(a) === -1
  ) {
    this.objects.push(a);
    this.__objectsAdded.push(a);
  }
  for (var b = 0; b < a.children.length; b++)
    this.addChildRecurse(a.children[b]);
};
THREE.Scene.prototype.removeChild = function (a) {
  this.supr.removeChild.call(this, a);
  this.removeChildRecurse(a);
};
THREE.Scene.prototype.removeChildRecurse = function (a) {
  if (a instanceof THREE.Light) {
    var b = this.lights.indexOf(a);
    b !== -1 && this.lights.splice(b, 1);
  } else if (a instanceof THREE.Sound) {
    b = this.sounds.indexOf(a);
    b !== -1 && this.sounds.splice(b, 1);
  } else if (!(a instanceof THREE.Camera)) {
    b = this.objects.indexOf(a);
    if (b !== -1) {
      this.objects.splice(b, 1);
      this.__objectsRemoved.push(a);
    }
  }
  for (b = 0; b < a.children.length; b++)
    this.removeChildRecurse(a.children[b]);
};
THREE.Scene.prototype.addObject = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeObject = THREE.Scene.prototype.removeChild;
THREE.Scene.prototype.addLight = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeLight = THREE.Scene.prototype.removeChild;
THREE.Projector = function () {
  function a() {
    var B = (h[j] = h[j] || new THREE.RenderableVertex());
    j++;
    return B;
  }
  function b(B, z) {
    return z.z - B.z;
  }
  function c(B, z) {
    var M = 0,
      G = 1,
      Q = B.z + B.w,
      O = z.z + z.w,
      F = -B.z + B.w,
      t = -z.z + z.w;
    if (Q >= 0 && O >= 0 && F >= 0 && t >= 0) return !0;
    else if ((Q < 0 && O < 0) || (F < 0 && t < 0)) return !1;
    else {
      if (Q < 0) M = Math.max(M, Q / (Q - O));
      else O < 0 && (G = Math.min(G, Q / (Q - O)));
      if (F < 0) M = Math.max(M, F / (F - t));
      else t < 0 && (G = Math.min(G, F / (F - t)));
      if (G < M) return !1;
      else {
        B.lerpSelf(z, M);
        z.lerpSelf(B, 1 - G);
        return !0;
      }
    }
  }
  var d,
    e,
    g = [],
    f,
    j,
    h = [],
    i,
    k,
    n = [],
    m,
    o = [],
    q,
    r,
    v = [],
    w,
    I,
    D = [],
    N = new THREE.Vector4(),
    x = new THREE.Vector4(),
    l = new THREE.Matrix4(),
    J = new THREE.Matrix4(),
    K = [
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
      new THREE.Vector4(),
    ],
    P = new THREE.Vector4(),
    L = new THREE.Vector4();
  this.projectVector = function (B, z) {
    l.multiply(z.projectionMatrix, z.matrixWorldInverse);
    l.multiplyVector3(B);
    return B;
  };
  this.unprojectVector = function (B, z) {
    l.multiply(z.matrixWorld, THREE.Matrix4.makeInvert(z.projectionMatrix));
    l.multiplyVector3(B);
    return B;
  };
  this.projectObjects = function (B, z, M) {
    z = [];
    var G, Q, O;
    e = 0;
    Q = B.objects;
    B = 0;
    for (G = Q.length; B < G; B++) {
      O = Q[B];
      var F;
      if (!(F = !O.visible))
        if ((F = O instanceof THREE.Mesh)) {
          a: {
            F = void 0;
            for (
              var t = O.matrixWorld,
                C =
                  -O.geometry.boundingSphere.radius *
                  Math.max(O.scale.x, Math.max(O.scale.y, O.scale.z)),
                A = 0;
              A < 6;
              A++
            ) {
              F = K[A].x * t.n14 + K[A].y * t.n24 + K[A].z * t.n34 + K[A].w;
              if (F <= C) {
                F = !1;
                break a;
              }
            }
            F = !0;
          }
          F = !F;
        }
      if (!F) {
        F = g[e] = g[e] || new THREE.RenderableObject();
        e++;
        d = F;
        N.copy(O.position);
        l.multiplyVector3(N);
        d.object = O;
        d.z = N.z;
        z.push(d);
      }
    }
    M && z.sort(b);
    return z;
  };
  this.projectScene = function (B, z, M) {
    var G = [],
      Q = z.near,
      O = z.far,
      F,
      t,
      C,
      A,
      y,
      s,
      p,
      E,
      R,
      u,
      H,
      S,
      W,
      X,
      T,
      V,
      U;
    I = r = m = k = 0;
    z.matrixAutoUpdate && z.update(undefined, !0);
    B.update(undefined, !1, z);
    l.multiply(z.projectionMatrix, z.matrixWorldInverse);
    K[0].set(l.n41 - l.n11, l.n42 - l.n12, l.n43 - l.n13, l.n44 - l.n14);
    K[1].set(l.n41 + l.n11, l.n42 + l.n12, l.n43 + l.n13, l.n44 + l.n14);
    K[2].set(l.n41 + l.n21, l.n42 + l.n22, l.n43 + l.n23, l.n44 + l.n24);
    K[3].set(l.n41 - l.n21, l.n42 - l.n22, l.n43 - l.n23, l.n44 - l.n24);
    K[4].set(l.n41 - l.n31, l.n42 - l.n32, l.n43 - l.n33, l.n44 - l.n34);
    K[5].set(l.n41 + l.n31, l.n42 + l.n32, l.n43 + l.n33, l.n44 + l.n34);
    for (F = 0; F < 6; F++) {
      R = K[F];
      R.divideScalar(Math.sqrt(R.x * R.x + R.y * R.y + R.z * R.z));
    }
    R = this.projectObjects(B, z, !0);
    B = 0;
    for (F = R.length; B < F; B++) {
      u = R[B].object;
      if (u.visible) {
        H = u.matrixWorld;
        S = u.matrixRotationWorld;
        W = u.materials;
        X = u.overdraw;
        j = 0;
        if (u instanceof THREE.Mesh) {
          T = u.geometry;
          A = T.vertices;
          V = T.faces;
          T = T.faceVertexUvs;
          t = 0;
          for (C = A.length; t < C; t++) {
            f = a();
            f.positionWorld.copy(A[t].position);
            H.multiplyVector3(f.positionWorld);
            f.positionScreen.copy(f.positionWorld);
            l.multiplyVector4(f.positionScreen);
            f.positionScreen.x /= f.positionScreen.w;
            f.positionScreen.y /= f.positionScreen.w;
            f.visible = f.positionScreen.z > Q && f.positionScreen.z < O;
          }
          A = 0;
          for (t = V.length; A < t; A++) {
            C = V[A];
            if (C instanceof THREE.Face3) {
              y = h[C.a];
              s = h[C.b];
              p = h[C.c];
              if (
                y.visible &&
                s.visible &&
                p.visible &&
                (u.doubleSided ||
                  u.flipSided !=
                    (p.positionScreen.x - y.positionScreen.x) *
                      (s.positionScreen.y - y.positionScreen.y) -
                      (p.positionScreen.y - y.positionScreen.y) *
                        (s.positionScreen.x - y.positionScreen.x) <
                      0)
              ) {
                E = n[k] = n[k] || new THREE.RenderableFace3();
                k++;
                i = E;
                i.v1.copy(y);
                i.v2.copy(s);
                i.v3.copy(p);
              } else continue;
            } else if (C instanceof THREE.Face4) {
              y = h[C.a];
              s = h[C.b];
              p = h[C.c];
              E = h[C.d];
              if (
                y.visible &&
                s.visible &&
                p.visible &&
                E.visible &&
                (u.doubleSided ||
                  u.flipSided !=
                    ((E.positionScreen.x - y.positionScreen.x) *
                      (s.positionScreen.y - y.positionScreen.y) -
                      (E.positionScreen.y - y.positionScreen.y) *
                        (s.positionScreen.x - y.positionScreen.x) <
                      0 ||
                      (s.positionScreen.x - p.positionScreen.x) *
                        (E.positionScreen.y - p.positionScreen.y) -
                        (s.positionScreen.y - p.positionScreen.y) *
                          (E.positionScreen.x - p.positionScreen.x) <
                        0))
              ) {
                U = o[m] = o[m] || new THREE.RenderableFace4();
                m++;
                i = U;
                i.v1.copy(y);
                i.v2.copy(s);
                i.v3.copy(p);
                i.v4.copy(E);
              } else continue;
            }
            i.normalWorld.copy(C.normal);
            S.multiplyVector3(i.normalWorld);
            i.centroidWorld.copy(C.centroid);
            H.multiplyVector3(i.centroidWorld);
            i.centroidScreen.copy(i.centroidWorld);
            l.multiplyVector3(i.centroidScreen);
            p = C.vertexNormals;
            y = 0;
            for (s = p.length; y < s; y++) {
              E = i.vertexNormalsWorld[y];
              E.copy(p[y]);
              S.multiplyVector3(E);
            }
            y = 0;
            for (s = T.length; y < s; y++)
              if ((U = T[y][A])) {
                p = 0;
                for (E = U.length; p < E; p++) i.uvs[y][p] = U[p];
              }
            i.meshMaterials = W;
            i.faceMaterials = C.materials;
            i.overdraw = X;
            i.z = i.centroidScreen.z;
            G.push(i);
          }
        } else if (u instanceof THREE.Line) {
          J.multiply(l, H);
          A = u.geometry.vertices;
          y = a();
          y.positionScreen.copy(A[0].position);
          J.multiplyVector4(y.positionScreen);
          t = 1;
          for (C = A.length; t < C; t++) {
            y = a();
            y.positionScreen.copy(A[t].position);
            J.multiplyVector4(y.positionScreen);
            s = h[j - 2];
            P.copy(y.positionScreen);
            L.copy(s.positionScreen);
            if (c(P, L)) {
              P.multiplyScalar(1 / P.w);
              L.multiplyScalar(1 / L.w);
              H = v[r] = v[r] || new THREE.RenderableLine();
              r++;
              q = H;
              q.v1.positionScreen.copy(P);
              q.v2.positionScreen.copy(L);
              q.z = Math.max(P.z, L.z);
              q.materials = u.materials;
              G.push(q);
            }
          }
        } else if (u instanceof THREE.Particle) {
          x.set(u.matrixWorld.n14, u.matrixWorld.n24, u.matrixWorld.n34, 1);
          l.multiplyVector4(x);
          x.z /= x.w;
          if (x.z > 0 && x.z < 1) {
            H = D[I] = D[I] || new THREE.RenderableParticle();
            I++;
            w = H;
            w.x = x.x / x.w;
            w.y = x.y / x.w;
            w.z = x.z;
            w.rotation = u.rotation.z;
            w.scale.x =
              u.scale.x *
              Math.abs(
                w.x -
                  (x.x + z.projectionMatrix.n11) /
                    (x.w + z.projectionMatrix.n14)
              );
            w.scale.y =
              u.scale.y *
              Math.abs(
                w.y -
                  (x.y + z.projectionMatrix.n22) /
                    (x.w + z.projectionMatrix.n24)
              );
            w.materials = u.materials;
            G.push(w);
          }
        }
      }
    }
    M && G.sort(b);
    return G;
  };
};
THREE.SVGRenderer = function () {
  function a(t, C, A) {
    var y, s, p, E;
    y = 0;
    for (s = t.lights.length; y < s; y++) {
      p = t.lights[y];
      if (p instanceof THREE.DirectionalLight) {
        E = C.normalWorld.dot(p.position) * p.intensity;
        if (E > 0) {
          A.r += p.color.r * E;
          A.g += p.color.g * E;
          A.b += p.color.b * E;
        }
      } else if (p instanceof THREE.PointLight) {
        B.sub(p.position, C.centroidWorld);
        B.normalize();
        E = C.normalWorld.dot(B) * p.intensity;
        if (E > 0) {
          A.r += p.color.r * E;
          A.g += p.color.g * E;
          A.b += p.color.b * E;
        }
      }
    }
  }
  function b(t, C, A, y, s, p) {
    f.data.vertices += 3;
    f.data.faces++;
    G = d(Q++);
    G.setAttribute(
      "d",
      "M " +
        t.positionScreen.x +
        " " +
        t.positionScreen.y +
        " L " +
        C.positionScreen.x +
        " " +
        C.positionScreen.y +
        " L " +
        A.positionScreen.x +
        "," +
        A.positionScreen.y +
        "z"
    );
    if (s instanceof THREE.MeshBasicMaterial) x.hex = s.color.hex;
    else if (s instanceof THREE.MeshLambertMaterial)
      if (N) {
        l.r = J.r;
        l.g = J.g;
        l.b = J.b;
        a(p, y, l);
        x.r = Math.max(0, Math.min(s.color.r * l.r, 1));
        x.g = Math.max(0, Math.min(s.color.g * l.g, 1));
        x.b = Math.max(0, Math.min(s.color.b * l.b, 1));
        x.updateHex();
      } else x.hex = s.color.hex;
    else if (s instanceof THREE.MeshDepthMaterial) {
      L = 1 - s.__2near / (s.__farPlusNear - y.z * s.__farMinusNear);
      x.setRGB(L, L, L);
    } else
      s instanceof THREE.MeshNormalMaterial &&
        x.setRGB(e(y.normalWorld.x), e(y.normalWorld.y), e(y.normalWorld.z));
    s.wireframe
      ? G.setAttribute(
          "style",
          "fill: none; stroke: #" +
            g(x.hex.toString(16)) +
            "; stroke-width: " +
            s.wireframeLinewidth +
            "; stroke-opacity: " +
            s.opacity +
            "; stroke-linecap: " +
            s.wireframeLinecap +
            "; stroke-linejoin: " +
            s.wireframeLinejoin
        )
      : G.setAttribute(
          "style",
          "fill: #" + g(x.hex.toString(16)) + "; fill-opacity: " + s.opacity
        );
    i.appendChild(G);
  }
  function c(t, C, A, y, s, p, E) {
    f.data.vertices += 4;
    f.data.faces++;
    G = d(Q++);
    G.setAttribute(
      "d",
      "M " +
        t.positionScreen.x +
        " " +
        t.positionScreen.y +
        " L " +
        C.positionScreen.x +
        " " +
        C.positionScreen.y +
        " L " +
        A.positionScreen.x +
        "," +
        A.positionScreen.y +
        " L " +
        y.positionScreen.x +
        "," +
        y.positionScreen.y +
        "z"
    );
    if (p instanceof THREE.MeshBasicMaterial) x.hex = p.color.hex;
    else if (p instanceof THREE.MeshLambertMaterial)
      if (N) {
        l.r = J.r;
        l.g = J.g;
        l.b = J.b;
        a(E, s, l);
        x.r = Math.max(0, Math.min(p.color.r * l.r, 1));
        x.g = Math.max(0, Math.min(p.color.g * l.g, 1));
        x.b = Math.max(0, Math.min(p.color.b * l.b, 1));
        x.updateHex();
      } else x.hex = p.color.hex;
    else if (p instanceof THREE.MeshDepthMaterial) {
      L = 1 - p.__2near / (p.__farPlusNear - s.z * p.__farMinusNear);
      x.setRGB(L, L, L);
    } else
      p instanceof THREE.MeshNormalMaterial &&
        x.setRGB(e(s.normalWorld.x), e(s.normalWorld.y), e(s.normalWorld.z));
    p.wireframe
      ? G.setAttribute(
          "style",
          "fill: none; stroke: #" +
            g(x.hex.toString(16)) +
            "; stroke-width: " +
            p.wireframeLinewidth +
            "; stroke-opacity: " +
            p.opacity +
            "; stroke-linecap: " +
            p.wireframeLinecap +
            "; stroke-linejoin: " +
            p.wireframeLinejoin
        )
      : G.setAttribute(
          "style",
          "fill: #" + g(x.hex.toString(16)) + "; fill-opacity: " + p.opacity
        );
    i.appendChild(G);
  }
  function d(t) {
    if (z[t] == null) {
      z[t] = document.createElementNS("http://www.w3.org/2000/svg", "path");
      F == 0 && z[t].setAttribute("shape-rendering", "crispEdges");
    }
    return z[t];
  }
  function e(t) {
    t = (t + 1) * 0.5;
    return t < 0 ? 0 : t > 1 ? 1 : t;
  }
  function g(t) {
    for (; t.length < 6; ) t = "0" + t;
    return t;
  }
  var f = this,
    j = null,
    h = new THREE.Projector(),
    i = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    k,
    n,
    m,
    o,
    q,
    r,
    v,
    w,
    I = new THREE.Rectangle(),
    D = new THREE.Rectangle(),
    N = !1,
    x = new THREE.Color(16777215),
    l = new THREE.Color(16777215),
    J = new THREE.Color(0),
    K = new THREE.Color(0),
    P = new THREE.Color(0),
    L,
    B = new THREE.Vector3(),
    z = [],
    M = [],
    G,
    Q,
    O,
    F = 1;
  this.domElement = i;
  this.autoClear = !0;
  this.sortObjects = !0;
  this.sortElements = !0;
  this.data = { vertices: 0, faces: 0 };
  this.setQuality = function (t) {
    switch (t) {
      case "high":
        F = 1;
        break;
      case "low":
        F = 0;
    }
  };
  this.setSize = function (t, C) {
    k = t;
    n = C;
    m = k / 2;
    o = n / 2;
    i.setAttribute("viewBox", -m + " " + -o + " " + k + " " + n);
    i.setAttribute("width", k);
    i.setAttribute("height", n);
    I.set(-m, -o, m, o);
  };
  this.clear = function () {
    for (; i.childNodes.length > 0; ) i.removeChild(i.childNodes[0]);
  };
  this.render = function (t, C) {
    var A, y, s, p, E, R, u, H;
    this.autoClear && this.clear();
    f.data.vertices = 0;
    f.data.faces = 0;
    j = h.projectScene(t, C, this.sortElements);
    O = Q = 0;
    if ((N = t.lights.length > 0)) {
      u = t.lights;
      J.setRGB(0, 0, 0);
      K.setRGB(0, 0, 0);
      P.setRGB(0, 0, 0);
      A = 0;
      for (y = u.length; A < y; A++) {
        s = u[A];
        p = s.color;
        if (s instanceof THREE.AmbientLight) {
          J.r += p.r;
          J.g += p.g;
          J.b += p.b;
        } else if (s instanceof THREE.DirectionalLight) {
          K.r += p.r;
          K.g += p.g;
          K.b += p.b;
        } else if (s instanceof THREE.PointLight) {
          P.r += p.r;
          P.g += p.g;
          P.b += p.b;
        }
      }
    }
    A = 0;
    for (y = j.length; A < y; A++) {
      u = j[A];
      D.empty();
      if (u instanceof THREE.RenderableParticle) {
        q = u;
        q.x *= m;
        q.y *= -o;
        s = 0;
        for (p = u.materials.length; s < p; ) s++;
      } else if (u instanceof THREE.RenderableLine) {
        q = u.v1;
        r = u.v2;
        q.positionScreen.x *= m;
        q.positionScreen.y *= -o;
        r.positionScreen.x *= m;
        r.positionScreen.y *= -o;
        D.addPoint(q.positionScreen.x, q.positionScreen.y);
        D.addPoint(r.positionScreen.x, r.positionScreen.y);
        if (I.instersects(D)) {
          s = 0;
          for (p = u.materials.length; s < p; )
            if ((H = u.materials[s++]) && H.opacity != 0) {
              E = q;
              R = r;
              var S = O++;
              if (M[S] == null) {
                M[S] = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "line"
                );
                F == 0 && M[S].setAttribute("shape-rendering", "crispEdges");
              }
              G = M[S];
              G.setAttribute("x1", E.positionScreen.x);
              G.setAttribute("y1", E.positionScreen.y);
              G.setAttribute("x2", R.positionScreen.x);
              G.setAttribute("y2", R.positionScreen.y);
              if (H instanceof THREE.LineBasicMaterial) {
                G.setAttribute(
                  "style",
                  "fill: none; stroke: ##" +
                    g(H.color.hex.toString(16)) +
                    "; stroke-width: " +
                    H.linewidth +
                    "; stroke-opacity: " +
                    H.opacity +
                    "; stroke-linecap: " +
                    H.linecap +
                    "; stroke-linejoin: " +
                    H.linejoin
                );
                i.appendChild(G);
              }
            }
        }
      } else if (u instanceof THREE.RenderableFace3) {
        q = u.v1;
        r = u.v2;
        v = u.v3;
        q.positionScreen.x *= m;
        q.positionScreen.y *= -o;
        r.positionScreen.x *= m;
        r.positionScreen.y *= -o;
        v.positionScreen.x *= m;
        v.positionScreen.y *= -o;
        D.addPoint(q.positionScreen.x, q.positionScreen.y);
        D.addPoint(r.positionScreen.x, r.positionScreen.y);
        D.addPoint(v.positionScreen.x, v.positionScreen.y);
        if (I.instersects(D)) {
          s = 0;
          for (p = u.meshMaterials.length; s < p; ) {
            H = u.meshMaterials[s++];
            if (H instanceof THREE.MeshFaceMaterial) {
              E = 0;
              for (R = u.faceMaterials.length; E < R; )
                (H = u.faceMaterials[E++]) &&
                  H.opacity != 0 &&
                  b(q, r, v, u, H, t);
            } else H && H.opacity != 0 && b(q, r, v, u, H, t);
          }
        }
      } else if (u instanceof THREE.RenderableFace4) {
        q = u.v1;
        r = u.v2;
        v = u.v3;
        w = u.v4;
        q.positionScreen.x *= m;
        q.positionScreen.y *= -o;
        r.positionScreen.x *= m;
        r.positionScreen.y *= -o;
        v.positionScreen.x *= m;
        v.positionScreen.y *= -o;
        w.positionScreen.x *= m;
        w.positionScreen.y *= -o;
        D.addPoint(q.positionScreen.x, q.positionScreen.y);
        D.addPoint(r.positionScreen.x, r.positionScreen.y);
        D.addPoint(v.positionScreen.x, v.positionScreen.y);
        D.addPoint(w.positionScreen.x, w.positionScreen.y);
        if (I.instersects(D)) {
          s = 0;
          for (p = u.meshMaterials.length; s < p; ) {
            H = u.meshMaterials[s++];
            if (H instanceof THREE.MeshFaceMaterial) {
              E = 0;
              for (R = u.faceMaterials.length; E < R; )
                (H = u.faceMaterials[E++]) &&
                  H.opacity != 0 &&
                  c(q, r, v, w, u, H, t);
            } else H && H.opacity != 0 && c(q, r, v, w, u, H, t);
          }
        }
      }
    }
  };
};
THREE.SoundRenderer = function () {
  this.volume = 1;
  this.domElement = document.createElement("div");
  this.domElement.id = "THREESound";
  this.cameraPosition = new THREE.Vector3();
  this.soundPosition = new THREE.Vector3();
  this.render = function (a, b, c) {
    c && a.update(undefined, !1, b);
    c = a.sounds;
    var d,
      e = c.length;
    for (d = 0; d < e; d++) {
      a = c[d];
      this.soundPosition.set(
        a.matrixWorld.n14,
        a.matrixWorld.n24,
        a.matrixWorld.n34
      );
      this.soundPosition.subSelf(b.position);
      if (a.isPlaying && a.isLoaded) {
        a.isAddedToDOM || a.addToDOM(this.domElement);
        a.calculateVolumeAndPan(this.soundPosition);
      }
    }
  };
};
THREE.RenderableVertex = function () {
  this.positionWorld = new THREE.Vector3();
  this.positionScreen = new THREE.Vector4();
  this.visible = !0;
};
THREE.RenderableVertex.prototype.copy = function (a) {
  this.positionWorld.copy(a.positionWorld);
  this.positionScreen.copy(a.positionScreen);
};
THREE.RenderableFace3 = function () {
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.v3 = new THREE.RenderableVertex();
  this.centroidWorld = new THREE.Vector3();
  this.centroidScreen = new THREE.Vector3();
  this.normalWorld = new THREE.Vector3();
  this.vertexNormalsWorld = [
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ];
  this.faceMaterials = this.meshMaterials = null;
  this.overdraw = !1;
  this.uvs = [[]];
  this.z = null;
};
THREE.RenderableFace4 = function () {
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.v3 = new THREE.RenderableVertex();
  this.v4 = new THREE.RenderableVertex();
  this.centroidWorld = new THREE.Vector3();
  this.centroidScreen = new THREE.Vector3();
  this.normalWorld = new THREE.Vector3();
  this.vertexNormalsWorld = [
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
  ];
  this.faceMaterials = this.meshMaterials = null;
  this.overdraw = !1;
  this.uvs = [[]];
  this.z = null;
};
THREE.RenderableObject = function () {
  this.z = this.object = null;
};
THREE.RenderableParticle = function () {
  this.rotation = this.z = this.y = this.x = null;
  this.scale = new THREE.Vector2();
  this.materials = null;
};
THREE.RenderableLine = function () {
  this.z = null;
  this.v1 = new THREE.RenderableVertex();
  this.v2 = new THREE.RenderableVertex();
  this.materials = null;
};
