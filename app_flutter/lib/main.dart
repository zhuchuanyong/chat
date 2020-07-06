/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-17 12:45:30
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-24 12:59:04
 * @FilePath: \lib\main.dart
 */
import 'package:flutter/material.dart';

import 'pages/home/home.dart';
import 'pages/login.dart';
import 'pages/register.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // primarySwatch: Colors.white, // Material 主题色
        primaryColor: Colors.white, // App 顶部导航栏状态栏颜色
      ),
      home: HomePage(),
      // home: LoginPage(),
      // home: RegisterPage(),
    );
  }
}
