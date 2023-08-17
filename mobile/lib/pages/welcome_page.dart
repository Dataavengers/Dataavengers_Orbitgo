import 'package:flutter/material.dart';
import 'package:orbitgo/constatant.dart';

class welcomePage extends StatelessWidget {
  const welcomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints viewportConstraints) {
        return SingleChildScrollView(
          child: ConstrainedBox(
            constraints: BoxConstraints(
              minHeight: viewportConstraints.maxHeight,
            ),
            child: Column(
              children: <Widget>[
                Container(
                  child: Stack(
                    children: <Widget>[
                      Image.asset(
                        bgImage,
                        fit: BoxFit.fill,
                        height: MediaQuery.of(context).size.height,
                        width: MediaQuery.of(context).size.width,
                      ),
                      const Padding(
                        padding: EdgeInsets.only(top: 500, left: 20),
                        child: Text(
                          "Go beyond",
                          style: TextStyle(
                            fontSize: 55,
                            color: Colors.white,
                            backgroundColor: Colors.transparent,
                            fontWeight: FontWeight.w800,
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 580),
                        child: Row(
                          children: const <Widget>[
                            Padding(
                              padding: EdgeInsets.only(left: 25),
                              child: Text(
                                "with",
                                style: TextStyle(
                                  fontSize: 25,
                                  color: Colors.white,
                                  backgroundColor: Colors.transparent,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                            Padding(
                              padding: EdgeInsets.only(left: 20),
                              child: Text(
                                AppName,
                                style: TextStyle(
                                  fontSize: 35,
                                  color: Color.fromRGBO(85, 145, 169, 1),
                                  backgroundColor: Colors.transparent,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      }),
    );
  }
}
