/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode, SizeEnum } from '../common';

export interface TdTagProps {
  /**
   * 标签是否可关闭
   * @default false
   */
  closable?: boolean;
  /**
   * 组件子元素
   */
  content?: string | TNode;
  /**
   * 组件子元素，同 `content`
   */
  default?: string | TNode;
  /**
   * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
   * @default false
   */
  disabled?: boolean;
  /**
   * 标签中的图标，可自定义图标呈现
   */
  icon?: TNode;
  /**
   * 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80
   */
  maxWidth?: string | number;
  /**
   * 标签类型，有三种：方形、圆角方形、标记型
   * @default square
   */
  shape?: 'square' | 'round' | 'mark';
  /**
   * 标签尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 组件风格，用于描述组件不同的应用场景
   * @default default
   */
  theme?: 'default' | 'primary' | 'warning' | 'danger' | 'success';
  /**
   * 标签风格变体
   * @default dark
   */
  variant?: 'dark' | 'light' | 'outline' | 'light-outline';
  /**
   * 点击时触发
   */
  onClick?: (context: { e: MouseEvent }) => void;
  /**
   * 如果关闭按钮存在，点击关闭按钮时触发
   */
  onClose?: (context: { e: MouseEvent }) => void;
}

export interface TdCheckTagProps {
  /**
   * 标签选中的状态，默认风格（theme=default）才有选中态
   */
  checked?: boolean;
  /**
   * 标签选中的状态，默认风格（theme=default）才有选中态，非受控属性
   */
  defaultChecked?: boolean;
  /**
   * 组件子元素；传入数组时：[选中内容，非选中内容]
   */
  content?: string | number | string[] | TNode;
  /**
   * 组件子元素，默认插槽
   */
  default?: string | TNode;
  /**
   * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
   * @default false
   */
  disabled?: boolean;
  /**
   * 标签尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 状态切换时触发
   */
  onChange?: (checked: boolean) => void;
  /**
   * 点击标签时触发
   */
  onClick?: (context: { e: MouseEvent }) => void;
}
