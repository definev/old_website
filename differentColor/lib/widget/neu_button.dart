import 'package:differentColor/utils/utils.dart';
import 'package:flutter/material.dart';

class NeuButton extends StatefulWidget {
  final Widget child;
  final double height;
  final double width;
  final double position;
  final VoidCallback onTap;
  final bool isChoose;
  const NeuButton({
    Key key,
    @required this.child,
    @required this.position,
    this.height,
    this.width,
    this.onTap,
    this.isChoose = false,
  }) : super(key: key);

  @override
  _NeuButtonState createState() => _NeuButtonState();
}

class _NeuButtonState extends State<NeuButton>
    with SingleTickerProviderStateMixin {
  bool onLongPress = false;
  AnimationController animationController;
  Animation animation;
  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
      duration: Duration(milliseconds: 300),
      vsync: this,
    );
    animation = CurvedAnimation(
      curve: Curves.decelerate,
      parent: animationController,
    );
    animationController.addListener(() {
      setState(() {});
    });
  }

  @override
  void dispose() {
    super.dispose();
    animationController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        setState(() {
          onLongPress = true;
          animationController.forward();
        });
        Future.delayed(Duration(milliseconds: 300), () {
          setState(() {
            onLongPress = false;
            animationController.reverse();
          });
        });
        widget.onTap();
      },
      onLongPress: () {
        setState(() {
          onLongPress = true;
          animationController.forward();
        });
      },
      onLongPressEnd: (onLongPressEnd) {
        setState(() {
          onLongPress = false;
          animationController.reverse();
        });
      },
      child: AnimatedContainer(
        duration: Duration(milliseconds: 300),
        curve: Curves.decelerate,
        height: widget.height ?? MediaQuery.of(context).size.height / 2,
        width: widget.width ?? MediaQuery.of(context).size.width - 100,
        decoration: BoxDecoration(
          color: AppColors.mainBackground,
          borderRadius: BorderRadius.circular(10),
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              onLongPress
                  ? AppColors.darkShadow.mix(Colors.white, .75)
                  : Theme.of(context)
                      .scaffoldBackgroundColor
                      .mix(Colors.white, .1),
              onLongPress
                  ? Theme.of(context)
                      .scaffoldBackgroundColor
                      .mix(Colors.white, .1)
                  : AppColors.darkShadow.mix(Colors.white, .75),
            ],
          ),
          boxShadow: [
            BoxShadow(
              color: onLongPress
                  ? AppColors.darkShadow.mix(Colors.white, .7)
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
        child: Stack(
          children: [
            Positioned.fill(
              top: animation.value * widget.position,
              child: widget.child,
            ),
          ],
        ),
      ),
    );
  }
}
