
import React from "react"
import { Button, Upload } from "antd"
import { UploadOutlined } from '@ant-design/icons'

export interface LgUploadProps {

}

export function LgUpload(props: LgUploadProps) {
  return <Upload><Button icon={<UploadOutlined />}>Click to Upload</Button></Upload>
}

