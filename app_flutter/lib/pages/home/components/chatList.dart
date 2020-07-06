import 'package:flutter/material.dart';
import 'package:my_chat/components/badge/badge.dart';

class ChatList extends StatelessWidget {
  final String imageUrl;
  final String msgnum;
  final String title;
  final String subtitle;
  final String trailing;
  const ChatList(
      {Key key,
      this.imageUrl,
      this.msgnum,
      this.title,
      this.subtitle,
      this.trailing})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    print(title);
    return ListTile(
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
        (msgnum != null && msgnum.length > 0)
            ? Positioned(
                child: BadgeWidge(msgnum: '1'),
                right: 0,
                top: 0,
              )
            : const SizedBox()
      ]),
      title: Text('3333'),
      subtitle: Text('33'),
      // trailing: Text(trailing),
    );
  }
}
