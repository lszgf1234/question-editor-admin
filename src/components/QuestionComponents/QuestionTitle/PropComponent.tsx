import React, { FC, useEffect } from 'react'
import { Form, Input, Select, Checkbox } from 'antd'
import { QuestionTitlePropsType } from './interface'

const PropComponent: FC<QuestionTitlePropsType> = (props: QuestionTitlePropsType) => {
  const { text, level, isCenter, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      text,
      level,
      isCenter,
    })
  }, [text, level, isCenter])

  function handleValueChange() {
    if (onChange) {
      onChange(form.getFieldsValue())
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleValueChange}
      initialValues={{ text, level, isCenter }}
      disabled={disabled}
    >
      <Form.Item
        label="标题内容"
        name="text"
        rules={[{ required: true, message: '请输入标题内容' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="层级" name="level">
        <Select
          options={[
            { value: 1, text: 1 },
            { value: 2, text: 2 },
            { value: 3, text: 3 },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
/** 业务编辑器完成过程
 * 需求分析
 *
 * 设计:
 *  技术方案设计
 *    UI 组件设计
 *    组件数据结构设计：一个问卷的基本信息、每个组件的信息
 *    状态管理
 *    问卷组件设计
 *    API设计
 * store
 *  存储全部元始数据
 *  存储选中ID
 *  其他位置信息根据选中id从元数据中获取
 * 原则：
 *  先设计数据结构
 *
 * 开发过程
 *  显示问卷列表
 *  组件库
 *  组件属性
 *  工具栏
 *  其他组件
 *  图层
 *  页面信息
 *  保存和发布
 *  拖拽排序
 *  撤销重做
 *
 * 注意：
 *  任意组件需要前端自己生成唯一标识fe_id.原因，因为有新增，前端需要唯一标识，但是此时还未保存数据库。
 *  api数据获取使用自定义hooks
 * */
