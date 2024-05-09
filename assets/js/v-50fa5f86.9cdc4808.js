"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47118],{675664:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-50fa5f86","path":"/devices/404049D.html","title":"Müller Licht 404049D control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Müller Licht 404049D control via MQTT","description":"Integrate your Müller Licht 404049D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-26T06:45:18.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Groups binding","slug":"groups-binding","link":"#groups-binding","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1715286044000},"filePathRelative":"devices/404049D.md"}')},663462:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(166252);const l=(0,n._)("h1",{id:"muller-licht-404049d",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#muller-licht-404049d","aria-hidden":"true"},"#"),(0,n.Uk)(" Müller Licht 404049D")],-1),a=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),o=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"404049D")],-1),s=(0,n._)("td",null,"Vendor",-1),d=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Tint dim remote control")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"action, linkquality")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/404049D.png",alt:"Müller Licht 404049D"})])],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Remove the battery cover and use the cover to press the button above the batteries. Press and hold this button for 10-20 seconds and release the button. After that the remote should show up as a paired device.</p><h3 id="groups-binding" tabindex="-1"><a class="header-anchor" href="#groups-binding" aria-hidden="true">#</a> Groups binding</h3><p>This remote is able to deal with 4 ZigBee groups:</p><ul><li>group0 = All three leds lit</li><li>group1 = first led lit</li><li>group2 = second led lit</li><li>group3 = third let lit</li></ul><p>The device is bound to the default tint action groups (group0-3) with ids 16387/16388/16389/16390. This cannot be changed.</p>',7),h=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),p=(0,n.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>, <code>scene_5</code>, <code>scene_6</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),g={},m=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),l,(0,n._)("table",null,[a,(0,n._)("tbody",null,[o,(0,n._)("tr",null,[s,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=M%C3%BCller%20Licht"},{default:(0,n.w5)((()=>[(0,n.Uk)("Müller Licht")])),_:1})])]),d,r,c])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n.kq)(" Notes END: Do not edit below this line "),h,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);