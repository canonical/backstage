import{r as v,j as e}from"./iframe-DEJbD2oy.js";import{$ as T}from"./Button-CaYMy3aa.js";import{$ as C}from"./Input-DxEX3cGi.js";import{$ as B}from"./TextField-F0tXeOC4.js";import{c as A}from"./clsx-B-dksMZM.js";import{F as W}from"./FieldLabel-zeC436Mp.js";import{F as _,$ as O}from"./FieldError-DAhZRq-l.js";import{u as S}from"./useStyles-DRxUPOZ5.js";import{h as Y,Y as H,I as j}from"./provider-CvTFx7e-.js";import{F as U}from"./Flex-Bnlfy9rf.js";import"./preload-helper-D9Z9MdNV.js";import"./utils-CwP798Ad.js";import"./Hidden-NnHMGWod.js";import"./useFocusRing-IYzfTN5l.js";import"./usePress-CRWvi72o.js";import"./useFormReset-Dg4_psDp.js";import"./useControlledState-CkwDlHfx.js";import"./RSPContexts-XNlbZ8hb.js";import"./Label-DqbhCeka.js";import"./useLabels-DlztAgz4.js";import"./spacing.props-BMrH9_4k.js";const i=v.forwardRef((a,z)=>{const{className:I,icon:h,size:N="small",label:F,secondaryLabel:P,description:$,isRequired:L,"aria-label":w,"aria-labelledby":y,placeholder:R,...V}=a;v.useEffect(()=>{!F&&!w&&!y&&console.warn("PasswordField requires either a visible label, aria-label, or aria-labelledby for accessibility")},[F,w,y]);const{classNames:D,dataAttributes:o}=S("PasswordField",{size:N}),{classNames:n}=S("TextField",{}),q=P||(L?"Required":null),[l,E]=v.useState(!1);return e.jsxs(B,{className:A(D.root,I),...o,"aria-label":w,"aria-labelledby":y,type:"password",...V,ref:z,children:[e.jsx(W,{label:F,secondaryLabel:q,description:$}),e.jsxs("div",{className:n.inputWrapper,"data-size":o["data-size"],children:[h&&e.jsx("div",{className:n.inputIcon,"data-size":o["data-size"],"aria-hidden":"true",children:h}),e.jsx("div",{className:n.inputAction,children:e.jsx(T,{"data-size":o["data-size"],"data-variant":"tertiary","aria-label":l?"Hide value":"Show value","aria-controls":l?"text":"password","aria-expanded":l,onPress:()=>E(k=>!k),className:D.inputVisibility,children:l?e.jsx(Y,{}):e.jsx(H,{})})}),e.jsx(C,{className:n.input,...h&&{"data-icon":!0},placeholder:R,type:l?"text":"password"})]}),e.jsx(_,{})]})});i.displayName="PasswordField";i.__docgenInfo={description:"@public",methods:[],displayName:"PasswordField",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"An icon to render before the input"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | Partial<Record<Breakpoint, 'small' | 'medium'>>",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Record<Breakpoint, 'small' | 'medium'>"}],raw:"Partial<Record<Breakpoint, 'small' | 'medium'>>"}]},description:`The size of the password field
@defaultValue 'medium'`},placeholder:{required:!1,tsType:{name:"string"},description:"Text to display in the input when it has no value"}},composes:["AriaTextFieldProps","Omit"]};const ge={title:"Backstage UI/PasswordField",component:i,argTypes:{isRequired:{control:"boolean"},icon:{control:"object"}}},r={args:{name:"secret",placeholder:"Enter a secret",style:{maxWidth:"300px"}}},d={args:{...r.args},render:a=>e.jsxs(U,{direction:"row",gap:"4",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(i,{...a,size:"small",icon:e.jsx(j,{name:"sparkling"})}),e.jsx(i,{...a,size:"medium",icon:e.jsx(j,{name:"sparkling"})})]})},c={args:{...r.args,defaultValue:"https://example.com"}},s={args:{...r.args,label:"Label"}},m={args:{...s.args,description:"Description"}},p={args:{...s.args,isRequired:!0}},u={args:{...r.args,isDisabled:!0}},t={args:{...r.args},render:a=>e.jsx(i,{...a,size:"small",icon:e.jsx(j,{name:"sparkling"})})},g={args:{...t.args,isDisabled:!0},render:t.render},b={args:{...s.args},render:a=>e.jsx(O,{validationErrors:{secret:"Invalid secret"},children:e.jsx(i,{...a})})},f={args:{...s.args,validate:a=>a==="admin"?"Nice try!":null}},x={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(W,{htmlFor:"custom-field",id:"custom-field-label",label:"Custom Field"}),e.jsx(i,{id:"custom-field","aria-labelledby":"custom-field-label",name:"custom-field",defaultValue:"Custom Field"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'secret',
    placeholder: 'Enter a secret',
    style: {
      maxWidth: '300px'
    }
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <Flex direction="row" gap="4" style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <PasswordField {...args} size="small" icon={<Icon name="sparkling" />} />
      <PasswordField {...args} size="medium" icon={<Icon name="sparkling" />} />
    </Flex>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultValue: 'https://example.com'
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Label'
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    description: 'Description'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <PasswordField {...args} size="small" icon={<Icon name="sparkling" />} />
}`,...t.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithIcon.args,
    isDisabled: true
  },
  render: WithIcon.render
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args
  },
  render: args => <Form validationErrors={{
    secret: 'Invalid secret'
  }}>
      <PasswordField {...args} />
    </Form>
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    validate: value => value === 'admin' ? 'Nice try!' : null
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <FieldLabel htmlFor="custom-field" id="custom-field-label" label="Custom Field" />
      <PasswordField id="custom-field" aria-labelledby="custom-field-label" name="custom-field" defaultValue="Custom Field" />
    </>
}`,...x.parameters?.docs?.source}}};const be=["Default","Sizes","DefaultValue","WithLabel","WithDescription","Required","Disabled","WithIcon","DisabledWithIcon","ShowError","Validation","CustomField"];export{x as CustomField,r as Default,c as DefaultValue,u as Disabled,g as DisabledWithIcon,p as Required,b as ShowError,d as Sizes,f as Validation,m as WithDescription,t as WithIcon,s as WithLabel,be as __namedExportsOrder,ge as default};
