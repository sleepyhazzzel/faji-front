import{U as X,T as Y,r as i,X as I,Y as _,Z as J,h as e,a0 as l,aW as W,a2 as Z,ab as G,aX as H,a4 as o,V as v,a7 as K,a8 as L,ag as T,J as w,a5 as h,a6 as U,aA as O,$ as P,aj as Q,ai as ee,ak as k,aY as z}from"./index-c46f0e99.js";import{u as ae,a as C}from"./vee-validate.esm-e9ace00d.js";import{v as le}from"./index-ee6bba0e.js";import{c as te,a as y}from"./index.esm-639fe0e0.js";import{V as oe}from"./VContainer-125b0786.js";import{V as D,a as p}from"./VRow-40c19eb6.js";import{V as se,a as ne}from"./VToolbar-d79ef97d.js";import{V as re}from"./VForm-180099cd.js";const ue={class:"third"},be={__name:"ProfileView",setup(ie){const{apiAuth:A}=G(),s=X(),g=Y(),u=i(!1),B=i(null),V=i(!1),j=n=>{V.value=!0},F=()=>{V.value=!1,B.value.deleteFileRecord()},b=i(!1),E=te({account:y().required("缺少使用者帳號").test("isEmail","信箱格式錯誤",n=>le.isEmail(n)),name:y().required("缺少使用者名稱"),phone:y()}),{handleSubmit:R,isSubmitting:S}=ae({validationSchema:E,initialValues:{account:"",name:"",phone:""}}),d=C("account"),c=C("name"),m=C("phone");d.value.value=s.account,c.value.value=s.name,m.value.value=s.phone;const $=()=>{d.value.value=s.account,c.value.value=s.name,m.value.value=s.phone,u.value=!1},N=R(async n=>{var t,r;try{await A.patch("/users/self",n),console.log(n),s.getProfile(),g({text:"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"third",location:"center"}}),u.value=!1}catch(a){console.log(a);const x=((r=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";g({text:x,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"seventh",location:"center"}})}}),f=i([]),M=i([]),q=async()=>{var n,t,r;if(b.value=!0,!((n=f.value[0])!=null&&n.error)){try{const a=new FormData;f.value.length>0&&a.append("image",f.value[0].file),await A.patch("/users/avatar",a),s.getProfile(),g({text:"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"third",location:"bottom"}}),F()}catch(a){console.log(a);const x=((r=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";g({text:x,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"seventh",location:"bottom"}})}b.value=!1}};return(n,t)=>{const r=I("VueFileAgent");return _(),J(Z,null,[e(oe,null,{default:l(()=>[e(D,{class:"justify-center pt-10"},{default:l(()=>[e(p,{cols:"12",class:"text-center",sm:"12",md:"6",lg:"6"},{default:l(()=>[e(H,{image:o(s).avatar,size:"260"},null,8,["image"]),e(v,{icon:"mdi-pencil",size:"x-small",color:"third",style:{"vertical-align":"bottom"},onClick:j}),K("h2",ue,L(o(s).account),1)]),_:1}),e(p,{cols:"12",sm:"12",md:"6",lg:"6"},{default:l(()=>[e(T,{class:"bg-eigth"},{default:l(()=>[e(se,{color:"third",flat:""},{default:l(()=>[e(w,{class:"ps-8",icon:"mdi-account"}),e(ne,{class:"font-weight-bold"},{default:l(()=>[h("個人資料")]),_:1}),e(U),e(v,{icon:""},{default:l(()=>[e(O,{"leave-absolute":""},{default:l(()=>[u.value?(_(),P(w,{key:0,onClick:$,icon:"mdi-close"})):(_(),P(w,{key:1,icon:"mdi-pencil",onClick:t[0]||(t[0]=a=>u.value=!0)}))]),_:1})]),_:1})]),_:1}),e(re,{onSubmit:Q(o(N),["prevent"]),disabled:!u.value||o(S)},{default:l(()=>[e(ee,{class:"pa-10"},{default:l(()=>[e(D,null,{default:l(()=>[e(p,{cols:"12",class:"pb-0"},{default:l(()=>[e(k,{label:"帳號",variant:"outlined",density:"comfortable",modelValue:o(d).value.value,"onUpdate:modelValue":t[1]||(t[1]=a=>o(d).value.value=a),"error-messages":o(d).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(p,{cols:"12",class:"pb-0"},{default:l(()=>[e(k,{label:"姓名",variant:"outlined",density:"comfortable",modelValue:o(c).value.value,"onUpdate:modelValue":t[2]||(t[2]=a=>o(c).value.value=a),"error-messages":o(c).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(p,{cols:"12",class:"pb-0"},{default:l(()=>[e(k,{label:"電話",variant:"outlined",density:"comfortable",modelValue:o(m).value.value,"onUpdate:modelValue":t[3]||(t[3]=a=>o(m).value.value=a),"error-messages":o(m).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1}),e(z,null,{default:l(()=>[e(v,{color:"forth",size:"x-large",class:"font-weight-bold d-flex w-100",variant:"tonal",type:"submit",loading:o(S),disabled:!u.value},{default:l(()=>[h(" 確認修改個人資料 ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),e(W,{modelValue:V.value,"onUpdate:modelValue":t[6]||(t[6]=a=>V.value=a),width:"300px"},{default:l(()=>[e(T,{rounded:"xl",class:"px-5 pt-5"},{default:l(()=>[e(r,{modelValue:f.value,"onUpdate:modelValue":t[4]||(t[4]=a=>f.value=a),rawModelValue:M.value,"onUpdate:rawModelValue":t[5]||(t[5]=a=>M.value=a),accept:"image/jpeg, image/png","max-size":"1MB","error-text":{type:"檔案格式不支援, 只接受 .jepg .png",size:"檔案大小超過 1MB"},deletable:"","help-text":"選擇大頭貼圖片或拖曳到這裡","max-files":1,ref_key:"fileAgent",ref:B},null,8,["modelValue","rawModelValue","error-text"]),e(z,null,{default:l(()=>[e(U),e(v,{color:"seventh",rounded:"",onClick:F,disabled:b.value},{default:l(()=>[h("取消")]),_:1},8,["disabled"]),e(v,{color:"forth",rounded:"",onClick:q,disabled:b.value},{default:l(()=>[h("送出")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}};export{be as default};
