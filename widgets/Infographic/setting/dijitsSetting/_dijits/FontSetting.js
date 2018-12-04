// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/FontSetting.html":'\x3cdiv class\x3d"style-selector"\x3e\r\n  \x3cdiv class\x3d"setting-items font clearFix" data-dojo-attach-point\x3d"fontSetting"\x3e\r\n    \x3cdiv class\x3d"label-position jimu-float-leading" title\x3d"${nls.font}"\x3e${nls.font}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"fontSelect" data-dojo-props\x3d\'style:{width:"100%"}\' data-dojo-type\x3d"dijit/form/Select"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items text-size clearFix" data-dojo-attach-point\x3d"textSizeSetting"\x3e\r\n    \x3cdiv class\x3d"label-position jimu-float-leading" title\x3d"${nls.textSize}"\x3e${nls.textSize}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"text-size-group jimu-float-leading"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"textSizeSelect"\x3e\x3c/select\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"text-size-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"sliderbar" data-dojo-attach-point\x3d"sliderBar"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items text-color clearFix" data-dojo-attach-point\x3d"textColorSetting"\x3e\r\n    \x3cdiv class\x3d"label-position jimu-float-leading" title\x3d"${nls.textColor}"\x3e${nls.textColor}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"font-group jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"text-color-btn" data-dojo-attach-point\x3d"textColorBtn"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"font-group font-group-btns jimu-float-leading"\x3e\r\n        \x3cdiv class\x3d"font-btn jimu-float-leading bold" data-dojo-attach-point\x3d"bold"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"font-btn jimu-float-leading italic" data-dojo-attach-point\x3d"italic"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"font-btn jimu-float-leading underline" data-dojo-attach-point\x3d"underline"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/_base/array dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./FontSetting.html jimu/dijit/ColorPickerPopup dijit/form/HorizontalSlider dojo/store/Memory dijit/form/ComboBox jimu/dijit/CheckBox jimu/dijit/ImageChooser".split(" "),function(f,c,d,b,g,h,k,l,m,n,p,q,r){return f([k,l,m,h],{templateString:n,nls:null,_FONTS:null,_MIN_TEXT_SIZE:12,_MAX_TEXT_SIZE:60,_INTERVAL_TEXT_SIZE:2,_DEFAULT_CONFIG:null,
postCreate:function(){this.inherited(arguments);this._FONTS="Arial;Comic Sans MS;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";");this._DEFAULT_CONFIG={font:{fontFamily:this._FONTS[0],bold:!1,italic:!1,underline:!1},fontSize:"24",textColor:"#282828"};this.config=c.mixin(c.clone(this._DEFAULT_CONFIG),this.config);g.forEach(this._FONTS,c.hitch(this,function(a){this.fontSelect.addOption({value:a,label:a})}));for(var a=new r({}),e=this._MIN_TEXT_SIZE,f=this._MAX_TEXT_SIZE;e<f;e+=this._INTERVAL_TEXT_SIZE)a.put({id:e,
name:e});this.textSizeSelect.store=a;this.textSizeSelect.validator=c.hitch(this,function(){var a=this.textSizeSelect.getValue();return null!==a&&""!==a?!isNaN(a):!1});this.textSizeSlider=new q({name:"slider",value:0,minimum:this._MIN_TEXT_SIZE,maximum:this._MAX_TEXT_SIZE,discreteValues:this._MAX_TEXT_SIZE-this._MIN_TEXT_SIZE+1,intermediateChanges:!0,showButtons:!1,style:"display: inline-block;"},this.sliderBar);this.textSizeSlider.startup();this.textColorPicker=new p({appearance:{showTransparent:!1,
showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0},recordUID:this.recordUID});this.textColorPicker.placeAt(this.textColorBtn);this.textColorPicker.startup();this.own(d(this.fontSelect,"change",c.hitch(this,function(a){if(this.config.font.fontFamily!==a)this.onSettingChange({font:{fontFamily:a,bold:this.config.font.bold,italic:this.config.font.italic,underline:this.config.font.underline}})})));this._initAppearance();this.own(d(this.bold,"click",c.hitch(this,function(){var a=!b.hasClass(this.bold,
"selected");this.fontBtnClickd({bold:a});this.onSettingChange({font:{fontFamily:this.config.font.fontFamily,bold:a,italic:this.config.font.italic,underline:this.config.font.underline}})})));this.own(d(this.italic,"click",c.hitch(this,function(){var a=!b.hasClass(this.italic,"selected");this.fontBtnClickd({italic:a});this.onSettingChange({font:{fontFamily:this.config.font.fontFamily,bold:this.config.font.bold,italic:a,underline:this.config.font.underline}})})));this.own(d(this.underline,"click",c.hitch(this,
function(){var a=!b.hasClass(this.underline,"selected");this.fontBtnClickd({underline:a});this.onSettingChange({font:{fontFamily:this.config.font.fontFamily,bold:this.config.font.bold,italic:this.config.font.italic,underline:a}})})));this.own(d(this.textSizeSelect,"change",c.hitch(this,function(a){this.config.fontSize!==a&&!1!==this.textSizeSelect.isValid()&&(this.setTextSize(a),this.onSettingChange({fontSize:a}))})));this.own(d(this.textSizeSlider,"change",c.hitch(this,function(a){this.config.fontSize!==
a&&(this.setTextSize(a),this.onSettingChange({fontSize:a}))})));this.own(d(this.textColorPicker,"change",c.hitch(this,function(a){if(this.config.textColor!==a)this.onSettingChange({textColor:a.toHex()})})))},startup:function(){this.inherited(arguments);this.setConfig(this.config);this.refresh()},onSettingChange:function(a){this.config=c.mixin(this.config,a);this.onChange(this.config)},onChange:function(a){this.emit("change",a)},refresh:function(){this.onSettingChange({})},isValid:function(){return!1===
this.textSizeSelect.isValid()?!1:!0},getConfig:function(){return this.isValid()?this.config:!1},setConfig:function(a){if("undefined"!==a){"undefined"!==typeof a.font&&(this.config.font=a.font,this.config.font.fontFamily&&this.fontSelect.set("value",this.config.font.fontFamily),this.fontBtnClickd(this.config.font));"undefined"!==typeof a.fontSize&&(this.config.fontSize=a.fontSize,this.setTextSize(this.config.fontSize));if("undefined"===typeof a.textColor||""===a.textColor)a.textColor=this._DEFAULT_CONFIG.textColor;
this.config.textColor=a.textColor;b.setStyle(this.textColorPicker.domNode,"backgroundColor",this.config.textColor);this.textColorPicker.picker.refreshRecords();this.textColorPicker.picker.setColor(this.config.textColor,!1,!0)}},setTextSize:function(a){a!==this.textSizeSelect.getValue()&&this.textSizeSelect.set("value",a);a!==this.textSizeSlider.getValue()&&(a>this._MAX_TEXT_SIZE?a=this._MAX_TEXT_SIZE:a<this._MIN_TEXT_SIZE&&(a=this._MIN_TEXT_SIZE),this.textSizeSlider.set("value",a))},fontBtnClickd:function(a){!0===
a.bold?b.addClass(this.bold,"selected"):!1===a.bold&&b.removeClass(this.bold,"selected");!0===a.italic?b.addClass(this.italic,"selected"):!1===a.italic&&b.removeClass(this.italic,"selected");!0===a.underline?b.addClass(this.underline,"selected"):!1===a.underline&&b.removeClass(this.underline,"selected")},_initAppearance:function(){this.appearance&&(!1===this.appearance.bold&&b.addClass(this.bold,"hide"),!1===this.appearance.italic&&b.addClass(this.italic,"hide"),!1===this.appearance.underline&&b.addClass(this.underline,
"hide"))}})});