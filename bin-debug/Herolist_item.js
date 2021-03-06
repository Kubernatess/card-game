var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// 必须要继承自 EUI.ItemRenderer
var HeroList_item = (function (_super) {
    __extends(HeroList_item, _super);
    function HeroList_item() {
        var _this = _super.call(this) || this;
        // 把这个 类和皮肤 联系起来
        _this.skinName = 'resource/eui_skins/skins_item/heroListItem.exml';
        return _this;
    }
    // 当数据改变时，更新视图
    HeroList_item.prototype.dataChanged = function () {
        // isSeleted 是我们提供数据的某个字段
        this.ce_select.selected = this.data.isSelected;
    };
    return HeroList_item;
}(eui.ItemRenderer));
__reflect(HeroList_item.prototype, "HeroList_item");
