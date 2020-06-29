/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-17 12:59:50
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-17 15:30:09
 * @FilePath: \lib\utils\style.dart
 */

import 'dart:ui';

/**
 * 定义主题样式变量
 */
class ThemeStyle {
  // 行为相关颜色
  static const color_primary = Color.fromRGBO(255, 228, 49, 1);
  static const color_success = Color.fromRGBO(87, 153, 255, 1);
  static const color_warning = Color.fromRGBO(255, 93, 91, 1);
  static const color_error = Color.fromRGBO(255, 93, 91, 1);

  // 文字基本颜色
   static const text_color = Color.fromRGBO(30, 40, 50, 1); // 基本色
   static const text_color_inverse = Color(0xFFE431); // 反色
   static const text_color_grey = Color.fromRGBO(39, 40, 50, 0.6); // 辅助灰色 如加载更多提示信息
   static const text_color_placeholder = Color(0x808080); 
   static const text_color_disable = Color.fromRGBO(39, 40, 50, 0.4); 

   //背景颜色
    static const bg_color = Color(0xFFF); 
    static const bg_color_grey = Color.fromRGBO(243, 244, 246, 1);
    static const bg_color_hover = Color.fromRGBO(39, 40, 50, 0.2); // 点击状态颜色
    static const bg_color_mask = Color.fromRGBO(0, 0, 0, 0.4); //遮罩颜色

    // 边框颜色
    static const border_color = Color.fromRGBO(39, 40, 50, 0.1);

    // 尺寸变量
    // 文字尺寸
    static const font_size_sm =12;
    static const font_size_base =14;
    static const font_size_lg =16;

    // 图片尺寸
    static const img_size_sm =40;
    static const img_size_base =48;
    static const img_size_lg =52;

    
}
