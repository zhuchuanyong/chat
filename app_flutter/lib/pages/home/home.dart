/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-17 15:35:14
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-18 22:32:26
 * @FilePath: \lib\pages\home\home.dart
 */
import 'package:flutter/material.dart';
import 'package:my_chat/components/badge/badge.dart';
import 'package:my_chat/utils/style.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Widget> ListChat= [];

  void getListData() {

    ListChat.add(
        ListTile(
          leading: Stack(children: [
            Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                image: DecorationImage(
                  image: AssetImage('assets/images/avatar.png'),
                ),
              ),
            ),
            Positioned(
              child: BadgeWidge(msgnum: '2'),
              right: 0,
              top: 0,
            )
          ]),
          title: Text('好友申请'),
          subtitle: Text('茫茫人海,相遇便是缘分'),
          trailing: Text(''),
        ),
      );
    for (var i = 0; i < 20; i++) {
      ListChat.add(
        ListTile(
          leading: Stack(children: [
            Container(
              width: 48,
              height: 48,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                image: DecorationImage(
                  image: AssetImage('assets/images/avatar.png'),
                ),
              ),
            ),
            Positioned(
              child: BadgeWidge(msgnum: '20'),
              right: 0,
              top: 0,
            )
          ]),
          title: Text('马化腾'),
          subtitle: Text('有没有兴趣加入腾讯'),
          trailing: Text('7:45'),
        ),
      );
    }
  }
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    this.getListData();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // 解除父元素对子元素的宽高限制
        leading: UnconstrainedBox(
          child: Container(
            width: 34,
            height: 34,
            // 设置背景图片和圆角
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8),
              image: DecorationImage(
                  image: AssetImage(
                'assets/images/avatar.png',
              )),
            ),
          ),
        ),
        title: Text('IM'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {},
          ),
          IconButton(
            icon: Icon(Icons.add),
            onPressed: () {},
          )
        ],
      ),
      body: Container(
        child: ListView(
          children:ListChat.toList(),
        ),
      ),
    );
  }
}
