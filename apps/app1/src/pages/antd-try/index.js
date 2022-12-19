import React from "react";
import { Button } from 'antd'
import { LgUpload } from '@zs-jill/components'
import { useEffect } from "react";
import { bigNumberFormatter } from "@zs-jill/utils";

export default function Demo() {
  useEffect(() => {
    test()
  },[])

  function test(){
    const num = bigNumberFormatter(1234123455462)
    console.log(num);
  }
  return <div>
    <Button type="primary">按钮</Button>
    <LgUpload />
  </div>
}