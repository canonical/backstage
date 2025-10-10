import{r as y,j as a}from"./iframe-DEJbD2oy.js";import{m as p,n as g}from"./Menu-BlDGal0g.js";import{I as w}from"./provider-CvTFx7e-.js";import"./Box-CYChlKfl.js";import"./Grid-C2GO-q6s.js";import{F as L}from"./Flex-Bnlfy9rf.js";import"./Container-CwKKKBoF.js";import"./Button-CaNxNdQN.js";import"./Collapsible-hb5bYClV.js";import"./FieldLabel-zeC436Mp.js";import"./SearchField-Bu8fOxAf.js";import"./ButtonIcon-C0HmoAi-.js";import"./ButtonLink-B4JWsjAb.js";import"./RadioGroup-D1C6Rz6k.js";import"./Tabs-BO26pTw4.js";import"./Text-CE4y9vKO.js";import"./TextField-o-Er7aYP.js";import"./Tooltip-CK02CALq.js";import"./ScrollArea-DIOnzeLO.js";import"./Link-CzzhRlzR.js";import"./Select-wk7sOyOb.js";import"./Skeleton-C0XKH9Ki.js";import"./Switch-DhwDCpav.js";import{M}from"./index-CODaiViJ.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./useStyles-DRxUPOZ5.js";import"./useBaseUiId-BMjWzxoo.js";import"./Button-CaYMy3aa.js";import"./utils-CwP798Ad.js";import"./Hidden-NnHMGWod.js";import"./useFocusRing-IYzfTN5l.js";import"./usePress-CRWvi72o.js";import"./RSPContexts-XNlbZ8hb.js";import"./useListState-QzhkFfgA.js";import"./SelectionIndicator-B1oE9DQ7.js";import"./context-BZTTEocf.js";import"./useControlledState-CkwDlHfx.js";import"./useLocalizedStringFormatter-CtnXQ73u.js";import"./VisuallyHidden-DMBu9vb4.js";import"./FieldError-DAhZRq-l.js";import"./useLabels-DlztAgz4.js";import"./isExternalLink-DzQTpl4p.js";import"./Input-DxEX3cGi.js";import"./useFormReset-Dg4_psDp.js";import"./Label-DqbhCeka.js";import"./OverlayArrow-CdywQ3k0.js";import"./spacing.props-BMrH9_4k.js";import"./Link-D2vaWpHR.js";import"./TextField-F0tXeOC4.js";function D(o){let{initialItems:r=[],initialSelectedKeys:c,getKey:i=d=>{var m;return(m=d.id)!==null&&m!==void 0?m:d.key},filter:t,initialFilterText:e=""}=o,[n,s]=y.useState({items:r,selectedKeys:c==="all"?"all":new Set(c||[]),filterText:e}),l=y.useMemo(()=>t?n.items.filter(d=>t(d,n.filterText)):n.items,[n.items,n.filterText,t]);return{...n,items:l,...$({getKey:i},s),getItem(d){return n.items.find(m=>i(m)===d)}}}function $(o,r){let{cursor:c,getKey:i}=o;return{setSelectedKeys(t){r(e=>({...e,selectedKeys:t}))},addKeysToSelection(t){r(e=>e.selectedKeys==="all"?e:t==="all"?{...e,selectedKeys:"all"}:{...e,selectedKeys:new Set([...e.selectedKeys,...t])})},removeKeysFromSelection(t){r(e=>{if(t==="all")return{...e,selectedKeys:new Set};let n=e.selectedKeys==="all"?new Set(e.items.map(i)):new Set(e.selectedKeys);for(let s of t)n.delete(s);return{...e,selectedKeys:n}})},setFilterText(t){r(e=>({...e,filterText:t}))},insert(t,...e){r(n=>T(n,t,...e))},insertBefore(t,...e){r(n=>{let s=n.items.findIndex(l=>i?.(l)===t);if(s===-1)if(n.items.length===0)s=0;else return n;return T(n,s,...e)})},insertAfter(t,...e){r(n=>{let s=n.items.findIndex(l=>i?.(l)===t);if(s===-1)if(n.items.length===0)s=0;else return n;return T(n,s+1,...e)})},prepend(...t){r(e=>T(e,0,...t))},append(...t){r(e=>T(e,e.items.length,...t))},remove(...t){r(e=>{let n=new Set(t),s=e.items.filter(d=>!n.has(i(d))),l="all";if(e.selectedKeys!=="all"){l=new Set(e.selectedKeys);for(let d of t)l.delete(d)}return c==null&&s.length===0&&(l=new Set),{...e,items:s,selectedKeys:l}})},removeSelectedItems(){r(t=>{if(t.selectedKeys==="all")return{...t,items:[],selectedKeys:new Set};let e=t.selectedKeys,n=t.items.filter(s=>!e.has(i(s)));return{...t,items:n,selectedKeys:new Set}})},move(t,e){r(n=>{let s=n.items.findIndex(m=>i(m)===t);if(s===-1)return n;let l=n.items.slice(),[d]=l.splice(s,1);return l.splice(e,0,d),{...n,items:l}})},moveBefore(t,e){r(n=>{let s=n.items.findIndex(m=>i(m)===t);if(s===-1)return n;let d=(Array.isArray(e)?e:[...e]).map(m=>n.items.findIndex(S=>i(S)===m)).sort((m,S)=>m-S);return k(n,d,s)})},moveAfter(t,e){r(n=>{let s=n.items.findIndex(m=>i(m)===t);if(s===-1)return n;let d=(Array.isArray(e)?e:[...e]).map(m=>n.items.findIndex(S=>i(S)===m)).sort((m,S)=>m-S);return k(n,d,s+1)})},update(t,e){r(n=>{let s=n.items.findIndex(l=>i(l)===t);return s===-1?n:{...n,items:[...n.items.slice(0,s),e,...n.items.slice(s+1)]}})}}}function T(o,r,...c){return{...o,items:[...o.items.slice(0,r),...c,...o.items.slice(r)]}}function k(o,r,c){c-=r.filter(e=>e<c).length;let i=r.map(e=>({from:e,to:c++}));for(let e=0;e<i.length;e++){let n=i[e].from;for(let s=e;s<i.length;s++)i[s].from>n&&i[s].from--}for(let e=0;e<i.length;e++){let n=i[e];for(let s=i.length-1;s>e;s--){let l=i[s];l.from<n.to?n.to++:l.from++}}let t=o.items.slice();for(let e of i){let[n]=t.splice(e.from,1);t.splice(e.to,0,n)}return{...o,items:t}}const De={title:"Backstage UI/TagGroup",component:p,argTypes:{selectionMode:{control:{type:"inline-radio"},options:["single","multiple"]},"aria-label":{control:{type:"text"}}},decorators:[o=>a.jsx(M,{children:a.jsx(o,{})})]},u=[{id:"banana",name:"Banana",icon:"bug"},{id:"apple",name:"Apple",icon:"account-circle",isDisabled:!0},{id:"orange",name:"Orange",icon:"eye",isDisabled:!0},{id:"pear",name:"Pear",icon:"heart"},{id:"grape",name:"Grape",icon:"bug"},{id:"pineapple",name:"Pineapple",icon:"eye"},{id:"strawberry",name:"Strawberry",icon:"heart"}],f={args:{"aria-label":"Tag Group"},render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{children:r.name},r.id))})},x={args:{...f.args},render:o=>a.jsxs(L,{direction:"column",children:[a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{size:"small",icon:a.jsx(w,{name:r.icon}),children:r.name},r.id))}),a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{size:"medium",icon:a.jsx(w,{name:r.icon}),children:r.name},r.id))})]})},h={args:{selectionMode:"single","aria-label":"Tag Group"},render:o=>{const[r,c]=y.useState(new Set(["travel"]));return a.jsx(p,{items:u,selectedKeys:r,onSelectionChange:c,...o,children:i=>a.jsx(g,{children:i.name})})}},v={args:{selectionMode:"multiple","aria-label":"Tag Group"},render:o=>{const[r,c]=y.useState(new Set(["travel","shopping"]));return a.jsx(p,{items:u,selectedKeys:r,onSelectionChange:c,...o,children:i=>a.jsx(g,{children:i.name})})}},K={args:{...f.args},render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{icon:r.icon?a.jsx(w,{name:r.icon}):void 0,children:r.name},r.id))})},j={render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{href:`/items/${r.id}`,children:r.name},r.id))})},G={render:o=>a.jsx(p,{...o,children:u.map(r=>a.jsx(g,{isDisabled:r.isDisabled,children:r.name},r.id))})},b={args:{...f.args},render:o=>{const[r,c]=y.useState(new Set(["travel"])),i=D({initialItems:u});return a.jsx(p,{items:i.items,onRemove:t=>i.remove(...t),selectedKeys:r,onSelectionChange:c,...o,children:t=>a.jsx(g,{children:t.name})})}},I={args:{...f.args},render:o=>{const[r,c]=y.useState(new Set(["travel"])),i=D({initialItems:u});return a.jsx(p,{items:i.items,onRemove:t=>i.remove(...t),selectedKeys:r,onSelectionChange:c,...o,children:t=>a.jsx(g,{icon:t.icon?a.jsx(w,{name:t.icon}):void 0,children:t.name})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Tag Group'
  },
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id}>{item.name}</Tag>)}
    </TagGroup>
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <Flex direction="column">
      <TagGroup {...args}>
        {initialList.map(item => <Tag key={item.id} size="small" icon={<Icon name={item.icon} />}>
            {item.name}
          </Tag>)}
      </TagGroup>
      <TagGroup {...args}>
        {initialList.map(item => <Tag key={item.id} size="medium" icon={<Icon name={item.icon} />}>
            {item.name}
          </Tag>)}
      </TagGroup>
    </Flex>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'single',
    'aria-label': 'Tag Group'
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    return <TagGroup items={initialList} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: 'multiple',
    'aria-label': 'Tag Group'
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel', 'shopping']));
    return <TagGroup items={initialList} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
}`,...v.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} icon={item.icon ? <Icon name={item.icon} /> : undefined}>
          {item.name}
        </Tag>)}
    </TagGroup>
}`,...K.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} href={\`/items/\${item.id}\`}>
          {item.name}
        </Tag>)}
    </TagGroup>
}`,...j.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} isDisabled={item.isDisabled}>
          {item.name}
        </Tag>)}
    </TagGroup>
}`,...G.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    const list = useListData({
      initialItems: initialList
    });
    return <TagGroup items={list.items} onRemove={keys => list.remove(...keys)} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
}`,...b.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    const list = useListData({
      initialItems: initialList
    });
    return <TagGroup items={list.items} onRemove={keys => list.remove(...keys)} selectedKeys={selected} onSelectionChange={setSelected} {...args}>
        {item => <Tag icon={item.icon ? <Icon name={item.icon} /> : undefined}>
            {item.name}
          </Tag>}
      </TagGroup>;
  }
}`,...I.parameters?.docs?.source}}};const Le=["Default","Sizes","SelectionModeSingle","SelectionModeMultiple","WithIcon","WithLink","Disabled","RemovingTags","WithIconAndRemoveButton"];export{f as Default,G as Disabled,b as RemovingTags,v as SelectionModeMultiple,h as SelectionModeSingle,x as Sizes,K as WithIcon,I as WithIconAndRemoveButton,j as WithLink,Le as __namedExportsOrder,De as default};
