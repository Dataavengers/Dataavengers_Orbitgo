import 'package:flutter/material.dart';
import 'package:orbitgo/pages/welcome_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Endless Travel.',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const welcomePage(),
    );
  }
}
