class SceneManager {
	public _stage:egret.DisplayObjectContainer // 设置所有场景所在的舞台(根)
    public mainScene:MainScene //主场景
    public playerScene:PlayerScene //玩家场景
    public heroScene:HeroScene;
    public aboutScene:AboutScene;
    public goodsScene:GoodsScene;
     
    // 在构造函数中创建好场景，保存到属性
    constructor() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
        this.heroScene = new HeroScene();
        this.aboutScene = new AboutScene();
        this.goodsScene = new GoodsScene();
    }
​
    /**
     * 获取实例
     */
    static sceneManager:SceneManager;
    static get instance(){
        if(!this.sceneManager) {
            this.sceneManager =  new SceneManager();
        } 
        return this.sceneManager;
    }
    /**
     * 设置根场景
     */
    public setStage(stage:egret.DisplayObjectContainer) {
        this._stage = stage;
    }

     
    /**
     * 主场景
     */
    static toMainScene() {
        let stage:egret.DisplayObjectContainer = this.instance._stage; // (根) 舞台
        let mainScene = SceneManager.instance.mainScene; // 主场景        
        // 判断主场景是否有父级(如果有,说明已经被添加到了场景中)
        if(!mainScene.parent){
            // 把主场景添加到之前设置好的根舞台中
            stage.addChild(mainScene);
        }
        // 判断玩家场景是否有父级(是否在场景中)
        if(SceneManager.instance.playerScene.parent) {
            // 如果有就删除玩家场景
            mainScene.removeChild(SceneManager.instance.playerScene);
        }
        if(SceneManager.instance.heroScene.parent) {
            mainScene.removeChild(SceneManager.instance.heroScene);
        }
        if(SceneManager.instance.aboutScene.parent) {
            mainScene.removeChild(SceneManager.instance.aboutScene);
        }
        if(SceneManager.instance.goodsScene.parent) {
            mainScene.removeChild(SceneManager.instance.goodsScene);
        }
        // 取消所有按钮的选中状态
        mainScene.toggleBtn(0);
    }

    /**
     * 玩家场景
     */
    static toPlayerScene() {
        // 把玩家场景添加到主场景中
        this.instance.mainScene.addChild(this.instance.playerScene);
    }

    static toHeroScene() {
        this.instance.mainScene.addChild(this.instance.heroScene);
    }

    static toGoodsScene() {
        this.instance.mainScene.addChild(this.instance.goodsScene);
    }

    static toAboutScene() {
        this.instance.mainScene.addChild(this.instance.aboutScene);
    }

}