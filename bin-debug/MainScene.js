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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // 让Group可以点击
        this.Group_mbtn.touchEnabled = true;
        // 事件委托, 点击按钮的时候触发toggleBtn
        this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var theBtn = e.target;
            // 如果按钮变为按下状态,也就是第一次点这个按钮的时候,需要把其他的按钮样式取消掉
            if (theBtn.selected) {
                _this.toggleBtn(theBtn);
            }
            theBtn.selected = true;
        }, this);
    };
    MainScene.prototype.toggleBtn = function (btn) {
        // 先把所有的按钮都设置为不选中
        for (var i = 0; i < this.Group_mbtn.numChildren; i++) {
            var theBtn = this.Group_mbtn.getChildAt(i);
            theBtn.selected = false;
        }
        if (btn === 0) {
            return;
        }
        // 获取当前点击的按钮的下标, 用来实现不同按钮对应的功能
        // 0 1 2 3 对应 玩家, 英雄, 物品, 关于
        var index = this.Group_mbtn.getChildIndex(btn);
        switch (index) {
            case 0:
                // 调用静态方法切换到玩家场景
                SceneManager.toPlayerScene();
                break;
            case 1:
                SceneManager.toHeroScene();
                break;
            case 2:
                SceneManager.toGoodsScene();
                break;
            case 3:
                SceneManager.toAboutScene();
                break;
            default:
                break;
        }
        // 把按钮的层级提高
        this.setChildIndex(this.Group_mbtn, this.numChildren);
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
