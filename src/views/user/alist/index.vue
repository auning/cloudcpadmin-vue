<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :crud="crud" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import userAlist from '@/api/user/userAlist'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  userAlist.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  userAlist.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const crud = reactive({
  rowSelection: {
    showCheckedAll: true
  },
  searchLabelWidth: '75px',
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  viewLayoutSetting: {
    layout: 'auto',
    cols: 1,
    viewType: 'modal',
    width: 600
  },
  api: userAlist.getList,
  recycleApi: userAlist.getRecycleList,
  add: {
    show: true,
    api: userAlist.save,
    auth: ['user:alist:save']
  },
  edit: {
    show: true,
    api: userAlist.update,
    auth: ['user:alist:update']
  },
  delete: {
    show: true,
    api: userAlist.deletes,
    auth: ['user:alist:delete'],
    realApi: userAlist.realDeletes,
    realAuth: ['user:alist:realDeletes']
  },
  recovery: {
    show: true,
    api: userAlist.recoverys,
    auth: ['user:alist:recovery']
  },
  import: {
    show: true,
    url: 'user/alist/import',
    templateUrl: 'user/alist/downloadTemplate',
    auth: ['user:alist:import']
  },
  export: {
    show: true,
    url: 'user/alist/export',
    auth: ['user:alist:export']
  }
})

const columns = reactive([
  {
    title: "用户ID，主键",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "用户名",
    dataIndex: "username",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "密码",
    dataIndex: "password",
    formType: "input",
    search: true
  },
  {
    title: "用户类型：(100系统用户)",
    dataIndex: "user_type",
    formType: "input",
    search: true
  },
  {
    title: "用户昵称",
    dataIndex: "nickname",
    formType: "input",
    search: true
  },
  {
    title: "手机",
    dataIndex: "phone",
    formType: "input",
    search: true
  },
  {
    title: "用户邮箱",
    dataIndex: "email",
    formType: "input",
    search: true
  },
  {
    title: "用户头像",
    dataIndex: "avatar",
    formType: "input",
    search: true
  },
  {
    title: "个人签名",
    dataIndex: "signed",
    formType: "input",
    search: true
  },
  {
    title: "后台首页类型",
    dataIndex: "dashboard",
    formType: "input",
    search: true
  },
  {
    title: "部门ID",
    dataIndex: "dept_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "状态 (1正常 2停用)",
    dataIndex: "status",
    formType: "input",
    search: true
  },
  {
    title: "最后登陆IP",
    dataIndex: "login_ip",
    formType: "input",
    search: true
  },
  {
    title: "最后登陆时间",
    dataIndex: "login_time",
    formType: "input",
    search: true
  },
  {
    title: "后台设置数据",
    dataIndex: "backend_setting",
    formType: "input",
    search: true
  },
  {
    title: "创建者",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "更新者",
    dataIndex: "updated_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  }
])
</script>
<script> export default { name: 'user:alist' } </script>