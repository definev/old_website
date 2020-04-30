import 'dart:math';

import 'package:differentColor/bloc/color_picker/bloc/color_picker_bloc.dart';
import 'package:differentColor/bloc/high_score/bloc/high_score_bloc.dart';
import 'package:differentColor/utils/color_generator.dart';
import 'package:differentColor/utils/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class ColorPicker extends StatefulWidget {
  final int numOfColor;
  final int level;

  const ColorPicker({Key key, this.numOfColor, this.level}) : super(key: key);
  @override
  _ColorPickerState createState() => _ColorPickerState();
}

class _ColorPickerState extends State<ColorPicker> {
  ColorPickerBloc _colorPickerBloc;
  Color rightColor;
  Color differentColor;
  int randomNode = 0;
  Random random = Random();
  bool onLongPress = false;

  @override
  void initState() {
    super.initState();
    randomNode = random.nextInt(widget.numOfColor * widget.numOfColor);
    rightColor = UniqueColorGenerator.getColor();
    differentColor = rightColor.withOpacity(0.8);
  }

  EdgeInsets _margin(bool onPress) {
    if (widget.numOfColor >= 3) {
      if (onPress) {
        return EdgeInsets.all(8);
      } else {
        return EdgeInsets.all(5);
      }
    } else {
      if (onPress) {
        return EdgeInsets.all(10);
      } else {
        return EdgeInsets.all(8);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    _colorPickerBloc = BlocProvider.of<ColorPickerBloc>(context);

    return GridView.count(
      crossAxisCount: widget.numOfColor,
      physics: NeverScrollableScrollPhysics(),
      padding: EdgeInsets.all(10),
      children: List.generate(
        widget.numOfColor * widget.numOfColor,
        (index) => GestureDetector(
          key: Key('$index'),
          onTap: () {
            setState(() {
              onLongPress = true;
            });
            Future.delayed(Duration(milliseconds: 150), () {
              setState(() {
                onLongPress = false;
              });
              Future.delayed(Duration(milliseconds: 150), () {
                if (randomNode == index) {
                  _colorPickerBloc.add(PickEvent());
                  setState(() {
                    randomNode =
                        random.nextInt(widget.numOfColor * widget.numOfColor);
                    rightColor = UniqueColorGenerator.getColor();
                    differentColor = rightColor.withOpacity(0.8);
                  });
                } else {
                  _colorPickerBloc.add(
                      GameOverEvent(highScore < widget.level ? true : false));
                }
              });
            });
          },
          onLongPress: () {
            setState(() {
              onLongPress = true;
            });
          },
          onLongPressEnd: (details) {
            setState(() {
              onLongPress = false;
            });
          },
          child: AnimatedContainer(
            margin: _margin(onLongPress),
            duration: Duration(milliseconds: 150),
            decoration: BoxDecoration(
              color: index != randomNode ? rightColor : differentColor,
              shape: BoxShape.circle,
              boxShadow: [
                BoxShadow(
                  color: onLongPress
                      ? AppColors.darkShadow
                      : AppColors.lightShadow,
                  offset: Offset(-3, -3),
                  blurRadius: 10,
                  spreadRadius: 0,
                ),
                BoxShadow(
                  color: onLongPress
                      ? AppColors.lightShadow
                      : AppColors.darkShadow,
                  offset: Offset(3, 3),
                  blurRadius: 10,
                  spreadRadius: 0,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
