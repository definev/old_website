import 'dart:math';

import 'package:flutter/material.dart';

class UniqueColorGenerator {
  static Random random = Random();
  static Color getColor() {
    return Color.fromARGB(
      255,
      random.nextInt(200),
      random.nextInt(200),
      random.nextInt(200),
    );
  }
}

extension ColorUtils on Color {
  Color mix(Color another, double amount) {
    return Color.lerp(this, another, amount);
  }
}
