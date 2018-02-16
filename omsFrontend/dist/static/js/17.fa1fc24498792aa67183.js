webpackJsonp([17,59],{"3oPl":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("vMJZ"),s=a("EMlb"),l={props:["ruleForm"],data:function(){return{rules:{name:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},projects:[],nices:[{label:"低",value:"0"},{label:"中",value:"1"},{label:"高",value:"2"}],tests:[],users:[]}},created:function(){this.getUsers(),this.getProjects(),this.getTests()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("formdata",t.ruleForm)})},resetForm:function(e){this.$refs[e].resetFields()},getUsers:function(){var e=this,t={groups__name:"ITDept"};Object(r.f)(t).then(function(t){e.users=t.data})},getProjects:function(){var e=this;Object(s.f)().then(function(t){e.projects=t.data})},getTests:function(){var e=this;Object(s.i)().then(function(t){e.tests=t.data})}}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"关联任务",prop:"project"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择关联任务"},model:{value:e.ruleForm.project,callback:function(t){e.$set(e.ruleForm,"project",t)},expression:"ruleForm.project"}},e._l(e.projects,function(e){return a("el-option",{key:e.id,attrs:{value:e.pid}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"关联test",prop:"test"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择关联test"},model:{value:e.ruleForm.test,callback:function(t){e.$set(e.ruleForm,"test",t)},expression:"ruleForm.test"}},e._l(e.tests,function(e){return a("el-option",{key:e.id,attrs:{value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"严重程度",prop:"degree"}},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],"show-text":"",texts:["E","D","C","B","A"]},model:{value:e.ruleForm.degree,callback:function(t){e.$set(e.ruleForm,"degree",t)},expression:"ruleForm.degree"}}),e._v(" "),a("a",{staticClass:"tips"},[e._v("Tip：星星代表问题严重程度，星星越多，越严重")])],1),e._v(" "),a("el-form-item",{attrs:{label:"优先级",prop:"nice"}},[a("el-select",{attrs:{placeholder:"请选择优先级"},model:{value:e.ruleForm.nice,callback:function(t){e.$set(e.ruleForm,"nice",t)},expression:"ruleForm.nice"}},e._l(e.nices,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"测试人员",prop:"test_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择用户"},model:{value:e.ruleForm.test_user,callback:function(t){e.$set(e.ruleForm,"test_user",t)},expression:"ruleForm.test_user"}},e._l(e.users,function(e){return a("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"分配给",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择用户"},model:{value:e.ruleForm.action_user,callback:function(t){e.$set(e.ruleForm,"action_user",t)},expression:"ruleForm.action_user"}},e._l(e.users,function(e){return a("el-option",{key:e.id,attrs:{value:e.username}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"测试时间",prop:"test_time"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},model:{value:e.ruleForm.test_time,callback:function(t){e.$set(e.ruleForm,"test_time",t)},expression:"ruleForm.test_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"关闭时间",prop:"end_time"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期时间"},model:{value:e.ruleForm.end_time,callback:function(t){e.$set(e.ruleForm,"end_time",t)},expression:"ruleForm.end_time"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即更新")])],1)],1)},n=[],i={render:o,staticRenderFns:n},c=i,u=a("VU/8"),d=u(l,c,!1,null,null,null);t.default=d.exports},"NW4/":function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},"d/+Y":function(e,t,a){var r=a("NW4/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("6d784ece",r,!0)},uR2v:function(e,t,a){"use strict";function r(e){a("d/+Y")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("EMlb"),l=a("QmSG"),o=a("TDrc"),n=a("3oPl"),i=a("28C8"),c={components:{addGroup:o.default,editGroup:n.default,getProject:s.f,showProject:i.default},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,limit:l.LIMIT,offset:"",pagesize:l.pagesize,pageformat:l.pageformat,addForm:!1,editForm:!1,rowdata:{},Bug_Nice:{0:"低",1:"中",2:"高"},Bug_Status:{0:"新建",1:"打开",2:"关闭",3:"已修复",4:"暂不处理",5:"重新打开"},showprojectForm:!1,changestatusForm:!1,project:"",bugdata:{id:"",status:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this,t={limit:this.limit,offset:this.offset,name__contains:this.searchdata};Object(s.e)(t).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},getDialogStatus:function(e){this.addForm=e,setTimeout(this.fetchData,1e3)},editGroupSubmit:function(e){var t=this;Object(s.q)(this.rowdata.id,e).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"}),t.fetchData(),t.editForm=!1}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},deleteGroup:function(e){var t=this;Object(s.a)(e).then(function(e){t.$message({message:"恭喜你，删除成功",type:"success"}),t.fetchData()}).catch(function(e){t.$message.error("删除失败"),console.log(e)})},closeEditForm:function(){this.fetchData()},handleEdit:function(e){this.editForm=!0,this.rowdata=e},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.limit=e,this.fetchData()},handleCurrentChange:function(e){this.offset=(e-1)*l.LIMIT,this.fetchData()},showProject:function(e){var t=this;this.showprojectForm=!0;var a={pid:e};Object(s.f)(a).then(function(e){t.project=e.data[0]})},changeStatus:function(e){this.bugdata.id=e.id,this.bugdata.status=e.status,this.changestatusForm=!0},UpdateStatus:function(){var e=this;Object(s.j)(this.bugdata.id,this.bugdata).then(function(){e.changestatusForm=!1,e.fetchData()})}}},u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.addForm=!0}}},[e._v("新建")])],1),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.searchdata,callback:function(t){e.searchdata=t},expression:"searchdata"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"测试人员",prop:"test_user"}},[a("span",[e._v(e._s(t.row.test_user))])]),e._v(" "),a("el-form-item",{attrs:{label:"分配给",prop:"action_user"}},[a("span",[e._v(e._s(t.row.action_user))])]),e._v(" "),a("el-form-item",{attrs:{label:"测试时间",prop:"test_time"}},[a("span",[e._v(e._s(t.row.test_time))])]),e._v(" "),a("el-form-item",{attrs:{label:"关闭时间",prop:"end_time"}},[a("span",[e._v(e._s(t.row.end_time))])]),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("span",[e._v(e._s(t.row.desc))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"degree",label:"严重程度"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#ff1425"],disabled:""},model:{value:t.row.degree,callback:function(a){e.$set(t.row,"degree",a)},expression:"scope.row.degree"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"nice",label:"优先级"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini"}},[e._v(e._s(e.Bug_Nice[t.row.nice]))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.changeStatus(t.row)}}},[e._v(e._s(e.Bug_Status[t.row.status]))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"project",label:"关联任务"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.showProject(t.row.project)}}},[e._v(e._s(t.row.project))])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"test",label:"关联test"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){e.handleEdit(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.deleteGroup(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)]),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("add-group",{on:{DialogStatus:e.getDialogStatus}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t},close:e.closeEditForm}},[a("edit-group",{attrs:{ruleForm:e.rowdata},on:{formdata:e.editGroupSubmit}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.showprojectForm},on:{"update:visible":function(t){e.showprojectForm=t}}},[a("show-project",{attrs:{ruleForm:e.project}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.changestatusForm},on:{"update:visible":function(t){e.changestatusForm=t}}},[a("el-form",[a("el-form-item",{attrs:{model:e.bugdata,label:"当前状态"}},[a("span",[e._v(e._s(e.Bug_Status[e.bugdata.status]))])]),e._v(" "),a("el-form-item",{attrs:{model:e.bugdata,label:"状态修改"}},[a("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.bugdata.status,callback:function(t){e.$set(e.bugdata,"status",t)},expression:"bugdata.status"}},e._l(e.Bug_Status,function(e,t){return a("el-option",{key:e.id,attrs:{label:e,value:t}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.UpdateStatus}})],1)],1)],1)],1)},d=[],m={render:u,staticRenderFns:d},p=m,f=a("VU/8"),b=r,h=f(c,p,!1,b,null,null);t.default=h.exports}});