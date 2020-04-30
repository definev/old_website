import 'package:differentColor/utils/utils.dart';
import 'package:flutter/material.dart';

class NeuSlider extends StatefulWidget {
  final double percent;
  final double height;
  final double width;
  const NeuSlider({
    Key key,
    @required this.percent,
    @required this.height,
    @required this.width,
  }) : super(key: key);

  @override
  _NeuSliderState createState() => _NeuSliderState();
}

class _NeuSliderState extends State<NeuSlider>
    with SingleTickerProviderStateMixin {
  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: Duration(milliseconds: 300),
      curve: Curves.decelerate,
      height: widget.height,
      width: widget.width,
      decoration: BoxDecoration(
        color: AppColors.mainBackground,
        borderRadius: BorderRadius.circular(10),
        gradient: LinearGradient(
          colors: [
            Theme.of(context).scaffoldBackgroundColor.mix(Colors.white, .1),
            AppColors.darkShadow.mix(Colors.white, .6),
          ],
        ),
        boxShadow: [
          BoxShadow(
            color: AppColors.darkShadow,
            offset: Offset(-3, -3),
            blurRadius: 10,
            spreadRadius: 0,
          ),
          BoxShadow(
            color: AppColors.lightShadow,
            offset: Offset(3, 3),
            blurRadius: 10,
            spreadRadius: 0,
          ),
        ],
      ),
      child: Align(
        alignment: Alignment.centerLeft,
        child: AnimatedContainer(
          duration: Duration(milliseconds: 300),
          curve: Curves.decelerate,
          height: widget.height,
          width: widget.percent * widget.width,
          decoration: BoxDecoration(
            color: AppColors.sliderColor,
            borderRadius: BorderRadius.circular(10),
          ),
        ),
      ),
    );
  }
}
