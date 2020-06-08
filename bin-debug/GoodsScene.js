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
var GoodsScene = (function (_super) {
    __extends(GoodsScene, _super);
    function GoodsScene() {
        return _super.call(this) || this;
    }
    GoodsScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GoodsScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // 原始数组
        var dataArr = [
            { image: 'resource/art/heros_goods/goods01.png', name: '魔法石', value: '法力加成 +3' },
            { image: 'resource/art/heros_goods/goods02.png', name: '诅咒娃娃', value: '咒术加成 +3' },
            { image: 'resource/art/heros_goods/goods03.png', name: '万圣戒指', value: '敏捷加成 +3' },
            { image: 'resource/art/heros_goods/goods04.png', name: '斗篷', value: '耐力加成 +3' },
            { image: 'resource/art/heros_goods/goods05.png', name: '鹅毛笔', value: '精神加成 +3' },
            { image: 'resource/art/heros_goods/goods06.png', name: '血滴子', value: '嗜血加成 +3' },
            { image: 'resource/art/heros_goods/goods07.png', name: '屠龙刀', value: '力量加成 +3' }
        ];
        // 把list_hero数据源设置成EUIArr
        this.list_goods.dataProvider = new eui.ArrayCollection(dataArr);
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);
    };
    GoodsScene.prototype.returnMain = function () {
        SceneManager.toMainScene();
    };
    return GoodsScene;
}(eui.Component));
__reflect(GoodsScene.prototype, "GoodsScene", ["eui.UIComponent", "egret.DisplayObject"]);
