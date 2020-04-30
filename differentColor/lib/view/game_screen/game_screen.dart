import 'package:differentColor/bloc/color_picker/bloc/color_picker_bloc.dart';
import 'package:differentColor/bloc/high_score/bloc/high_score_bloc.dart';
import 'package:differentColor/utils/utils.dart';
import 'package:differentColor/view/game_screen/color_picker.dart';
import 'package:differentColor/widget/neu_button.dart';
import 'package:differentColor/widget/neu_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class GameScreen extends StatefulWidget {
  @override
  _GameScreenState createState() => _GameScreenState();
}

class _GameScreenState extends State<GameScreen>
    with SingleTickerProviderStateMixin {
  ColorPickerBloc _colorPickerBloc;
  HighScoreBloc _highScoreBloc;
  int level = 1;
  AnimationController _animationController;
  Animation _animation;

  @override
  void dispose() {
    super.dispose();
    _animationController.dispose();
  }

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      vsync: this,
      duration: Duration(seconds: 4),
    );
    _animation = Tween<double>(begin: 0, end: 4).animate(_animationController);

    _animationController.addListener(() {
      if (_animation.value == 4) {
        _colorPickerBloc.add(GameOverEvent(
          level > highScore ? true : false,
        ));
      }
      setState(() {});
    });

    _animationController.forward();
  }

  int numOfColorPerLevel(int level) {
    if (level < 10) {
      return 2;
    } else if (level < 20) {
      return 3;
    } else if (level < 30) {
      return 4;
    } else if (level < 100) {
      return 5;
    } else {
      return 6;
    }
  }

  @override
  Widget build(BuildContext context) {
    _colorPickerBloc = BlocProvider.of<ColorPickerBloc>(context);
    _highScoreBloc = BlocProvider.of<HighScoreBloc>(context);

    return Scaffold(
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Theme.of(context).scaffoldBackgroundColor.mix(Colors.white, .1),
              AppColors.darkShadow.mix(Colors.white, .75),
            ],
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              children: [
                Text(
                  'Time: ',
                  style: TextStyle(
                    fontFamily: 'CabinSketch',
                    fontWeight: FontWeight.w700,
                    fontSize: 40,
                    color: AppColors.textColor,
                  ),
                ),
                SizedBox(height: 10),
                AnimatedBuilder(
                  animation: _animation,
                  builder: (context, child) => Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 30),
                    child: NeuSlider(
                      height: 20,
                      percent: (4 - _animation.value) / 4,
                      width: MediaQuery.of(context).size.height / 2,
                    ),
                  ),
                ),
                SizedBox(height: 10),
                Text(
                  'Level: $level',
                  style: TextStyle(
                    fontFamily: 'CabinSketch',
                    fontWeight: FontWeight.w700,
                    fontSize: 40,
                    color: AppColors.textColor,
                  ),
                ),
              ],
            ),
            BlocConsumer(
              bloc: _colorPickerBloc,
              listener: (context, state) {
                if (state is ColorPickerDone) {
                  _animationController.value = 0;
                  _animationController.forward();
                  setState(() {
                    level++;
                  });
                }
                if (state is ColorPickerGameOver) {
                  _animationController.reverse();
                  if (state.isNewHighScore) {
                    _highScoreBloc.add(SetHighScoreEvent(level));
                  }
                }
              },
              builder: (BuildContext context, state) {
                if (state is ColorPickerWaitting ||
                    state is ColorPickerInitial ||
                    state is ColorPickerDone) {
                  return Padding(
                    padding: const EdgeInsets.symmetric(vertical: 20),
                    child: SizedBox(
                      height: MediaQuery.of(context).size.height / 2,
                      width: MediaQuery.of(context).size.height / 2,
                      child: ColorPicker(
                        level: level,
                        numOfColor: numOfColorPerLevel(level),
                      ),
                    ),
                  );
                }
                if (state is ColorPickerGameOver) {
                  if (state.isNewHighScore) {
                    return _buildGameOverNoti(context, true);
                  }
                }
                return _buildGameOverNoti(context, false);
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildGameOverNoti(BuildContext context, bool isNewHighScore) {
    return Padding(
      padding: EdgeInsets.all(20),
      child: NeuButton(
        position: 30,
        height: MediaQuery.of(context).size.height / 2,
        width: MediaQuery.of(context).size.height / 2,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Text(
                  "Game Over!",
                  style: TextStyle(
                    fontFamily: 'CabinSketch',
                    fontWeight: FontWeight.w700,
                    color: AppColors.textColor,
                    fontSize: 40,
                  ),
                ),
                isNewHighScore
                    ? Column(
                        children: [
                          Text(
                            "Congratulation!!!",
                            style: TextStyle(
                              fontFamily: 'CabinSketch',
                              fontWeight: FontWeight.w700,
                              color: Colors.blue,
                              fontSize: 20,
                            ),
                          ),
                          Text(
                            "Level $level is your new high score!",
                            style: TextStyle(
                              fontFamily: 'CabinSketch',
                              fontWeight: FontWeight.w700,
                              color: Colors.blue,
                              fontSize: 20,
                            ),
                          ),
                        ],
                      )
                    : Container(height: 0),
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                NeuButton(
                  position: 5,
                  height: MediaQuery.of(context).size.height / 10,
                  width: MediaQuery.of(context).size.height / 10,
                  child: Icon(
                    Icons.refresh,
                    size: 35,
                    color: AppColors.textColor,
                  ),
                  onTap: () {
                    Future.delayed(
                      Duration(milliseconds: 600),
                      () {
                        setState(() {
                          level = 1;
                          _colorPickerBloc.add(ReplayEvent());
                        });
                      },
                    );
                  },
                ),
                NeuButton(
                  position: 5,
                  height: MediaQuery.of(context).size.height / 10,
                  width: MediaQuery.of(context).size.height / 10,
                  child: Icon(
                    Icons.close,
                    size: 35,
                    color: AppColors.textColor,
                  ),
                  onTap: () {
                    Future.delayed(
                      Duration(milliseconds: 600),
                      () {
                        Navigator.pop(context);
                      },
                    );
                  },
                ),
              ],
            ),
          ],
        ),
        onTap: () {},
      ),
    );
  }
}
