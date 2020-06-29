/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-17 18:10:16
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-17 21:05:26
 * @FilePath: \lib\components\badge\badge.dart
 */
import 'package:flutter/material.dart';
import 'package:my_chat/utils/style.dart';

/// ddd
class BadgeWidge extends StatefulWidget {
  Color bgcolor;
  String msgnum;
  /// bgcolor 背景颜色
  /// msgnum 数量
  BadgeWidge(
      {Key key, this.bgcolor = ThemeStyle.color_error, this.msgnum = "390"})
      : super(key: key);

  @override
  _BadgeWidgeState createState() => _BadgeWidgeState();
}

class _BadgeWidgeState extends State<BadgeWidge> {
  String a = '123';
  double numWidth =18;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    print(widget.bgcolor);
   
    setState(() {
      numWidth=this.getWidth();
    });
    print('numWidth ${numWidth} ' );
  }

  double getWidth(){
    double width =18;
    if(widget.msgnum?.length>1){
      print(widget.msgnum);
        width=22;
    }else if(widget.msgnum?.length>2){
       width=28;
    }
    print('width${width}');
    return width;
  }

  @override
  Widget build(BuildContext context) {
    return Offstage(
      offstage: widget.msgnum?.length>0?false:true ,
      child: ConstrainedBox(
        constraints: BoxConstraints(
          maxHeight: 18,
          minHeight: 18,
          maxWidth: 28,
          minWidth: 10,
        ),
        child: Container(
          alignment: Alignment.center,
          width:numWidth ,
          padding: EdgeInsets.fromLTRB(4, 0, 4, 0),
          child: Text(
            
            widget.msgnum.length>2?"99+": widget.msgnum,
            softWrap: false,
            overflow: TextOverflow.clip,
            style: TextStyle(
              color: Colors.white,
              fontSize: 12,
            ),
          ),
          decoration: BoxDecoration(
             borderRadius: BorderRadius.circular(10),
            color: widget.bgcolor,
          ),
        ),
      ),
    );
  }
}
