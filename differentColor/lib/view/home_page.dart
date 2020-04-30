import 'package:differentColor/bloc/color_picker/bloc/color_picker_bloc.dart';
import 'package:differentColor/bloc/high_score/bloc/high_score_bloc.dart';
import 'package:differentColor/utils/utils.dart';
import 'package:differentColor/view/game_screen/game_screen.dart';
import 'package:differentColor/widget/neu_button.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:page_transition/page_transition.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  HighScoreBloc _highScoreBloc;
  bool isInit = false;

  @override
  Widget build(BuildContext context) {
    _highScoreBloc = Provider.of<HighScoreBloc>(context);
    if (isInit == false) {
      _highScoreBloc.add(OpenHighScoreEvent());
      isInit = true;
    }
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
            Text(
              'Color Game',
              style: TextStyle(
                fontWeight: FontWeight.w100,
                fontFamily: 'Monoton',
                fontSize: 35,
                color: AppColors.textColor,
              ),
              textAlign: TextAlign.center,
            ),
            NeuButton(
              position: 10,
              height: 100,
              width: 200,
              child: Center(
                child: Text(
                  'Play',
                  style: TextStyle(
                    fontWeight: FontWeight.w700,
                    fontFamily: 'FrederickatheGreat',
                    fontSize: 40,
                    color: AppColors.textColor,
                  ),
                ),
              ),
              onTap: () {
                Future.delayed(
                  Duration(milliseconds: 600),
                  () {
                    Navigator.push(
                      context,
                      PageTransition(
                        type: PageTransitionType.rightToLeftWithFade,
                        child: BlocProvider<ColorPickerBloc>(
                          create: (context) => ColorPickerBloc(),
                          child: GameScreen(),
                        ),
                      ),
                    );
                  },
                );
              },
            ),
            BlocBuilder(
              bloc: _highScoreBloc,
              builder: (context, state) {
                if (state is HighScoreValue) {
                  return Text(
                    'High score:    ${state.score}',
                    style: TextStyle(
                      fontWeight: FontWeight.w100,
                      fontFamily: 'Monoton',
                      fontSize: 35,
                      color: AppColors.textColor,
                    ),
                    textAlign: TextAlign.center,
                  );
                } else {
                  return Text(
                    'High score: 0',
                    style: TextStyle(
                      fontWeight: FontWeight.w100,
                      fontFamily: 'Monoton',
                      fontSize: 35,
                      color: AppColors.textColor,
                    ),
                    textAlign: TextAlign.center,
                  );
                }
              },
            ),
          ],
        ),
      ),
    );
  }
}
