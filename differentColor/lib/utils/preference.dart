import 'package:shared_preferences/shared_preferences.dart';

Future<int> getHighScore() async {
  SharedPreferences instance = await SharedPreferences.getInstance();
  String key = 'high_scrore';
  int score = instance.getInt(key) ?? 0;
  return score;
}

Future<bool> setHighScore(int score) async {
  SharedPreferences instance = await SharedPreferences.getInstance();
  String key = 'high_scrore';
  bool success = await instance.setInt(key, score);
  return success;
}
