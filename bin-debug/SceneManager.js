var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    // 在构造函数中创建好场景，保存到属性
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
        this.heroScene = new HeroScene();
        this.aboutScene = new AboutScene();
        this.goodsScene = new GoodsScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置根场景
     */
    SceneManager.prototype.setStage = function (stage) {
        this._stage = stage;
    };
    /**
     * 主场景
     */
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage; // (根) 舞台
        var mainScene = SceneManager.instance.mainScene; // 主场景        
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if (!mainScene.parent) {
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene);
        }
        // 判断玩家场景是否有父级(是否在场景中)
        if (SceneManager.instance.playerScene.parent) {
            // 如果有就删除玩家场景
            mainScene.removeChild(SceneManager.instance.playerScene);
        }
        if (SceneManager.instance.heroScene.parent) {
            mainScene.removeChild(SceneManager.instance.heroScene);
        }
        if (SceneManager.instance.aboutScene.parent) {
            mainScene.removeChild(SceneManager.instance.aboutScene);
        }
        if (SceneManager.instance.goodsScene.parent) {
            mainScene.removeChild(SceneManager.instance.goodsScene);
        }
        // 取消所有按钮的选中状态
        mainScene.toggleBtn(0);
    };
    /**
     * 玩家场景
     */
    SceneManager.toPlayerScene = function () {
        // 把玩家场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    SceneManager.toHeroScene = function () {
        this.instance.mainScene.addChild(this.instance.heroScene);
    };
    SceneManager.toGoodsScene = function () {
        this.instance.mainScene.addChild(this.instance.goodsScene);
    };
    SceneManager.toAboutScene = function () {
        this.instance.mainScene.addChild(this.instance.aboutScene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
