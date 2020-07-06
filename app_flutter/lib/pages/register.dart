/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-24 12:56:28
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-24 13:09:42
 * @FilePath: \lib\pages\register.dart
 */

import 'package:flutter/material.dart';
import 'package:my_chat/utils/style.dart';

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  GlobalKey<FormState> _formKey = new GlobalKey<FormState>();

  String username, passWord, email;

  bool autovalidate = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false, // 防止部件溢出
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
      ),
      body: Container(
        color: Colors.white,
        padding: EdgeInsets.symmetric(horizontal: 20),
        // width: double.infinity, //撑满宽度

        child: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                Text(
                  '注册',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.w600),
                ),
              ],
            ),

            SizedBox(
              height: 10,
            ),
            Form(
              key: _formKey,
              child: Column(
                children: <Widget>[
                  TextFormField(
                    onSaved: (value) {
                      username = value;
                    },
                    validator: (value) {
                      if (value.isEmpty) {
                        return '用户名不能为空';
                      }
                      return null;
                    },
                    autovalidate: autovalidate,
                    cursorColor: Colors.black, // 光标颜色
                    decoration: InputDecoration(
                      // contentPadding: EdgeInsets.all(20), // 内间距
                      // 设置底部线  正常
                      border: UnderlineInputBorder(
                        borderSide: BorderSide(),
                      ),
                      // 设置底部线  焦点
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Color.fromRGBO(39, 40, 50, 0.5),
                        ),
                      ),
                      errorBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.red,
                        ),
                      ),
                      focusedErrorBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.red,
                        ),
                      ),
                      // errorText: '22',
                      hintText: "请输入用户名",
                      hintMaxLines: 1,
                      helperText: '',
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    onSaved: (value) {
                      email = value;
                    },
                    validator: (value) {
                      if (value.isEmpty) {
                        return '邮箱不能为空';
                      }
                      return null;
                    },
                    autovalidate: autovalidate,
                    cursorColor: Colors.black, // 光标颜色
                    decoration: InputDecoration(
                      // 设置底部线  正常
                      border: UnderlineInputBorder(
                        borderSide: BorderSide(),
                      ),
                      // 设置底部线  焦点
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Color.fromRGBO(39, 40, 50, 0.5),
                        ),
                      ),
                      errorBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.red,
                        ),
                      ),
                      focusedErrorBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.red,
                        ),
                      ),
                      // errorText: '22',
                      hintText: "请输入邮箱",
                      hintMaxLines: 1,
                      helperText: '',
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  TextFormField(
                    onSaved: (value) {
                      passWord = value;
                    },
                    validator: (value) {
                      if (value.isEmpty) {
                        return '密码不能为空';
                      }
                      return null;
                    },
                    autovalidate: autovalidate,
                    cursorColor: Colors.black, // 光标颜色
                    obscureText: true,
                    decoration: InputDecoration(
                      // contentPadding: EdgeInsets.all(10),
                      // 设置底部线  正常
                      border: UnderlineInputBorder(),
                      // 设置底部线  焦点
                      focusedBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Color.fromRGBO(39, 40, 50, 0.5),
                        ),
                      ),
                      errorBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.red,
                        ),
                      ),
                      focusedErrorBorder: UnderlineInputBorder(
                        borderSide: BorderSide(
                          color: Colors.red,
                        ),
                      ),
                      hintText: "请输入密码",
                      hintMaxLines: 1,
                      helperText: '',
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 50,
            ),

            SizedBox(
              width: double.infinity, //撑满宽度
              child: Padding(
                padding: EdgeInsets.fromLTRB(20, 0, 20, 0),
                child: FlatButton(
                  // 设置圆角
                  shape: new StadiumBorder(),
                  onPressed: () {
                    if (_formKey.currentState.validate()) {
                      _formKey.currentState
                          .save(); // 保存一下表单数据  自动调用每个input save方法
                      print(username);
                      print(passWord);
                    } else {
                      setState(() {
                        autovalidate = true;
                      });
                    }
                  },
                  color: ThemeStyle.color_primary,
                  child: Text(
                    '注册',
                    style: TextStyle(fontSize: 16),
                  ),
                ),
              ),
            )
            //
          ],
        ),
      ),
    );
  }
}
